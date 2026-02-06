
import React from 'react';
import { BadgeCheck, Truck, Users, LayoutDashboard, TrendingUp, HeartHandshake } from 'lucide-react';
import { getWhatsAppLink } from '../constants';

const FeatureCard: React.FC<{ title: string; text: string; icon: React.ReactNode }> = ({ title, text, icon }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
    <div className="text-blue-600 mb-6 bg-blue-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{text}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="revenda" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm block mb-2">Seja nosso parceiro</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Por que escolher a FS Moda Pet para o seu negócio?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Oferecemos suporte completo para clínicas veterinárias e pet shops que buscam excelência no pós-operatório e rentabilidade no PDV.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<TrendingUp size={32} />}
            title="Lucratividade Real"
            text="Preços diferenciados para revendedores, permitindo margens de lucro competitivas e giro rápido de estoque."
          />
          <FeatureCard 
            icon={<BadgeCheck size={32} />}
            title="Design Anatômico"
            text="Peças desenvolvidas com alta tecnologia têxtil para garantir que o pet não alcance a cicatriz, sem restringir movimentos."
          />
          <FeatureCard 
            icon={<Truck size={32} />}
            title="Pronta Entrega"
            text="Logística eficiente para garantir que seu pet shop ou clínica nunca fique sem os tamanhos mais vendidos."
          />
          <FeatureCard 
            icon={<LayoutDashboard size={32} />}
            title="Mix Completo"
            text="Grade completa de 11 tamanhos que atendem de pinschers a raças gigantes, gatos e pets exóticos."
          />
          <FeatureCard 
            icon={<HeartHandshake size={32} />}
            title="Suporte Especializado"
            text="Equipe pronta para auxiliar na escolha do mix inicial e treinamento sobre os diferenciais técnicos."
          />
          <FeatureCard 
            icon={<Users size={32} />}
            title="Fidelização de Clientes"
            text="Oferecer uma roupa pós-cirúrgica de qualidade superior gera confiança e retorno do tutor à sua clínica."
          />
        </div>

        <div className="mt-20 p-10 bg-blue-50 rounded-[40px] flex flex-col md:flex-row items-center justify-between border-2 border-blue-100">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Pronto para aumentar suas vendas?</h3>
            <p className="text-blue-700">Baixe nosso catálogo completo para lojistas e clínicas.</p>
          </div>
          <a 
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg text-center"
          >
            BAIXAR CATÁLOGO PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
