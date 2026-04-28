import { EyeDisease, Doctor } from "./types";

export const EYE_DISEASES: EyeDisease[] = [
  {
    id: "katarakt",
    title: "Katarakt",
    icon: "Eye",
    description: "Göz içindeki lensin saydamlığını kaybederek matlaşmasıdır. Genellikle yaşa bağlı olarak gelişir.",
    symptoms: ["Bulanık görme", "Işığa hassasiyet", "Gece görüşünde azalma", "Renklerin soluklaşması"],
    treatment: "Tek kesin çözümü cerrahi müdahaledir. Modern yöntemlerle kısa sürede ve dikişsiz olarak gerçekleştirilir."
  },
  {
    id: "glokom",
    title: "Glokom (Göz Tansiyonu)",
    icon: "Activity",
    description: "Göz içi basıncının optik sinirlere zarar verecek kadar yükselmesi durumudur. 'Sinsi hırsız' olarak bilinir.",
    symptoms: ["Göz ağrısı", "Baş ağrısı", "Görüş alanında daralma", "Işıkların etrafında halkalar görme"],
    treatment: "Göz damlaları, lazer tedavisi veya cerrahi yöntemlerle kontrol altına alınabilir."
  },
  {
    id: "makula-dejenere",
    title: "Sarı Nokta Hastalığı",
    icon: "Target",
    description: "Merkezi görüşten sorumlu makula bölgesinin hasar görmesidir. Yaşla birlikte risk artar.",
    symptoms: ["Merkezi görme kaybı", "Çizgilerin yamuk görünmesi", "Detayları görememe"],
    treatment: "Erken teşhis durumunda vitamin destekleri veya göz içi iğnelerle ilerleme yavaşlatılabilir."
  },
  {
    id: "miyopi-hipermetropi",
    title: "Kırma Kusurları",
    icon: "Glasses",
    description: "Işığın retina üzerinde tam odaklanamaması sonucu oluşan odaklanma sorunlarıdır.",
    symptoms: ["Uzağı görememe (Miyopi)", "Yakını görememe (Hipermetropi)", "Göz yorgunluğu", "Bulanık görme"],
    treatment: "Gözlük, kontakt lens veya Excimer Lazer (akıllı lens) tedavileri ile düzeltilebilir."
  }
];

export const DOCTOR_PROFILE: Doctor = {
  name: "Prof. Dr. Ahmet Yılmaz",
  title: "Göz Hastalıkları Uzmanı",
  bio: "20 yılı aşkın tecrübesiyle Ahmet Yılmaz, binlerce başarılı cerrahi operasyona imza atmıştır. Özellikle kornea nakli ve katarakt cerrahisinde uluslararası düzeyde tanınmaktadır.",
  specialties: ["Katarakt Cerrahisi", "Lazer Göz Tedavisi", "Glokom Tedavisi", "Oküloplastik Cerrahi"],
  education: [
    "Hacettepe Üniversitesi Tıp Fakültesi",
    "Ankara Göz Hastanesi İhtisas",
    "London Vision Clinic Fellow"
  ],
  image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
};
