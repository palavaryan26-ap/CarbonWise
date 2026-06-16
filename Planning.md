# CarbonWise - Comprehensive Hackathon Blueprint

This file merges your project vision with our technical implementation architecture. Drop this single, finalized `.md` file into your Antigravity IDE to completely scaffold the database models, Flask API architecture, math logic, and React structure while keeping your core hackathon objectives locked in.

---

## 1. Project Overview & Target Audience

### Project Vision
CarbonWise is an AI-powered web application that helps individuals understand, track, and reduce their carbon footprint through personalized insights and sustainable lifestyle recommendations. It simplifies carbon footprint management by providing easy-to-understand analytics, personalized recommendations, and progress tracking.

### Problem Statement
Many individuals want to adopt environmentally responsible habits but lack awareness of how their daily activities contribute to carbon emissions. Existing solutions are often complex, inaccessible, or fail to provide actionable guidance.

### Target Users
- **Students:** Looking for quick, modern, and gamified tracking.
- **Professionals:** Need seamless daily utility with clear breakdowns.
- **Families:** Managing household utilities and communal waste habits.
- **Environmentally Conscious Individuals:** Beginners or intermediate switchers seeking structural direction.

---

## 2. Technical Stack & Architecture

### Core Stack
- **Frontend:** React.js, Tailwind CSS, Chart.js
- **Backend:** Flask (Python)
- **Database:** SQLite + SQLAlchemy
- **AI Engine:** Gemini API

### Database Schema Models
Antigravity should interpret these models directly into SQLAlchemy declarations:

#### `User`
- `id`: Integer, Primary Key
- `username`: String, Unique, Not Null
- `email`: String, Unique, Not Null
- `eco_score`: Integer (Default: 50, Range: 0-100)
- `created_at`: DateTime (Auto-now)

#### `EmissionLog`
- `id`: Integer, Primary Key
- `user_id`: Integer, Foreign Key -> `User.id`
- `date`: Date (Default: Current Date)
- `transport_emissions`: Float (kg CO2e)
- `electricity_emissions`: Float (kg CO2e)
- `food_emissions`: Float (kg CO2e)
- `waste_emissions`: Float (kg CO2e)
- `total_emissions`: Float (kg CO2e)

#### `Recommendation`
- `id`: Integer, Primary Key
- `user_id`: Integer, Foreign Key -> `User.id`
- `title`: String
- `description`: String
- `impact_kg`: Float (Estimated carbon reduction)
- `difficulty`: String ('Easy', 'Medium', 'Hard')
- `status`: String ('Pending', 'Completed')

---

## 3. Backend API Specification

Implement clear separation of concerns using Flask Blueprints. All responses must strictly return JSON payload structures.

### Authentication Blueprints
- `POST /api/auth/register` -> Accepts JSON `username`, `email`, `password`. Creates `User` entry with default eco_score of 50.
- `POST /api/auth/login` -> Authenticates credentials, initiates session/token payload.

### Carbon Footprint Calculator Engine
- `POST /api/emissions/calculate`
  - **Expected Incoming Payload:**
    ```json
    {
      "user_id": 1,
      "car_km": 25.0,
      "bus_km": 10.0,
      "train_km": 0.0,
      "flight_km": 0.0,
      "kwh_used": 15.5,
      "diet_type": "Vegetarian",
      "waste_kg": 2.1,
      "recycled_kg": 0.5
    }
    ```
  - **Processing Logic:** Applies emission factors explicitly, calculates partial sub-totals and an absolute total, instantiates an `EmissionLog` record, and updates the profile's rolling calculation.

### Dashboard Analytics Blueprint
- `GET /api/dashboard/<user_id>`
  - **Expected JSON Response:**
    ```json
    {
      "eco_score": 75,
      "totals": {
        "current_month": 320.5,
        "previous_month": 410.2
      },
      "breakdown": {
        "transport": 120.4,
        "electricity": 110.1,
        "food": 55.0,
        "waste": 35.0
      },
      "trends": [
        {"date": "2026-06-10", "total": 12.5},
        {"date": "2026-06-11", "total": 11.2}
      ]
    }
    ```

### AI Recommendation Engine (Gemini Integration)
- `POST /api/recommendations/generate` -> Aggregates the last 3 `EmissionLog` records for a designated user, passes data into the Gemini wrapper, handles JSON parsing, and records up to 3 individual actions.
- `GET /api/recommendations/<user_id>` -> Delivers pending tasks.
- `PUT /api/recommendations/<rec_id>/complete` -> Updates status flags to `'Completed'`, triggers calculation shifts to boost `eco_score`.

---

## 4. Analytical Formulae & Scoring Logic

Ensure the math constraints are precisely built as a configuration file or constants dictionary:

### Core Emission Metrics
- **Car (Gasoline):** `0.192` kg CO2e per km
- **Bus Transit:** `0.089` kg CO2e per km
- **Train Transit:** `0.041` kg CO2e per km
- **Flight Transit:** `0.250` kg CO2e per km
- **Grid Electricity:** `0.850` kg CO2e per kWh
- **Food Factors (Daily):** `3.3` for Non-Vegetarian, `2.5` for Mixed, `1.7` for Vegetarian, `1.5` for Vegan.
- **Waste Matrix:** Unsorted Trash = `0.45` kg CO2e per kg; Diverted/Recycled Content = `0.15` kg CO2e per kg.

### Eco Score Metric Formulation
- Evaluates moving averages against regional environmental baselines.
- Completing real-time sustainable actions or dynamic challenges adds a reliable reward of `+5` points directly to the user's total dashboard tiering ( capped tightly at `100`).

---

## 5. React Frontend Blueprint (Optimized for Google Stitch UI Components)

Align the incoming components parsed out of Google Stitch to match this hierarchical layout tree structure:

```text
src/
├── components/
│   ├── layout/
│   │   ├── NavigationBar.jsx (Stitch layout wrapper)
│   ├── dashboard/
│   │   ├── EcoScoreDisplay.jsx (Radial progress context container)
│   │   ├── EmissionsPieChart.jsx (Injects Chart.js node framework)
│   │   ├── TrendLineChart.jsx (Injects Chart.js canvas node)
│   ├── calculator/
│   │   ├── CalculatorForm.jsx (State-driven multi-step wizard)
│   ├── recommendations/
│   │   ├── AICard.jsx (Mapped array card elements)
├── pages/
│   ├── Dashboard.jsx
│   ├── Calculator.jsx
│   ├── Challenges.jsx
```

### Handoff Principles for Stitch Modules
- **UI Architecture:** Rely implicitly on dynamic utility classes using Tailwind CSS (`bg-green-50`, `rounded-xl`, sleek eco-minimalist themes).
- **Wiring Logic:** Keep inputs completely controlled via hooks. All Chart layouts should wrap explicit `<canvas>` blocks with robust error recovery boundaries.

---

## 6. System AI Prompt Directives

```text
You are CarbonWise, an expert AI sustainability assistant. Analyze this user's recent carbon footprint data: {insert_data}. Generate 3 highly specific, actionable daily tasks to help them reduce their highest emission category. Output strictly as a JSON array containing objects with keys: 'title', 'description', 'impact_kg', and 'difficulty' (Easy, Medium, Hard).
```
