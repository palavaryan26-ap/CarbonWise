# CarbonWise Deployment Guide

This guide provides instructions on how to run CarbonWise locally and how to deploy it for a hackathon presentation.

## Local Development Setup

### Prerequisites
- Node.js (v18+)
- Python (3.9+)
- Gemini API Key

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   # On Windows
   venv\Scripts\activate
   # On macOS/Linux
   source venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Configure environment variables. Edit the `backend/.env` file and insert your Gemini API Key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
5. Run the Flask API server:
   ```bash
   python run.py
   ```
   *The backend will run at `http://localhost:5000`.*

### Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The frontend will be accessible at `http://localhost:5173`.*

## Production Deployment Options

For a hackathon, we recommend deploying the frontend and backend separately using free-tier cloud platforms.

### Frontend Deployment (Vercel / Netlify)
1. Push your code to a GitHub repository.
2. Sign up for [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
3. Import your GitHub repository.
4. Set the **Root Directory** to `frontend`.
5. Set the **Build Command** to `npm run build` and the **Output Directory** to `dist`.
6. Deploy.

### Backend Deployment (Render)
1. Sign up for [Render](https://render.com).
2. Create a new "Web Service" and link your GitHub repository.
3. Set the **Root Directory** to `backend`.
4. Set the **Build Command** to `pip install -r requirements.txt`.
5. Set the **Start Command** to `gunicorn run:app` (Make sure to add `gunicorn` to your `requirements.txt`).
6. Add the `GEMINI_API_KEY` to the Environment Variables in the Render dashboard.
7. Deploy.
