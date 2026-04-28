import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function AppointmentForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const date = formData.get('date') as string;
    const service = formData.get('service') as string;

    // Doctor's WhatsApp number (example: 905550100000)
    const doctorPhone = "905550100000"; 
    
    const message = `Merhaba, Randevu Talebi:%0A%0A` +
      `👤 Ad Soyad: ${name}%0A` +
      `📞 Tel: ${phone}%0A` +
      `📧 E-posta: ${email}%0A` +
      `📅 Tarih: ${date}%0A` +
      `🏥 Servis: ${service}`;

    const whatsappUrl = `https://wa.me/${doctorPhone}?text=${message}`;

    // Simulate short delay for UX
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-[32px] shadow-2xl text-center border border-gray-100"
      >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Randevu Talebiniz Alındı!</h3>
        <p className="text-gray-600 text-lg mb-8">
          En kısa sürede sizinle iletişime geçeceğiz. Sağlıklı günler dileriz.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-blue-600 font-bold hover:underline"
        >
          Yeni bir randevu oluştur
        </button>
      </motion.div>
    );
  }

  return (
    <section id="appointment" className="py-24 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 text-white">
            <h2 className="text-blue-100 font-bold uppercase tracking-widest text-sm mb-3">Online Randevu</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 italic serif">Gözleriniz İçin En İyi Bakımı Zamanında Alın.</h3>
            <p className="text-blue-100 text-xl mb-12 leading-relaxed opacity-90">
              Muayene ve tetkik talepleriniz için formu doldurun, ekibimiz sizin için en uygun saati belirlesin.
            </p>

            <div className="space-y-6">
              {[
                { icon: Clock, title: "Çalışma Saatleri", desc: "Haftaiçi: 09:00 - 18:00 | Cmt: 10:00 - 15:00" },
                { icon: Phone, title: "Acil Hat", desc: "+90 (212) 555 0100" },
                { icon: Calendar, title: "Hızlı Onay", desc: "Randevu talepleriniz 30 dk içinde yanıtlanır." }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold">{item.title}</div>
                    <div className="text-blue-100/70">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-700 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden border border-blue-600"
            >
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase font-bold text-blue-200 flex items-center gap-2">
                       Adınız Soyadınız
                    </label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="Örn: Mehmet Yılmaz"
                      className="bg-blue-800/50 border border-blue-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-blue-300 text-white"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase font-bold text-blue-200 flex items-center gap-2">
                      Telefon Numaranız
                    </label>
                    <input 
                      required
                      name="phone"
                      type="tel" 
                      placeholder="0 (5xx) xxx xx xx"
                      className="bg-blue-800/50 border border-blue-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-blue-300 text-white"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] uppercase font-bold text-blue-200 flex items-center gap-2">
                    E-posta
                  </label>
                  <input 
                    required
                    name="email"
                    type="email" 
                    placeholder="ornek@mail.com"
                    className="bg-blue-800/50 border border-blue-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-blue-300 text-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase font-bold text-blue-200 flex items-center gap-2">
                      Tarih Seçin
                    </label>
                    <input 
                      required
                      name="date"
                      type="date" 
                      className="bg-blue-800/50 border border-blue-500 rounded-xl px-4 py-3 text-sm focus:outline-none text-white [&::-webkit-calendar-picker-indicator]:invert"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase font-bold text-blue-200 flex items-center gap-2">
                      Servis
                    </label>
                    <select name="service" className="bg-blue-800/50 border border-blue-500 rounded-xl px-4 py-3 text-sm focus:outline-none text-white appearance-none">
                      <option className="text-slate-900">Genel Muayene</option>
                      <option className="text-slate-900">Lazer Kontrol</option>
                      <option className="text-slate-900">Lens Muayenesi</option>
                    </select>
                  </div>
                </div>

                <button 
                  disabled={isLoading}
                  type="submit"
                  className="w-full bg-white text-blue-700 font-bold py-4 rounded-xl shadow-lg hover:bg-blue-50 active:scale-95 transition-all text-base"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-blue-700 border-t-transparent rounded-full animate-spin mx-auto"></div>
                  ) : (
                    "Randevu Oluştur"
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
