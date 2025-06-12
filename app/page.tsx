import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🎨 Art Intelligence</h1>
      <p className="mb-4">Explore and evaluate art using AI.</p>
      <Link href="/login"><Button>Login</Button></Link>
    </div>
  );
}
