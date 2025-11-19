import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const About = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const experiences = [
    {
      period: '2019-2020',
      title: 'TATU FF',
      shortDesc: '4-kurs paytlari edi shunda menga Tillar kafedrasida kabinet mudiri lavozimiga ishga taklif qilishdi va men .....',
      fullDesc: '4-kurs paytlari edi shunda menga Tillar kafedrasida kabinet mudiri lavozimiga ishga taklif qilishdi va men buni qabul qildim. Bu lavozimda ishlaganimda ko\'plab talabalar bilan muloqot qilish, kompyuter texnikalari bilan ishlash va ta\'lim jarayonini yaxshilash bo\'yicha ko\'plab tajribalar orttirdim. Shuningdek, kafedraning kundalik ishlarini tashkil etish va professor-o\'qituvchilar bilan hamkorlik qilish imkoniyatiga ega bo\'ldim.'
    },
    {
      period: '2020-2021',
      title: 'Uzbektelecom',
      shortDesc: 'O\'qishni tamomladim va har bir bitiruvcini singari ish izlay boshladim va Uzbektelecomga......',
      fullDesc: 'O\'qishni tamomladim va har bir bitiruvcini singari ish izlay boshladim va Uzbektelecomga ishga joylashdim. Bu yerda tarmoq texnologiyalari va telekommunikatsiya sohasida katta tajriba orttirdim. Mijozlar bilan ishlash, texnik muammolarni hal qilish va jamoaviy muhitda samarali ishlash ko\'nikmalarini rivojlantirdim. Shuningdek, professional kommunikatsiya va mas\'uliyatli yondashuvni o\'rgandim.'
    },
    {
      period: '2021-2023',
      title: 'IT SCHOOL',
      shortDesc: '2021-yil yanvar oyi edi Jinoyat sudiqa suhbatga tayyorlanib imtihon topshirib yurgan paytlarim. Shu kunlarda o\'zim yashaydigon Chust tumanida .....',
      fullDesc: '2021-yil yanvar oyi edi, Jinoyat-sud organlariga kirish imtihonlariga tayyorlanib yurgan paytlarim. Shu kunlarda o\'zim yashaydigon Chust tumanida IT SCHOOL ochilgani haqida xabar oldim va bu men uchun yangi imkoniyat edi. Men shu yerda Front-end dasturlash yo\'nalishi bo\'yicha o\'qituvchi va mentor sifatida faoliyat boshladim. Yoshlarga dasturlashni o\'rgatish, ularning professional rivojlanishiga hissa qo\'shish va zamonaviy texnologiyalar bilan ishlash bo\'yicha bilimlarimni ulashish imkoniyatiga ega bo\'ldim.'
    },
    {
      period: '2023-Hozir',
      title: 'Coders Planet',
      shortDesc: 'Front-end Mentor va Web Developer - Professional mentorlik va zamonaviy web loyihalar ustida ishlash',
      fullDesc: 'Coders Planet ta\'lim markazida Front-end Mentor va Senior Web Developer sifatida faoliyat yuritmoqdaman. Bu yerda ikki yo\'nalishda ishlayapman: birinchidan, yangi dasturchilarga professional mentorlik qilish, React.js, Next.js, TypeScript, Tailwind CSS va boshqa zamonaviy texnologiyalar bo\'yicha chuqur bilim berish. O\'quvchilarni real loyihalarda ishlashga tayyorlayman va ularning portfoliosini kuchli qilishga yordam beraman. Ikkinchidan, turli xil mijozlar uchun zamonaviy web saytlar va web ilovalar ishlab chiqaman. UI/UX dizayndan tortib to deployment jarayonigacha bo\'lgan barcha bosqichlarni professional darajada amalga oshiraman. Responsive dizayn, SEO optimizatsiya, performance tuning va zamonaviy web standartlariga rioya qilgan holda yuqori sifatli mahsulotlar yaratishga e\'tibor beraman.'
    },
    {
      period: '2023-Hozir',
      title: 'Chust IT Services',
      shortDesc: 'Lead Front-end Developer va Technical Mentor - Web dizayn va ilovalar ishlab chiqish',
      fullDesc: 'Chust IT Services kompaniyasida Lead Front-end Developer va Technical Mentor lavozimlarida ishlamoqdaman. Bu yerda bir nechta muhim vazifalarni bajaraman. Birinchidan, mijozlar uchun professional web dizayn va full-stack web ilovalar yaratish - landing page\'lardan tortib murakkab CRM tizimlari va e-commerce platformalarigacha. Har bir loyihada zamonaviy dizayn tamoyillarini, foydalanuvchi tajribasini (UX) va professional yondashuvlarni qo\'llayman. Ikkinchidan, jamoada junior va middle developerlarni o\'qitish, code review jarayonlarini olib borish va texnik yo\'nalishni belgilash. Shuningdek, loyihalarning texnik arxitekturasini loyihalash, best practice\'larni joriy etish va jamoa samaradorligini oshirishga mas\'ul bo\'laman. React, Next.js, Node.js, MongoDB va boshqa texnologiyalar stack\'ida murakkab va masshtabli web yechimlari yarataman.'
    },
    {
      period: '2023-Hozir',
      title: 'BM SCHOOL',
      shortDesc: 'Zamonaviy kasblar bo\'yicha o\'qituvchi - Dasturlash, AI, Web Design va Digital Marketing',
      fullDesc: 'BM SCHOOL zamonaviy ta\'lim markazida ko\'p yo\'nalishli o\'qituvchi va kuratorman. Bu yerda bolalar va yoshlar uchun kelajak kasblari bo\'yicha keng qamrovli ta\'lim beraman. Asosiy yo\'nalishlar: Web Dasturlash (HTML, CSS, JavaScript, React), Sun\'iy Intellekt (AI) asoslari va Machine Learning bilan ishlash, Professional Web Design (Figma, Adobe XD, UI/UX printsiplari), Digital Marketing va SMM. Har bir kursda nazariy bilimlarni amaliy loyihalar bilan birlashtiraman. O\'quvchilar real mijozlar uchun web saytlar yaratish, AI vositalari bilan ishlash, professional dizayn qilish va digital marketing strategiyalarini ishlab chiqish tajribasiga ega bo\'lishadi. Mening asosiy maqsadim - yoshlarni zamonaviy raqamli dunyoga tayyorlash, ularga kelajakda yuqori daromad keltiruvchi va talab yuqori kasblarni egallashga yordam berishdir. Shuningdek, kreativ fikrlash, muammolarni hal qilish va mustaqil ishlash ko\'nikmalarini rivojlantirishga alohida e\'tibor beraman.'
    }
  ];

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Toza va samarali kod yozish orqali yuqori sifatli mahsulot yarataman',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Modern Design',
      description: 'Zamonaviy va jozibali dizaynlar bilan foydalanuvchi tajribasini yaxshilayman',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Tez Ishlash',
      description: 'Optimallashtirilgan va tez yuklanadigan web ilovalar yarataman',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Jamoa Ishi',
      description: 'Samarali hamkorlik va kommunikatsiya orqali muvaffaqiyatga erishaman',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Men </span>
            <span className="text-cyan-400">Haqimda</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 rounded-full mb-6 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Front-end Developer</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Men Chust shahrida Front-end mentor sifatida ishlab kelmoqdaman. Dasturlash sohasiga katta qiziqish va ehtirosim bor. Web texnologiyalari va zamonaviy framework'lar bilan ishlashni yaxshi ko'raman.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  React.js, Next.js, Tailwind CSS, SASS va boshqa zamonaviy texnologiyalar bilan professional darajada ishlay olaman. Har bir loyihani o'ziga xos yondashuv va innovatsion g'oyalar bilan amalga oshiraman.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Mening asosiy maqsadim - foydalanuvchilarga qulay, tez va zamonaviy web ilovalar yaratish orqali biznesning raqamli dunyodagi mavqeini mustahkamlash.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Tajriba</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-purple-600"></div>
                  {index < experiences.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-purple-600 to-transparent mt-2"></div>
                  )}
                </div>
                <div className="flex-1 mb-4">
                  <div 
                    className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 cursor-pointer"
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="text-purple-400 text-sm font-semibold">{exp.period}</span>
                        <h4 className="text-white text-xl font-bold mt-2">{exp.title}</h4>
                        <p className="text-gray-400 mt-2">
                          {expandedIndex === index ? exp.fullDesc : exp.shortDesc}
                        </p>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4 text-purple-400"
                      >
                        <ChevronDown size={24} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
