import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "hasanboydesigner@gmail.com",
      link: "mailto:hasanboydesigner@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      value: "+998883715271",
      link: "tel:+998883715271",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Manzil",
      value: "Chust, Namangan, O'zbekiston",
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gray-800 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
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
            <span className="text-white">Men bilan </span>
            <span className="text-purple-400">Bog'lanish</span>
          </h2>
          <div className="w-20 h-1 bg-purple-400 rounded-full mb-6 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Sizni qiziqtirgan savollar yoki takliflaringiz bo'lsa, men bilan
            bog'laning
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Aloqa ma'lumotlari
              </h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg text-white">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm mb-1">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white font-semibold hover:text-purple-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-semibold">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h4 className="text-white font-semibold mb-4">
                  Ijtimoiy tarmoqlar
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Blackhero97"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:hasanboydesigner@gmail.com"
                    className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>

              {/* Illustration */}
              <div className="mt-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl blur-xl"></div>
                <div className="relative bg-gray-800 rounded-xl p-8 text-center">
                  <div className="text-6xl mb-4">💬</div>
                  <p className="text-gray-400 text-sm">
                    Birgalikda ajoyib narsalarni yaratamiz!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-700"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-400 text-sm font-semibold mb-2"
                  >
                    Ismingiz
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Ismingizni kiriting"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-400 text-sm font-semibold mb-2"
                  >
                    Emailingiz
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Emailingizni kiriting"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-400 text-sm font-semibold mb-2"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="+998 XX XXX XX XX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-400 text-sm font-semibold mb-2"
                  >
                    Xabar
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    placeholder="Xabaringizni yozing..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white rounded-lg font-semibold hover:from-violet-500 hover:via-purple-500 hover:to-fuchsia-500 hover:shadow-2xl hover:shadow-fuchsia-500/40 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Xabarni yuborish
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
