<!--
 * @Author: your name
 * @Date: 2020-04-09 16:44:34
 * @LastEditTime: 2020-04-09 16:53:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\README.md
 -->
# MicroFrontends
前端微服务平台
```
.
├── docs
│   ├── .vuepress (可选的)  →  官方标注可选,不过一般都会用这个文件夹,核心文件夹
│   │   ├── components (可选的)  →  这个文件夹一些以.vue结尾的vue组件,可以在markdown文件里使用
│   │   ├── theme (可选的)   →  可以配置自己的博客
│   │   │   └── Layout.vue
│   │   ├── public (可选的)   →   放一些公共静态资源 使用方式 /xxx, 请必须以 `/` 开始表示根
│   │   ├── styles (可选的)  →  样式
│   │   │   ├── index.styl   →  自定义样式
│   │   │   └── palette.styl   →  用于重写默认颜色常量，或者设置新的 stylus 颜色常量
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html  →  用于开发环境的 HTML 模板文件
│   │   │   └── ssr.html  →  构建时基于 Vue SSR 的 HTML 模板文件
│   │   ├── config.js (可选的)   →   配置文件的入口文件，也可以是 YML 或 toml
│   │   └── enhanceApp.js (可选的)   →  客户端应用的增强
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json


```
