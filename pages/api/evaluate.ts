export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { imageId } = req.body;

  const result = await fetch("https://airflow1/api/v1/dags/evaluate_art/dagRuns", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.AIRFLOW_API_KEY}`,
    },
    body: JSON.stringify({ conf: { image_id: imageId } }),
  });

  if (result.ok) res.status(200).json({ message: "Evaluation triggered" });
  else res.status(500).json({ error: "Failed to trigger evaluation" });
}
