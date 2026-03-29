'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Music, Waves, Mountain, Sun } from "lucide-react";
import DetailDialog from "./DetailDialog";

type Category = "开罗娱乐" | "海滩度假" | "自然探险" | "沙漠体验";

const categories: { label: Category; icon: typeof Sparkles }[] = [
  { label: "开罗娱乐", icon: Music },
  { label: "海滩度假", icon: Waves },
  { label: "自然探险", icon: Mountain },
  { label: "沙漠体验", icon: Sun },
];

type Activity = { name: string; desc: string; details: string };

const activities: Record<Category, Activity[]> = {
  开罗娱乐: [
    { name: "开罗塔", desc: "扎马雷克区的标志性建筑，俯瞰开罗全城和尼罗河美景", details: "开罗塔高187米，建于1956-1961年，是开罗天际线的标志。塔顶设有旋转餐厅和观景台，可以360度俯瞰整个开罗城区、尼罗河和远处的金字塔。建议日落时分前往，欣赏壮丽的城市夕阳景色。门票约200埃镑。" },
    { name: "尼罗河步行长廊", desc: "扎马雷克区沿尼罗河的休闲步行道，夜晚灯光璀璨", details: "尼罗河畔的步行长廊是开罗市民最喜爱的休闲场所。沿途有咖啡馆、餐厅和精品店。傍晚时分，河畔灯光亮起，可以乘坐传统的尼罗河帆船（费卢卡），欣赏两岸的城市灯光。全年开放，免费入场。" },
    { name: "歌剧院", desc: "开罗歌剧院提供世界级的音乐和艺术表演", details: "开罗歌剧院位于扎马雷克区的文化中心，定期举办交响乐、芭蕾舞、歌剧和阿拉伯传统音乐演出。建筑由日本政府援建，融合了伊斯兰和现代建筑风格。演出票价从50到500埃镑不等，建议提前在线预订。" },
    { name: "开罗节日城购物中心", desc: "大型综合商业中心，集购物、餐饮和娱乐于一体", details: "开罗节日城是埃及最大的购物中心之一，拥有超过300家国际和本地品牌商铺、50多家餐厅、电影院和娱乐设施。还有室外音乐喷泉和人工湖。营业时间：每天10:00-00:00。" },
    { name: "汗菲沙维咖啡馆", desc: "汗哈利利市场内的百年老店，体验传统埃及茶文化", details: "费沙维咖啡馆创立于1797年，是开罗最古老的咖啡馆。许多著名的阿拉伯文学家和艺术家曾是这里的常客，包括诺贝尔文学奖得主纳吉布·马哈福兹。在这里品尝一杯薄荷茶或土耳其咖啡，感受200多年的历史沉淀。24小时营业。" },
    { name: "梦想乐园", desc: "十月六日城的大型主题游乐园，适合家庭和朋友同行", details: "梦想乐园是埃及最大的主题游乐园，拥有过山车、摩天轮、水上乐园等30多种游乐设施。还有现场表演、餐厅和纪念品商店。适合全家出游。开放时间：每天10:00-22:00。门票约250埃镑。" },
  ],
  海滩度假: [
    { name: "亚历山大斯坦利桥", desc: "亚历山大市标志性海滨景点，浪漫的地中海风光", details: "斯坦利桥是亚历山大最浪漫的地标之一，桥上可以欣赏地中海的壮丽日落。桥下有海滨咖啡馆和餐厅，提供新鲜海鲜。周末尤其热闹，是当地人约会和散步的首选之地。" },
    { name: "蒙塔扎花园", desc: "王宫花园，拥有地中海海滨美景和热带植物", details: "蒙塔扎花园占地360英亩，是亚历山大最美的公共花园。花园内有热带树木、棕榈树和五彩缤纷的花坛。沿海步道可以欣赏蔚蓝的地中海。花园内还有游泳池和儿童游乐区。门票约25埃镑。" },
    { name: "马特鲁海滩", desc: "蔚蓝清澈的地中海海滩，被称为埃及最美海滩之一", details: "马尔萨马特鲁拥有埃及最清澈的海水和最白的沙滩。其中克利奥帕特拉海滩以埃及艳后命名，水质清澈见底。最佳旅游季节为6-9月。从开罗出发约5小时车程，也可乘坐火车到达。" },
    { name: "沙姆沙伊赫纳阿马湾", desc: "红海度假胜地，绝美的珊瑚礁和水上活动", details: "纳阿马湾是沙姆沙伊赫最繁华的度假区，拥有世界级的豪华酒店、餐厅和购物中心。这里的珊瑚礁色彩斑斓，适合浮潜和潜水。还有沙漠骑骆驼、沙滩摩托等活动。全年阳光充足，适合度假。" },
    { name: "赫尔格达岛屿", desc: "红海珊瑚礁群岛，潜水和浮潜的天堂", details: "赫尔格达拥有多个离岸岛屿，如吉夫顿岛和乌特比亚岛，是世界顶级的潜水目的地。透明度极高的海水中栖息着各种热带鱼和海洋生物。可以报名一日游船或考取PADI潜水证书。" },
    { name: "达哈卜蓝洞", desc: "世界著名的深海潜水点，吸引全球潜水爱好者", details: "达哈卜蓝洞深约130米，是世界上最著名的潜水点之一。即使不是专业潜水员，也可以在蓝洞浅水区浮潜，欣赏壮丽的水下峡谷。达哈卜小镇氛围悠闲，是背包客的天堂，物价低廉，有众多海滨餐厅和瑜伽中心。" },
  ],
  自然探险: [
    { name: "法尤姆瓦迪赖扬", desc: "在沙丘上滑沙，感受沙漠与湖泊交汇的独特景观", details: "瓦迪赖扬保护区位于法尤姆绿洲西南部，拥有壮丽的沙丘和湖泊。可以体验滑沙、沙漠露营和观星。保护区内有大量野生动物和候鸟。从开罗出发约2小时车程，建议参加一日或两日游。" },
    { name: "赫尔格达潜水", desc: "红海珊瑚礁潜水，探索丰富多彩的海底世界", details: "赫尔格达是世界潜水胜地之一，拥有超过100个潜水点。珊瑚礁中栖息着超过1000种海洋生物，包括海龟、海豚和鲨鱼。初学者可以参加PADI入门课程，有经验的潜水员可以探索沉船潜水点。水温全年适宜。" },
    { name: "拉斯穆罕默德自然保护区", desc: "西奈半岛的国家公园，拥有丰富的海洋生态系统", details: "拉斯穆罕默德是埃及第一个国家海洋公园，红海与亚喀巴湾在此交汇。保护区内有世界级的珊瑚礁、红树林和稀有鸟类。可以浮潜、潜水和徒步。从沙姆沙伊赫出发约30分钟车程。门票约100埃镑。" },
    { name: "法尤姆鲸鱼谷", desc: "联合国教科文组织世界遗产，保存着远古鲸鱼化石", details: "鲸鱼谷（瓦迪·希坦）是世界上保存最完好的古代鲸鱼化石遗址，展示了鲸鱼从陆生到水生的进化过程。2005年被列入世界遗产名录。露天博物馆中陈列着4000万年前的巨型鲸鱼骨骼化石。从开罗出发约3小时车程。" },
    { name: "锡瓦绿洲", desc: "撒哈拉沙漠中的天然绿洲，体验柏柏尔文化", details: "锡瓦绿洲是埃及最偏远、最原始的绿洲，拥有独特的柏柏尔文化和语言。著名景点包括克利奥帕特拉温泉、沙利城堡遗址和大沙海。可以在盐湖中漂浮、沙漠露营和骑骆驼穿越沙海。从马特鲁出发约4小时车程。" },
    { name: "圣凯瑟琳与摩西山", desc: "攀登摩西山欣赏日出，参观世界最古老的修道院", details: "摩西山（西奈山）海拔2285米，传说是摩西接受十诫的地方。凌晨2-3点出发攀登，在山顶欣赏壮丽的日出。山脚下的圣凯瑟琳修道院建于6世纪，是世界上最古老的持续运作的基督教修道院，收藏了珍贵的宗教手稿和图标。" },
  ],
  沙漠体验: [
    { name: "白沙漠", desc: "法拉费拉的白色石灰岩沙漠，形态各异的白色岩石奇观", details: "白沙漠位于法拉费拉绿洲附近，白色石灰岩被风蚀成蘑菇、骆驼等奇特形状，如同外星球般的超现实景观。月光下的白沙漠尤为壮观。通常安排一晚沙漠露营，在星空下享用贝都因晚餐。从开罗出发约6小时车程。" },
    { name: "黑沙漠", desc: "巴哈里耶附近的火山岩沙漠，独特的黑色沙丘景观", details: "黑沙漠位于巴哈里耶绿洲附近，黑色玄武岩覆盖的沙丘与周围的金色沙漠形成鲜明对比。可以攀登黑色小山丘，欣赏360度沙漠全景。通常与白沙漠组合为两日游行程。" },
    { name: "努比亚村庄", desc: "阿斯旺附近的彩色村庄，体验努比亚传统文化和美食", details: "努比亚村庄位于阿斯旺尼罗河西岸，以色彩斑斓的房屋、好客的居民和独特的文化而闻名。可以乘船前往，参观传统手工艺作坊、品尝努比亚美食、欣赏努比亚音乐和舞蹈。村民常养鳄鱼作为宠物，是独特的文化体验。" },
    { name: "卢克索热气球", desc: "乘坐热气球俯瞰帝王谷和卢克索神庙的壮丽日出", details: "卢克索热气球之旅是埃及最受欢迎的体验之一。清晨5点左右起飞，在空中俯瞰帝王谷、哈特谢普苏特神庙、尼罗河和卢克索神庙。飞行时间约45-60分钟。价格约100-200美元，建议提前预订。" },
    { name: "尼罗河三桅帆船", desc: "在阿斯旺乘坐传统帆船，欣赏尼罗河两岸风光", details: "费卢卡是埃及传统的三角帆船，在阿斯旺乘坐费卢卡是最经典的尼罗河体验。可以选择1小时的短途游或过夜航行。沿途经过大象岛、植物园岛和阿加汗陵墓。日落时分的航行尤为浪漫。" },
    { name: "声光秀", desc: "在卡纳克神庙观看声光表演，沉浸式体验法老历史", details: "卡纳克神庙和吉萨金字塔的声光秀利用灯光和音效再现了古埃及的辉煌历史。卡纳克声光秀提供中文解说。表演时长约1小时，在夜晚的神庙中行走，光影变幻中仿佛穿越回法老时代。票价约250埃镑。" },
  ],
};

export default function EntertainmentSection() {
  const [active, setActive] = useState<Category>("开罗娱乐");
  const [selectedItem, setSelectedItem] = useState<Activity | null>(null);

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
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold mb-4">娱乐活动</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            从城市娱乐到沙漠冒险，体验埃及丰富多彩的活动
          </p>
        </motion.div>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActive(cat.label)}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-all ${
                active === cat.label
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-gold/10 text-muted-foreground hover:border-primary/30"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activities[active].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-lg border border-gold/10 p-6 card-hover cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                <button className="text-sm text-primary hover:text-gold-glow transition-colors">
                  了解更多 →
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {selectedItem && (
        <DetailDialog
          open={!!selectedItem}
          onOpenChange={(open) => !open && setSelectedItem(null)}
          title={selectedItem.name}
          subtitle={active}
          description={selectedItem.details}
          icon={<Sparkles className="w-8 h-8 text-primary" />}
        />
      )}
    </section>
  );
}
