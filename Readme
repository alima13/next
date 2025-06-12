## 🎨 Art Intelligence Dashboard

An AI-powered art dashboard built with Next.js, Vercel, and Apache Airflow.

---

## 📦 Features

- 🖼️ Browse iconic artworks
- 🤖 Run CNN AI model evaluation (via Airflow pipeline)
- 🛒 Add to personal basket
- 🎟️ Submit ticket for purchase or print

---

## 🔧 Tech Stack

- Frontend: Next.js + Tailwind + TypeScript
- Backend: Vercel Functions (Node.js)
- ML Pipeline: Apache Airflow
- Model: CNN (trained separately)

---

## 🚀 Getting Started

```bash
# Clone and install
git clone https://github.com/alima13/art-dashboard
cd art-dashboard
npm install

# Start dev
npm run dev
```

## ⚙️ Environment
Create .env.local:

```bash
AIRFLOW_API_KEY=your-key
```

## 🧠 Triggering AI

When a user clicks AI Evaluate, a DAG run is triggered:

++ DAG: evaluate_art

++ Conf: { image_id: "1" }

Airflow must expose 

```bash
POST /api/v1/dags/evaluate_art/dagRuns.
```

## 📂 Airflow DAG
Located in airflow_dags/evaluate_art.py

## 📦 Deployment

Frontend: Vercel

Backend: Vercel Serverless API

Pipeline: Self-hosted Airflow or Cloud Composer

## 📸 Sample Art

Put image files under public/art/.

## 📝 License

MIT 







