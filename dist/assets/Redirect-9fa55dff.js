import{m,h as v,r as l,o as f,s as p,b as r,c as g,d as c,t as y,k as s,w as u,A as i,v as n}from"./index-d211a2a9.js";const h={id:"redirect-container"},k={id:"redirect-all"},C={id:"redirect-message"},F={__name:"Redirect",setup(b){const d=m(),_=v(),e=d.query,a=l(""),t=l("");return setTimeout(()=>{_.push({name:`${t.value}`})},3e3),f(async()=>{e.pageFrom==="recipient"&&(t.value="Home",e.status==="true"&&(e.payment==="信用卡"&&(a.value="信用卡付款成功 訂單成立"),e.payment==="現金"&&(a.value="訂單成立")),e.status==="false"&&(a.value="訂單失敗 請重新下訂單")),e.pageFrom==="return"&&(t="Recipient",e.status==="true"&&(a.value="申請退貨成功"),e.status==="false"&&(a.value="申請退貨失敗 請重新申請退貨")),e.pageFrom==="login"&&(e.status==="true"&&(e.goTo==="shopCart"&&(t.value="ShopCart",a.value="登入成功"),e.goTo==="memberCenter"&&(t.value="MemberCenter",a.value="登入成功")),e.status==="false"&&(t.value="Login",a.value="登入失敗")),e.pageFrom==="logout"&&e.status==="true"&&(t.value="Home",a.value="登出成功")}),(R,x)=>{const o=p("router-link");return r(),g("div",h,[c("div",k,[c("div",C,y(a.value),1),t.value==="Home"?(r(),s(o,{key:0,to:"/",class:"redirect-button"},{default:u(()=>[n("回到首頁")]),_:1})):i("",!0),t.value==="Recipient"?(r(),s(o,{key:1,to:"/recipient",class:"redirect-button"},{default:u(()=>[n("回到訂單")]),_:1})):i("",!0),t.value==="MemberCenter"?(r(),s(o,{key:2,to:"/memberCenter",class:"redirect-button"},{default:u(()=>[n("回到會員中心")]),_:1})):i("",!0),t.value==="ShopCart"?(r(),s(o,{key:3,to:"/shopCart",class:"redirect-button"},{default:u(()=>[n("回到購物車")]),_:1})):i("",!0),t.value==="Login"?(r(),s(o,{key:4,to:"/login",class:"redirect-button"},{default:u(()=>[n("回到登入")]),_:1})):i("",!0)])])}}};export{F as default};
