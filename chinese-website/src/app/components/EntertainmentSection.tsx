'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

type City = "开罗和吉萨" | "亚历山大" | "法尤姆" | "赫尔格达" | "沙姆沙伊赫" | "马特鲁港" | "锡瓦" | "南西奈" | "达哈卜" | "卢克索" | "阿斯旺";

const cities: City[] = ["开罗和吉萨", "亚历山大", "法尤姆", "赫尔格达", "沙姆沙伊赫", "马特鲁港", "锡瓦", "南西奈", "达哈卜", "卢克索", "阿斯旺"];

const placesByCity: Record<City, string[]> = {
  开罗和吉萨: [
    "开罗塔（扎马雷克",
    "埃及人民步道（扎马雷克",
    "开罗歌剧院（扎马雷克",
    "新歌剧院（新行政首都)",
    "菲沙维咖啡馆（汗·哈利利)",
    "国际保龄球中心（纳斯尔城)",
    "扎耶德公园（谢赫扎耶德)",
    "家庭公园 Family Park（新开罗·拉哈布)",
    "游乐园 El Malahy（新开罗)",
    "梦幻公园 Dream Park（十月城)",
    "埃及购物中心（十月城)",
    "阿拉伯购物中心（十月城)",
    "城市之星购物中心（纳斯尔城)",
    "城市中心阿尔玛扎购物中心（谢拉顿)",
    "开罗节日城（第五聚居区)"
  ],
  亚历山大: [
    "斯坦利桥（亚历山大海滨大道)",
    "格里姆湾（圣斯特凡诺)",
    "蒙塔扎花园（蒙塔扎)",
    "马阿穆拉海滩（马阿穆拉)",
  ],
  法尤姆: [
    "沙漠滑沙（瓦迪·赖扬)",
    "瀑布（瓦迪·赖扬)",
    "卡伦湖",
    "鲸鱼谷"
  ],
  赫尔格达: [
    "赫尔格达群岛",
    "潜水并探索珊瑚礁"
  ],
  沙姆沙伊赫:[
    "法尔沙咖啡馆（沙姆沙伊赫高地)",
    "纳马湾",
    "索霍广场",
    "好莱坞沙姆沙伊赫（纳马湾)",
    "拉斯穆罕默德自然保护区"
  ],
  马特鲁港:[
    "阿吉巴海滩",
    "爱情海滩",
    "白色海滩",
    "亚历山大街"
  ],
  锡瓦:[
    "锡瓦绿洲",
    "克利奥帕特拉硫磺泉"
  ],
  南西奈:[
    "圣凯瑟琳",
    "攀登摩西山",
    "努韦巴"
  ],
  达哈卜:[
    "蓝洞",
    "三池",
    "蓝湖"
  ],
  卢克索:[
    "热气球之旅",
    "乘坐尼罗河小帆船欣赏风景",
    "声光表演（卡尔纳克神庙)"
  ],
  阿斯旺:[
    "努比亚村庄",
    "植物岛",
    "阿斯旺大坝"
  ],
};

export default function EntertainmentSection() {
  const [activeCity, setActiveCity] = useState<City>("开罗和吉萨");

  return (
    <section id="entertainment" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold mb-4">娱乐场所</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            选择城市，查看当地娱乐地点
          </p>
        </motion.div>

        {/* City tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`px-5 py-3 rounded-lg text-sm font-medium transition-all ${
                activeCity === city
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-gold/10 text-muted-foreground hover:border-primary/30"
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCity}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {placesByCity[activeCity].map((place, i) => (
              <motion.div
                key={place}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-lg border border-gold/10 p-6 card-hover"
              >
                <h3 className="font-serif text-lg font-bold text-foreground">{place}</h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
