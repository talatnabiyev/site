import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=2000" 
          alt="Eye Care Clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wider uppercase mb-4">
              Göz Sağlığı ve Cerrahisi
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Net Bir Görüş, <br />
              <span className="text-blue-600">Mutlu Bir Gelecek.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
              En son teknoloji ve uzman kadromuzla göz sağlığınızı korumak için buradayız. 
              Modern teşhis ve cerrahi yöntemlerle yaşam kalitenizi artırıyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#appointment" 
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-blue-200/50"
              >
                <Calendar className="w-5 h-5" />
                Hemen Randevu Al
              </a>
              <a 
                href="#diseases" 
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg transition-all"
              >
                Göz Hastalıkları
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex items-center gap-8 text-gray-500"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900">20+</span>
              <span className="text-sm">Yıllık Tecrübe</span>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900">10k+</span>
              <span className="text-sm">Mutlu Hasta</span>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900">99%</span>
              <span className="text-sm">Başarı Oranı</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
