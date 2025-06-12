"use client";
import { useEffect, useState } from "react";
import { getArtworks } from "@/lib/api";
import { ArtCard } from "@/components/ArtCard";

export default function DashboardPage() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    getArtworks().then(setArtworks);
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {artworks.map((art) => (
        <ArtCard key={art.id} art={art} />
      ))}
    </div>
  );
}
