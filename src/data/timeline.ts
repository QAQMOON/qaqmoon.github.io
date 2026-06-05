import type { TimelineItem } from "../components/features/timeline/types";

export const timelineData: TimelineItem[] = [
	{
		id: "site-migration",
		title: "迁移个人网站到 Mizuki",
		description: "推翻原来的半成品 GitHub Pages，把个人站改成基于 Mizuki 的静态博客。",
		type: "project",
		startDate: "2026-06-06",
		skills: ["GitHub Pages", "Astro", "Mizuki"],
		achievements: ["完成基础部署", "清理模板示例内容", "建立第一篇博客文章"],
		links: [
			{
				name: "网站",
				url: "https://qaqmoon.github.io/",
				type: "website",
			},
		],
		icon: "material-symbols:rocket-launch",
		color: "#2563EB",
		featured: true,
	},
];
