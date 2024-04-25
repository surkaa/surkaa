import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "个人介绍网站",
      description: "我的个人介绍网站",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
