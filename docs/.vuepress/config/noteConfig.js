/*
 * @Author: your name
 * @Date: 2020-07-10 16:17:30
 * @LastEditTime: 2020-07-10 16:18:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\config\noteConfig.js
 */ 
module.exports = {
    bg: "/bg.jpg",
    // 来创建左侧菜单
    nav: [
      // 通过以下方式可以获取到相应的文章内容
      // _this['$'+_this.$themeConfig.noteConfig.nav[0].frontmatter.id].map[_this.$themeConfig.noteConfig.nav[0].frontmatter.key]
      {
        text: "随笔", // 左侧栏名称
        icon: "",
        frontmatter: {
          // 指定frontmatter内容
          id: "other", // 指向vuepress-plugin-blog中的frontmatter
          key: "essay" // Markdown中的frontmatter配置的categories值
        }
      },
      {
        text: "语言",
        icon: "",
        frontmatter: { id: "language" }, // 通过这种方式进行分组设置
        open: true,
        items: [
          {
            text: "Java",
            icon: "",
            frontmatter: { key: "Java" },
            items: [
              {
                text: "SpringBoot",
                icon: "",
                frontmatter: { key: "SpringBoot" }
              },
              {
                text: "SpringCloud",
                icon: "",
                frontmatter: { key: "SpringCloud" }
              }
            ]
          },
          {
            text: "JavaScript",
            icon: "",
            frontmatter: { key: "JavaScript" },
            items: [
              {
                text: "ECMAScript6",
                icon: "",
                frontmatter: { key: "ECMAScript6" }
              },
              {
                text: "Vue",
                icon: "",
                frontmatter: { key: "Vue" }
              },
              {
                text: "React",
                icon: "",
                frontmatter: { key: "React" }
              }
            ]
          }
        ]
      }
      // ,
      // {
      //   text: "目录",
      //   icon: "iconqq",
      //   link: "", // 手动指定link优先选择
      //   frontmatter: { id: "tags" }, // 通过这种方式进行分组设置
      //   items: [
      //     {
      //       text: "Vue",
      //       icon: "iconqq",
      //       link: "",
      //       frontmatter: { key: "Vue" }
      //     },
      //     { text: "Java", icon: "iconqq", frontmatter: { key: "Java" } },
      //     {
      //       text: "Vuepress",
      //       icon: "iconqq",
      //       link: "",
      //       frontmatter: { key: "Vuepress" }
      //     }
      //   ]
      // }
    ],
    // 联系我设置内容
    contact: {
      enabled: true,
      items: [
        {
          text: "QQ",
          link: "http://wpa.qq.com/msgrd?v=3&uin=1454900516&site=qq&menu=yes",
          icon: "iconqq"
        },
        { text: "GitHub", link: "https://github.com/IKangXu", icon: "icongithub" }
      ]
    }
  }