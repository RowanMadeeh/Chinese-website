'use client'
import { motion } from "framer-motion";
import { UtensilsCrossed } from "lucide-react";

import foodKoshari from "@/app/assets/foodKoshari.jpg";
import foodFul from "@/app/assets/foodFul.jpg";
import foodMahshi from "@/app/assets/foodMahshi.jpg";
import foodMolokhia from "@/app/assets/foodMolokhia.jpg";
import foodPigeon from "@/app/assets/foodPigeon.jpg";
import foodTagine from "@/app/assets/foodTagine.jpg";
import foodBasbousa from "@/app/assets/foodBasbousa.jpg";
import foodKunafa from "@/app/assets/foodKunafa.jpg";
import foodMusaka from "@/app/assets/foodMusaka.jpg";
import foodLentil from "@/app/assets/foodLentil.jpg";
import foodGrilled from "@/app/assets/foodGrilled.jpg";
import foodFesikh from "@/app/assets/foodFesikh.jpg";
import foodAli from "@/app/assets/foodAli.jpg";
import foodKataev from "@/app/assets/foodKataev.jpg";
import foodZalabia from "@/app/assets/foodZalabia.jpg";
import foodkahk from "@/app/assets/foodKahk.jpg";

const dishes = [
  { name: "库什里", nameEn: "Koshari", desc: "由米饭、通心粉、黄扁豆、黑扁豆混合而成，配以辣番茄酱、蒜、醋和炸洋葱。", img: foodKoshari},
  { name: "蚕豆与塔米亚", nameEn: "Ful & Taameya", desc: "煮蚕豆配芝麻酱、油和柠檬，再搭配由蚕豆、欧芹和香菜制成的酥脆炸饼。", img: foodFul},
  { name: "酿菜", nameEn: "Mahshi", desc: "掏空的蔬菜（葡萄叶、卷心菜、辣椒、西葫芦、茄子）中填入米饭、番茄和欧芹，在高汤中烹制。", img: foodMahshi},
  { name: "马鲁希亚", nameEn: "Molokhia", desc: "细碎的绿叶蔬菜与肉汤或鸡汤同煮，加入蒜末和香菜。", img: foodMolokhia},
  { name: "酿乳鸽", nameEn: "Stuffed Pigeon", desc: "小乳鸽填入米饭、肝、椰枣和碎肉，在烤箱或明火中烹制。", img: foodPigeon},
  { name: "砂锅蔬菜", nameEn: "Tagine", desc: "土豆、四季豆、秋葵等蔬菜与番茄酱、蒜和洋葱慢炖于砂锅中。", img: foodTagine},
  { name: "穆萨卡", nameEn: "Musaka", desc: "油炸茄子片与蒜味番茄酱分层放入烤盘，在烤箱中烘烤。", img: foodMusaka},
  { name: "扁豆汤", nameEn: "Lentil Soup", desc: "黄扁豆与胡萝卜、土豆一起煮，加入孜然调味，口感浓稠。", img: foodLentil},
  { name: "烤肉串和烤肉饼", nameEn: "Grilled meat skewers and patties", desc: "切块的羊肉串烧（烤肉），或拌有洋葱和欧芹的碎肉制成圆柱形烤制（烤肉饼）。", img: foodGrilled},
  { name: "菲西赫和熏鲱鱼", nameEn: "Fesikh and herring", desc: "发酵腌制数周的咸鲻鱼，或熏制咸鲱鱼，搭配青葱和柠檬食用。", img: foodFesikh},
];

const sweets = [
  { name: "巴斯布萨", nameEn: "Basbousa", desc: "淡粗麦粉蛋糕，配糖浆和坚果。", img: foodBasbousa},
  { name: "库纳法", nameEn: "Kunafa", desc: "酥脆面丝夹奶油或坚果，浇糖浆。", img: foodKunafa},
  { name: "乌姆·阿里", nameEn: "Umm Ali", desc: "烤面包配牛奶和坚果。", img: foodAli},
  { name: "卡塔耶夫", nameEn: "Kataev", desc: "夹坚果或奶油的面饼，在斋月油炸后淋糖浆。", img: foodKataev},
  { name: "泽拉比亚", nameEn: "Zalabia", desc: " 油炸面团，裹糖浆。", img: foodZalabia},
  { name: "节日饼干", nameEn: "Holiday cookies", desc: " 夹坚果或椰枣的饼干，专为开斋节制作。", img: foodkahk},
];

export default function FoodSection() {
  return (
    <section id="food" className="section-padding bg-navy-light">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <UtensilsCrossed className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold mb-4">埃及美食</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            最著名的埃及美食
          </p>
        </motion.div>

        <h3 className="font-serif text-2xl font-bold text-gradient-gold mb-6 text-center">主食与咸食</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.nameEn}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-lg border border-gold/10 overflow-hidden card-hover group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish.img.src}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg font-bold text-foreground mb-0.5">{dish.name}</h3>
                <p className="text-xs text-sand mb-2">{dish.nameEn}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{dish.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className="font-serif text-2xl font-bold text-gradient-gold mb-6 text-center">甜点</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sweets.map((dish, i) => (
            <motion.div
              key={dish.nameEn}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-lg border border-gold/10 overflow-hidden card-hover group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish.img.src}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg font-bold text-foreground mb-0.5">{dish.name}</h3>
                <p className="text-xs text-sand mb-2">{dish.nameEn}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{dish.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
