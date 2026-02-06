
import React from 'react';
import { LOGO_URL } from '../constants';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-yellow-400 relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-yellow-300 rounded-full opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="bg-white p-8 rounded-[40px] shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src={LOGO_URL} alt="FS Moda Pet História" className="w-full h-auto" />
            </div>
          </div>
          
          <div className="md:w-2/3 text-left">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-6 flex items-center">
              Nossa História
              <span className="ml-4 block w-20 h-1 bg-blue-900 rounded-full"></span>
            </h2>
            <div className="space-y-4 text-blue-900 text-lg leading-relaxed">
              <p>
                A <span className="font-bold">FS Moda Pet nasceu em 2006</span> com uma missão clara: substituir o desconfortável colar elisabetano por uma solução humana e eficaz.
              </p>
              <p>
                Criamos uma peça que é mais que uma roupa; é um dispositivo médico têxtil. Desenvolvida para ser <span className="font-bold">anatômica</span>, ela impede o acesso ao curativo sem restringir os movimentos naturais do pet.
              </p>
              <p>
                Com aberturas higiênicas patenteadas e tecidos de algodão premium, garantimos que a recuperação seja um momento de carinho e não de estresse.
              </p>
            </div>
            
            <div className="mt-8">
              <a href="#produtos" className="inline-block px-10 py-4 bg-blue-900 text-white font-bold rounded-2xl hover:bg-blue-800 transition-all shadow-xl hover:-translate-y-1">
                Conheça Nossa Linha Completa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
