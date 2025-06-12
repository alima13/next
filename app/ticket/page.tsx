"use client";
import { useState } from "react";

export default function TicketPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    await fetch("/api/ticket", { method: "POST" });
    setSubmitted(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Submit Your Ticket</h1>
      <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
      {submitted && <p className="mt-4 text-green-600">Ticket submitted!</p>}
    </div>
  );
}
