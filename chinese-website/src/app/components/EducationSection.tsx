"use client";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Stethoscope,
  Monitor,
  Briefcase,
  Languages,
  Building2,
} from "lucide-react";
import { useState } from "react";
import CairoUni from "@/app/assets/CairoUni.jpg";
import ECU from "@/app/assets/ECU.jpg";
import ASU from "@/app/assets/ASU.jpg";
import alex from "@/app/assets/alex.jpg";
import suez from "@/app/assets/suez.jpg";
import EUI from "@/app/assets/EUI.jpg";
import BUC from "@/app/assets/BUC.jpg";
import BUE from "@/app/assets/BUE.jpg";
import MSA from "@/app/assets/MSA.jpg";
import DetailDialog from "@/app/components/DetailDialog";

const universities = [
  {
    name: "开罗大学",
    nameEn: "Cairo University",
    logoUrl: CairoUni,
    desc: "成立于1908年，是埃及最古老、规模最大的大学之一，被誉为阿拉伯世界和非洲高等教育的灯塔。",
    faculties: [
      "文学院",
      "新闻与传媒学院",
      "经济与政治学院",
      "商学院",
      "达尔·欧鲁姆学院",
      "考古学院",
      "计算机与人工智能学院",
      "工程学院",
      "理学院",
      "农学院",
      "医学院",
      "药学院",
      "物理治疗学院",
      "护理学院",
      "牙科学院",
    ],
    website: "cu.edu.eg",
    details: {
      intro: `开罗大学是埃及第二古老、阿拉伯世界第三古老的大学，位于吉萨广场附近。学校设有众多学院，涵盖人文、理工、医学等领域，并致力于向智能化大学转型。与国际知名大学合作提供现代化教学项目，并设有谢赫扎耶德分校及民办校区。`,
      majors: {
        语言与人文: [
          "阿拉伯语（非母语者）",
          "汉语",
          "英语",
          "法语",
          "西班牙语",
          "德语",
          "土耳其语",
          "波斯语",
          "希伯来语",
        ],
        新闻与传媒: ["英语传媒"],
        经济与政治: ["经济学", "统计学", "政治学", "公共管理"],
        商学院: ["工商管理", "会计", "信息系统", "市场营销", "金融"],
        "达尔·欧鲁姆学院": ["阿拉伯语言", "文学", "修辞学"],
        考古学院: ["埃及考古", "希腊—罗马考古", "文物修复"],
        理工类: [
          "计算机科学",
          "人工智能",
          "信息系统",
          "网络安全",
          "信息技术",
          "计算机工程",
          "通信工程",
          "机电一体化",
          "能源工程",
          "土木工程",
          "建筑学",
          "航空工程",
          "化学",
          "物理",
          "生物",
          "地质",
          "数学",
          "食品技术",
          "动物生产",
          "园艺",
          "环境科学",
        ],
        医学类: [
          "医学院 MBBS 项目",
          "药学院 普通药学/临床药学",
          "物理治疗学院",
          "护理学院",
          "牙科学院",
        ],
      },
      requirements: [
        "护照复印件（有效期≥1年）",
        "高中毕业证书",
        "高考成绩单或高中成绩单",
        "Study in Egypt 平台申请表",
        "6 张个人照片",
        "翻译后的出生证明",
        "无犯罪记录证明（部分情况下）",
        "申请费用缴纳凭证",
      ],
      steps: [
        "通过 Study in Egypt 官方平台在线申请（开罗大学 → 学院 → 专业）",
        "材料审核与初步录取",
        "邮寄或到校提交纸质材料",
        "获得最终录取通知书",
        "办理埃及学习居留",
      ],
      advantages: [
        "国际认可的高等学府",
        "现代化学分制项目",
        "中国学生群体规模大",
        "学费与生活成本低于欧洲和海湾国家",
        "适合国际学生的生活环境",
        "丰富实习与就业机会（华为、中兴、海尔、江淮汽车等）",
      ],
    },
  },

  {
    name: "艾因夏姆斯大学",
    nameEn: "Ain Shams University",
    logoUrl: ASU,
    desc: "成立于1950年，是埃及第三古老的公立大学之一，以多样化学科和科研实力著称。",
    faculties: [
      "文学院",
      "语言学院",
      "法学院",
      "商学院",
      "新闻与传媒学院",
      "工程学院",
      "计算机与信息学院",
      "理学院",
      "农学院",
      "兽医学院",
      "医学院",
      "牙科学院",
      "药学院",
      "护理学院",
    ],
    website: "asu.edu.eg",
    details: {
      intro: `艾因夏姆斯大学位于开罗阿巴西亚广场，是埃及及中东地区重要大学之一。学校设有多样化学院和科研中心，提供现代化学术项目，致力于提升教育质量与国际排名。`,
      majors: {
        人文与语言: [
          "文学院：阿拉伯语、英语、法语、希伯来语、历史、哲学、心理学、社会学",
          "语言学院：英语、汉语、西班牙语、德语、法语",
        ],
        法学: ["公法", "国际法"],
        商科: ["会计", "管理", "经济", "市场营销", "统计"],
        新闻与传媒: ["新闻", "广播电视", "公共关系"],
        理工学院: [
          "工程学院：通信、电力、机械、建筑、土木、机电、计算机",
          "计算机与信息学院：计算机科学、人工智能、信息技术、信息系统",
          "理学院：物理、化学、生物、地质、数学",
          "农学院：农业、食品工业、环境、农村发展",
          "兽医学院：兽医学",
        ],
        医学类: [
          "医学院 MBBS 英文授课项目",
          "牙科学院",
          "药学院 普通药学/临床药学",
          "护理学院",
        ],
      },
      requirements: [
        "有效护照",
        "认证并翻译的高中毕业证",
        "成绩单",
        "个人照片",
        "录取后体检报告",
        "申请与注册费用",
        "Study in Egypt 平台注册",
        "个别学院可能要求面试或测试",
      ],
      steps: [
        "在线提交申请并上传材料",
        "获得初步录取",
        "缴费与体检",
        "接收最终录取通知",
        "办理学生居留",
        "正式注册并入学",
      ],
      advantages: [
        "多样化学院与国际合作项目",
        "英语及多语言授课",
        "良好的科研与学术环境",
        "适合中国及国际学生申请",
      ],
    },
  },

  {
    name: "亚历山大大学",
    nameEn: "Alexandria University",
    logoUrl: alex,
    desc: "成立于1938年，是埃及历史悠久的重要大学之一，在国际上享有良好声誉。",

    faculties: [
      "文学院",
      "法学院",
      "商学院",
      "工程学院",
      "计算机与数据科学学院",
      "医学院",
      "药学院",
      "旅游与酒店管理学院",
    ],

    website: "alexu.edu.eg",
    details: {
      intro: `亚历山大大学是埃及历史最悠久、规模最大的公立大学之一，成立于1938年，1942年正式独立。
学校设有20多所学院，涵盖医学、工程、文学、商科、理学、法学、药学、农业等多个领域。
其教学质量受到国际认可，在国内外大学排名中表现突出，被视为埃及及地区的重要教育与科研中心。`,

      majors: {
        人文与社会科学: [
          "文学院：语言、文学、哲学、心理学、历史、地理、传媒、图书情报学（含汉语言文学）",
          "法学院：公法与私法",
          "商学院：工商管理、会计、经济学（多语言授课）",
        ],
        理学与医学: [
          "理学院：数学、物理、化学、生物、地质",
          "医学院：临床医学",
          "药学院：药学",
          "口腔医学院：口腔医学",
          "护理学院：护理与临床培训",
          "兽医学院：动物健康与兽医学",
        ],
        工程与科技: [
          "工程学院：土木、机械、电气、计算机、核工程、船舶工程",
          "计算机与数据科学学院：计算机科学、信息系统、数据分析（英语授课）",
        ],
        教育类: [
          "教育学院",
          "教育质量学院",
          "幼儿教育学院",
          "艺术教育 / 特殊教育学院",
        ],
        其他: ["旅游与酒店管理学院", "美术学院", "体育学院"],
      },

      requirements: [
        "高中毕业证（需翻译并认证）",
        "成绩单",
        "护照",
        "个人照片",
        "部分情况需提供简历",
      ],

      conditions: [
        "通过埃及统一协调系统录取（医学/工程要求高）",
        "需获得本国相关部门批准",
        "部分学院需要面试或笔试",
        "部分专业（如文学院）有入学考试",
        "计算机与数据科学学院为英语授课",
      ],

      steps: [
        "准备材料（毕业证、护照等）",
        "提交申请至大学或国际学生系统",
        "参加考试或面试（如需要）",
        "获得录取通知书",
        "申请学生签证",
      ],

      notes: ["不同学院录取条件差异较大，需提前确认"],
    },
  },
  {
    name: "十月现代科学与艺术大学",
    nameEn: "MSA University",
    logoUrl: MSA,

    desc: "与英国大学合作，提供多样化专业与奖学金机会的现代化私立大学。",

    faculties: ["牙科", "药学", "工程", "计算机科学", "工商管理", "传媒与艺术"],

    website: "msa.edu.eg",

    details: {
      intro: `MSA大学与英国中央兰开夏大学（UCLan）合作，提供多样化专业，并为国际学生提供奖学金机会。`,

      majors: {
        医学类: ["口腔医学", "药学"],
        工程与科技: ["工程", "计算机科学"],
        商科与艺术: ["工商管理", "大众传媒与艺术"],
      },

      requirements: [
        "高中毕业证（认证）",
        "英语成绩（IELTS / TOEFL 或校内考试）",
        "部分专业需面试",
      ],

      steps: ["填写申请表", "提交材料", "参加面试（如需要）", "获得录取"],
    },
  },
  {
    name: "埃及英国大学",
    nameEn: "British University in Egypt",
    logoUrl: BUE,

    desc: "采用纯英式教育体系，与英国大学合作提供双学位课程。",

    faculties: ["工程", "计算机科学", "商业与经济", "人文与艺术", "护理"],

    website: "www.bue.edu.eg/",

    details: {
      intro: `埃及英国大学采用纯英式教育体系，与英国伦敦南岸大学合作授予双学位，课程体系符合英国高等教育标准。`,

      majors: {
        工程与科技: ["工程类（所有方向）", "计算机科学"],
        商科与人文: ["商业、经济与政治科学", "人文与艺术（文学、翻译等）"],
        医学类: ["护理科学"],
      },

      requirements: [
        "英语成绩（通常 IELTS 6.0+）",
        "学历证书认证",
        "填写申请表",
        "可能需要预科课程（Foundation Year）",
      ],

      advantages: ["英国双学位", "纯英式教育体系", "国际认可度高"],
    },
  },

  {
    name: "苏伊士运河大学",
    nameEn: "Suez Canal University",
    logoUrl: suez,

    desc: "成立于1976年，位于红海沿岸，是埃及重要的公立大学之一，注重实践教学与医学教育。",

    faculties: [
      "医学院",
      "牙科学院",
      "药学院",
      "工程学院",
      "计算机与信息学院",
      "商学院",
      "文学院",
      "农业学院",
    ],

    website: "suez.edu.eg",

    details: {
      intro: `苏伊士运河大学是一所埃及公立大学，成立于1976年，位于红海沿岸的苏伊士市，是阿拉伯埃及共和国的重要高等教育机构之一。`,

      majors: {
        医学类: [
          "医学院：临床医学（Medicine & Surgery）",
          "口腔医学院：口腔医学与外科学",
          "药学院：药学（普通药学 / 临床药学）",
        ],
        理工类: [
          "理学院：物理、化学、生物、数学、地质、环境科学",
          "工程学院：土木、电气、机械、计算机工程",
          "计算机与信息学院：计算机科学、信息系统、信息技术",
        ],
        农业与生命科学: [
          "农业学院：植物生产、动物生产、农业商务、水产养殖",
          "兽医学院：兽医学",
        ],
        人文与商科: [
          "商学院：会计、工商管理、经济学、国际贸易",
          "文学院：阿拉伯语、英语、历史、心理学、社会学",
          "语言学院：多语种与翻译",
        ],
        其他学院: ["教育学院", "体育学院", "旅游与酒店管理学院"],
        特色项目: ["非洲-亚洲研究院", "埃中学院（联合学位项目，适合中国学生）"],
      },

      requirements: [
        "高中毕业证（需埃及认证）",
        "护照（有效期不少于一年）",
        "推荐/派遣函（注明资助及学位）",
        "健康证明（无传染病）",
        "4张照片",
        "硕士/博士需提供更高学历证书",
        "埃及使馆学习批准函",
        "提交原件及复印件",
      ],

      conditions: [
        "学历需完成埃及官方等同认证",
        "需通过外国学生系统提名",
        "各学院有最低成绩要求",
        "部分专业需额外考试（医学/工程）",
      ],

      steps: [
        "通过埃及外国学生系统提交申请（wafeden.gov.eg）",
        "获得高教部初步提名",
        "向大学提交完整材料",
        "通过审核后完成录取",
      ],
    },
  },
  {
    name: "开罗巴德尔大学",
    nameEn: "Badr University in Cairo",
    logoUrl: BUC,

    desc: "埃及大型私立大学之一，录取灵活，拥有现代化校园与丰富国际学生经验。",

    faculties: [
      "医学",
      "牙科",
      "药学",
      "护理",
      "物理治疗",
      "工程",
      "计算机科学",
      "工商管理",
    ],

    website: "buc.edu.eg",

    details: {
      intro: `开罗巴德尔大学是规模最大、录取相对灵活的私立大学之一，校园位于巴德尔市，环境现代化，拥有大量国际学生，并具备长期接收留学生的成熟经验。`,

      majors: {
        医学类: ["临床医学与外科学", "口腔医学", "药学", "护理学", "物理治疗"],
        工程与科技: ["工程类（所有工程专业）", "计算机科学"],
        商科与语言: ["工商管理", "语言与翻译", "应用艺术"],
      },

      steps: [
        "联系国际学生事务部门",
        "提交认证后的高中毕业证",
        "部分专业参加测试或面试",
        "完成签证及居留手续",
      ],

      advantages: ["录取灵活", "国际学生经验丰富", "现代化校园"],
    },
  },

  {
    name: "埃及中国大学",
    nameEn: "Egyptian Chinese University",
    logoUrl: ECU,

    desc: "中埃合作大学，专注技术与应用型专业，对中国学生极具优势。",

    faculties: ["机电工程", "物理治疗", "汉语言", "工商管理"],

    website: "ecu.edu.eg",

    details: {
      intro: `埃及中国大学是中埃教育合作的重要桥梁，以应用型与技术型专业为特色，授课语言以英语为主，并提供中文课程。`,

      majors: {
        工程与科技: ["机电一体化与机器人工程"],
        医学类: ["物理治疗"],
        语言与商科: ["汉语言与翻译", "工商管理与科技"],
      },

      advantages: [
        "直接承认中国高考成绩",
        "对中国学生政策灵活",
        "提供奖学金或学费优惠",
        "设有中国学生服务办公室",
      ],
    },
  },
  {
    name: "埃及国际大学",
    nameEn: "Egyptian International University",
    logoUrl: EUI,

    desc: "位于新行政首都的国际化大学，采用欧洲合作教学体系，提供双学位项目与现代化教育环境。",

    faculties: [
      "医学",
      "牙科",
      "药学",
      "工程",
      "计算机科学",
      "工商管理",
      "经济学",
      "艺术与设计",
    ],

    website: "eiu.edu.eg",

    details: {
      intro: `埃及国际大学采用国际化优选教学模式，与多所欧洲大学（意大利 / 英国）建立学术合作关系。
学校位于埃及新行政首都，拥有现代化校园设施，重点推行双学位体系并严格遵循国际教育标准。`,

      majors: {
        医学类: [
          "临床医学与外科学（MBChB）",
          "口腔医学（BDS）",
          "药学博士（PharmD）",
          "物理治疗（Physiotherapy）",
        ],
        工程与科技: [
          "工程学士（土木工程、建筑工程、计算机工程等）",
          "计算机科学与信息技术（Computer Science & IT）",
        ],
        商科与人文: [
          "工商管理（BBA）",
          "经济学（Economics）",
          "艺术与设计（Arts & Design）",
        ],
      },

      requirements: [
        "高中毕业证（含高考成绩 Gaokao）认证",
        "英语能力证明（IELTS / TOEFL）",
      ],

      steps: [
        "在线填写申请表",
        "提交认证后的学历材料",
        "提交英语成绩",
        "获得录取通知书",
        "申请学生签证",
      ],

      advantages: [
        "国际合作（英国 / 意大利大学）",
        "双学位体系",
        "现代化校园（新行政首都）",
        "国际学生服务体系完善",
      ],
    },
  },
];

const majorIcons = [
  { icon: Building2, label: "工程" },
  { icon: Stethoscope, label: "医学" },
  { icon: Monitor, label: "计算机" },
  { icon: Briefcase, label: "商业" },
  { icon: Languages, label: "语言" },
];

const steps = [
  { num: 1, title: "注册平台", desc: "在 Study in Egypt 平台注册账号" },
  { num: 2, title: "上传文件", desc: "提交高中毕业证、成绩单、护照等材料" },
  { num: 3, title: "获得初步录取", desc: "审核材料后获得初步录取通知" },
  { num: 4, title: "获得正式录取", desc: "缴纳费用、体检后获得正式录取通知书" },
  { num: 5, title: "办理签证", desc: "获得留学签证并前往埃及开始学业" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function EducationSection() {
  const [selectedUni, setSelectedUni] = useState<
    (typeof universities)[0] | null
  >(null);

  return (
    <section id="education" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <GraduationCap className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
            留学埃及
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            埃及拥有众多世界知名大学，学费合理，生活成本低廉，是中国学生留学的理想选择
          </p>
        </motion.div>

        {/* Major icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {majorIcons.map((m) => (
            <div key={m.label} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center border border-gold/20">
                <m.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">{m.label}</span>
            </div>
          ))}
        </div>

        {/* University cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {universities.map((uni, i) => (
            <motion.div
              key={uni.nameEn}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card rounded-lg border border-gold/10 overflow-hidden card-hover cursor-pointer h-full flex flex-col"
              onClick={() => setSelectedUni(uni)}
            >
              <img
                src={uni.logoUrl?.src}
                alt={uni.nameEn}
                className="w-full h-44 object-cover"
              />

              {/* Content with padding */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-serif text-xl font-bold text-primary mb-1">
                  {uni.name}
                </h3>

                <p className="text-sm text-sand mb-3">{uni.nameEn}</p>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {uni.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {uni.faculties.slice(0, 5).map((f) => (
                    <span
                      key={f}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <button className="w-full py-2.5 border border-primary/40 text-primary text-sm rounded-lg hover:bg-primary/10 transition-colors mt-auto">
                  查看详情
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Application Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-gradient-gold mb-3">
            申请步骤
          </h3>
          <p className="text-muted-foreground">
            通过 Study in Egypt 平台申请埃及大学的完整流程
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-sand/30" />
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative flex items-start gap-6 mb-10 last:mb-0"
            >
              <div className="relative z-10 w-12 h-12 rounded-full bg-muted border-2 border-primary flex items-center justify-center shrink-0 animate-glow-pulse">
                <span className="text-primary font-bold">{step.num}</span>
              </div>
              <div className="pt-2">
                <h4 className="font-serif text-lg font-bold text-foreground mb-1">
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* University Detail Dialog */}
      {selectedUni && (
        <DetailDialog
          open={!!selectedUni}
          onOpenChange={(open: any) => !open && setSelectedUni(null)}
          title={selectedUni.name}
          subtitle={selectedUni.nameEn}
          description={
            typeof selectedUni.details === "object"
              ? selectedUni.details?.intro
              : selectedUni.details
          }
          details={selectedUni.details}
          tags={selectedUni.faculties}
          website={selectedUni.website}
          icon={<GraduationCap className="w-8 h-8 text-primary" />}
        />
      )}
    </section>
  );
}
