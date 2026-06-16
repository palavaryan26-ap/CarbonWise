# Emission Factors
FACTORS = {
    'car_km': 0.192,
    'bus_km': 0.089,
    'train_km': 0.041,
    'flight_km': 0.250,
    'kwh_used': 0.850,
    'diet_type': {
        'Vegan': 1.5,
        'Vegetarian': 1.7,
        'Mixed': 2.5,
        'Non-Vegetarian': 3.3
    },
    'waste_kg': 0.45,
    'recycled_kg': 0.15
}

def calculate_emissions(data):
    """
    Calculates emissions from transport, electricity, food, and waste.
    """
    transport = (
        float(data.get('car_km', 0)) * FACTORS['car_km'] +
        float(data.get('bus_km', 0)) * FACTORS['bus_km'] +
        float(data.get('train_km', 0)) * FACTORS['train_km'] +
        float(data.get('flight_km', 0)) * FACTORS['flight_km']
    )
    
    electricity = float(data.get('kwh_used', 0)) * FACTORS['kwh_used']
    
    diet = data.get('diet_type', 'Mixed')
    food = FACTORS['diet_type'].get(diet, 2.5) # daily
    
    waste = (
        float(data.get('waste_kg', 0)) * FACTORS['waste_kg'] +
        float(data.get('recycled_kg', 0)) * FACTORS['recycled_kg']
    )
    
    total = transport + electricity + food + waste
    
    return {
        'transport_emissions': round(transport, 2),
        'electricity_emissions': round(electricity, 2),
        'food_emissions': round(food, 2),
        'waste_emissions': round(waste, 2),
        'total_emissions': round(total, 2)
    }
