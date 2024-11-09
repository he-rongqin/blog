import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/micro/",
  "/faq/",
  "/mybatis/",
  // {
  //   text: "微服务-Spring Cloud",
  //   icon: "pen-to-square",
  //   prefix: "micro/",
  //   children: [
  //     {
  //       text: "Spring Cloud",
  //       icon: "pen-to-square",
  //       prefix: "springcloud/",
  //       children: [
  //         {
  //           text: "网关（Gateway）",
  //           icon: "pen-to-square",
  //           link: "gateway"
  //         },
  //         {
  //           text: "流控、熔断（Sentinel Gateway）",
  //           icon: "pen-to-square",
  //           link: "sentinel"
  //         }
  //       ]
  //     }
  //   ]
  // },
  
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
