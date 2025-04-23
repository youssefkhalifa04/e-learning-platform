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

const courses = [
  {
    title: "Développement Web",
    description: "Apprenez HTML, CSS, JavaScript et construisez vos propres sites web.",
  },
  {
    title: "Python pour débutants",
    description: "Maîtrisez les bases de Python, le langage polyvalent de la data et de l'IA.",
  },
  {
    title: "UI/UX Design",
    description: "Créez des interfaces intuitives et des expériences utilisateur fluides.",
  },
  {
    title: "Marketing Digital",
    description: "Boostez votre visibilité en ligne grâce aux outils modernes du marketing.",
  },
];

export default function CoursesPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 px-6 py-12">
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
        <NavbarItem className="cursor-pointer" onClick={() => navigate("/")}>Accueil</NavbarItem>
          {[ "Cours", "À propos", "Contact", "Offers"].map((item, idx) => (
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
        Nos Cours Populaires
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <Card
            key={index}
            className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {course.title}
            </h2>
            <p className="text-gray-600 text-md mb-4">
              {course.description}
            </p>
            <Button color="primary" variant="flat">
              Voir les détails
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}