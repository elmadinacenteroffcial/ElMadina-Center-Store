/*
  El Madina Center
  الأقسام والمنتجات قابلة للتعديل والإضافة لاحقًا.
*/
function productPlaceholder(label, emoji){
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
    <rect width="800" height="800" fill="#f4efe5"/>
    <circle cx="400" cy="300" r="145" fill="#173f35" opacity=".10"/>
    <text x="400" y="335" text-anchor="middle" font-family="Arial" font-size="110">${emoji}</text>
    <text x="400" y="500" text-anchor="middle" font-family="Arial" font-size="38" font-weight="700" fill="#173f35">${label}</text>
    <text x="400" y="555" text-anchor="middle" font-family="Arial" font-size="24" fill="#777">El Madina Center</text>
  </svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

window.STORE_CATEGORIES = [
  {id:"scarves", name:"طرح حريمي", icon:"🧕"},
  {id:"niqab", name:"نقاب", icon:"🖤"},
  {id:"esdal", name:"إسدال", icon:"🕌"},
  {id:"khimar", name:"خمار", icon:"🧕"},
  {id:"wallets", name:"بوك / حافظات نقود", icon:"👛"},
  {id:"perfumes", name:"برفانات", icon:"🌸"}
];

window.STORE_PRODUCTS = [
  {id:"scarf-1",category:"scarves",name:"طرحة حريمي سادة",price:180,image:productPlaceholder("طرحة حريمي","🧕"),desc:"طرحة أنيقة للاستخدام اليومي."},
  {id:"scarf-2",category:"scarves",name:"طرحة حريمي شيفون",price:220,image:productPlaceholder("طرحة شيفون","🧕"),desc:"خامة خفيفة وشكل أنيق."},
  {id:"scarf-3",category:"scarves",name:"طرحة حريمي فاخرة",price:280,image:productPlaceholder("طرحة فاخرة","🧕"),desc:"اختيار مناسب للمناسبات."},

  {id:"niqab-1",category:"niqab",name:"نقاب سادة",price:170,image:productPlaceholder("نقاب","🖤"),desc:"تصميم عملي ومريح."},
  {id:"niqab-2",category:"niqab",name:"نقاب خامة ناعمة",price:210,image:productPlaceholder("خامة ناعمة","🖤"),desc:"خامة ناعمة للاستخدام اليومي."},
  {id:"niqab-3",category:"niqab",name:"نقاب فاخر",price:260,image:productPlaceholder("نقاب فاخر","🖤"),desc:"تصميم أنيق بخامة مميزة."},

  {id:"esdal-1",category:"esdal",name:"إسدال سادة",price:450,image:productPlaceholder("إسدال","🕌"),desc:"إسدال مريح وعملي."},
  {id:"esdal-2",category:"esdal",name:"إسدال خامة فاخرة",price:550,image:productPlaceholder("إسدال فاخر","🕌"),desc:"خامة ناعمة وتصميم أنيق."},
  {id:"esdal-3",category:"esdal",name:"إسدال عملي",price:400,image:productPlaceholder("إسدال عملي","🕌"),desc:"مناسب للاستخدام اليومي."},

  {id:"khimar-1",category:"khimar",name:"خمار سادة",price:300,image:productPlaceholder("خمار","🧕"),desc:"خمار عملي وأنيق."},
  {id:"khimar-2",category:"khimar",name:"خمار خامة ناعمة",price:350,image:productPlaceholder("خمار ناعم","🧕"),desc:"راحة وأناقة في نفس الوقت."},
  {id:"khimar-3",category:"khimar",name:"خمار طويل",price:390,image:productPlaceholder("خمار طويل","🧕"),desc:"تغطية مريحة وتصميم أنيق."},

  {id:"wallet-1",category:"wallets",name:"بوك حريمي",price:180,image:productPlaceholder("بوك","👛"),desc:"حافظة عملية وأنيقة."},
  {id:"wallet-2",category:"wallets",name:"حافظة نقود",price:150,image:productPlaceholder("حافظة","👛"),desc:"حجم عملي للاستخدام اليومي."},
  {id:"wallet-3",category:"wallets",name:"بوك فاخر",price:250,image:productPlaceholder("بوك فاخر","👛"),desc:"خامة وشكل مميز."},

  {id:"perfume-1",category:"perfumes",name:"برفان نسائي",price:350,image:productPlaceholder("برفان","🌸"),desc:"رائحة أنيقة للاستخدام اليومي."},
  {id:"perfume-2",category:"perfumes",name:"برفان فاخر",price:450,image:productPlaceholder("برفان فاخر","🌸"),desc:"اختيار مميز للمناسبات."},
  {id:"perfume-3",category:"perfumes",name:"برفان شرقي",price:400,image:productPlaceholder("برفان شرقي","🌸"),desc:"رائحة شرقية مميزة."}
];
