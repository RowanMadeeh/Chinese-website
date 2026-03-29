'use client'
import { motion } from "framer-motion";
import { Moon, Sun, Heart, Flower2 } from "lucide-react";
import { useState } from "react";
import DetailDialog from "./DetailDialog";

const festivals = [
  {
    name: "斋月",
    icon: Moon,
    desc: "伊斯兰教最重要的月份，穆斯林从黎明到日落禁食。每晚在清真寺进行特别的泰拉威赫祈祷。",
    details: "斋月是伊斯兰历的第九个月，是穆斯林最重要的宗教月份。从黎明到日落期间禁食、禁饮。每天日落后的开斋饭（伊夫塔尔）是家庭和社区聚会的重要时刻。特色美食包括：椰枣（传统先食用）、三角饺（Sambousek）、卡塔伊夫甜饼、干果饮品（卡马尔丁）和甘草汁。开罗的街道在斋月期间会挂满彩色灯笼（法努斯），气氛温馨而热闹。清真寺每晚举行特别的泰拉威赫祈祷。",
  },
  {
    name: "开斋节",
    icon: Sun,
    desc: "斋月结束后的庆祝节日。人们穿新衣、走亲访友、参加节日祈祷。",
    details: "开斋节是斋月结束后的重要庆祝节日，为期三天。清晨人们穿上新衣前往清真寺参加节日祈祷，之后走亲访友、互赠礼物。孩子们收到节日红包（伊迪亚）。特色甜点是开斋节饼干（Kahk），这是一种黄油酥饼，内馅有枣泥、坚果或土耳其软糖，表面撒糖粉。每个家庭都会提前几天开始制作大量饼干，也会分送给邻居和朋友。",
  },
  {
    name: "宰牲节",
    icon: Heart,
    desc: "以宰牲为标志的重要节日，将肉分送给穷人。",
    details: "宰牲节是伊斯兰教最重要的节日之一，纪念先知易卜拉欣的虔诚信仰。节日期间，家庭会宰杀一只羊或牛，将肉分为三份：一份留给家人，一份送给亲友，一份施舍给穷人。特色美食包括烤羊肉、肉丸（Kofta）、烤串（Kebab）和法塔（Fatta，一种由米饭、面包和肉汤层叠而成的菜肴）。节日持续四天，是家庭团聚的重要时刻。",
  },
  {
    name: "春祭节",
    icon: Flower2,
    desc: "所有埃及人共同庆祝的法老时期春天节日。",
    details: "春祭节（沙姆·恩·纳西姆）是埃及最古老的节日之一，可追溯到4500年前的法老时代，庆祝春天的到来。每年在科普特复活节后的第二天庆祝，是全体埃及人（无论信仰）共同参与的节日。人们外出踏青、野餐，品尝传统美食：腌鱼（Fesikh，经过特殊发酵的灰鲻鱼）、烟熏鲱鱼（Renga）、绿洋葱和彩色鸡蛋。彩蛋象征着新生命和丰收。",
  },
];

export default function FestivalsSection() {
  const [selectedFestival, setSelectedFestival] = useState<typeof festivals[0] | null>(null);

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold mb-4">传统文化与节日</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            了解埃及丰富的传统节日和独特的文化习俗
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
