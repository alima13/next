export default function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;
    console.log(`Send login link to ${email}`);
    res.status(200).json({ message: "Login link sent" });
  } else {
    res.status(405).end();
  }
}
