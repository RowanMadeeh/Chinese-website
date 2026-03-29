import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="about" className="bg-card border-t border-gold/10 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-bold text-gradient-gold mb-4">探索埃及</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              为中国学生和游客打造的一站式埃及指南。涵盖留学、旅游、文化、美食等全面信息，助您深入了解这片古老文明的土地。
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold text-foreground mb-4">快速导航</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "留学埃及", href: "#education" },
                { label: "文化与景点", href: "#culture" },
                { label: "娱乐活动", href: "#entertainment" },
                { label: "埃及美食", href: "#food" },
              ].map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold text-foreground mb-4">联系我们</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>埃及 · 开罗</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>info@explore-egypt.cn</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+20 123 456 789</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 探索埃及 — 为中国学生和游客提供的埃及完整指南
          </p>
        </div>
      </div>
    </footer>
  );
}
