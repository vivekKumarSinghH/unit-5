import{j as u,r as c,a as d,R as p,b as f}from"./vendor.a4c3fb30.js";const h=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};h();const o=u.exports.jsx,m=u.exports.jsxs,x=()=>{const[a,n]=c.exports.useState(""),[l,i]=c.exports.useState([]),[e,t]=c.exports.useState(1);c.exports.useEffect(()=>{r()},[e]);const r=()=>{d.get(`http://localhost:3301/todos?_limit=3&_page=${e}`).then(s=>{i(s.data)})};return m("div",{children:[o("input",{type:"text",onChange:s=>{n(s.target.value)}}),o("button",{onClick:()=>{d.post("http://localhost:3301/todos",{title:a,status:!1}).then(()=>{r()})},children:"Save"}),l.map(s=>o("div",{children:s.title},s.id)),o("button",{onClick:()=>{t(e+1)},children:"Next"}),o("button",{onClick:()=>{t(e-1)},children:"Prev"})]})};function g(){return o("div",{className:"App",children:o(x,{})})}p.render(o(f.StrictMode,{children:o(g,{})}),document.getElementById("root"));