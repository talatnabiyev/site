import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EYE_DISEASES } from '../constants';
import * as Icons from 'lucide-react';
import { EyeDisease } from '../types';

export default function Diseases() {
  const [selectedDisease, setSelectedDisease] = useState<EyeDisease | null>(null);

  return (
    <section id="diseases" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Uzmanlık Alanlarımız</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sık Karşılaşılan Göz Hastalıkları</h3>
          <p className="text-gray-600 text-lg">
            Göz sağlığınızı korumak ve iyileştirmek için en yaygın hastalıklar hakkında 
            sizleri bilgilendiriyoruz. Erken teşhis hayat kurtarır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {EYE_DISEASES.map((disease, index) => {
            const IconComponent = (Icons as any)[disease.icon] || Icons.Eye;
            return (
              <motion.div
                key={disease.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                onClick={() => setSelectedDisease(disease)}
              >
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-blue-600 mb-2">{disease.title}</h4>
                <p className="text-xs text-slate-500 leading-normal line-clamp-3">
                  {disease.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedDisease && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDisease(null)}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[32px] shadow-2xl overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <button 
                  onClick={() => setSelectedDisease(null)}
                  className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Icons.X className="w-6 h-6" />
                </button>

                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-blue-600 text-white rounded-2xl">
                    {React.createElement((Icons as any)[selectedDisease.icon] || Icons.Eye, { className: "w-8 h-8" })}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{selectedDisease.title}</h3>
                    <p className="text-blue-600 font-medium">Göz Sağlığı Bilgilendirme</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                       <Icons.Info className="w-5 h-5 text-blue-600" /> Nedir?
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{selectedDisease.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                         <Icons.AlertCircle className="w-5 h-5 text-amber-500" /> Belirtiler
                      </h4>
                      <ul className="space-y-2">
                        {selectedDisease.symptoms.map((s, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                         <Icons.ShieldCheck className="w-5 h-5 text-green-500" /> Tedavi Yöntemi
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{selectedDisease.treatment}</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <a 
                      href="#appointment" 
                      onClick={() => setSelectedDisease(null)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
                    >
                      Muayene Randevusu Al
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
