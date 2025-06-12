let basketStore = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(basketStore);
  } else if (req.method === "POST") {
    const { imageId } = req.body;
    if (!basketStore.find((x) => x.id === imageId)) {
      const sample = sampleArtworks.find((a) => a.id === imageId);
      if (sample) basketStore.push(sample);
    }
    res.status(200).json({ success: true });
  } else {
    res.status(405).end();
  }
}
