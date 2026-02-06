
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard: React.FC<{ name: string; role: string; content: string }> = ({ name, role, content }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
    <Quote className="absolute top-6 right-6 text-yellow-400 opacity-20" size={48} />
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <p className="text-slate-600 mb-6 italic">"{content}"</p>
    <div>
      <h4 className="font-bold text-blue-900">{name}</h4>
      <p className="text-sm text-slate-400 uppercase tracking-wider">{role}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 uppercase">Quem confia na FS Moda Pet</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard 
            name="Dra. Mariana Silva"
            role="Veterinária"
            content="As roupas da FS Moda Pet são as únicas que realmente ficam fixas no animal sem causar desconforto. A recuperação dos meus pacientes melhorou muito."
          />
          <TestimonialCard 
            name="Hospital Pet Care"
            role="Parceiro Comercial"
            content="A personalização com o nosso logo deu um ar muito mais profissional ao nosso atendimento pós-operatório. Qualidade impecável."
          />
          <TestimonialCard 
            name="Ricardo Oliveira"
            role="Tutor de Dog"
            content="Meu cachorro se adaptou super bem, muito melhor que o colar. O tecido é macio e ele conseguiu dormir e se movimentar tranquilo."
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
