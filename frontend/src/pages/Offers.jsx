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
import { useNavigate } from "react-router-dom";

const offers = [
  {
    title: "Formule Essentielle",
    price: "Gratuit",
    features: [
      "Accès à 5 cours de base",
      "Quiz et exercices",
      "Suivi des progrès basique",
    ],
  },
  {
    title: "Formule Pro",
    price: "29€/mois",
    features: [
      "Accès illimité à tous les cours",
      "Certificats de fin de formation",
      "Projets pratiques",
      "Suivi avancé des performances",
    ],
    highlighted: true,
  },
  {
    title: "Formule Équipe",
    price: "99€/mois",
    features: [
      "Pour 10 utilisateurs",
      "Support dédié",
      "Rapports de performance",
      "Accès à des webinaires exclusifs",
    ],
  },
];

export default function OffersPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 px-6 py-12">
      {/* Navbar */}
      <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} className="mb-12">
        <NavbarBrand className="text-blue-600 font-bold text-2xl">9arrini</NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-6" justify="end">
          <NavbarItem className="cursor-pointer" onClick={() => navigate("/")}>Accueil</NavbarItem>
          {[ "Cours", "À propos", "Contact", "Offers"].map((item, idx) => (
            <NavbarItem
              key={idx}
              className="cursor-pointer"
              onClick={() => navigate("/" + item.toLowerCase().replace(/\s/g, ""))}
            >
              {item}
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end" className="sm:hidden">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"} />
        </NavbarContent>
        <NavbarMenu className="pt-20">
        <NavbarItem className="cursor-pointer" onClick={() => navigate("/")}>Accueil</NavbarItem>
          {["Cours", "À propos", "Contact", "Offers"].map((item, idx) => (
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
          ))}
        </NavbarMenu>
      </Navbar>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
        Nos Offres
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {offers.map((offer, index) => (
          <Card
            key={index}
            className={`p-6 border-2 ${
              offer.highlighted ? "border-blue-600 shadow-xl" : "border-gray-200"
            } rounded-xl`}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
              {offer.title}
            </h2>
            <p className="text-center text-3xl font-bold text-blue-600 mb-4">
              {offer.price}
            </p>
            <ul className="mb-6 space-y-2 text-gray-600">
              {offer.features.map((feature, i) => (
                <li key={i}>✅ {feature}</li>
              ))}
            </ul>
            <Button fullWidth color={offer.highlighted ? "primary" : "default"}>
              Choisir cette offre
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
