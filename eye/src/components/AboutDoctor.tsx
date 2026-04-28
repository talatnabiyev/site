import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, GraduationCap, Microscope } from 'lucide-react';
import { DOCTOR_PROFILE } from '../constants';

export default function AboutDoctor() {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="bg-white p-6 md:p-12 rounded-[32px] md:rounded-[40px] border border-slate-200 shadow-sm flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-slate-200">
              <img 
                src={DOCTOR_PROFILE.image} 
                alt={DOCTOR_PROFILE.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3"
          >
            <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              {DOCTOR_PROFILE.title}
            </span>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">{DOCTOR_PROFILE.name}</h3>
            
            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-2xl">
              {DOCTOR_PROFILE.bio}
            </p>

            <div className="flex gap-8 mb-10 border-b border-slate-100 pb-8">
              <div className="text-left">
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <div className="text-[10px] uppercase text-slate-400 font-bold tracking-widest">Yıllık Deneyim</div>
              </div>
              <div className="w-[1px] h-12 bg-slate-200"></div>
              <div className="text-left">
                <div className="text-3xl font-bold text-blue-600">15k+</div>
                <div className="text-[10px] uppercase text-slate-400 font-bold tracking-widest">Başarılı Operasyon</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-4 flex items-center gap-2">
                  <Microscope className="w-4 h-4 text-blue-600" />
                  Uzmanlık Alanları
                </h4>
                <div className="flex flex-wrap gap-2">
                  {DOCTOR_PROFILE.specialties.map(s => (
                    <span key={s} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  Eğitim
                </h4>
                <ul className="space-y-2">
                  {DOCTOR_PROFILE.education.map(e => (
                    <li key={e} className="flex items-center gap-2 text-slate-600 text-sm">
                      <CheckCircle2 className="w-3 h-3 text-blue-600" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
