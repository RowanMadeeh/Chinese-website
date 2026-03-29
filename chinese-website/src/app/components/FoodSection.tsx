'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed } from "lucide-react";

import foodKoshari from "@/app/assets/food-koshari.jpg";
import foodFul from "@/app/assets/food-ful.jpg";
import foodMahshi from "@/app/assets/food-mahshi.jpg";
import foodMolokhia from "@/app/assets/food-molokhia.jpg";
import foodPigeon from "@/app/assets/food-pigeon.jpg";
import foodTagine from "@/app/assets/food-tagine.jpg";
import foodBasbousa from "@/app/assets/food-basbousa.jpg";
import foodKunafa from "@/app/assets/food-kunafa.jpg";
import DetailDialog from "./DetailDialog";


const dishes = [
  { name: "库沙里", nameEn: "Koshari", desc: "埃及国民美食，由米饭、意面、扁豆混合，配以番茄酱、醋和炸洋葱。", img: foodKoshari, details: "库沙里是埃及最具代表性的国民美食，起源于19世纪。将米饭、意面、扁豆和鹰嘴豆混合在一起，浇上辣番茄酱、蒜醋和炸洋葱。这道菜价格低廉、营养丰富，在埃及街头随处可见专门的库沙里店。一份通常约15-25埃镑（约人民币3-5元），是体验埃及美食文化的最佳起点。" },
  { name: "富尔和塔米亚", nameEn: "Ful & Taameya", desc: "蚕豆泥配柠檬和芝麻酱，搭配炸豆丸子（埃及版沙拉三明治）。", img: foodFul, details: "富尔（蚕豆泥）是埃及最常见的早餐食品，将蚕豆慢炖至软烂，加入橄榄油、柠檬汁、孜然和芝麻酱调味。塔米亚是埃及版的沙拉三明治，与中东其他地区用鹰嘴豆不同，埃及使用蚕豆制作，外酥内嫩。两者通常搭配埃及大饼（阿伊什巴拉迪）一起食用。" },
  { name: "马哈希", nameEn: "Mahshi", desc: "用米饭、欧芹和番茄混合物填充的蔬菜，在肉汤中炖煮。", img: foodMahshi, details: "马哈希是埃及家庭聚餐中最重要的菜肴之一。将米饭、切碎的欧芹、莳萝和番茄混合成馅料，塞入茄子、西葫芦、青椒、卷心菜叶和葡萄叶中，然后在鸡肉或牛肉汤中慢炖。制作过程耗时但充满乐趣，常在节日和家庭聚会时准备。每个埃及家庭都有自己独特的配方。" },
  { name: "莫洛希亚", nameEn: "Molokhia", desc: "用切碎的锦葵叶与鸡肉或羊肉一起烹制的浓汤，配以蒜和香菜调味。", img: foodMolokhia, details: "莫洛希亚是一种用锦葵叶制成的绿色浓汤，是埃及最古老的菜肴之一，可追溯到法老时代。将新鲜或干燥的锦葵叶切碎，与蒜蓉和香菜一起煮成浓稠的汤汁，配以鸡肉、兔肉或羊肉，搭配米饭和埃及大饼食用。口感独特，初次品尝可能需要适应。" },
  { name: "烤鸽子", nameEn: "Stuffed Pigeon", desc: "小鸽子里塞满米饭、碎肉和肝脏的混合物，在烤箱或火上烤制。", img: foodPigeon, details: "烤鸽子是埃及最具特色的传统菜肴之一。埃及人专门饲养食用鸽子，将其塞满由小麦碎（弗里克）、碎肉和肝脏混合的馅料，然后在烤箱中烤至金黄酥脆。这道菜通常在特殊场合和节日宴会上供应，被认为是埃及美食的精华之一。在开罗和上埃及的传统餐厅中最为常见。" },
  { name: "埃及砂锅", nameEn: "Tagine", desc: "在传统陶器中慢炖的肉类和蔬菜，配以香料和番茄酱汁。", img: foodTagine, details: "埃及砂锅（塔吉锅）使用传统陶器在低温下慢炖肉类和蔬菜。与北非的塔吉锅不同，埃及版本更注重浓郁的番茄酱汁和本地香料的搭配。常见的有牛肉砂锅、鸡肉砂锅和蔬菜砂锅。在传统的埃及餐厅中，砂锅直接在陶器中上桌，保持食物的热度和风味。" },
  { name: "巴斯布萨", nameEn: "Basbousa", desc: "粗面粉甜糕，浸泡在糖浆中，表面装饰杏仁，香甜松软。", img: foodBasbousa, details: "巴斯布萨是埃及最受欢迎的传统甜点之一。用粗面粉（塞莫里纳）、酸奶和椰子制成面糊，烤至金黄后浇上热糖浆。表面通常装饰整颗杏仁。口感湿润松软，甜度适中。在斋月和各种节日期间尤为常见。每家埃及甜品店都有自己独特的配方，可以搭配埃及红茶一起享用。" },
  { name: "库纳法", nameEn: "Kunafa", desc: "酥脆的面丝包裹奶酪或奶油馅料，浇上甜糖浆，是斋月最受欢迎的甜点。", img: foodKunafa, details: "库纳法是埃及最奢华的传统甜点，尤其在斋月期间最为流行。极细的面丝（卡达伊夫）铺成底层，中间放入奶酪、奶油或坚果馅料，再覆上一层面丝，用黄油烤至金黄酥脆，最后浇上甜糖浆。上桌时热腾腾的，外酥内软，奶香四溢。在开罗的老城区甜品店可以品尝到最正宗的库纳法。" },
];

export default function FoodSection() {
  const [selectedDish, setSelectedDish] = useState<typeof dishes[0] | null>(null);

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
            品尝千年文明孕育的独特风味，从街头小吃到传统盛宴
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.nameEn}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-lg border border-gold/10 overflow-hidden card-hover group cursor-pointer"
              onClick={() => setSelectedDish(dish)}
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
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">{dish.desc}</p>
                <button className="text-sm text-primary hover:text-gold-glow transition-colors">
                  了解更多 →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedDish && (
        <DetailDialog
          open={!!selectedDish}
          onOpenChange={(open) => !open && setSelectedDish(null)}
          title={selectedDish.name}
          subtitle={selectedDish.nameEn}
          description={selectedDish.details}
          image={selectedDish.img.src}
        />
      )}
    </section>
  );
}
