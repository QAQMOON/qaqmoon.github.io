import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	title: "公告",
	content: "小站正在迁移和整理中，内容会慢慢补上。",
	closable: true,
	link: {
		enable: true,
		text: "关于这个站",
		url: "/about/",
		external: false,
	},
};
