import{_ as u}from"./ContentTitle.Bz-P-mDy.js";import{_}from"./Code.DcFfEhwG.js";import{n as c,c as i,a as n,b as l,d as t,w as e,F as a,o as p}from"./entry.CmxCvndW.js";const r={class:"start-lxx"},d=n("h4",null,"NPM安装方式",-1),m=n("br",null,null,-1),h=n("br",null,null,-1),x=n("br",null,null,-1),f=n("br",null,null,-1),b=n("br",null,null,-1),y=n("br",null,null,-1),A=n("h4",null,"引入组件库",-1),S=n("pre",null,`// main.ts
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
`,-1),v=n("h4",null,"引入主题",-1),C=n("pre",null,[n("code",null,`/* uni.scss */
@import 'lxui-uni/theme.scss'`)],-1),N=n("h4",null,"配置easycom组件模式",-1),w=n("pre",null,[n("code",null,`{
    "easycom": {
        "autoscan": true,
        "custom": {
            "lx-(.*)": "lxui-uni/components/lx-$1/lx-$1.vue"
        }
        
    }
 
}`)],-1),B=n("h4",null,"typescript支持",-1),V=n("pre",null,[n("code",null,`{
    "compilerOptions": {
        ............,
        "types": [
            "@dcloudio/types",
            "uview-plus/types"
        ]
    },
    .........
}`)],-1),$=c({__name:"start",setup(g){return(k,D)=>{const o=u,s=_;return p(),i(a,null,[n("div",r,[l(o,{title:"快速上手"}),d,t(" 在项目的根目录执行命令： "),l(s,null,{default:e(()=>[t(" #安装命令 "),m,t(" npm install lxui-ui 或着：pnpm add lxui-ui等 ")]),_:1}),l(s,null,{default:e(()=>[t(" # 更新 "),h,t(" npm update lxui-ui ")]),_:1}),t(" 配置 关于SASS "),l(s,null,{default:e(()=>[t(" # 安装sass "),x,t(" npm install sass -D "),f,b,t(" # 安装sass-loader "),y,t(" npm i sass-loader@10 -D ")]),_:1}),A,t(" 项目src目录中的main.ts中，引入组件库。 "),l(s,null,{default:e(()=>[S]),_:1}),v,t(" 在项目的根目录uni.scss中引入主题文件。 "),l(s,null,{default:e(()=>[C]),_:1})]),N,t(" 项目src目录中的pages.json。如果修改easycom规则不生效，则建议重启项目。 "),l(s,null,{default:e(()=>[w]),_:1}),B,l(s,null,{default:e(()=>[V]),_:1})],64)}}});export{$ as default};
