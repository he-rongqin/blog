import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Monk",
  description: "The Monk'Blog",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
