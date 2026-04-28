import React from 'react';
import { Eye, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl uppercase">
                O
              </div>
              <span className="font-bold text-xl tracking-tight uppercase text-slate-900">
                Oftalmoloji Pro
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Profesyonel göz sağlığı hizmetleri ve modern cerrahi çözümlerle her zaman yanınızdayız.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">Hızlı Erişim</h4>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li><a href="#home" className="hover:text-blue-600 transition-colors">Anasayfa</a></li>
              <li><a href="#about" className="hover:text-blue-600 transition-colors">Hakkımızda</a></li>
              <li><a href="#diseases" className="hover:text-blue-600 transition-colors">Hastalıklar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">Poliklinikler</h4>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li>Katarakt ve Akıllı Lens</li>
              <li>Excimer Lazer</li>
              <li>Oküloplasti</li>
            </ul>
          </div>

          <div id="contact" className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">İletişim</h4>
            <div className="text-sm text-slate-600 space-y-4 font-medium">
              <div className="flex items-start gap-2">
                <span>📍</span>
                <span>Levent Mah. No:45, Beşiktaş / İstanbul</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600 text-lg font-bold">
                <span>📞</span>
                <span>+90 (212) 555 0100</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:row items-center justify-between gap-4 text-[11px] text-slate-400 font-medium">
          <p>© 2024 Oftalmoloji Pro Göz Sağlığı Merkezi. Tüm hakları saklıdır.</p>
          <div className="flex gap-6 uppercase">
            <a href="#" className="hover:text-blue-600">KVKK Aydınlatma Metni</a>
            <a href="#" className="hover:text-blue-600">Çerez Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
