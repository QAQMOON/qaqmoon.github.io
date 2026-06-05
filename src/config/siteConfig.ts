import type { SiteConfig } from "../types/config";

const SITE_LANG = "zh_CN";

export const siteConfig: SiteConfig = {
	title: "QAQMOON",
	subtitle: "个人笔记、AI 工具与一点二次元审美",
	siteURL: "https://qaqmoon.github.io/",
	keywords: ["QAQMOON", "个人博客", "AI", "二次元", "技术笔记"],
	siteStartDate: "2026-06-06",

	lang: SITE_LANG,

	themeColor: {
		hue: 222,
		fixed: false,
	},

	featurePages: {
		anime: false,
		diary: false,
		friends: false,
		projects: false,
		skills: false,
		timeline: false,
		albums: false,
		devices: false,
	},

	navbarTitle: {
		mode: "text-icon",
		text: "QAQMOON",
		icon: "assets/home/home.webp",
		logo: "assets/home/default-logo.webp",
	},

	pageScaling: {
		enable: true,
		targetWidth: 2000,
	},

	bangumi: {
		userId: "",
		fetchOnDev: false,
	},

	bilibili: {
		vmid: "",
		fetchOnDev: false,
		coverMirror: "",
		useWebp: true,
	},

	anime: {
		mode: "local",
	},

	diaryApiUrl: "",

	postListLayout: {
		defaultMode: "list",
		enable: true,
		allowSwitch: true,
		categoryBar: {
			enable: true,
		},
	},

	tagStyle: {
		useNewStyle: false,
	},

	wallpaperMode: {
		defaultMode: "banner",
		showModeSwitchOnMobile: "both",
	},

	banner: {
		src: {
			desktop: [
				"/assets/desktop-banner/1.webp",
				"/assets/desktop-banner/2.webp",
				"/assets/desktop-banner/3.webp",
				"/assets/desktop-banner/4.webp",
			],
			mobile: [
				"/assets/mobile-banner/1.webp",
				"/assets/mobile-banner/2.webp",
				"/assets/mobile-banner/3.webp",
				"/assets/mobile-banner/4.webp",
			],
		},
		position: "center",
		carousel: {
			enable: true,
			interval: 4,
			switchable: true,
		},
		waves: {
			enable: true,
			performanceMode: false,
			mobileDisable: false,
			switchable: true,
		},
		imageApi: {
			enable: false,
			url: "",
		},
		homeText: {
			enable: true,
			title: "QAQMOON 的小站",
			switchable: true,
			subtitle: [
				"记录折腾服务器、AI 工具和个人网站的过程",
				"这里先从一个干净的博客开始，慢慢长出自己的样子",
				"模板只是骨架，内容会一点点换成真正属于我的东西",
			],
			typewriter: {
				enable: true,
				speed: 90,
				deleteSpeed: 45,
				pauseTime: 2200,
			},
		},
		credit: {
			enable: false,
			text: "",
			url: "",
		},
		navbar: {
			transparentMode: "semifull",
		},
	},

	toc: {
		enable: true,
		mobileTop: true,
		desktopSidebar: true,
		floating: true,
		depth: 2,
		useJapaneseBadge: false,
	},

	showCoverInContent: true,
	generateOgImages: false,
	favicon: [],

	font: {
		asciiFont: {
			fontFamily: "ZenMaruGothic-Medium",
			fontWeight: "400",
			localFonts: ["ZenMaruGothic-Medium.ttf"],
			enableCompress: true,
		},
		cjkFont: {
			fontFamily: "Loli",
			fontWeight: "500",
			localFonts: ["loli.ttf"],
			enableCompress: true,
		},
	},

	showLastModified: true,
	pageProgressBar: {
		enable: true,
		height: 3,
		duration: 6000,
	},

	thirdPartyAnalytics: {
		enable: false,
		clarityId: "",
	},

	card: {
		border: true,
		followTheme: false,
	},

	imageOptimization: {
		formats: "webp",
		quality: 85,
		noReferrerDomains: ["*.hdslb.com"],
	},
};

export { SITE_LANG };
