"use client";
import { useState } from "react";

export function ArtCard({ art }: { art: any }) {
  const [evaluating, setEvaluating] = useState(false);

  const handleEvaluate = async () => {
    setEvaluating(true);
    await fetch("/api/evaluate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageId: art.id })
    });
    setEvaluating(false);
  };

  const handleAddToBasket = async () => {
    await fetch("/api/basket", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageId: art.id })
    });
  };

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={art.imageUrl} alt={art.title} className="w-full h-48 object-cover rounded" />
      <h2 className="font-bold mt-2">{art.title}</h2>
      <p className="text-sm mb-2">{art.description}</p>
      <div className="flex gap-2">
        <button onClick={handleEvaluate} className="bg-blue-600 text-white px-3 py-1 rounded">
          {evaluating ? "Evaluating..." : "AI Evaluate"}
        </button>
        <button onClick={handleAddToBasket} className="bg-gray-800 text-white px-3 py-1 rounded">
          Add to Basket
        </button>
      </div>
    </div>
  );
}

