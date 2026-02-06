
import React from 'react';

const CottonSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-blue-800 mb-6">Eu ouvi “Algodão”?</h2>
            <p className="text-xl text-slate-700 mb-6 leading-relaxed">
              O algodão é <span className="font-bold">natural</span> e permite a circulação do ar. 
              Isso evita o crescimento de fungos e bactérias nas áreas úmidas, 
              melhora a sensação térmica e garante a respirabilidade da pele do seu amigo de 4 patas.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              As Roupas Pós-Cirúrgicas da FS Moda Pet são confeccionadas em tecido que tenha pelo menos 90% de algodão e têm a barriga forrada com malha dupla (100% algodão), que é um antialérgico natural.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-xl text-center">
                <span className="block text-2xl mb-1">🌿</span>
                <span className="font-bold text-blue-800">100% Natural</span>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl text-center">
                <span className="block text-2xl mb-1">🌬️</span>
                <span className="font-bold text-blue-800">Respirável</span>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl text-center">
                <span className="block text-2xl mb-1">🛡️</span>
                <span className="font-bold text-blue-800">Hipoalergênico</span>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl text-center">
                <span className="block text-2xl mb-1">☁️</span>
                <span className="font-bold text-blue-800">Super Macio</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-yellow-50 p-8 rounded-3xl relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-800 italic">"Impossível não amar!"</h3>
            </div>
            
            <div className="relative h-[400px] flex items-center justify-center">
              {/* Simple Venn Diagram Simulation */}
              <div className="absolute w-48 h-48 rounded-full bg-blue-600/20 border-2 border-blue-600 flex items-center justify-center transform -translate-x-20 -translate-y-10">
                <span className="font-bold text-blue-800">Confortável</span>
              </div>
              <div className="absolute w-48 h-48 rounded-full bg-yellow-400/40 border-2 border-yellow-400 flex items-center justify-center transform translate-x-20 -translate-y-10">
                <span className="font-bold text-yellow-600">Durável</span>
              </div>
              <div className="absolute w-48 h-48 rounded-full bg-blue-800/20 border-2 border-blue-800 flex items-center justify-center transform translate-y-20">
                <span className="font-bold text-blue-900">Tropical</span>
              </div>
              <div className="absolute z-10 bg-white p-3 rounded-lg shadow-lg font-bold text-blue-600 text-center">
                Atributos do <br /> Algodão
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CottonSection;
