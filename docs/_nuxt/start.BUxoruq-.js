import{_ as e}from"./ContentTitle.nYo5AaCD.js";import{E as t,c as a,b as n,d as o,a as p,o as i}from"./entry.C4Nayo_I.js";const c={class:"start-lxx"},r=p("pre",null,`            ​
NPM安装方式

在项目的根目录执行命令：

# 安装命令
npm install lxui-ui 或着：pnpm add lxui-ui等

# 更新
npm update lxui-ui

[点击并拖拽以移动]
配置
关于SASS

# 安装sass
npm install sass -D

# 安装sass-loader
npm i sass-loader@10 -D

引入组件库

项目src目录中的main.ts中，引入组件库。

// main.ts
import lxuiUni from 'lxui-uni'

import { createSSRApp } from 'vue'
export function createApp() {
    const app = createApp(App)
    // 添加
    app.use(lxuiUni)
    return {
        app
    }

}

引入主题

在项目的根目录uni.scss中引入主题文件。

/* uni.scss */

@import 'lxui-uni/theme.scss'

配置easycom组件模式

项目src目录中的pages.json。如果修改easycom规则不生效，则建议重启项目。

{
    "easycom": {
        "autoscan": true,
        "custom": {
            "lx-(.*)": "lxui-uni/components/lx-$1/lx-$1.vue"
        }
        
    }

}
        `,-1),d=t({__name:"start",setup(u){return(m,l)=>{const s=e;return i(),a("div",c,[n(s,{title:"快速上手"}),r,o(" ​ ")])}}});export{d as default};
