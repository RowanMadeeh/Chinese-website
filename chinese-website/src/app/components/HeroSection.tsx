'use client'
import { motion } from "framer-motion";
import heroBg from "@/app/assets/hero-pyramids.jpg";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg.src} alt="埃及金字塔" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-b from-background/70 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl font-bold text-gradient-gold mb-4"
        >
          探索埃及
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-2xl md:text-3xl text-foreground/90 mb-3"
        >
          学习 · 文化 · 旅游 · 美食
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-muted-foreground mb-10"
        >
          为中国学生和游客提供完整的埃及指南
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo("#culture")}
            className="px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-gold-glow transition-colors"
          >
            开始探索
          </button>
          <button
            onClick={() => scrollTo("#education")}
            className="px-8 py-3.5 border border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
          >
            留学信息
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
