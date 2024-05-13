import{_ as l}from"./ContentTitle.Bz-P-mDy.js";import{_ as i}from"./Code.DcFfEhwG.js";import{_}from"./TableData.Cqs9EV2D.js";import{n as p,c,b as n,w as o,a as t,o as u}from"./entry.CmxCvndW.js";const m={class:"header-lxx"},d=t("h4",null,"如何使用",-1),x=t("div",null,[t("code",null,'<lx-tabbar :menuList="menuList" current="home" ></lx-tabbar>')],-1),f=t("h4",null,"Props",-1),h=t("pre",null,[t("code",null,`interface menuListInt {
    name: string // 菜单名称用于选中菜单项(current)和菜单icon的命名
    text: string // 菜单的文字
    pagePath: string // 菜单跳转页面地址(例：'pages/index/index'),跳转页面地址直接从pages目录名开始写
}
备注：icon图标的存放位置/static/tabbar/home.png (home即为menuList中name的值)
`)],-1),k=p({__name:"tabbar",setup(b){const a=[{par:"menuList",explain:"各项的配置参数，见顶部说明，数组形式",type:"menuListInt[]",default:"-",optional:"-"},{par:"current",explain:"选中的菜单项",type:"string",default:"-",optional:"-"},{par:"activeColor",explain:"菜单激活的颜色",type:"string",default:"#5c616f",optional:"-"},{par:"defaultColor",explain:"菜单默认的颜色",type:"string",default:"#7d7e80",optional:"-"}];return(g,C)=>{const s=l,e=i,r=_;return u(),c("div",m,[n(s,{title:"tabbar底部自定义导航栏"}),d,n(e,null,{default:o(()=>[x]),_:1}),f,n(e,null,{default:o(()=>[h]),_:1}),n(r,{data:a})])}}});export{k as default};
