const sampleArtworks = [
  { id: "1", title: "Starry Night", imageUrl: "/art/starry.jpg", description: "Van Gogh's masterpiece." },
  { id: "2", title: "Mona Lisa", imageUrl: "/art/mona.jpg", description: "Leonardo da Vinci's portrait." }
];

export default function handler(req, res) {
  res.status(200).json(sampleArtworks);
}
