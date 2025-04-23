import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-10">
      {/* Navbar */}
      <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} className="mb-12">
        <NavbarBrand className="text-blue-600 font-bold text-2xl">9arrini</NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-6" justify="end">
          <NavbarItem className="cursor-pointer" onClick={() => navigate("/")}>Accueil</NavbarItem>
          {["Cours", "À propos", "Contact", "Offers"].map((item, idx) => (
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
          {["Accueil", "Cours", "À propos", "Contact", "Offers"].map((item, idx) => (
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

      {/* About Content */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">À propos de 9arrini</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          9arrini est une plateforme de e-learning innovante qui vise à rendre l'éducation accessible à tous, partout et à tout moment. 
          Nous croyons en un apprentissage flexible, engageant et axé sur les compétences réelles. Que vous soyez étudiant, professionnel ou autodidacte, 
          nos cours sont conçus pour vous aider à atteindre vos objectifs personnels et professionnels.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Grâce à une combinaison de vidéos interactives, de quiz pratiques, de projets concrets et de suivi personnalisé, 9arrini accompagne chaque apprenant 
          dans son parcours de formation. Rejoignez notre communauté et découvrez une nouvelle façon d’apprendre.
        </p>
      </div>
    </div>
  );
}