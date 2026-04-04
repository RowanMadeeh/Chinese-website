'use client'
import { motion } from "framer-motion";
import { Moon, Sun, Heart, Flower2 } from "lucide-react";
import { useState } from "react";
import DetailDialog from "./DetailDialog";

const festivals = [
  {
    name: "斋月",
    icon: Moon,
    desc: "伊斯兰教最重要的斋戒月份，从黎明到日落禁食禁饮。",
    details:
      "斋月是伊斯兰教中最重要的月份，穆斯林在整个斋月期间从黎明到日落禁食禁饮。除了斋戒，还包括多种宗教和社会习俗，例如：每晚在清真寺进行塔拉威哈祈祷、诵读《古兰经》以及施舍天课和慈善。特色食物包括：用椰枣和牛奶开始开斋、萨姆布萨克、卡塔耶夫、胡沙夫（浸泡的干果）、以及甘草汁和罗望子汁等饮品。",
  },
  {
    name: "开斋节",
    icon: Sun,
    desc: "斋月结束后的重要节日，以礼拜、探亲和穿新衣为特色。",
    details:
      "开斋节是在斋月结束后庆祝的重要节日。人们会参加节日礼拜、探亲访友，并穿上新衣服庆祝。特色食物包括节日饼干（夹坚果或椰枣）、格里巴饼干以及各种甜点类食品。",
  },
  {
    name: "宰牲节",
    icon: Heart,
    desc: "通过宰牲并分享肉类来体现奉献与慈善的重要节日。",
    details:
      "宰牲节的主要特点是宰杀祭牲（如羊或牛），并将肉分发给亲属和贫困者，体现分享与慈善精神。特色食物包括法塔（米饭、面包与肉的传统菜）、烤肉串、烤肉饼以及各种烤肉料理。",
  },
  {
    name: "闻香节（春季节日）",
    icon: Flower2,
    desc: "源自古埃及的春季节日，全国人民共同庆祝。",
    details:
      "一个源自古埃及的节日，所有埃及人都会庆祝。，习俗：外出到尼罗河附近的花园和公园游玩。，特色食物：菲西赫和熏鲱鱼（咸鱼）。彩色鸡蛋（象征生命）。",
  },
];

export default function FestivalsSection() {
  const [selectedFestival, setSelectedFestival] = useState<typeof festivals[0] | null>(null);

  return (
    <section id="festivals" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold mb-4">埃及的节日与庆典</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            埃及人的日历中充满了各种节日，每一个节日都与特定的食物和传统习俗相关.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {festivals.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-lg border border-gold/10 p-6 card-hover text-center cursor-pointer"
              onClick={() => setSelectedFestival(f)}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted border border-gold/20 flex items-center justify-center">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">{f.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{f.desc}</p>
              <button className="mt-4 text-sm text-primary hover:text-gold-glow transition-colors">
                了解更多 →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedFestival && (
        <DetailDialog
          open={!!selectedFestival}
          onOpenChange={(open) => !open && setSelectedFestival(null)}
          title={selectedFestival.name}
          description={selectedFestival.details}
          icon={<selectedFestival.icon className="w-8 h-8 text-primary" />}
        />
      )}
    </section>
  );
}
