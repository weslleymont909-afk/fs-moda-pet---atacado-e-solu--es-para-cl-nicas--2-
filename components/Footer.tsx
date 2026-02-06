import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, MessageSquare } from 'lucide-react';
import { LOGO_URL, CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <img src={LOGO_URL} alt="FS Moda Pet Logo" className="h-16 mb-6 brightness-0 invert" />
            <p className="mb-6 leading-relaxed">
              Referência em Roupas Pós-Cirúrgicas para Cães e Gatos desde 2006. Qualidade, conforto e recuperação segura para o seu pet.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MessageSquare className="text-yellow-400 mr-3 mt-1" size={18} />
                <span>{CONTACT_INFO.whatsapp}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Localização</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-yellow-400 mr-3 mt-1" size={18} />
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Links Úteis</h4>
            <ul className="space-y-4">
              <li>
                <a href="#sobre" className="hover:text-yellow-400 transition-colors">Quem Somos</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-yellow-400 transition-colors">Linha de Produtos</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} FS Moda Pet - Todos os direitos reservados.</p>
          <p className="mt-2 text-slate-500">Desenvolvido com foco no bem-estar animal.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;