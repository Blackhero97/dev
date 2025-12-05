import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Hasanboy
            </h3>
            <p className="text-gray-400 mb-4">
              Front-end Developer. Zamonaviy va innovatsion web ilovalar
              yaratishga ishtiyoqmand.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Blackhero97"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hasanboydesigner@gmail.com"
                className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Tezkor havolalar</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Asosiy
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Men haqimda
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Loyihalar
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Ko'nikmalar
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Bog'lanish
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Xizmatlar</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>React Development</li>
              <li>Frontend Consulting</li>
              <li>Performance Optimization</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm flex items-center gap-2">
            © {currentYear} Hasanboy Nurmuhammadov. Barcha huquqlar
            himoyalangan. Made with{" "}
            <Heart size={16} className="text-red-500 fill-current" />
          </p>
          <p className="text-gray-500 text-sm">
            Designed & Developed by Hasanboy
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
