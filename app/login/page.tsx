"use client";
import { AuthForm } from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-20">
      <h2 className="text-xl font-bold mb-4">Login to Art Intelligence</h2>
      <AuthForm />
    </div>
  );
}
