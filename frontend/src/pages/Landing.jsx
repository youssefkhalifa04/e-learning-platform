import React from "react";
import {
  Button,
  Card,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 px-6 py-12">
      {/* Header/Navbar */}
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        className="mb-12"
      >
        <NavbarBrand className="text-blue-600 font-bold text-2xl">
          9arrini
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-6" justify="end">
          <NavbarContent className="hidden sm:flex gap-6" justify="end">
            <NavbarItem className="cursor-pointer" onClick={() => navigate("/")}>Accueil</NavbarItem>
            {[ "Cours", "À propos", "Contact", "Offers"].map(
              (item, idx) => (
                <NavbarItem
                  key={idx}
                  className="cursor-pointer"
                  onClick={() =>
                    navigate("/" + item.toLowerCase().replace(/\s/g, ""))
                  }
                >
                  {item}
                </NavbarItem>
              )
            )}
          </NavbarContent>
        </NavbarContent>
        <NavbarContent justify="end" className="sm:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          />
        </NavbarContent>
        <NavbarMenu className="pt-20">
          <NavbarItem className="cursor-pointer" onClick={() => navigate("/")}>Accueil</NavbarItem>
          {[ "Cours", "À propos", "Contact", "Offers"].map(
            (item, idx) => (
              <NavbarMenuItem
                key={idx}
                className="cursor-pointer"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate("/" + item.toLowerCase().replace(/\s/g, ""));
                }}
              >
                {item}
              </NavbarMenuItem>
            )
          )}
        </NavbarMenu>
      </Navbar>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
          Transformez votre apprentissage en expérience
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Explorez des cours dynamiques, gagnez en compétences et atteignez vos
          objectifs, à votre rythme.
        </p>
        <Button size="lg" color="primary" className="text-lg font-medium">
          Commencer maintenant <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>

      {/* Features Section */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            title: "🎥 Cours interactifs",
            description:
              "Vidéo, quiz, projets pratiques — tout ce qu'il vous faut pour apprendre efficacement.",
          },
          {
            title: "📈 Suivi intelligent",
            description:
              "Analysez votre progression et recevez des suggestions personnalisées.",
          },
          {
            title: "🎓 Certificats reconnus",
            description:
              "Valorisez vos compétences avec des certificats téléchargeables.",
          },
        ].map((feature, idx) => (
          <Card
            key={idx}
            className="p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h2>
            <p className="text-gray-600 text-md">{feature.description}</p>
          </Card>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="mt-28 bg-white border-y py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Rejoignez des milliers d’apprenants motivés 💡
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Inscrivez-vous aujourd’hui et commencez votre parcours de formation
          sans plus attendre.
        </p>
        <Button size="lg" color="primary">
          Créer un compte gratuit
        </Button>
      </div>
    </div>
  );
}
