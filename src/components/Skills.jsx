import { motion } from 'framer-motion';
import { Code2, Palette, Database, Zap } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass, FaBootstrap, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiRedux, SiTailwindcss, SiFigma } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code2 className="w-7 h-7" />,
      color: 'from-blue-500 to-cyan-500',
      bgGlow: 'bg-blue-500/10',
      skills: [
        { name: 'HTML', level: 94, color: 'from-orange-400 via-orange-500 to-red-500', icon: <FaHtml5 className="text-orange-400 w-5 h-5" /> },
        { name: 'CSS', level: 90, color: 'from-blue-400 via-blue-500 to-cyan-400', icon: <FaCss3Alt className="text-blue-400 w-5 h-5" /> },
        { name: 'JavaScript', level: 93, color: 'from-yellow-300 via-yellow-400 to-amber-500', icon: <FaJs className="text-yellow-400 w-5 h-5" /> },
        { name: 'TypeScript', level: 75, color: 'from-blue-500 via-blue-600 to-indigo-600', icon: <SiTypescript className="text-blue-500 w-5 h-5" /> },
      ],
    },
    {
      title: 'Frameworks',
      icon: <Zap className="w-7 h-7" />,
      color: 'from-purple-500 to-pink-500',
      bgGlow: 'bg-purple-500/10',
      skills: [
        { name: 'React', level: 95, color: 'from-sky-400 via-blue-500 to-indigo-500', icon: <FaReact className="text-sky-400 w-5 h-5" /> },
        { name: 'Next.js', level: 85, color: 'from-slate-600 via-slate-700 to-slate-800', icon: <SiNextdotjs className="text-slate-500 w-5 h-5" /> },
        { name: 'Redux', level: 80, color: 'from-purple-400 via-purple-500 to-indigo-500', icon: <SiRedux className="text-purple-400 w-5 h-5" /> },
      ],
    },
    {
      title: 'Styling',
      icon: <Palette className="w-7 h-7" />,
      color: 'from-pink-500 to-rose-500',
      bgGlow: 'bg-pink-500/10',
      skills: [
        { name: 'Tailwind CSS', level: 93, color: 'from-teal-300 via-cyan-400 to-blue-400', icon: <SiTailwindcss className="text-teal-300 w-5 h-5" /> },
        { name: 'SASS', level: 95, color: 'from-pink-400 via-pink-500 to-rose-500', icon: <FaSass className="text-pink-400 w-5 h-5" /> },
        { name: 'Bootstrap', level: 95, color: 'from-violet-500 via-purple-500 to-fuchsia-500', icon: <FaBootstrap className="text-violet-500 w-5 h-5" /> },
      ],
    },
    {
      title: 'Tools',
      icon: <Database className="w-7 h-7" />,
      color: 'from-emerald-500 to-teal-500',
      bgGlow: 'bg-emerald-500/10',
      skills: [
        { name: 'Git & GitHub', level: 88, color: 'from-gray-600 via-gray-700 to-gray-800', icon: <FaGithub className="text-gray-400 w-5 h-5" /> },
        { name: 'Figma', level: 94, color: 'from-fuchsia-400 via-pink-400 to-rose-400', icon: <SiFigma className="text-fuchsia-400 w-5 h-5" /> },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="skills" className="py-10 sm:py-16 bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-2xl sm:max-w-4xl lg:max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Ko'nikmalar va </span>
            <span className="text-teal-400">Texnologiyalar</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mb-6 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Zamonaviy web texnologiyalar va freymvorklar bilan professional ishlay olaman
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 mb-8 sm:mb-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${category.color} text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills in Category */}
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                    className="group/skill"
                  >
                    <div className="flex justify-between items-center mb-1 gap-1 sm:gap-2">
                      <span className="flex items-center gap-1 sm:gap-2 text-gray-300 text-sm sm:text-base font-medium group-hover/skill:text-white transition-colors">
                        {skill.icon}
                        {skill.name}
                      </span>
                      <span className="text-teal-400 font-bold text-xs sm:text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-900 rounded-full h-2 sm:h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + index * 0.05 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <motion.div
                          animate={{
                            x: [-20, 100, -20],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-16"
        >
          <h3 className="text-lg sm:text-2xl font-bold text-white text-center mb-4 sm:mb-8">Qo'shimcha Ko'nikmalar</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {['Responsive Design', 'REST API', 'SEO', 'Performance', 'UI/UX', 'Agile'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 sm:px-5 py-2 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 text-gray-300 rounded-full text-xs sm:text-sm font-medium hover:border-teal-500/50 hover:text-white hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
