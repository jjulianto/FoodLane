(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"5PZE":function(t,e,a){},Cm8O:function(t,e,a){},"RpP+":function(t,e,a){var n=a("LboF"),a=a("Cm8O"),c={insert:"head",singleton:!1};n(a="string"==typeof(a=a.__esModule?a.default:a)?[[t.i,a,""]]:a,c);t.exports=a.locals||{}},Vtdi:function(I,t,e){"use strict";e.r(t);var l=e("gw9Z"),u=e("XEAi"),m=e("n/QL");const b={id:"app"};t=t=>(Object(u.D)("data-v-b99dd1d2"),t=t(),Object(u.B)(),t);const r={class:"bg-primary",id:"drawer"},s=t(()=>Object(u.i)("p",{class:"brand-title pl-2"},"FoodLane",-1)),d={class:"menu-desktop"},O={class:"nav-item mr-5"},j=t(()=>Object(u.i)("span",{class:"material-icons","aria-hidden":"true"},"home",-1)),p=Object(u.m)(" Home "),f={class:"nav-item mr-5"},h=t(()=>Object(u.i)("span",{class:"material-icons","aria-hidden":"true"},"restaurant_menu",-1)),g=Object(u.m)(" Menu "),_={class:"nav-item mr-5"},C=t(()=>Object(u.i)("span",{class:"material-icons","aria-hidden":"true"},"collections",-1)),v=Object(u.m)(" Gallery "),y={class:"nav-item mr-5"},A={key:0,class:"badge"},R=t(()=>Object(u.i)("span",{class:"material-icons","aria-hidden":"true"},"shopping_cart",-1)),T=Object(u.m)(" Cart "),E={ref:"mobileMenu",class:"menu-mobile p-3"},M={class:"nav-item"},F=t(()=>Object(u.i)("span",{class:"material-icons","aria-hidden":"true"},"home",-1)),P=Object(u.m)(" Home "),q={class:"nav-item"},w=t(()=>Object(u.i)("span",{class:"material-icons","aria-hidden":"true"},"restaurant_menu",-1)),k=Object(u.m)(" Menu "),D={class:"nav-item"},S=t(()=>Object(u.i)("span",{class:"material-icons","aria-hidden":"true"},"collections",-1)),N=Object(u.m)(" Gallery "),Q={class:"nav-item"},x={key:0,class:"badge"},U=t(()=>Object(u.i)("span",{class:"material-icons","aria-hidden":"true"},"shopping_cart",-1)),Y=Object(u.m)(" Cart ");var V=e("oekR"),a=e("VQKG"),t={name:"Navbar",setup(){const t=Object(a.b)(),e=Object(V.m)(null);return{cartCount:Object(u.e)(()=>t.getters["cart/cartCount"]),mobileMenu:e,toggle:()=>{e.value.classList.toggle("show-mobile-menu")}}}},n=(e("sLGI"),e("uaZu")),n=e.n(n);var c={name:"Footer"},t={name:"App",components:{Navbar:n()(t,[["render",function(t,e,a,n,c,o){var i=Object(u.F)("router-link");return Object(u.A)(),Object(u.h)("header",null,[Object(u.i)("nav",r,[s,Object(u.i)("ul",d,[Object(u.i)("li",O,[Object(u.n)(i,{to:{name:"home"}},{default:Object(u.P)(()=>[j,p]),_:1})]),Object(u.i)("li",f,[Object(u.n)(i,{to:{name:"menu"}},{default:Object(u.P)(()=>[h,g]),_:1})]),Object(u.i)("li",_,[Object(u.n)(i,{to:{name:"gallery"}},{default:Object(u.P)(()=>[C,v]),_:1})]),Object(u.i)("li",y,[Object(u.n)(i,{to:{name:"cart"}},{default:Object(u.P)(()=>[n.cartCount?(Object(u.A)(),Object(u.h)("span",A,Object(m.M)(n.cartCount),1)):Object(u.g)("v-if",!0),R,T]),_:1})])]),Object(u.i)("a",{onClick:e[0]||(e[0]=function(){return n.toggle&&n.toggle(...arguments)}),id:"hamburger",class:"mr-1","aria-label":"Hamburger"},"☰")]),Object(u.i)("ul",E,[Object(u.i)("li",M,[Object(u.n)(i,{to:{name:"home"}},{default:Object(u.P)(()=>[F,P]),_:1})]),Object(u.i)("li",q,[Object(u.n)(i,{to:{name:"menu"}},{default:Object(u.P)(()=>[w,k]),_:1})]),Object(u.i)("li",D,[Object(u.n)(i,{to:{name:"gallery"}},{default:Object(u.P)(()=>[S,N]),_:1})]),Object(u.i)("li",Q,[Object(u.n)(i,{to:{name:"cart"}},{default:Object(u.P)(()=>[n.cartCount?(Object(u.A)(),Object(u.h)("span",x,Object(m.M)(n.cartCount),1)):Object(u.g)("v-if",!0),U,Y]),_:1})])],512)])}],["__scopeId","data-v-b99dd1d2"]]),Footer:n()(c,[["render",function(t,e,a,n,c,o){return Object(u.A)(),Object(u.h)("footer",null,"Copyright © 2022 - FoodLane")}]])}},c=(e("yR7M"),n()(t,[["render",function(t,e,a,n,c,o){var i=Object(u.F)("Navbar"),r=Object(u.F)("router-view"),s=Object(u.F)("Footer");return Object(u.A)(),Object(u.h)("div",b,[Object(u.n)(i),Object(u.n)(r,{class:Object(m.J)({"mt-10":"/"!==t.$route.path})},{default:Object(u.P)(t=>{let e=t["Component"];return[Object(u.n)(l.a,{name:"fade",mode:"out-in"},{default:Object(u.P)(()=>[(Object(u.A)(),Object(u.f)(Object(u.H)(e)))]),_:2},1024)]}),_:1},8,["class"]),Object(u.n)(s)])}]])),n=e("oYx3"),t=e("DkTT"),o=e("vDqi"),i=e.n(o).a.create({baseURL:"https://www.themealdb.com/api/json/v1/1"}),o={namespaced:!0,state:{categories:[]},mutations:{GET_CATEGORIES(t,e){t.categories=e}},actions:{getCategories(t){let e=t["commit"];i.get("/categories.php").then(t=>{e("GET_CATEGORIES",t.data.categories)}).catch(t=>{console.log(t)})}},getters:{}},G={namespaced:!0,state:{foods:[]},mutations:{GET_FOODS(t,e){t.foods=e}},actions:{getFoods(t,e){let a=t["commit"];i.get("/filter.php?c="+e).then(t=>{a("GET_FOODS",t.data.meals)}).catch(t=>{console.log(t)})}},getters:{}},B={namespaced:!0,state:{cart:[]},mutations:{ADD_TO_CART(t,e){let{food:a,quantity:n}=e,c=t.cart.find(t=>t.food.idMeal===a.idMeal);c?c.quantity+=n:t.cart.push({food:a,quantity:n})},REMOVE_FROM_CART(t,e){t.cart=t.cart.filter(t=>t.food.idMeal!==e.idMeal)},INCREASE_CART_QUANTITY(t,e){let{food:a,quantity:n}=e,c=t.cart.find(t=>t.food.idMeal===a.idMeal);c.quantity+=n},DECREASE_CART_QUANTITY(t,e){let{food:a,quantity:n}=e,c=t.cart.find(t=>t.food.idMeal===a.idMeal);c.quantity-=n},CLEAR_CART(t){t.cart=[]}},actions:{addToCart(t,e){let a=t["commit"];var{food:t,quantity:e}=e;a("ADD_TO_CART",{food:t,quantity:e})},removeFromCart(t,e){let a=t["commit"];a("REMOVE_FROM_CART",e)},clearCart(t){let e=t["commit"];e("CLEAR_CART")},increaseCartQuantity(t,e){let a=t["commit"];var{food:t,quantity:e}=e;a("INCREASE_CART_QUANTITY",{food:t,quantity:e})},decreaseCartQuantity(t,e){let a=t["commit"];var{food:t,quantity:e}=e;a("DECREASE_CART_QUANTITY",{food:t,quantity:e})}},getters:{cartCount(t){return t.cart.length},cartSummary(t){return t.cart.map(t=>t.quantity).reduce((t,e)=>t+e,0)}}},t=Object(t.a)({paths:["cart"]}),o=Object(a.a)({modules:{home:o,menu:G,cart:B},plugins:[t]}),G=e("IFjU");e("sQfG"),e("ndzN");const L=Object(l.c)(c);L.use(n.a),L.use(o),L.use(G.a),L.mixin({methods:{moneyFormat(t){let e=(+t).toFixed(0).replace(".",",");return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}}),L.mount("#app")},gvlR:function(t,e,a){},oYx3:function(t,n,c){"use strict";!function(t){var e=c("bAI0"),a=[{path:"/",name:"home",component:()=>c.e(4).then(c.bind(null,"u1G+"))},{path:"/menu",name:"menu",component:()=>Promise.all([c.e(0),c.e(6)]).then(c.bind(null,"mgs9"))},{path:"/gallery",name:"gallery",component:()=>c.e(3).then(c.bind(null,"DXe/"))},{path:"/cart",name:"cart",component:()=>Promise.all([c.e(0),c.e(1)]).then(c.bind(null,"t4kb"))},{path:"/checkout",name:"checkout",component:()=>Promise.all([c.e(0),c.e(2)]).then(c.bind(null,"fLTd"))}],e=Object(e.a)({history:Object(e.b)(),base:t.env.BASE_URL,routes:a});n.a=e}.call(this,c("8oxB"))},oewk:function(t,e,a){var n=a("LboF"),a=a("5PZE"),c={insert:"head",singleton:!1};n(a="string"==typeof(a=a.__esModule?a.default:a)?[[t.i,a,""]]:a,c);t.exports=a.locals||{}},sLGI:function(t,e,a){"use strict";a("RpP+")},sQfG:function(t,e,a){var n=a("LboF"),a=a("gvlR"),c={insert:"head",singleton:!1};n(a="string"==typeof(a=a.__esModule?a.default:a)?[[t.i,a,""]]:a,c);t.exports=a.locals||{}},yR7M:function(t,e,a){"use strict";a("oewk")}},[["Vtdi",7,0]]]);