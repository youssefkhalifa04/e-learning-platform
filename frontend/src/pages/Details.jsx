import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  Button,
  Card
} from "@nextui-org/react";
import { useNavigate, useParams } from "react-router-dom";

export default function CourseDetailPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const { courseId } = useParams();

  // Simulated data (could be fetched from API)
  const course = {
    title: "Développement Web Complet",
    description: `Ce cours vous apprendra à créer des sites web modernes en utilisant HTML, CSS, JavaScript et des frameworks populaires comme React ou Vue. Vous construirez des projets concrets étape par étape.`,
    duration: "8 semaines",
    level: "Débutant à intermédiaire",
    lessons: [
      "Introduction au web",
      "HTML et structuration",
      "CSS et design responsive",
      "JavaScript dynamique",
      "React JS de base",
      "Projet final : Site complet"
    ]
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-10">
      {/* Navbar */}
      <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} className="mb-12">
        <NavbarBrand className="text-blue-600 font-bold text-2xl">9arrini</NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-6" justify="end">
          {["Accueil", "Cours", "À propos", "Contact", "Offers"].map((item, idx) => (
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

      {/* Course Info */}
      <div className="max-w-4xl mx-auto">
        <Card className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{course.title}</h1>
          <p className="text-lg text-gray-600 mb-4">{course.description}</p>
          <div className="mb-6 text-sm text-gray-500">
            <p><strong>Durée :</strong> {course.duration}</p>
            <p><strong>Niveau :</strong> {course.level}</p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Programme du cours :</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
            {course.lessons.map((lesson, index) => (
              <li key={index}>📘 {lesson}</li>
            ))}
          </ul>

          <Button color="primary" fullWidth>
            Commencer le cours
          </Button>
        </Card>
      </div>
    </div>
  );
}