import React from 'react';
import { Play } from 'lucide-react';

// Use a constant with any type to bypass JSX.IntrinsicElements validation for custom elements
const WistiaPlayer = 'wistia-player' as any;

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
            <Play size={16} fill="currentColor" />
            Informação Técnica
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Excelência em Cada Detalhe</h2>
          <p className="text-lg text-slate-600">
            Assista ao vídeo e entenda por que a FS Moda Pet é referência nacional em recuperação segura e confortável para pets.
          </p>
        </div>

        <div className="max-w-sm mx-auto relative group">
          {/* Decorative frame - adjusted for vertical video aspect ratio */}
          <div className="absolute -inset-4 bg-yellow-400/20 rounded-[40px] -z-10 group-hover:bg-yellow-400/30 transition-colors"></div>
          
          <div className="relative overflow-hidden rounded-[32px] shadow-2xl border-4 border-white bg-slate-900">
            {/* Wistia Player - aspect ratio is 9:16 (0.5625) */}
            <WistiaPlayer 
              media-id="cstpaylu6c" 
              aspect="0.5625"
            ></WistiaPlayer>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <span className="font-bold text-sm">01</span>
              </div>
              <span className="font-bold text-slate-700 text-sm">Conforto Térmico</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <span className="font-bold text-sm">02</span>
              </div>
              <span className="font-bold text-slate-700 text-sm">Design Patenteado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;