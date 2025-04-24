import React from "react";
import { Input, Button, Card } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function SignupPage() {
    const navigate = useNavigate();
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-100 p-6">
      <Card className="p-8 w-full max-w-md shadow-xl">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Créer un compte</h1>
        <form className="space-y-6">
          <Input  type="text" placeholder="John Doe" fullWidth required />
          <Input  type="email" placeholder="exemple@domain.com" fullWidth required />
          <Input  type="password" placeholder="••••••••" fullWidth required />
          <Button color="primary" fullWidth className="mt-2">S'inscrire</Button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Déjà inscrit ? <span  className="text-blue-600 font-medium" onClick={() => navigate("/login")}>se connecter </span>
        </p>
      </Card>
    </div>
  );
}