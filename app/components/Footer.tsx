import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        {/* Logo ou Título */}
        <div className="text-xl font-semibold">
          <span className="text-teal-400">My</span>Service
        </div>

        {/* Links de Navegação */}
        <nav className="flex space-x-4">
          <Button variant="transparent">Sobre</Button>
          <Button variant="transparent">Suporte</Button>
          <Button variant="transparent">Anuncie seu Serviço</Button>
        </nav>

        {/* Direitos Autorais */}
        <div className="text-sm">
          © {new Date().getFullYear()} MyWebsite. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
