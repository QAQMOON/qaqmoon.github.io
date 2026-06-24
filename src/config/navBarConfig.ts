import type { NavBarConfig } from "../types/config";
import { LinkPreset } from "../types/config";

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.Diary,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/QAQMOON",
			icon: "fa7-brands:github",
			external: true,
		},
	],
};
