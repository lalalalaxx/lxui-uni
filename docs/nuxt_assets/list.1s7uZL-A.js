import{_}from"./ContentTitle.Bz-P-mDy.js";import{_ as r}from"./Code.DcFfEhwG.js";import{_ as c}from"./TableData.Cqs9EV2D.js";import{n as d,c as u,b as e,d as o,w as m,a as t,o as h}from"./entry.CmxCvndW.js";const x={class:"header-lxx"},f=t("h4",null,"如何使用",-1),b=t("div",null,[t("pre",null,[t("code",null,`<lx-list :api="apiDemo" >
    <template v-slot="{ item, index }">
        <view>列表每一项的展示方式...</view>
    </template>
</lx-list>`)])],-1),v=t("br",null,null,-1),w=t("br",null,null,-1),C=t("h4",null,"Props",-1),y=t("br",null,null,-1),D=t("h4",null,"Methods",-1),N=d({__name:"list",setup(T){const a=["名称","说明","参数"],l=[{par:"setListParams",explain:"用于刷新列表请求。使用ref.value.setListParams(obj, isClear) obj:请求额外的参数 isClear是否清空请求参数",type:"Function(obj, isClear)"}],s=[{par:"api",explain:"数据请求的接口API",type:"Function",default:"-",optional:"-"},{par:"afterLoadData",explain:"数据请求完成前置处理数据方法",type:"Function",default:"-",optional:"-"},{par:"options",explain:"数据请求的额外参数",type:"object",default:"{}",optional:"-"},{par:"listType",explain:"分页列表使用scrollView还是默认view",type:"string",default:"default",optional:"scrollView"}];return(V,j)=>{const i=_,p=r,n=c;return h(),u("div",x,[e(i,{title:"list分页列表组件"}),o(" 不想重复写分页逻辑了，那就造个轮子 "),f,e(p,null,{default:m(()=>[b]),_:1}),o(" 通过作用域插槽将列表项数据传递到父组件，在template中接收，然后自定义列表项的显示方式。 "),v,w,C,e(n,{data:s}),y,D,o(" 此方法如要通过ref手动调用 "),e(n,{data:l,"title-data":a})])}}});export{N as default};
