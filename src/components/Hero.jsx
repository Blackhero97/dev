import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import React from "react";

const Hero = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"
    >
      {/* Animated background particles (mobilda kamaytirilgan) */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-20 items-center md:items-center justify-between">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left w-full md:max-w-xl md:justify-self-start"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-purple-400 mb-2 md:mb-3"
            >
              Salom, mening ismim
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight"
            >
              Hasanboy Nurmuhammadov
            </motion.h1>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl font-semibold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3 md:mb-5"
            >
              Front-end Developer
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-lg mx-auto md:mx-0"
            >
              Zamonaviy web texnologiyalar bilan professional, responsiv va
              user-friendly ilovalar yarataman. Innovatsiya va sifat - har bir
              loyihamning asosi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 md:mb-8 justify-center md:justify-start"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 text-center text-sm sm:text-base"
              >
                Men bilan bog'lanish
              </a>
              <a
                href="/CV_Hasanboy_Nurmuhammadov.pdf"
                download="CV_Hasanboy_Nurmuhammadov.pdf"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-gray-600 text-gray-300 rounded-full font-semibold hover:bg-gray-700 hover:border-gray-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Download size={18} className="sm:w-5 sm:h-5" />
                Rezyume yuklash
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-6 md:gap-8 justify-center md:justify-start mt-4"
            >
              <a
                href="https://github.com/Blackhero97"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
              >
                <Github size={24} className="sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin size={24} className="sm:w-7 sm:h-7" />
              </a>
              <a
                href="mailto:hasanboydesigner@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
              >
                <Mail size={24} className="sm:w-7 sm:h-7" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-first md:order-last w-full flex justify-center md:justify-end"
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px] mx-auto md:mx-0">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 blur-xl opacity-50"
              />
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-blue-600 p-2"
              >
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                  <img
                    src="/portfolio.png"
                    alt="Hasanboy Nurmuhammadov"
                    className={`w-[120%] h-[120%] object-cover object-center rounded-full transition-all duration-700 ${
                      imgLoaded ? "" : "blur-xl scale-105"
                    }`}
                    style={{ objectPosition: "50% 35%" }}
                    onLoad={() => setImgLoaded(true)}
                  />
                </div>
              </motion.div>

              {/* Floating technology badges - radius bo'ylab, rasm ustiga chiqmaydi */}
              <motion.div
                animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none bg-purple-600 text-white px-4 py-2 rounded-xl text-base font-semibold shadow-lg"
              >
                React.js
              </motion.div>
              <motion.div
                animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 z-10 pointer-events-none bg-blue-600 text-white px-4 py-2 rounded-xl text-base font-semibold shadow-lg"
              >
                Next.js
              </motion.div>
              <motion.div
                animate={{ x: [0, 50, 0], y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-10 pointer-events-none bg-cyan-500 text-white px-4 py-2 rounded-xl text-base font-semibold shadow-lg"
              >
                TypeScript
              </motion.div>
              <motion.div
                animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
                className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-10 pointer-events-none bg-teal-500 text-white px-4 py-2 rounded-xl text-base font-semibold shadow-lg"
              >
                Tailwind
              </motion.div>
              <motion.div
                animate={{ x: [0, 0, 0], y: [0, 60, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-10 pointer-events-none bg-green-600 text-white px-4 py-2 rounded-xl text-base font-semibold shadow-lg"
              >
                Node.js
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator (custom icon) */}
      </div>
    </section>
  );
};

export default Hero;
