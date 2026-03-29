'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Landmark } from "lucide-react";
import DetailDialog from "./DetailDialog";

type Location = {
  name: string;
  desc: string;
  type: "文化" | "旅游";
  details: string;
};

type CityData = {
  [city: string]: Location[];
};

const citiesData: CityData = {
  开罗: [
    { name: "埃及博物馆", desc: "中东最古老的考古博物馆，收藏了数千件讲述古埃及历史的珍贵文物。", type: "文化", details: "埃及博物馆位于开罗市中心的解放广场，收藏了超过12万件古埃及文物，包括图坦卡蒙黄金面具、木乃伊室和大量法老时期的雕像与浮雕。博物馆建于1902年，是了解古埃及文明的必访之地。建议参观时间：3-4小时。门票约200埃镑。" },
    { name: "汗哈利利市场", desc: "建于十四世纪的法蒂玛王朝时期，以传统小巷和手工艺品商店闻名。", type: "文化", details: "汗哈利利市场是开罗最古老、最繁华的传统市场，可追溯到1382年。这里有上千家商铺，出售传统手工艺品、香料、金银饰品、埃及棉制品和纪念品。市场内的费沙维咖啡馆已有200多年历史，是品尝埃及红茶和水烟的好去处。建议傍晚时分前往，体验最热闹的集市氛围。" },
    { name: "爱资哈尔清真寺", desc: "始建于公元970年，是世界上最古老的清真寺之一。", type: "文化", details: "爱资哈尔清真寺由法蒂玛王朝建造，不仅是一座宗教圣地，更是世界上最古老的伊斯兰大学之一。千年来一直是伊斯兰学术和文化的中心。建筑融合了法蒂玛、马穆鲁克和奥斯曼帝国的建筑风格，内部装饰精美绝伦。免费参观，需注意着装要求。" },
    { name: "萨拉丁城堡", desc: "十二世纪由萨拉丁建造的宏伟历史城堡。", type: "文化", details: "萨拉丁城堡建于1176年，坐落于穆卡塔姆山上，是开罗最具标志性的中世纪建筑之一。城堡内有多座清真寺（包括穆罕默德·阿里清真寺）、博物馆和花园。从城堡顶部可以俯瞰整个开罗城区和远处的金字塔。门票约180埃镑，建议参观时间2-3小时。" },
    { name: "穆伊兹街", desc: "开罗历史最悠久的街道之一，汇集了不同时期的伊斯兰建筑遗迹。", type: "文化", details: "穆伊兹街是开罗伊斯兰老城区的核心街道，全长约一公里，沿途分布着数十座清真寺、学校、宫殿和喷泉，涵盖了从法蒂玛王朝到奥斯曼帝国时期的建筑。夜间灯光照明下的街道尤为壮观，是摄影爱好者的天堂。" },
    { name: "科普特博物馆", desc: "位于老开罗，收藏了记录埃及基督教历史的珍贵文物。", type: "文化", details: "科普特博物馆坐落在开罗老城区的巴比伦城堡遗址内，收藏了世界上最丰富的科普特基督教艺术品，包括织物、图标、手稿和建筑构件。附近还有著名的悬空教堂和圣塞尔吉乌斯教堂（据说圣家族曾在此避难）。" },
    { name: "巴伦宫", desc: "1911年建造的独特历史宫殿，融合了印度和欧洲建筑风格。", type: "文化", details: "巴伦宫由比利时工业家巴伦·昂潘建造，融合了柬埔寨吴哥窟和印度教建筑元素。这座神秘的宫殿长期被废弃后，近年经过精心修复重新对公众开放。宫殿内部装饰华丽，花园景观独特，是开罗最具异国情调的建筑之一。" },
    { name: "阿比丁宫", desc: "建于1874年伊斯梅尔总督时期，是开罗最重要的历史宫殿之一。", type: "文化", details: "阿比丁宫曾是埃及王室的官方居所，宫殿融合了伊斯兰、欧洲和法国洛可可建筑风格。目前宫殿的一部分已改建为博物馆，展示皇家武器、勋章、礼品和历史文物。宫殿周围的花园也值得一游。" },
    { name: "埃及文明博物馆", desc: "位于福斯塔特，以现代方式展示从史前到科普特时期的珍贵文物。", type: "文化", details: "埃及文明博物馆是一座现代化博物馆，最著名的展品是法老王室木乃伊展厅，展出了22具王室木乃伊，包括拉美西斯二世和哈特谢普苏特女王。博物馆通过多媒体技术展示埃及从石器时代到现代的文明历程。门票约240埃镑。" },
    { name: "埃及大博物馆", desc: "位于吉萨金字塔附近，是世界上最大的埃及考古博物馆。", type: "旅游", details: "埃及大博物馆是世界上最大的考古博物馆，耗资超过10亿美元建造。馆内收藏超过10万件文物，包括图坦卡蒙陵墓中的全部5000多件随葬品。博物馆采用最先进的展示技术，从入口处就能看到金字塔的壮丽景色。" },
  ],
  吉萨: [
    { name: "金字塔群", desc: "世界七大奇迹之一，包括胡夫金字塔、哈夫拉金字塔和门卡拉金字塔。", type: "旅游", details: "吉萨金字塔群是古代世界七大奇迹中唯一保存至今的奇迹。胡夫金字塔（大金字塔）高约146米，由约230万块石灰岩砌成，建造时间约20年。哈夫拉金字塔和门卡拉金字塔虽然较小，但同样壮观。建议清晨或傍晚参观以避开人群和高温。可以骑骆驼或乘坐马车游览。" },
    { name: "狮身人面像", desc: "坐落在金字塔前方，象征力量与智慧的巨大雕像。", type: "旅游", details: "狮身人面像（斯芬克斯）高约20米，长约73米，是世界上最大的单体石雕。据信是在哈夫拉法老统治时期雕刻而成，用以守护金字塔。雕像面朝东方，每天迎接日出。千年来鼻子的缺失增添了它的神秘色彩。晚上有声光秀表演。" },
    { name: "萨卡拉阶梯金字塔", desc: "为左塞尔国王建造的阶梯形金字塔，是埃及最古老的石制建筑之一。", type: "旅游", details: "萨卡拉阶梯金字塔由建筑师伊姆霍特普设计，建于约公元前2650年，是人类历史上第一座大型石制建筑。六层阶梯式结构高约62米，是金字塔建筑演变的重要里程碑。萨卡拉遗址还包括其他多座金字塔和贵族墓葬，墓室内的壁画保存完好。" },
  ],
  亚历山大: [
    { name: "亚历山大图书馆", desc: "位于地中海沿岸的现代化图书馆，灵感源自古代亚历山大图书馆。", type: "文化", details: "新亚历山大图书馆于2002年落成，设计灵感源自古代世界最伟大的图书馆。建筑外墙刻有世界各国文字，可容纳800万册图书。馆内还设有天文馆、博物馆和会议中心。免费Wi-Fi，是学习和研究的理想场所。" },
    { name: "盖特贝城堡", desc: "十五世纪建于地中海海岸的海防堡垒。", type: "旅游", details: "盖特贝城堡建于1477年，坐落在古代世界七大奇迹之一——亚历山大灯塔的遗址上。城堡是地中海防御体系的重要组成部分，如今是亚历山大最受欢迎的旅游景点之一。从城堡可以欣赏到壮丽的地中海海景。" },
    { name: "蒙塔扎宫", desc: "位于地中海海岸的夏季行宫，融合欧洲和伊斯兰建筑风格。", type: "旅游", details: "蒙塔扎宫建于1892年，是埃及末代国王法鲁克的夏季行宫。宫殿融合了土耳其和佛罗伦萨建筑风格，周围环绕着360英亩的热带花园。花园免费开放，是亚历山大市民休闲的热门去处。海滨区域可以游泳和垂钓。" },
    { name: "皇家珠宝博物馆", desc: "收藏了埃及王室家族的珍贵珠宝和宝石。", type: "文化", details: "皇家珠宝博物馆位于一座华丽的意大利风格别墅中，展示了穆罕默德·阿里王朝历代统治者的珠宝藏品。包括钻石王冠、翡翠项链、红宝石胸针等珍贵饰品，以及精致的金银器皿和手表。" },
    { name: "罗马剧场", desc: "位于科姆迪卡，是罗马时期的古迹。", type: "文化", details: "科姆迪卡罗马剧场是埃及唯一保存完好的罗马剧场遗址，建于公元2世纪。剧场可容纳约600名观众，至今仍偶尔用于文化演出。考古遗址还包括罗马浴场遗迹和马赛克地板。" },
  ],
  卢克索: [
    { name: "卡纳克神庙", desc: "古埃及最伟大的宗教庙宇之一，以巨大的柱廊和精美的壁画闻名。", type: "文化", details: "卡纳克神庙群是世界上最大的古代宗教建筑群，占地超过200英亩。大柱殿拥有134根巨大的石柱，每根高达21米。神庙的建造历经近2000年，多位法老都在此留下了自己的印记。夜间的声光秀生动再现了神庙的辉煌历史。" },
    { name: "帝王谷", desc: "法老王陵墓群所在地，包括著名的图坦卡蒙墓。", type: "旅游", details: "帝王谷位于卢克索西岸的群山之中，是新王国时期法老的皇家陵墓区。目前已发现63座墓葬，最著名的是图坦卡蒙墓（KV62），1922年由霍华德·卡特发现时几乎完好无损。墓室壁画色彩鲜艳，描绘了法老前往来世的旅程。标准门票可参观3座墓穴。" },
    { name: "哈特谢普苏特神庙", desc: "为纪念哈特谢普苏特女王而建的阶梯式神庙。", type: "文化", details: "哈特谢普苏特神庙是古埃及最优雅的建筑之一，三层阶梯式结构依山而建，与周围的悬崖完美融合。神庙壁画记录了女王的辉煌成就，包括远征蓬特国（今索马里）的贸易远航。神庙建筑师是女王的亲信大臣塞涅穆特。" },
    { name: "卢克索神庙", desc: "位于尼罗河东岸，以巨大的柱廊和拉美西斯二世的巨型雕像闻名。", type: "文化", details: "卢克索神庙始建于约公元前1400年，由阿蒙霍特普三世开始建造，拉美西斯二世扩建。入口处有两尊拉美西斯二世坐像和一座方尖碑（另一座现立于巴黎协和广场）。夜间灯光照明下的神庙格外壮观，沿尼罗河畔的人面狮身大道连接到卡纳克神庙。" },
  ],
  阿斯旺: [
    { name: "菲莱神庙", desc: "位于尼罗河中的菲莱岛上，是供奉伊西斯女神的古代神庙。", type: "文化", details: "菲莱神庙原位于菲莱岛，因阿斯旺大坝建设而被联合国教科文组织整体搬迁至阿吉勒基亚岛。神庙供奉伊西斯女神，建筑精美，壁画保存完好。乘船前往岛屿本身就是一次美妙的尼罗河体验。夜间有声光秀表演。" },
    { name: "阿布辛贝神庙", desc: "位于阿斯旺南部，以岩石中雕刻的巨大雕像闻名。", type: "旅游", details: "阿布辛贝神庙由拉美西斯二世建造，入口处四尊高达20米的法老坐像气势恢宏。每年2月22日和10月22日，阳光会穿过60米长的通道照亮内殿的神像。1960年代，神庙因阿斯旺大坝建设被整体搬迁，是人类历史上最伟大的工程壮举之一。距阿斯旺约3小时车程。" },
    { name: "埃德富神庙", desc: "埃及最大的古代神庙之一，供奉荷鲁斯神。", type: "旅游", details: "埃德富神庙是托勒密时期建造的最大、保存最完好的古代神庙。神庙高约36米，供奉鹰头神荷鲁斯。墙壁上的浮雕详细描绘了荷鲁斯与赛特的神话之战。神庙前有两尊黑色花岗岩鹰神雕像。通常作为尼罗河游轮的重要停靠站。" },
  ],
};

const cities = Object.keys(citiesData);

export default function CultureSection() {
  const [activeCity, setActiveCity] = useState(cities[0]);
  const [activeTab, setActiveTab] = useState<"文化" | "旅游">("文化");
  const [selectedLoc, setSelectedLoc] = useState<Location | null>(null);

  const locations = citiesData[activeCity].filter((l) => l.type === activeTab);

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
              onClick={() => { setActiveCity(city); setActiveTab("文化"); }}
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

        {/* Sub tabs */}
        <div className="flex gap-2 justify-center mb-10">
          {(["文化", "旅游"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md text-sm transition-all ${
                activeTab === tab
                  ? "border border-primary text-primary"
                  : "border border-gold/10 text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab === "文化" ? "文化景点" : "旅游景点"}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCity + activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {locations.length === 0 ? (
              <p className="col-span-full text-center text-muted-foreground py-12">暂无{activeTab}景点数据</p>
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
                  <div className="aspect-4/3 bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-t from-card/90 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MapPin className="w-10 h-10 text-primary/30" />
                    </div>
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="font-serif text-lg font-bold text-foreground">{loc.name}</h3>
                    </div>
                  </div>
                  <div className="p-5">
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
          subtitle={`${activeCity} · ${selectedLoc.type === "文化" ? "文化景点" : "旅游景点"}`}
          description={selectedLoc.details}
          icon={<Landmark className="w-8 h-8 text-primary" />}
        />
      )}
    </section>
  );
}
