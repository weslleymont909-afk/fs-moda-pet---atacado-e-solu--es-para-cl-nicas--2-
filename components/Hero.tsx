
import React from 'react';
import { MessageCircle, ShieldCheck, Factory, TrendingUp } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-blue-600 text-white overflow-hidden min-h-[85vh] flex items-center">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-700 -skew-x-12 origin-top-right opacity-40"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-3/5 text-left">
            <div className="mb-8 w-full max-w-lg">
              <img 
                src="https://i.postimg.cc/C1zghfDb/roupas.png" 
                alt="Banner Roupas FS Moda Pet Atacado" 
                className="w-full h-auto rounded-xl shadow-lg border-2 border-white/20"
              />
            </div>

            <div className="inline-flex items-center space-x-2 bg-yellow-400/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-yellow-400/30">
              <Factory size={16} className="text-yellow-400" />
              <span className="text-sm font-bold tracking-widest uppercase text-yellow-400">Venda Direta da Fábrica</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8">
              Excelência para <br />
              <span className="text-yellow-400">Sua Clínica</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-50 mb-10 max-w-2xl leading-relaxed">
              Forneça roupas pós-cirúrgicas de <span className="font-bold border-b-4 border-yellow-400 pb-1">alta performance</span>. O parceiro ideal para Pet Shops e Hospitais Veterinários.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 bg-green-500 hover:bg-green-600 text-white font-black text-xl rounded-2xl shadow-2xl transition-all transform hover:scale-105 active:scale-95 group"
              >
                <MessageCircle className="mr-3 group-hover:rotate-12 transition-transform" size={28} />
                TABELA DE ATACADO
              </a>
              
              <a 
                href="#produtos"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-900 font-black text-xl rounded-2xl shadow-xl transition-all border-b-4 border-slate-200 hover:border-white hover:bg-slate-50"
              >
                CONHECER PRODUTOS
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-400 rounded-lg text-blue-900 shadow-lg">
                  <TrendingUp size={20} />
                </div>
                <span className="font-bold text-sm">Alta Margem de Lucro</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-400 rounded-lg text-blue-900 shadow-lg">
                  <ShieldCheck size={20} />
                </div>
                <span className="font-bold text-sm">Qualidade de Exportação</span>
              </div>
            </div>
          </div>

          {/* Coluna da direita mantida vazia para preservar o layout md:w-3/5 da esquerda */}
          <div className="md:w-2/5 relative">
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-6deg); }
          50% { transform: translateY(-10px) rotate(-6deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
