'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Landmark } from "lucide-react";
import DetailDialog from "./DetailDialog";

type Location = {
  name: string;
  desc: string;
  details: string;
};

type CityData = {
  [city: string]: Location[];
};

const citiesData: CityData = {
  开罗: [
    {
      name: "埃及博物馆",
      desc: "位于解放广场的埃及博物馆是中东地区最古老的考古博物馆。",
      details:
        "位于解放广场的埃及博物馆是中东地区最古老的考古博物馆，于1902年正式开放，馆内收藏了成千上万件文物，讲述着古埃及的悠久历史。该博物馆被认为是世界上最重要的博物馆之一，因其珍藏的独特文物涵盖了从史前时期直到罗马时期的各个历史阶段。",
    },
    {
      name: "宗教综合区",
      desc: "位于埃及老城，汇集三大一神宗教遗迹的历史区域。",
      details:
        "位于埃及老城的宗教综合区是一片历史悠久的区域，汇集了代表三大一神宗教的遗迹：伊斯兰教、基督教和犹太教。该区域包括阿姆鲁·本·阿斯清真寺、悬空教堂以及本·埃兹拉犹太会堂，充分体现了埃及历史上宗教宽容与共存的精神。",
    },
    {
      name: "穆伊兹大街",
      desc: "开罗最古老的历史街道之一。",
      details:
        "穆伊兹丁·法蒂米大街是开罗最古老的历史街道之一，街道两旁分布着来自不同时代的伊斯兰建筑和历史遗迹。",
    },
    {
      name: "哈利利汗市场",
      desc: "法蒂米王朝时期的传统历史集市。",
      details:
        "哈利利汗是位于法蒂米王朝老城中心的一座著名传统历史集市，其历史可追溯至14世纪。市场以古老的小巷和传统商铺而闻名，出售各种手工艺品和传统纪念品。",
    },
    {
      name: "科普特博物馆",
      desc: "展示科普特艺术的重要博物馆。",
      details:
        "科普特博物馆位于埃及老城，是专门展示科普特艺术的重要博物馆之一。馆内收藏了大量珍贵的圣像、手稿和考古文物，真实记录了基督教在埃及的发展历史。",
    },
    {
      name: "巴龙宫殿",
      desc: "融合印度和欧洲风格的独特历史建筑。",
      details:
        "巴龙宫殿是一座独具特色的历史建筑，位于新开罗地区，由巴龙·恩潘于1911年修建，其设计灵感融合了印度和欧洲建筑风格。该宫殿被认为是开罗最著名的近代历史地标之一，以其独特的装饰和神秘的历史而闻名。",
    },
    {
      name: "阿卜丁宫",
      desc: "开罗最重要的历史宫殿之一。",
      details:
        "阿卜丁宫是开罗最重要的历史宫殿之一，于1874年在赫迪夫伊斯梅尔统治时期建成。该宫殿曾是埃及的统治中心，如今内部设有多座博物馆和展厅，展示埃及王室家族的历史。",
    },
    {
      name: "埃及文明博物馆",
      desc: "展示埃及文明发展的重要文化中心。",
      details:
        "埃及国家文明博物馆位于开罗富斯塔特地区，是展示埃及文明发展的重要文化中心。博物馆通过现代化的展陈方式，呈现从史前时期到科普特时期的埃及历史，其中包括著名的“法老木乃伊迁移仪式”，多位古埃及国王的木乃伊被安置于此。",
    },
    {
      name: "萨拉丁城堡",
      desc: "由萨拉丁修建的重要历史要塞。",
      details:
        "萨拉丁·阿尤比城堡是一座规模宏大的历史要塞，位于开罗，由苏丹萨拉丁于12世纪修建，用于保护城市安全。城堡内包含多座清真寺、博物馆和防御城墙，是埃及最重要的历史与考古遗址之一。其中最著名的是穆罕默德·阿里清真寺，该清真寺建于19世纪，采用奥斯曼建筑风格，以其高耸的宣礼塔和巨大的穹顶而闻名，是埃及最具代表性的伊斯兰历史建筑之一。穆罕默德·阿里宫殿也位于萨拉丁城堡内，又被称为“穹顶宫”，建于19世纪，采用奥斯曼风格建筑，以其奢华的收藏和精美装饰的大厅而著称，是埃及重要的历史文化遗产。",
    },
    {
      name: "爱资哈尔清真寺",
      desc: "开罗最古老的清真寺之一。",
      details:
        "爱资哈尔清真寺是开罗最古老的清真寺之一，始建于公元970年，建于法蒂米王朝时期，以其作为宗教和学术中心而闻名。除作为礼拜场所外，清真寺内还设有爱资哈尔大学，该大学是世界上历史最悠久的伊斯兰教育机构之一。",
    },
    {
      name: "圣西蒙修道院",
      desc: "刻于山体中的大型修道院群。",
      details:
        "圣西蒙修道院是一座规模巨大的科普特基督教修道院群，完全凿刻于穆卡塔姆山体之中，被视为“垃圾城”地区的精神象征。",
    },
  ],

  吉萨: [
    {
      name: "大埃及博物馆",
      desc: "世界上规模最大的埃及文物博物馆。",
      details:
        "大埃及博物馆位于吉萨金字塔附近，是世界上规模最大的埃及文物博物馆。馆内展出数千件珍贵文物，包括图坦卡蒙国王的完整陪葬品，并以现代化设计方式系统呈现埃及各个历史时期。",
    },
    {
      name: "金字塔与狮身人面像",
      desc: "古代世界七大奇迹之一。",
      details:
        "金字塔：为法老建造的巨大陵墓，其中最著名的是胡夫、哈夫拉和孟卡拉金字塔，被列为古代世界七大奇迹之一。狮身人面像：一座人头狮身的巨大雕像，被认为是吉萨金字塔群的守护者，象征力量与智慧，位于金字塔正前方。",
    },
    {
      name: "萨卡拉地区",
      desc: "古王国时期的重要考古遗址。",
      details:
        "萨卡拉是古王国时期的重要考古遗址，包含大量墓葬和神庙，是法老和贵族的主要墓地之一。这里坐落着阶梯金字塔，这是古埃及历史上第一座金字塔，为第三王朝法老左塞尔所建，其结构由层层递进的台阶组成。",
    },
  ],

  亚历山大: [
    {
      name: "亚历山大图书馆",
      desc: "现代化世界级文化中心。",
      details:
        "亚历山大图书馆是一座现代化图书馆，灵感源自古代亚历山大图书馆，位于地中海沿岸的亚历山大市。该馆是世界级文化与科研中心，收藏数百万册书籍和手稿，并设有研究中心、文化活动厅和专业展览馆。",
    },
    {
      name: "凯特贝城堡",
      desc: "15世纪建造的海防要塞。",
      details:
        "凯特贝城堡位于亚历山大地中海沿岸，是一座建于15世纪的海防要塞。城堡用于保卫城市和港口，以其坚固的城墙和瞭望塔而闻名，是亚历山大的重要历史与旅游地标。",
    },
    {
      name: "皇家珠宝博物馆",
      desc: "收藏埃及王室珠宝。",
      details:
        "亚历山大皇家珠宝博物馆位于贾迈勒·帕夏宫内，收藏了大量曾属于埃及王室的珠宝和宝石。",
    },
    {
      name: "蒙塔扎宫",
      desc: "地中海沿岸的皇家宫殿。",
      details:
        "蒙塔扎宫位于亚历山大地中海沿岸，曾是国王福阿德一世及其家族的夏宫。宫殿及周围花园以其奢华设计和融合欧洲与伊斯兰风格的建筑而著称，是当地重要的文化遗产。",
    },
    {
      name: "罗马剧场",
      desc: "罗马时期遗迹。",
      details:
        "罗马剧场位于科姆·迪卡地区，建于罗马时期，现今仍用于部分艺术和文化演出。",
    },
  ],

  卢克索: [
    {
      name: "卡纳克神庙",
      desc: "古埃及最宏伟的宗教建筑群之一。",
      details:
        "卡纳克神庙是古埃及最宏伟的宗教建筑群之一，位于尼罗河东岸。该神庙历经数百年建造，供奉阿蒙·拉神，以巨大的石柱、宽阔的大厅和精美浮雕而闻名。",
    },
    {
      name: "哈特谢普苏特神庙",
      desc: "纪念女王的阶梯式神庙。",
      details:
        "哈特谢普苏特神庙，又称代尔巴哈里神庙，位于尼罗河西岸。建于公元前15世纪，用于纪念女王哈特谢普苏特，其阶梯式设计和壁画生动记录了女王的功绩。",
    },
    {
      name: "卢克索神庙",
      desc: "供奉阿蒙神的宏伟神庙。",
      details:
        "卢克索神庙位于尼罗河东岸，供奉阿蒙·拉神。神庙以巨大的石柱、精美的大门和拉美西斯二世的巨型雕像而闻名。",
    },
    {
      name: "帝王谷",
      desc: "法老皇家陵墓群。",
      details:
        "帝王谷是位于卢克索西岸山谷中的法老皇家陵墓群，其中包括著名的图坦卡蒙陵墓。",
    },
  ],

  阿斯旺: [
    {
      name: "菲莱神庙",
      desc: "供奉伊西斯女神的神庙。",
      details:
        "菲莱神庙供奉伊西斯女神，位于尼罗河中的菲莱岛附近。神庙以其优美的建筑设计和精致的浮雕而闻名。",
    },
    {
      name: "阿布辛贝神庙",
      desc: "岩石雕刻的宏伟神庙。",
      details:
        "阿布辛贝神庙位于阿斯旺以南，是最著名的古埃及神庙之一。建于拉美西斯二世时期，用于纪念其军事胜利并供奉拉神。神庙以巨大的岩石雕像和精美壁画著称，后因阿斯旺高坝的建设而整体迁移以避免被淹没。",
    },
    {
      name: "埃德富神庙",
      desc: "保存最完整的古埃及神庙之一。",
      details:
        "埃德富（荷鲁斯）神庙是古埃及保存最完整、规模最大的神庙之一，供奉鹰神荷鲁斯，以精美浮雕和宏大规模著称。",
    },
  ],
};

const cities = Object.keys(citiesData);

export default function CultureSection() {
  const [activeCity, setActiveCity] = useState(cities[0]);
  const [selectedLoc, setSelectedLoc] = useState<Location | null>(null);

  const locations = citiesData[activeCity];

  return (
    <section id="culture" className="section-padding bg-navy-light">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Landmark className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold mb-4">文化与景点</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            从开罗到阿斯旺，探索埃及数千年文明留下的辉煌遗产
          </p>
        </motion.div>

        {/* City tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide justify-center flex-wrap">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => { setActiveCity(city); }}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                activeCity === city
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCity + "旅游"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {locations.length === 0 ? (
              <p className="col-span-full text-center text-muted-foreground py-12">暂无旅游景点数据</p>
            ) : (
              locations.map((loc, i) => (
                <motion.div
                  key={loc.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card rounded-lg border border-gold/10 overflow-hidden card-hover group cursor-pointer"
                  onClick={() => setSelectedLoc(loc)}
                >
                  <div className="p-5">
                    <div className="w-16 h-16 rounded-full border border-gold/30 bg-navy-light/60 flex items-center justify-center mb-4 mx-auto">
                      <MapPin className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">{loc.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{loc.desc}</p>
                    <button className="text-sm text-primary hover:text-gold-glow transition-colors">
                      查看详情 →
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {selectedLoc && (
        <DetailDialog
          open={!!selectedLoc}
          onOpenChange={(open) => !open && setSelectedLoc(null)}
          title={selectedLoc.name}
          subtitle={`${activeCity} · 旅游景点`}
          description={selectedLoc.details}
          icon={<Landmark className="w-8 h-8 text-primary" />}
        />
      )}
    </section>
  );
}
