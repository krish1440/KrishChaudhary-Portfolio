
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Send, Loader2, CheckCircle2, FileText } from 'lucide-react';

const Contact: React.FC = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "23959f15-7ad1-4684-9cb3-ab851bad194d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setIsSuccess(true);
        event.currentTarget.reset();
        setTimeout(() => {
          setIsSuccess(false);
          setResult("");
        }, 5000);
      } else {
        setResult("Error submitting form. Please try again.");
      }
    } catch (error) {
      setResult("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-all duration-300 backdrop-blur-sm";
  const labelClasses = "block text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 ml-2";

  return (
    <footer id="contact" className="py-24 md:py-32 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[60vh] bg-gradient-to-b from-violet-500/[0.05] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left Side: Text & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/30">
              LET'S <br />
              <span className="text-gradient">CONNECT</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-12 leading-relaxed">
              Currently looking for new opportunities in Data Science and Machine Learning.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="flex gap-6 mb-16">
              {[
                { icon: <Linkedin className="w-6 h-6" />, link: "https://www.linkedin.com/in/krish-chaudhary-krc8252", color: "hover:text-[#0077b5] hover:border-[#0077b5]/30" },
                { icon: <Github className="w-6 h-6" />, link: "https://github.com/krish1440/", color: "hover:text-white hover:border-white/30" },
                { icon: <Mail className="w-6 h-6" />, link: "mailto:krishchaudhary144@gmail.com", color: "hover:text-emerald-400 hover:border-emerald-400/30" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target={social.link.startsWith("http") ? "_blank" : undefined}
                  rel={social.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`w-14 h-14 rounded-2xl glass border border-white/5 flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[600px]"
          >
            <form onSubmit={onSubmit} className="glass p-8 md:p-10 rounded-[40px] border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-violet-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className={labelClasses}>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Krish Chaudhary"
                      required
                      className={inputClasses}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={labelClasses}>Your Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="krishchaudhary144@gmail.com"
                      required
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={labelClasses}>Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    required
                    className={`${inputClasses} resize-none`}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden relative
                        ${isSuccess
                      ? "bg-emerald-500 text-white cursor-default"
                      : "bg-white text-black hover:bg-cyan-50"
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 className="w-6 h-6" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}

                  {/* Shimmer Effect */}
                  {!isSubmitting && !isSuccess && (
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-20" />
                  )}
                </button>
                {result && !isSuccess && <p className="text-center text-red-400 text-sm mt-2">{result}</p>}
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm md:text-base text-gray-500 font-medium tracking-wider uppercase text-center md:text-left">
            <p>© 2024 Krish Chaudhary — All Rights Reserved</p>
            <p className="mt-2 text-cyan-500/60 font-black tracking-widest text-xs md:text-sm">
              "TURNING RAW DATA INTO INTELLIGENT INSIGHTS THROUGH MACHINE LEARNING."
            </p>
          </div>

          <div className="flex gap-4">
            {[
              { name: "Resume", icon: <FileText className="w-4 h-4" />, link: "https://res.cloudinary.com/dyhe9rbjz/image/upload/v1752746706/hunwrs6elzgeg0kmu1hy.pdf" },
              { name: "LinkedIn", icon: <Linkedin className="w-4 h-4" />, link: "https://www.linkedin.com/in/krish-chaudhary-krc8252" },
              { name: "GitHub", icon: <Github className="w-4 h-4" />, link: "https://github.com/krish1440/" }
            ].map((btn, i) => (
              <a
                key={i}
                href={btn.link}
                target={btn.link.startsWith("http") ? "_blank" : undefined}
                rel={btn.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative px-4 py-2 rounded-lg glass border border-white/5 flex items-center gap-2 text-gray-400 hover:text-white hover:border-cyan-500/30 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-cyan-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10">{btn.icon}</span>
                <span className="relative z-10 text-xs font-bold uppercase tracking-wider">{btn.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
