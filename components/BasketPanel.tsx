"use client";
import { useEffect, useState } from "react";

export function BasketPanel() {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    fetch("/api/basket").then((res) => res.json()).then(setBasket);
  }, []);

  return (
    <div>
      {basket.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <ul className="space-y-2">
          {basket.map((item: any) => (
            <li key={item.id} className="border p-2 rounded">
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
