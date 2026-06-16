from flask import request, jsonify
from . import emissions_bp
from ..models import EmissionLog, User, db
from ..services.calculator import calculate_emissions

@emissions_bp.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    user_id = data.get('user_id')

    if not user_id:
        return jsonify({'error': 'Missing user_id'}), 400

    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    # Calculate emissions
    emissions = calculate_emissions(data)

    # Save to database
    log = EmissionLog(
        user_id=user.id,
        transport_emissions=emissions['transport_emissions'],
        electricity_emissions=emissions['electricity_emissions'],
        food_emissions=emissions['food_emissions'],
        waste_emissions=emissions['waste_emissions'],
        total_emissions=emissions['total_emissions']
    )
    
    db.session.add(log)
    db.session.commit()

    return jsonify({
        'message': 'Emissions calculated successfully',
        'log_id': log.id,
        'results': emissions
    }), 201

@emissions_bp.route('/history/<int:user_id>', methods=['GET'])
def history(user_id):
    logs = EmissionLog.query.filter_by(user_id=user_id).order_by(EmissionLog.date.desc()).all()
    
    return jsonify([
        {
            'id': log.id,
            'date': log.date.strftime('%Y-%m-%d'),
            'total_emissions': log.total_emissions,
            'transport': log.transport_emissions,
            'electricity': log.electricity_emissions,
            'food': log.food_emissions,
            'waste': log.waste_emissions
        } for log in logs
    ]), 200
