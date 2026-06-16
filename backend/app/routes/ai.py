from flask import jsonify, request
from . import ai_bp
from ..models import User, EmissionLog, Recommendation, db
from ..services.gemini import generate_recommendations

@ai_bp.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    user_id = data.get('user_id')

    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    # Get last 3 logs
    logs = EmissionLog.query.filter_by(user_id=user_id).order_by(EmissionLog.date.desc()).limit(3).all()
    
    log_data = []
    for log in logs:
        log_data.append({
            'date': log.date.strftime('%Y-%m-%d'),
            'transport': log.transport_emissions,
            'electricity': log.electricity_emissions,
            'food': log.food_emissions,
            'waste': log.waste_emissions,
            'total': log.total_emissions
        })

    # Call Gemini
    recs = generate_recommendations(str(log_data))

    # Save to db
    saved_recs = []
    for r in recs:
        rec = Recommendation(
            user_id=user.id,
            title=r.get('title', 'Recommendation'),
            description=r.get('description', ''),
            impact_kg=r.get('impact_kg', 0.0),
            difficulty=r.get('difficulty', 'Medium')
        )
        db.session.add(rec)
        saved_recs.append(rec)
    
    db.session.commit()

    return jsonify({'message': 'Generated recommendations', 'count': len(saved_recs)}), 200

@ai_bp.route('/<int:user_id>', methods=['GET'])
def get_recommendations(user_id):
    recs = Recommendation.query.filter_by(user_id=user_id, status='Pending').all()
    return jsonify([
        {
            'id': r.id,
            'title': r.title,
            'description': r.description,
            'impact_kg': r.impact_kg,
            'difficulty': r.difficulty,
            'status': r.status
        } for r in recs
    ]), 200

@ai_bp.route('/<int:rec_id>/complete', methods=['PUT'])
def complete_recommendation(rec_id):
    rec = Recommendation.query.get(rec_id)
    if not rec:
        return jsonify({'error': 'Recommendation not found'}), 404

    if rec.status == 'Pending':
        rec.status = 'Completed'
        # Boost eco score
        user = User.query.get(rec.user_id)
        if user:
            user.eco_score = min(100, user.eco_score + 5)
        
        db.session.commit()
        return jsonify({'message': 'Recommendation completed', 'new_eco_score': user.eco_score}), 200

    return jsonify({'message': 'Already completed'}), 400
