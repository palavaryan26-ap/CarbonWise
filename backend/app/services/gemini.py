import os
import json
import google.generativeai as genai

def generate_recommendations(data_str):
    api_key = os.getenv('GEMINI_API_KEY')
    if not api_key or api_key == 'your_api_key_here':
        # Mock response if no API key is set
        return [
            {"title": "Walk to Work", "description": "Replace a short car trip with walking.", "impact_kg": 2.5, "difficulty": "Medium"},
            {"title": "Meatless Monday", "description": "Skip meat for one day a week.", "impact_kg": 3.0, "difficulty": "Easy"}
        ]
        
    genai.configure(api_key=api_key)
    # Instantiate the model
    model = genai.GenerativeModel('gemini-1.5-pro')
    
    prompt = f"""
    You are CarbonWise, an expert AI sustainability assistant. Analyze this user's recent carbon footprint data: {data_str}. 
    Generate 3 highly specific, actionable daily tasks to help them reduce their highest emission category. 
    Output strictly as a JSON array containing objects with keys: 'title', 'description', 'impact_kg', and 'difficulty' (Easy, Medium, Hard).
    Do not include markdown wrappers like ```json.
    """
    
    try:
        response = model.generate_content(prompt)
        text = response.text.strip()
        if text.startswith('```json'):
            text = text[7:-3].strip()
        elif text.startswith('```'):
            text = text[3:-3].strip()
        return json.loads(text)
    except Exception as e:
        print(f"Error calling Gemini: {e}")
        return []
