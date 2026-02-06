
import React from 'react';
import { BadgeCheck } from 'lucide-react';
import { getWhatsAppLink } from '../constants';

const Personalization: React.FC = () => {
  return (
    <section id="tecnico" className="py-24 bg-blue-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-800 rounded-full -mr-64 -mt-64 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Padrão <br />
              <span className="text-yellow-400">Profissional.</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Nossas roupas pós-cirúrgicas são o diferencial que seu hospital veterinário precisa para um atendimento de excelência. Cada detalhe foi pensado para maximizar o conforto do pet e a tranquilidade do tutor no período de recuperação.
            </p>
            
            <ul className="space-y-6 mb-12">
              {[
                "Tecidos com 90%+ de algodão e elastano premium.",
                "Zíper e costuras que não irritam a pele sensibilizada.",
                "Abertura higiênica que facilita as necessidades do pet.",
                "Durabilidade superior para múltiplos ciclos de lavagem."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="p-1 bg-yellow-400 rounded-full mt-1">
                    <BadgeCheck size={20} className="text-blue-900" />
                  </div>
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a 
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-yellow-400 text-blue-900 font-black text-xl rounded-2xl hover:bg-yellow-500 transition-all shadow-2xl text-center"
            >
              SOLICITAR AMOSTRA TÉCNICA
            </a>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-[40px] border border-white/10">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROB8BqpKMr-vsWhdhw1OXfU1z6nsWI-wL7IQ&s" 
                alt="Vet Hospital Quality" 
                className="rounded-[30px] shadow-2xl"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/20">
                <div className="text-white text-center">
                  <div className="font-black text-xl mb-1">QUALIDADE FS</div>
                  <div className="text-xs uppercase tracking-widest opacity-80">Referência em Pós-Operatório</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personalization;
