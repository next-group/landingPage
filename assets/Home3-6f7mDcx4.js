import{_ as U,C as H,S as L,s as N,a as B}from"./IconContact-CbaJo_eU.js";import{h as l,c as a,b as e,d as C,j as q,a as d,k as R,T as S,l as Z,e as n,w as A,r as i,u as I,t as M,f as v,g as E,i as F}from"./index-C9Sc44_S.js";import{D as Y}from"./IconDownload-D6798-YJ.js";import{_ as X}from"./Menu-Bo-kndnU.js";const G={},J={xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},K=e("path",{d:"M680-80v-120H560v-80h120v-120h80v120h120v80H760v120h-80Zm-480-80q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h40v-80h80v80h240v-80h80v80h40q33 0 56.5 23.5T760-720v244q-20-3-40-3t-40 3v-84H200v320h280q0 20 3 40t11 40H200Zm0-480h480v-80H200v80Zm0 0v-80 80Z"},null,-1),Q=[K];function W(c,u){return l(),a("svg",J,Q)}const ee=U(G,[["render",W]]),te={key:0,class:"bg-white w-[calc(100vw-2rem)] h-[calc(100vh-2rem)] fixed top-4 left-4 right-4 bottom-4 z-50 flex justify-center items-center rounded-lg overflow-hidden overflow-y-auto border border-solid border-gray-300"},oe=["src"],le=C({__name:"Modal",props:{calendlyUrl:{type:String,default:()=>{}},isModalOpen:{type:Boolean,default:()=>!1}},emits:["handleModal"],setup(c){return(u,h)=>(l(),q(Z,{to:"body"},[d(S,null,{default:R(()=>[c.isModalOpen?(l(),a("div",te,[e("button",{onClick:h[0]||(h[0]=o=>u.$emit("handleModal",!1)),class:"absolute top-2 right-2"},"Fermer"),c.calendlyUrl!==void 0&&c.calendlyUrl.length>0?(l(),a("iframe",{key:0,src:c.calendlyUrl,width:"1000",height:"1000",class:"w-full h-full"},null,8,oe)):n("",!0)])):n("",!0)]),_:1})]))}}),ae=U(le,[["__scopeId","data-v-be63d35e"]]),se={class:"relative"},re=e("div",{class:"bg-1 absolute w-full h-full top-[250px] -z-1 rotate-3 scale-y-10 scale-x-150"},null,-1),ne=e("div",{class:"bg-2 absolute w-full h-full top-[250px] -z-0 -rotate-3 scale-y-10 scale-x-150"},null,-1),ie={class:"overflow-x-hidden overflow-y-auto w-screen h-screen px-4"},de={class:"relative z-10 flex-col items-center justify-center max-w-[1280px] w-full m-auto"},ce={class:"flex justify-center mt-8"},ue={key:0,class:"flex flex-nowrap justify-center items-center mt-12"},he=e("div",{class:"bg-gray-300 w-1/3 h-8 animate-pulse rounded-md mr-6"},null,-1),fe=e("div",{class:"bg-gray-300 w-2/3 h-8 animate-pulse rounded-md"},null,-1),pe=[he,fe],ve={key:1,class:"flex flex-wrap md:flex-nowrap justify-center items-center w-full relative mt-8"},me={class:"font-poppins text-xl md:text-3xl text-orange-500 text-center md:text-right pr-4"},xe=e("div",{class:"w-[1px] bg-gray-400 h-[70px] hidden md:block"},null,-1),ge={class:"font-poppins text-xl md:text-3xl text-gray-700 text-center md:text-left pl-4"},_e={class:"relative z-10 mt-16 justify-center flex"},we={key:0,class:"w-full max-w-[1280px] mt-8"},ye=e("div",{class:"w-full max-h-[720px] h-[400px] bg-gray-300 animate-pulse rounded-md"},null,-1),be=e("div",{class:"flex justify-center items-center mt-8 gap-8"},[e("div",{class:"bg-gray-300 w-[300px] h-16 animate-pulse rounded-full"}),e("div",{class:"bg-gray-300 w-[300px] h-16 animate-pulse rounded-full"})],-1),ke=[ye,be],$e={key:1,class:"max-w-[1280px] w-full"},je={key:0,class:"relative overflow-hidden w-full pt-[56.25%]"},Ie=["src"],Me={key:1,class:"flex justify-center"},Ue=["src"],Ce={class:"flex flex-wrap md:flex-nowrap w-full mt-6 justify-center mb-20 gap-6"},qe=["href"],ze={key:2},De=e("p",{class:"text-center text-3xl text-orange-500"},"Aucun consultant trouvé",-1),Te=e("p",{class:"text-center mt-24 text-2xl text-white"},"Pas de panique 😉 ! Si vous cherchez un profil particulier, contactez-nous directement",-1),Ve={href:"https://www.next.fr/contact/contact-next-group",id:"landing-page-contact-btn",target:"_blank",class:"mt-4 group font-poppins border-solid border-white border-2 bg-white text-gray-700 px-4 py-2 rounded-full text-xl md:text-2xl hover:border-solid hover:border-white hover:border-2 hover:bg-orange-600 hover:text-white transition duration-200 cursor-pointer flex flex-no-wrap justify-center items-center w-fit mx-auto"},Re=C({__name:"Home3",setup(c){const u=E();A(()=>u.params.id,()=>{x()});const h=i(),o=i(),s=i(!0),r=i(!0),p=i(!1),f=i(Object.keys(u.query)[0]),m=i(!1);async function z(){s.value=!0,r.value=!1;try{const t=await fetch(`https://script.google.com/macros/s/AKfycbzLZo4sMmYsLAn937LXV17u2RTSYsrRnDoIRjUuPEAXoYDMjsYqnVevwaJCjbOBM7qEZQ/exec?path=${encodeURI("Form Responses 1")}&action=read&consultantId=${f.value}`);h.value=await t.json(),x()}catch(t){s.value=!1,r.value=!0,console.error("Error fetching data:",t)}}f.value!==void 0&&z();function x(){h.value!==void 0&&(s.value=!0,o.value=h.value.data.filter(t=>t.id==f.value).map(t=>({name:t.Prénom,profession:t["Poste - Header info"],pdfUrl:t["pdf url"],rdvUrl:`https://calendly.com/${t.id}/next`,videoId:D(t)}))[0],s.value=!1,r.value=!0,P())}function D(t){return t["video id"]===void 0||t["video id"].length===0?(p.value=!1,`/landingPage/images/video-next-${T(t.Prénom)}.gif`):(p.value=!0,t["video id"])}function T(t){return t.replace(/\s/g,"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}const V=new H({cloud:{cloudName:"doahcfup8"}}).image("gx46hrcpnd72qij0egvh"),{screenview:O}=F(),P=()=>{var t;O({screen_name:`Landing Page - ${((t=o.value)==null?void 0:t.name)||u.query.id}`,app_name:"Landing Page"})};function g(t){m.value=t}return(t,_)=>{var w,y,b,k,$,j;return l(),a("div",se,[d(X,{consultantId:f.value},null,8,["consultantId"]),re,ne,d(L,{class:"fixed left-[-110px] z-0 opacity-10 bottom-[-465px] w-[600px]"}),e("div",ie,[e("header",de,[e("h1",ce,[d(I(N),{cldImg:I(V),alt:"NEXT",class:"max-w-[200px]"},null,8,["cldImg"])]),s.value&&!r.value?(l(),a("div",ue,pe)):n("",!0),!s.value&&r.value&&o.value!==void 0?(l(),a("div",ve,[e("h2",me,M((w=o.value)==null?void 0:w.name),1),xe,e("h2",ge,M((y=o.value)==null?void 0:y.profession),1)])):n("",!0)]),e("main",_e,[s.value&&!r.value?(l(),a("div",we,ke)):n("",!0),!s.value&&r.value&&o.value!==void 0?(l(),a("div",$e,[p.value?(l(),a("div",je,[e("iframe",{src:`https://player.cloudinary.com/embed/?public_id=${o.value.videoId}&cloud_name=doahcfup8&player[muted]=false&player[posterOptions][transformation][startOffset]=2&player[autoplay]=true`,width:"1280",height:"720",class:"absolute top-0 right-0 bottom-0 left-0 w-full h-full",allow:"autoplay; fullscreen; encrypted-media; picture-in-picture",allowfullscreen:"",frameborder:"0"},null,8,Ie)])):(l(),a("div",Me,[e("img",{src:(b=o.value)==null?void 0:b.videoId,width:"1280",height:"720",style:{"max-width":"1280px",width:"100%",height:"auto"}},null,8,Ue)])),e("div",Ce,[e("a",{href:(k=o.value)==null?void 0:k.pdfUrl,id:"landing-page-download-btn",target:"_blank",class:"group font-poppins border-solid border-white border-2 bg-white text-gray-700 px-4 py-2 rounded-full text-xl md:text-2xl hover:border-solid hover:border-white hover:border-2 hover:bg-orange-600 hover:text-white transition duration-200 cursor-pointer flex flex-no-wrap justify-center items-center"},[d(Y,{class:"w-8 h-8 mr-2 fill-orange-500 group-hover:fill-white"}),v(" Télécharger le CV ")],8,qe),e("a",{onClick:_[0]||(_[0]=Pe=>g(!0)),id:"landing-page-dating-btn",class:"group font-poppins border-solid border-gray-700 border-2 bg-gray-700 text-white px-4 py-2 rounded-full text-xl md:text-2xl hover:border-solid hover:border-white hover:border-2 hover:bg-orange-600 hover:text-white transition duration-200 cursor-pointer flex flex-no-wrap justify-center items-center"},[d(ee,{class:"w-8 h-8 mr-2 fill-orange-500 group-hover:fill-white"}),v(" Prendre un RDV ")])])])):n("",!0),r.value&&o.value===void 0?(l(),a("div",ze,[De,Te,e("a",Ve,[d(B,{class:"w-8 h-8 mr-2 fill-orange-500 group-hover:fill-white"}),v(" Contact ")])])):n("",!0),($=o.value)!=null&&$.rdvUrl?(l(),q(ae,{key:3,isModalOpen:m.value,onHandleModal:g,calendlyUrl:(j=o.value)==null?void 0:j.rdvUrl},null,8,["isModalOpen","calendlyUrl"])):n("",!0)])])])}}});export{Re as default};
