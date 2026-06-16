from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    CORS(app)
    
    # Configuration
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///carbonwise.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    db.init_app(app)
    
    with app.app_context():
        # Import models here so SQLAlchemy knows about them
        from . import models
        db.create_all()
        
        # Register blueprints
        from .routes import auth_bp, emissions_bp, dashboard_bp, ai_bp
        app.register_blueprint(auth_bp)
        app.register_blueprint(emissions_bp)
        app.register_blueprint(dashboard_bp)
        app.register_blueprint(ai_bp)
        
    return app
