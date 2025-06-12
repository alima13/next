export default function handler(req, res) {
  if (req.method === "POST") {
    console.log("Ticket submitted with basket:", basketStore);
    basketStore = []; // clear basket
    res.status(200).json({ message: "Ticket submitted." });
  } else {
    res.status(405).end();
  }
}
