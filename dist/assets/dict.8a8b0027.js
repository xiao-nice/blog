import{bu as s}from"./index.a7d776d7.js";const i=t=>s.get("/sys/dict/type/"+t),c=t=>t.id?s.put("/sys/dict/type",t):s.post("/sys/dict/type",t),u=t=>s.get("/sys/dict/data/"+t),p=t=>t.id?s.put("/sys/dict/data",t):s.post("/sys/dict/data",t);export{p as a,i as b,c,u};
