from datetime import datetime
from . import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    # Range: 0-100
    eco_score = db.Column(db.Integer, default=50)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    emission_logs = db.relationship('EmissionLog', backref='user', lazy=True)
    recommendations = db.relationship('Recommendation', backref='user', lazy=True)

class EmissionLog(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    date = db.Column(db.Date, default=datetime.utcnow)
    transport_emissions = db.Column(db.Float, default=0.0)
    electricity_emissions = db.Column(db.Float, default=0.0)
    food_emissions = db.Column(db.Float, default=0.0)
    waste_emissions = db.Column(db.Float, default=0.0)
    total_emissions = db.Column(db.Float, default=0.0)

class Recommendation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    impact_kg = db.Column(db.Float, nullable=False)
    difficulty = db.Column(db.String(50), nullable=False)
    status = db.Column(db.String(50), default='Pending') # 'Pending', 'Completed'
