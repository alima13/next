"use client";
import { BasketPanel } from "@/components/BasketPanel";

export default function BasketPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Your Basket</h1>
      <BasketPanel />
    </div>
  );
}
