import React from 'react';
import { ChevronRight } from 'lucide-react';
import { LOGO_URL, getWhatsAppLink } from '../constants';

const ProductItem: React.FC<{ title: string; active?: boolean }> = ({ title, active = false }) => (
  <button className={`px-6 py-2 rounded-xl font-bold border-2 transition-all ${
    active 
      ? 'bg-blue-600 text-white border-blue-600 shadow-lg' 
      : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50'
  }`}>
    {title}
  </button>
);

const Products: React.FC = () => {
  return (
    <section id="produtos" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <img src={LOGO_URL} alt="FS Moda Pet" className="h-20 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">Catálogo de Atacado</h2>
          <p className="text-slate-500 max-w-2xl mx-auto italic text-lg">
            Roupas pós-cirúrgicas com grades completas para clínicas e pet shops.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <ProductItem title="LINHA CÃES" active />
          <ProductItem title="LINHA GATOS" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { 
              id: 1, 
              name: "Linha Cães Tradicional", 
              target: "13 Tamanhos (00 ao 12)", 
              desc: "Nossa grade mais completa, atendendo desde Pinschers até raças de grande porte com ajuste perfeito.", 
              img: "https://i.postimg.cc/q7dVKMYM/post-fs-confeccao-pet-nov-23-2025.webp" 
            },
            { 
              id: 2, 
              name: "Linha Gatos Tradicional", 
              target: "6 Tamanhos (00 ao 05)", 
              desc: "Modelagem exclusiva para a anatomia felina, garantindo que o gato não remova a peça durante a cicatrização.", 
              img: "https://i.postimg.cc/hPfBWYTS/Captura-de-tela-2026-01-08-201438.png" 
            },
          ].map(p => (
            <div key={p.id} className="bg-white rounded-[32px] overflow-hidden shadow-sm group hover:shadow-2xl transition-all duration-500 border border-slate-100">
              <div className="relative overflow-hidden h-72">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-4 right-4 bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-xs font-black uppercase shadow-lg">
                  Líder de Vendas
                </div>
              </div>
              <div className="p-8">
                <span className="text-blue-600 text-sm font-bold uppercase tracking-widest">{p.target}</span>
                <h3 className="text-2xl font-black text-slate-800 mt-1 mb-3">{p.name}</h3>
                <p className="text-slate-500 mb-6">{p.desc}</p>
                <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-slate-400 text-sm font-medium">FS Moda Pet®</span>
                  <a 
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-bold flex items-center gap-2 group cursor-pointer"
                  >
                    VER TABELA
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
          {/* Mantendo o espaço no grid para não alterar o layout visual das colunas */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Products;