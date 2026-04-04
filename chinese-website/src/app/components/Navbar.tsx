'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "首页", href: "#hero" },
  { label: "留学埃及", href: "#education" },
  { label: "文化与景点", href: "#culture" },
  { label: "娱乐场所", href: "#entertainment" },
  { label: "埃及美食", href: "#food" },
  { label: "节日庆典", href: "#festivals" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);

    const targetId = href.startsWith("#") ? href.slice(1) : href;
    requestAnimationFrame(() => {
      const el = document.getElementById(targetId);
      if (!el) return;

      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-gold/20">
      <div className="container mx-auto flex items-center justify-between md:justify-center h-16 px-4 relative">
        <button onClick={() => scrollTo("#hero")} className="font-serif text-xl font-bold text-gradient-gold md:absolute md:left-4">
          探索埃及
        </button>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => scrollTo(item.href)}
              className="text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-glass border-t border-gold/10 overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => scrollTo(item.href)}
                  className="text-left text-foreground/80 hover:text-primary py-2 border-b border-gold/5 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
