import type { PioConfig } from "../types/config";

export const pioConfig: PioConfig = {
	enable: true,
	models: ["/pio/models/NOIR/noir.model3.json"],
	position: "left",
	width: 280,
	height: 250,
	mode: "draggable",
	hiddenOnMobile: true,
	hideAboutMenu: true,
	dialog: {
		welcome: "欢迎来到 QAQMOON 的小站。",
		touch: ["别戳啦，去看看文章吧。", "这里还在装修中。"],
		home: "回到首页。",
		skin: ["换个状态？", "好了。"],
		close: "下次见。",
		link: "https://github.com/QAQMOON/qaqmoon.github.io",
	},
};
