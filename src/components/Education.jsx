import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, GraduationCap, User, Code, X } from 'lucide-react';
import { useState } from 'react';

const Education = () => {
  const [selectedEducation, setSelectedEducation] = useState(null);

  const education = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: 'Maktab davri',
      period: '2004-2013',
      description: 'Maktab davrim juda qiziq o\'tgan. Boshlang\'ich talimni Namangan viloyati Chust tumanida joylashgan 53-umumiy o\'rta talim ......',
      fullDescription: 'Maktab davrim juda qiziq va esda qolarli o\'tdi. Boshlang\'ich talimni Namangan viloyati Chust tumanida joylashgan 53-umumiy o\'rta talim maktabida oldim. Bu yerda o\'qish davrida ko\'plab do\'stlar orttirdim va hayotiy tajribalar to\'pladim. Maktab yillarimda fan olimpiadalarida faol ishtirok etdim, ayniqsa matematika va informatika fanlariga katta qiziqish bildirdim. O\'qituvchilarim doimo meni qo\'llab-quvvatlab, bilim olishga undashdi. Maktab davri mening shaxsiyatim shakllanishida, ijtimoiy ko\'nikmalarimni rivojlantirishida va kelajakdagi yo\'limni tanlashda muhim rol o\'ynadi. Sinfda har doim faol o\'quvchilardan bo\'lganman va turli xil tadbirlarda ishtirok etganman.',
      color: 'from-pink-500 to-rose-500',
      bgGlow: 'bg-pink-500/10',
      borderColor: 'hover:border-pink-500',
      textColor: 'text-pink-400',
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: 'Akademik Litsey',
      period: '2013-2016',
      description: 'Maktabni tamomlab 2013-yilda Namangan Davlat Universiteti qoshidagi 1-sonli akademik litsey ......',
      fullDescription: 'Maktabni muvaffaqiyatli tamomlab, 2013-yilda Namangan Davlat Universiteti qoshidagi 1-sonli akademik litseyiga o\'qishga kirdim. Litsey davri mening intellektual rivojlanishimda muhim bosqich bo\'ldi. Bu yerda chuqurroq fan bilimlarini egallash, o\'z qobiliyatlarimni kashf qilish va kelajakdagi kasbimni tanlash imkoniyatiga ega bo\'ldim. Litseydagi o\'qituvchilar professional darajada dars berib, bizni oliy ta\'limga tayyorlashdi. Matematika, fizika va informatika fanlarida yuqori natijalarga erishdim. Litsey yillarida jamoa ishida faol qatnashdim, turli loyihalarda ishtirok etdim va yetakchilik sifatlarini rivojlantirdim. Bu davr mening tafakkurimni kengaytirdi va akademik muvaffaqiyatlarga erishishga yordam berdi.',
      color: 'from-purple-500 to-indigo-500',
      bgGlow: 'bg-purple-500/10',
      borderColor: 'hover:border-purple-500',
      textColor: 'text-purple-400',
    },
    {
      icon: <User className="w-12 h-12" />,
      title: 'Oliy Talim',
      period: '2016-2020',
      description: 'Oliy talim bu yetuklik vayaga yetish yoshiga yaqin yillarni o\'z ichiga oladi. O\'qishga kirish har bir litsey va kollej bitiruv chisini asosiy ......',
      fullDescription: 'Oliy ta\'lim bosqichi mening professional rivojlanishimda eng muhim davr bo\'ldi. 2016-yilda Toshkent Axborot Texnologiyalari Universiteti Farg\'ona filialiga (TATU FF) Dasturiy injiniring yo\'nalishi bo\'yicha o\'qishga kirdim. Universitet davri mening dunyoqarashimni butunlay o\'zgartirdi. Bu yerda nafaqat nazariy bilimlar oldim, balki amaliy ko\'nikmalarni ham egallash imkoniyatiga ega bo\'ldim. Dasturlash tillari, ma\'lumotlar bazasi, algoritm va ma\'lumotlar strukturalari, web dasturlash va boshqa zamonaviy texnologiyalar bo\'yicha chuqur bilim oldim. Professor-o\'qituvchilar va mentorlarim meni doimo qo\'llab-quvvatlab, professional yo\'nalishda rivojlanishimga yordam berishdi. Universitet yillarida turli loyihalarda ishladim, startup g\'oyalarimni amalga oshirish ustida ishladim va IT sohasida kelajakni qurish uchun poydevor yaratdim.',
      color: 'from-blue-500 to-cyan-500',
      bgGlow: 'bg-blue-500/10',
      borderColor: 'hover:border-blue-500',
      textColor: 'text-blue-400',
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Way up',
      period: '2020-2021',
      description: 'O\'qishni tamomladim va har bir bitiruvcni singari ish izlay boshladim va Mutaxassisligim bo\'yicha Uzbektelecom aksiyadorlik ......',
      fullDescription: 'Universitetni tamomlaganimdan keyin professional hayotim yangi bosqichga kirdi. 2020-2021 yillarda Way Up loyihasi doirasida faoliyat yuritdim. Bu davr mening amaliy ko\'nikmalarimni real loyihalarda sinab ko\'rish va professional tajriba to\'plash imkoniyati bo\'ldi. O\'qishni tamomlab, har bir bitiruvcni singari ish izlay boshladim va dastlab Uzbektelecom aksiyadorlik jamiyatida ishga joylashdim. Keyinchalik Way Up platformasida Front-end Developer va Mentor sifatida faoliyat yuritdim. Bu yerda zamonaviy web texnologiyalari bilan ishlash, murakkab loyihalarni amalga oshirish va jamoaviy ishlash tajribasini orttirdim. Shuningdek, yangi dasturchilarga mentorlik qilish, o\'z bilimlarimni ulashish va professional hamjamiyatda faol ishtirok etish imkoniyatiga ega bo\'ldim. Bu bosqich mening karyeramda muhim qadam bo\'lib, keyingi professional yutuqlarimga asos soldi.',
      color: 'from-emerald-500 to-teal-500',
      bgGlow: 'bg-emerald-500/10',
      borderColor: 'hover:border-emerald-500',
      textColor: 'text-emerald-400',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Bilim va </span>
            <span className="text-orange-400">Ko'nikmalar</span>
          </h2>
          <div className="w-20 h-1 bg-orange-400 rounded-full mb-6 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Mening ta'lim yo'lim va professional rivojlanish bosqichlarim
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 ${item.borderColor} transition-all duration-300 group relative`}
            >
              {/* Gradient top border */}
              <div className={`h-1 bg-gradient-to-r ${item.color}`}></div>
              
              {/* Hover glow effect */}
              <div className={`absolute inset-0 ${item.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              
              <div className="p-8 relative">
                <div className="flex items-start gap-4 mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`p-4 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-[10px] justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                        {item.title}
                      </h3>
                      <span className={`text-sm ${item.textColor} font-bold px-4 py-2 ${item.bgGlow} rounded-full border border-current/20`}>
                        {item.period}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
                <button 
                  onClick={() => setSelectedEducation(item)}
                  className={`${item.textColor} hover:text-white font-semibold text-sm flex items-center gap-2 transition-all duration-300 group/btn`}
                >
                  <span>Batafsil</span>
                  <motion.svg 
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </button>
              </div>
              
              {/* Bottom gradient shine */}
              <div className={`h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedEducation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEducation(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 relative"
            >
              {/* Gradient top border */}
              <div className={`h-1 bg-gradient-to-r ${selectedEducation.color}`}></div>
              
              {/* Close button */}
              <button
                onClick={() => setSelectedEducation(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <motion.div 
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-4 rounded-xl bg-gradient-to-br ${selectedEducation.color} text-white shadow-lg`}
                  >
                    {selectedEducation.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {selectedEducation.title}
                    </h3>
                    <span className={`text-sm ${selectedEducation.textColor} font-bold px-4 py-2 ${selectedEducation.bgGlow} rounded-full border border-current/20 inline-block`}>
                      {selectedEducation.period}
                    </span>
                  </div>
                </div>

                {/* Full description */}
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {selectedEducation.fullDescription}
                  </p>
                </div>

                {/* Bottom gradient shine */}
                <div className={`h-1 mt-8 bg-gradient-to-r ${selectedEducation.color} rounded-full`}></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education;
