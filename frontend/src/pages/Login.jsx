// LoginPage.jsx
import React from "react";
import { Input, Button, Card } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white p-6">
      <Card className="p-8 w-full max-w-md shadow-xl">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Connexion</h1>
        <form className="space-y-6">
          <Input  type="email" placeholder="exemple@domain.com" fullWidth required />
          <Input  type="password" placeholder="••••••••" fullWidth required />
          <Button color="primary" fullWidth className="mt-2">Se connecter</Button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Pas encore inscrit ? <span className="text-blue-600 font-medium" onClick={() => navigate("/signup")}>s'inscrire</span>
        </p>
      </Card>
    </div>
  );
}