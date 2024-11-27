import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">
            Sistema de Gestão
          </Link>
          <div className="hidden md:flex space-x-4">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/controle-epis">Controle de EPIs</NavLink>
            <NavLink to="/gestao-documentos">Gestão de Documentos</NavLink>
          </div>
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <NavLink mobile to="/login">Login</NavLink>
          <NavLink mobile to="/controle-epis">Controle de EPIs</NavLink>
          <NavLink mobile to="/gestao-documentos">Gestão de Documentos</NavLink>
        </div>
      )}
    </nav>
  );
};

const NavLink: React.FC<{ to: string; children: React.ReactNode; mobile?: boolean }> = ({ to, children, mobile }) => (
  <Link
    to={to}
    className={`${
      mobile
        ? "block py-2 px-4 text-sm hover:bg-primary-foreground hover:text-primary"
        : "hover:text-secondary transition duration-300"
    }`}
  >
    {children}
  </Link>
);

export default Navbar;
