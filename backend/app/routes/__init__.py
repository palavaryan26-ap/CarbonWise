from flask import Blueprint

auth_bp = Blueprint('auth', __name__, url_prefix='/api/auth')
emissions_bp = Blueprint('emissions', __name__, url_prefix='/api/emissions')
dashboard_bp = Blueprint('dashboard', __name__, url_prefix='/api/dashboard')
ai_bp = Blueprint('ai', __name__, url_prefix='/api/recommendations')

from . import auth, emissions, dashboard, ai
