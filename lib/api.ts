export async function getArtworks() {
  const res = await fetch("/api/artworks");
  if (!res.ok) throw new Error("Failed to fetch artworks");
  return res.json();
}

export async function getBasket() {
  const res = await fetch("/api/basket");
  if (!res.ok) throw new Error("Failed to fetch basket");
  return res.json();
}

export async function addToBasket(imageId: string) {
  return fetch("/api/basket", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId }),
  });
}

export async function submitTicket() {
  return fetch("/api/ticket", {
    method: "POST",
  });
}

