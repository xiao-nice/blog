import{f as C,r as n,ae as v,g as k,aI as x,o as N,m as U,p as o,Q as a,aE as I,an as F,cK as w,d4 as y,aV as q,bn as R,V as W}from"./index.062059f7.js";import{E as h}from"./dialog.00de49d5.js";import"./overlay.343072da.js";/* empty css               */import{E as L,a as K}from"./form-item.145b9d23.js";import{u as $}from"./role.f819e9d3.js";const S=F("\u53D6\u6D88"),j=F("\u786E\u5B9A"),J=C({__name:"add-or-update",emits:["refreshDataList"],setup(H,{expose:f,emit:E}){const d=n(!1),A=n([]),m=n(),u=v({id:"",realName:"",nickName:"",passWord:"",mobile:"",userAcct:"",roleIds:[],remark:""}),g=t=>{d.value=!0,u.id="",m.value&&m.value.resetFields(),t?V(t):D()},c=k(()=>{var t;return(t=x.userStore)==null?void 0:t.user.userId}),D=()=>$({queryUserId:c.value}).then(t=>{A.value=t.data.userRoles}),V=t=>{w(t).then(e=>{Object.assign(u,e.data),delete u.passWord,delete u.roleIds})},b=n({realName:[{required:!0,message:"\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],nickName:[{required:!0,message:"\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],passWord:[{required:!0,message:"\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],mobile:[{required:!0,message:"\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],userAcct:[{required:!0,message:"\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],roleIds:[{required:!0,message:"\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),i=()=>{m.value.validate(t=>{if(!t)return!1;y(u).then(()=>{q.success({message:"\u64CD\u4F5C\u6210\u529F",duration:500,onClose:()=>{d.value=!1,E("refreshDataList")}})})})};return f({init:g}),(t,e)=>{const r=R,s=L,B=K,p=W,_=h;return N(),U(_,{modelValue:d.value,"onUpdate:modelValue":e[9]||(e[9]=l=>d.value=l),title:u.id?"\u4FEE\u6539":"\u65B0\u589E","close-on-click-modal":!1},{footer:o(()=>[a(p,{onClick:e[7]||(e[7]=l=>d.value=!1)},{default:o(()=>[S]),_:1}),a(p,{type:"primary",onClick:e[8]||(e[8]=l=>i())},{default:o(()=>[j]),_:1})]),default:o(()=>[a(B,{ref_key:"dataFormRef",ref:m,model:u,rules:b.value,"label-width":"120px",onKeyup:e[6]||(e[6]=I(l=>i(),["enter"]))},{default:o(()=>[a(s,{label:"\u771F\u5B9E\u59D3\u540D",prop:"realName"},{default:o(()=>[a(r,{modelValue:u.realName,"onUpdate:modelValue":e[0]||(e[0]=l=>u.realName=l),placeholder:"\u771F\u5B9E\u59D3\u540D",maxlength:"16"},null,8,["modelValue"])]),_:1}),a(s,{label:"\u6635\u79F0",prop:"nickName"},{default:o(()=>[a(r,{modelValue:u.nickName,"onUpdate:modelValue":e[1]||(e[1]=l=>u.nickName=l),placeholder:"\u8BF7\u8F93\u5165\u6635\u79F0",maxlength:"16"},null,8,["modelValue"])]),_:1}),a(s,{label:"\u5BC6\u7801",prop:u.id?"":"passWord"},{default:o(()=>[a(r,{modelValue:u.passWord,"onUpdate:modelValue":e[2]||(e[2]=l=>u.passWord=l),type:"password",maxlength:"16","show-password":"","auto-complete":"new-password",placeholder:u.id?"\u9ED8\u8BA4\u4E3A\u7A7A\u4E0D\u4FEE\u6539\u5BC6\u7801":"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue","placeholder"])]),_:1},8,["prop"]),a(s,{label:"\u624B\u673A\u53F7",prop:"mobile"},{default:o(()=>[a(r,{modelValue:u.mobile,"onUpdate:modelValue":e[3]||(e[3]=l=>u.mobile=l),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",maxlength:"11"},null,8,["modelValue"])]),_:1}),a(s,{label:"\u8D26\u53F7",prop:"userAcct"},{default:o(()=>[a(r,{modelValue:u.userAcct,"onUpdate:modelValue":e[4]||(e[4]=l=>u.userAcct=l),placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7",maxlength:"16"},null,8,["modelValue"])]),_:1}),a(s,{label:"\u5907\u6CE8",prop:"remark"},{default:o(()=>[a(r,{type:"textarea",modelValue:u.remark,"onUpdate:modelValue":e[5]||(e[5]=l=>u.remark=l),maxlength:"128",placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}});export{J as default};