import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const users = [
  { id: 1, name: "Alice Dupont", email: "alice@example.com", role: "Étudiant" },
  { id: 2, name: "Yassine Benali", email: "yassine@example.com", role: "Formateur" },
  { id: 3, name: "Claire Martin", email: "claire@example.com", role: "Étudiant" },
  { id: 4, name: "Samir Lahmar", email: "samir@example.com", role: "Admin" },
];

export default function UsersPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-10">
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

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Liste des Utilisateurs</h1>

      <div className="max-w-5xl mx-auto">
        <Table aria-label="Liste des utilisateurs">
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Nom</TableColumn>
            <TableColumn>Email</TableColumn>
            <TableColumn>Rôle</TableColumn>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
