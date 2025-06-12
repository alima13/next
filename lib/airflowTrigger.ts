export async function triggerEvaluation(imageId: string) {
  const res = await fetch("https://your-airflow-endpoint/api/v1/dags/evaluate_art/dagRuns", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.AIRFLOW_API_KEY}`,
    },
    body: JSON.stringify({
      conf: { image_id: imageId },
    }),
  });
  return res.ok;
}
