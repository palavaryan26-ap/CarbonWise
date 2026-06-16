from flask import jsonify
from sqlalchemy import func
from . import dashboard_bp
from ..models import User, EmissionLog, db

@dashboard_bp.route('/<int:user_id>', methods=['GET'])
def get_dashboard(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    # Calculate overall stats
    logs = EmissionLog.query.filter_by(user_id=user_id).order_by(EmissionLog.date.asc()).all()
    
    if not logs:
        return jsonify({
            'eco_score': user.eco_score,
            'totals': {'current_month': 0, 'previous_month': 0},
            'breakdown': {'transport': 0, 'electricity': 0, 'food': 0, 'waste': 0},
            'trends': []
        }), 200

    # Calculate totals
    total_transport = sum(log.transport_emissions for log in logs)
    total_electricity = sum(log.electricity_emissions for log in logs)
    total_food = sum(log.food_emissions for log in logs)
    total_waste = sum(log.waste_emissions for log in logs)
    
    # In a real app, filter by actual current month. Here we just sum all for demo/MVP.
    current_month_total = round(sum(log.total_emissions for log in logs), 2)

    trends = [
        {"date": log.date.strftime('%Y-%m-%d'), "total": log.total_emissions}
        for log in logs[-30:] # Last 30 entries
    ]

    return jsonify({
        'eco_score': user.eco_score,
        'totals': {
            'current_month': current_month_total,
            'previous_month': 0
        },
        'breakdown': {
            'transport': round(total_transport, 2),
            'electricity': round(total_electricity, 2),
            'food': round(total_food, 2),
            'waste': round(total_waste, 2)
        },
        'trends': trends
    }), 200
