import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "路遥",
  description: "路遥的博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
