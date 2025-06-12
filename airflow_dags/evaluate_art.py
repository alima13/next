from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime
import requests

def run_model(**kwargs):
    image_id = kwargs['dag_run'].conf.get('image_id')
    print(f"Running AI model for image: {image_id}")
    result = {"image_id": image_id, "score": 0.92, "label": "Impressionism"}
    print("AI result:", result)

with DAG(
    dag_id="evaluate_art",
    start_date=datetime(2024, 1, 1),
    schedule_interval=None,
    catchup=False,
    tags=["art", "evaluation"],
) as dag:

    evaluate = PythonOperator(
        task_id="run_ai_evaluation",
        python_callable=run_model,
        provide_context=True,
    )
