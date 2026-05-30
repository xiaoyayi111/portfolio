"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

interface Project {
  id: number;
  name: string;
  highlight: boolean;
  background: string;
  role: string;
  results: string[];
  tags: string[];
  actions: string[];
}

const projects: Project[] = [
  {
    id: 1,
    name: "客服AI托管机器人",
    highlight: true,
    background: "通过AI托管提升客服效率，客服人工成本高，希望通过AI承担部分对话，提升坐席人效。",
    role: "产品负责人，主导从0到1的方案设计、评审与落地",
    results: [
      "年化降本1048万（一期655万）",
      "开场托管率≥90%",
      "对话准确率≥90%",
    ],
    tags: ["NLP", "大模型", "客服机器人"],
    actions: [
      "完成AI托管PRD产品方案评审，识别并修正关键问题",
      "设计并评审SkillRouter埋点方案，明确P0/P1埋点范围",
      "搭建托管效果指标体系，定义意图识别准确率、对话准确率、拟人度等核心指标",
    ],
  },
  {
    id: 2,
    name: "AI搜索优化",
    highlight: true,
    background: "提升客服知识库搜索的准确率与效率，赋能坐席与机器人。原有搜索准确率76%，无法满足高效服务需求。",
    role: "产品负责人，负责需求定义、效果追踪与优化",
    results: [
      "准确率76%→87.5%（超越京东85-86%）",
      "年省156万",
      "热线准确率91%、在线94%",
    ],
    tags: ["搜索算法", "知识库", "NLP"],
    actions: [
      "推动AI搜索优化上线，目标准确率提升至87.5%",
      "主导工单小结AI预填功能上线，提升客服效率",
      "持续追踪热线和在线搜索准确率，进行数据驱动优化",
    ],
  },
  {
    id: 3,
    name: "IVR智能语音导航",
    highlight: false,
    background: "优化高端用户的进线体验，缩短等待时间，提升服务效率。VIP用户进线等待时间长，影响体验。",
    role: "产品负责人，负责需求设计、交互流程调整与效果验证",
    results: [
      "VIP2进线时间30s→20s",
      "年省60万",
      "2026年3月成功上线",
    ],
    tags: ["IVR", "语音交互", "路由策略"],
    actions: [
      "主导高端路由优化方案，针对VIP2/数字高端/汽车/电视用户进行分层路由策略设计",
      "调整多轮语音交互流程，优化按键播报",
      "验证效果并推动项目按时上线",
    ],
  },
  {
    id: 4,
    name: "AI投诉分析",
    highlight: false,
    background: "利用AI实现对用户全量来访问题的自动识别与分类统计。原有VOC分析依赖人工，每月一次，覆盖率低、不及时。",
    role: "产品负责人，从0到1的方案设计、跨部门协同与落地",
    results: [
      "准确率81.75%（超人工）",
      "覆盖9大品类",
      "交付时效提升89%",
    ],
    tags: ["NLP", "数据标注", "跨部门协同"],
    actions: [
      "标签体系建设：将1600多个问题标签精简至400多个核心标签",
      "进行1000多条数据标注，结合数据特征制定优化策略",
      "牵头制定《数据生产SOP》，成功串联12个团队协作",
    ],
  },
  {
    id: 5,
    name: "知识运营小龙虾 & 坐席辅助",
    highlight: false,
    background: "通过AI驱动知识提炼与入库，提升知识库质量；优化坐席辅助功能，提升坐席工作效率与服务质量。",
    role: "产品负责人，负责知识运营工具与坐席辅助功能的产品化",
    results: [
      "清单分类TOP3准确率≥80%",
      "清单小结准确率85%+",
      "AHT降低10-20秒",
    ],
    tags: ["知识图谱", "坐席辅助", "大模型"],
    actions: [
      "推动知识运营小龙虾项目，通过龙虾驱动知识提炼并入库",
      "优化清单分类与清单小结功能，解决模型与工程问题",
      "推动在线工作台手机品类迭代",
    ],
  },
  {
    id: 6,
    name: "龙虾记忆系统评测",
    highlight: false,
    background: "构建科学完整的评测体系，验证龙虾记忆系统迭代效果。开源评测集与小米办公场景不匹配。",
    role: "产品负责人，主导评测集构建、评测方案设计与执行",
    results: [
      "构建场景化评测集",
      "提取准确率≥90%",
      "重复问题率降低≥30%",
    ],
    tags: ["评测体系", "AI Agent", "数据标注"],
    actions: [
      "结合开源评测集与员工真实对话数据，构建场景化评测集",
      "设计五大评测维度（提取质量、冲突解决、检索质量、业务效果、系统性能）",
      "组织数据贡献活动，收集并标注大量员工历史对话数据",
    ],
  },
  {
    id: 7,
    name: "龙虾Router模块优化",
    highlight: false,
    background: "提升龙虾技能调起的准确率与效率。用户反馈技能调起不准、多技能并行困难、长query无法自动拆解。",
    role: "产品负责人，负责Router模块的需求定义、算法优化与落地",
    results: [
      "端到端准确率86.84%",
      "Router调用准确率92.79%",
      "建立优化闭环",
    ],
    tags: ["AI Agent", "路由优化", "用户体验"],
    actions: [
      "深入分析Router与Finder模块工作原理，梳理核心优化方向",
      "与算法团队对齐策略优化、各环节算法指标优化需求",
      "推动设计用户行为、过程、成本等关键指标的埋点方案",
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_15px_rgba(0,0,0,0.15)] transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-[var(--primary)]">
            {project.highlight && (
              <span className="mr-1 text-yellow-500">&#11088;</span>
            )}
            {project.name}
          </h3>
        </div>

        {/* Background */}
        <p className="text-sm text-[var(--gray)] mb-4 line-clamp-2">
          {project.background}
        </p>

        {/* Results */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.results.map((result, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-blue-50 text-[var(--accent)] text-xs font-medium rounded-full"
            >
              {result}
            </span>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 bg-gray-100 text-[var(--gray-dark)] text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expand button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-sm text-[var(--accent)] font-medium hover:text-[var(--accent-light)] transition-colors"
        >
          {isExpanded ? "收起详情" : "查看详情"}
          {isExpanded ? <HiChevronUp /> : <HiChevronDown />}
        </button>
      </div>

      {/* Expanded details */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-gray-100 pt-4">
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-[var(--gray-dark)] mb-1">
                  我的角色
                </h4>
                <p className="text-sm text-[var(--gray)]">{project.role}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[var(--gray-dark)] mb-2">
                  核心行动
                </h4>
                <ul className="space-y-2">
                  {project.actions.map((action, i) => (
                    <li
                      key={i}
                      className="text-sm text-[var(--gray)] flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full mt-1.5 flex-shrink-0" />
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
            项目展示
          </h2>
          <div className="w-16 h-1 bg-[var(--accent)] rounded-full" />
          <p className="text-[var(--gray)] mt-4">
            按影响力排序，展示我主导或深度参与的核心AI项目
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
