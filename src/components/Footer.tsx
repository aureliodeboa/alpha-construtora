import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sua Construtora</h3>
            <p className="text-sm">Soluções inovadoras para construção civil e gestão de obras.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary transition duration-300">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-secondary transition duration-300">Serviços</a></li>
              <li><a href="#" className="hover:text-secondary transition duration-300">Contato</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition duration-300"><Facebook size={24} /></a>
              <a href="#" className="hover:text-secondary transition duration-300"><Twitter size={24} /></a>
              <a href="#" className="hover:text-secondary transition duration-300"><Instagram size={24} /></a>
              <a href="#" className="hover:text-secondary transition duration-300"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p>© {new Date().getFullYear()} Sua Construtora. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
