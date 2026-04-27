const DATA_URLS = {
  stars: "https://cdn.jsdelivr.net/gh/dieghernan/celestial_data@main/data/stars.6.min.geojson",
  cnPoints: "https://cdn.jsdelivr.net/gh/dieghernan/celestial_data@main/data/constellations.cn.min.geojson",
  cnLines: "https://cdn.jsdelivr.net/gh/dieghernan/celestial_data@main/data/constellations.lines.cn.min.geojson",
  starNamesCnCsv: "https://cdn.jsdelivr.net/gh/dieghernan/celestial_data@main/data/starnames.cn.csv",
  starNamesWestern: "https://cdn.jsdelivr.net/gh/dieghernan/celestial_data@main/data/starnames.csv",
  westernBorders: "https://cdn.jsdelivr.net/gh/dieghernan/celestial_data@main/data/constellations.borders.min.geojson",
  westernCenters: "https://cdn.jsdelivr.net/gh/dieghernan/celestial_data@main/data/constellations.min.geojson"
};
const cities={lausanne:{name:"洛桑",lat:46.5197,lon:6.6323},zurich:{name:"苏黎世",lat:47.3769,lon:8.5417},beijing:{name:"北京",lat:39.9042,lon:116.4074},shanghai:{name:"上海",lat:31.2304,lon:121.4737},hongkong:{name:"香港",lat:22.3193,lon:114.1694}};
const fallbackStars=[
{uid:"fb-54061",hip:"54061",zh:"天枢",py:"Tiān Shū",western:"Dubhe",designation:"α Ursae Majoris",hd:"HD 95689",constZh:"大熊座",constEn:"Ursa Major",ra:11.0621,dec:61.751,mag:1.79,ast:"北斗"},
{uid:"fb-53910",hip:"53910",zh:"天璇",py:"Tiān Xuán",western:"Merak",designation:"β Ursae Majoris",hd:"HD 95418",constZh:"大熊座",constEn:"Ursa Major",ra:11.0307,dec:56.3824,mag:2.37,ast:"北斗"},
{uid:"fb-58001",hip:"58001",zh:"天玑",py:"Tiān Jī",western:"Phecda",designation:"γ Ursae Majoris",hd:"HD 103287",constZh:"大熊座",constEn:"Ursa Major",ra:11.8972,dec:53.6948,mag:2.44,ast:"北斗"},
{uid:"fb-59774",hip:"59774",zh:"天权",py:"Tiān Quán",western:"Megrez",designation:"δ Ursae Majoris",hd:"HD 106591",constZh:"大熊座",constEn:"Ursa Major",ra:12.2571,dec:57.0326,mag:3.31,ast:"北斗"},
{uid:"fb-62956",hip:"62956",zh:"玉衡",py:"Yù Héng",western:"Alioth",designation:"ε Ursae Majoris",hd:"HD 112185",constZh:"大熊座",constEn:"Ursa Major",ra:12.9005,dec:55.9598,mag:1.77,ast:"北斗"},
{uid:"fb-65378",hip:"65378",zh:"开阳",py:"Kāi Yáng",western:"Mizar",designation:"ζ Ursae Majoris",hd:"HD 116656",constZh:"大熊座",constEn:"Ursa Major",ra:13.3987,dec:54.9254,mag:2.23,ast:"北斗"},
{uid:"fb-67301",hip:"67301",zh:"摇光",py:"Yáo Guāng",western:"Alkaid",designation:"η Ursae Majoris",hd:"HD 120315",constZh:"大熊座",constEn:"Ursa Major",ra:13.7923,dec:49.3133,mag:1.86,ast:"北斗"},
{uid:"fb-27989",hip:"27989",zh:"参宿四",py:"Shēn Xiù Sì",western:"Betelgeuse",designation:"α Orionis",hd:"HD 39801",constZh:"猎户座",constEn:"Orion",ra:5.9195,dec:7.4071,mag:.42,ast:"参"},
{uid:"fb-26311",hip:"26311",zh:"参宿二",py:"Shēn Xiù Èr",western:"Alnilam",designation:"ε Orionis",hd:"HD 37128",constZh:"猎户座",constEn:"Orion",ra:5.6036,dec:-1.2019,mag:1.69,ast:"参"},
{uid:"fb-24436",hip:"24436",zh:"参宿七",py:"Shēn Xiù Qī",western:"Rigel",designation:"β Orionis",hd:"HD 34085",constZh:"猎户座",constEn:"Orion",ra:5.2423,dec:-8.2016,mag:.13,ast:"参"},
{uid:"fb-80763",hip:"80763",zh:"心宿二",py:"Xīn Xiù Èr",western:"Antares",designation:"α Scorpii",hd:"HD 148478",constZh:"天蝎座",constEn:"Scorpius",ra:16.4901,dec:-26.432,mag:1.06,ast:"心"},
{uid:"fb-91262",hip:"91262",zh:"织女一",py:"Zhī Nǚ Yī",western:"Vega",designation:"α Lyrae",hd:"HD 172167",constZh:"天琴座",constEn:"Lyra",ra:18.6156,dec:38.7837,mag:.03,ast:"织女"},
{uid:"fb-97649",hip:"97649",zh:"河鼓二",py:"Hé Gǔ Èr",western:"Altair",designation:"α Aquilae",hd:"HD 187642",constZh:"天鹰座",constEn:"Aquila",ra:19.8464,dec:8.8683,mag:.77,ast:"河鼓"},
{uid:"fb-102098",hip:"102098",zh:"天津四",py:"Tiān Jīn Sì",western:"Deneb",designation:"α Cygni",hd:"HD 197345",constZh:"天鹅座",constEn:"Cygnus",ra:20.6905,dec:45.2803,mag:1.25,ast:"天津"},
{uid:"fb-65474",hip:"65474",zh:"角宿一",py:"Jiǎo Xiù Yī",western:"Spica",designation:"α Virginis",hd:"HD 116658",constZh:"室女座",constEn:"Virgo",ra:13.4199,dec:-11.1613,mag:.98,ast:"角"},
{uid:"fb-30438",hip:"30438",zh:"天狼",py:"Tiān Láng",western:"Sirius",designation:"α Canis Majoris",hd:"HD 48915",constZh:"大犬座",constEn:"Canis Major",ra:6.7525,dec:-16.7161,mag:-1.46,ast:"天狼"}
];
const fallbackAsterisms=[
{id:"fb-beidou",name:"北斗",py:"Běi Dǒu",en:"Northern Dipper",center:{ra:12.5,dec:56},lines:[[{ra:11.0621,dec:61.751},{ra:11.0307,dec:56.3824},{ra:11.8972,dec:53.6948},{ra:12.2571,dec:57.0326},{ra:12.9005,dec:55.9598},{ra:13.3987,dec:54.9254},{ra:13.7923,dec:49.3133}]]},
{id:"fb-shen",name:"参",py:"Shēn",en:"Three Stars",center:{ra:5.6,dec:-2},lines:[[{ra:5.9195,dec:7.4071},{ra:5.6036,dec:-1.2019},{ra:5.2423,dec:-8.2016}]]},
{id:"fb-xin",name:"心",py:"Xīn",en:"Heart",center:{ra:16.49,dec:-26.4},lines:[[{ra:16.49,dec:-26.4}]]},
{id:"fb-zhinv",name:"织女",py:"Zhī Nǚ",en:"Girl Helper",center:{ra:18.6156,dec:38.7837},lines:[[{ra:18.6156,dec:38.7837}]]}
];
const CONST_ROWS="And|Andromeda|Andromedae|仙女座;Ant|Antlia|Antliae|唧筒座;Aps|Apus|Apodis|天燕座;Aqr|Aquarius|Aquarii|宝瓶座;Aql|Aquila|Aquilae|天鹰座;Ara|Ara|Arae|天坛座;Ari|Aries|Arietis|白羊座;Aur|Auriga|Aurigae|御夫座;Boo|Boötes|Boötis|牧夫座;Cae|Caelum|Caeli|雕具座;Cam|Camelopardalis|Camelopardalis|鹿豹座;Cnc|Cancer|Cancri|巨蟹座;CVn|Canes Venatici|Canum Venaticorum|猎犬座;CMa|Canis Major|Canis Majoris|大犬座;CMi|Canis Minor|Canis Minoris|小犬座;Cap|Capricornus|Capricorni|摩羯座;Car|Carina|Carinae|船底座;Cas|Cassiopeia|Cassiopeiae|仙后座;Cen|Centaurus|Centauri|半人马座;Cep|Cepheus|Cephei|仙王座;Cet|Cetus|Ceti|鲸鱼座;Cyg|Cygnus|Cygni|天鹅座;Del|Delphinus|Delphini|海豚座;Dra|Draco|Draconis|天龙座;Gem|Gemini|Geminorum|双子座;Her|Hercules|Herculis|武仙座;Leo|Leo|Leonis|狮子座;Lyr|Lyra|Lyrae|天琴座;Ori|Orion|Orionis|猎户座;Sco|Scorpius|Scorpii|天蝎座;Tau|Taurus|Tauri|金牛座;UMa|Ursa Major|Ursae Majoris|大熊座;Vir|Virgo|Virginis|室女座;Boo|Boötes|Boötis|牧夫座;Aql|Aquila|Aquilae|天鹰座;CMa|Canis Major|Canis Majoris|大犬座;CMi|Canis Minor|Canis Minoris|小犬座;Cyg|Cygnus|Cygni|天鹅座;Aur|Auriga|Aurigae|御夫座";
const CONSTS=CONST_ROWS.split(";").map(r=>{const [abbr,name,gen,zh]=r.split("|");return{abbr,name,gen,zh}});
const CONST_BY_ABBR=new Map(CONSTS.map(c=>[c.abbr.toLowerCase(),c]));
const CONST_BY_GEN=new Map(CONSTS.map(c=>[normKey(c.gen),c]));
const commonConstByHip={"54061":"UMa","53910":"UMa","58001":"UMa","59774":"UMa","62956":"UMa","65378":"UMa","67301":"UMa","27989":"Ori","24436":"Ori","26311":"Ori","80763":"Sco","91262":"Lyr","97649":"Aql","102098":"Cyg","65474":"Vir","30438":"CMa"};
const state={stars:fallbackStars,asterisms:fallbackAsterisms,mode:"fallback",lat:46.5197,lon:6.6323,city:"洛桑",viewAz:0,viewPitch:28,pitchOffset:0,lastSensor:null,fov:95,magLimit:6,sensor:false,camera:false,stream:null,drag:false,dragMoved:false,selected:null,screens:[],astScreens:[],constBorders:[],constCenters:[],coverage:{cn:0,west:0}};
const $=id=>document.getElementById(id);
const canvas=$("sky"),ctx=canvas.getContext("2d"),camera=$("camera"),detail=$("detail"),settings=$("settings"),catalog=$("catalog"),toast=$("toast");
function pad(n){return String(n).padStart(2,"0")} function toLocal(d){return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`}
$("dt").value=toLocal(new Date()); $("lat").value=state.lat; $("lon").value=state.lon;
function esc(s){return String(s??"").replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]))}
function date(){return $("dt").value?new Date($("dt").value):new Date()}
function deg(x){return x*Math.PI/180} function rad(x){return x*180/Math.PI} function normDeg(x){return ((x%360)+360)%360}
function jd(d){return d.getTime()/86400000+2440587.5}
function gmst(d){return normDeg(280.46061837+360.98564736629*(jd(d)-2451545))}
function altAz(ra,dec,d,lat,lon){const lst=normDeg(gmst(d)+lon),ha=deg(normDeg(lst-ra*15+180)-180),de=deg(dec),la=deg(lat);const sa=Math.sin(de)*Math.sin(la)+Math.cos(de)*Math.cos(la)*Math.cos(ha);const alt=Math.asin(Math.max(-1,Math.min(1,sa)));const y=-Math.sin(ha),x=Math.tan(de)*Math.cos(la)-Math.sin(la)*Math.cos(ha);return {alt:rad(alt),az:normDeg(rad(Math.atan2(y,x)))}}
function clamp(v,a,b){return Math.min(b,Math.max(a,v))}
function vec(az,alt){az=deg(az);alt=deg(alt);return{x:Math.cos(alt)*Math.sin(az),y:Math.cos(alt)*Math.cos(az),z:Math.sin(alt)}}
function dot(a,b){return a.x*b.x+a.y*b.y+a.z*b.z} function cross(a,b){return{x:a.y*b.z-a.z*b.y,y:a.z*b.x-a.x*b.z,z:a.x*b.y-a.y*b.x}} function unit(v){const m=Math.hypot(v.x,v.y,v.z)||1;return{x:v.x/m,y:v.y/m,z:v.z/m}}
function basis(){const f=vec(state.viewAz,state.viewPitch),up={x:0,y:0,z:1};let r=cross(f,up);if(Math.hypot(r.x,r.y,r.z)<1e-6)r={x:1,y:0,z:0};r=unit(r);return{f,r,u:unit(cross(r,f))}}
function project(alt,az){const w=canvas.clientWidth,h=canvas.clientHeight,b=basis(),d=vec(az,alt);const x=dot(d,b.r),y=dot(d,b.u),z=dot(d,b.f);if(z<=.02)return null;const aspect=w/Math.max(1,h),fx=(w/2)/Math.tan(deg(state.fov/2)),vfov=2*Math.atan(Math.tan(deg(state.fov/2))/aspect),fy=(h/2)/Math.tan(vfov/2);const sx=w/2+x/z*fx,sy=h/2-y/z*fy;if(sx<-160||sx>w+160||sy<-160||sy>h+160)return null;return{x:sx,y:sy,z}}
function resize(){const dpr=window.devicePixelRatio||1,w=innerWidth,h=innerHeight;canvas.width=w*dpr;canvas.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)}
function curve(alt){let pts=[];for(let da=-180;da<=180;da+=2){const p=project(alt,normDeg(state.viewAz+da));if(p)pts.push(p)}return pts.sort((a,b)=>a.x-b.x)}
function drawBg(){const w=canvas.clientWidth,h=canvas.clientHeight;ctx.clearRect(0,0,w,h);if(!state.camera){const g=ctx.createLinearGradient(0,0,0,h);g.addColorStop(0,"#18244a");g.addColorStop(.6,"#071024");g.addColorStop(1,"#02040a");ctx.fillStyle=g;ctx.fillRect(0,0,w,h)}else{ctx.fillStyle="rgba(4,7,16,.18)";ctx.fillRect(0,0,w,h)}}
function drawGrid(){const w=canvas.clientWidth,h=canvas.clientHeight;const horizon=curve(0);if(horizon.length>1){ctx.beginPath();ctx.moveTo(horizon[0].x,h);for(const p of horizon)ctx.lineTo(p.x,p.y);ctx.lineTo(horizon.at(-1).x,h);ctx.closePath();ctx.fillStyle=state.camera?"rgba(170,170,185,.10)":"rgba(170,170,185,.20)";ctx.fill();ctx.strokeStyle="rgba(255,255,255,.28)";ctx.lineWidth=1.4;ctx.beginPath();ctx.moveTo(horizon[0].x,horizon[0].y);for(const p of horizon)ctx.lineTo(p.x,p.y);ctx.stroke()}for(const alt of [30,60]){const c=curve(alt);if(c.length>1){ctx.strokeStyle="rgba(255,255,255,.08)";ctx.beginPath();ctx.moveTo(c[0].x,c[0].y);for(const p of c)ctx.lineTo(p.x,p.y);ctx.stroke()}}for(const c of [{n:"北",az:0},{n:"东",az:90},{n:"南",az:180},{n:"西",az:270}]){const p=project(2,c.az);if(!p)continue;ctx.font="bold 13px sans-serif";ctx.textAlign="center";ctx.lineWidth=4;ctx.strokeStyle="rgba(0,0,0,.75)";ctx.fillStyle="rgba(238,243,255,.85)";ctx.strokeText(c.n,p.x,p.y-10);ctx.fillText(c.n,p.x,p.y-10)}ctx.strokeStyle="rgba(255,255,255,.22)";ctx.beginPath();ctx.moveTo(w/2-12,h/2);ctx.lineTo(w/2+12,h/2);ctx.moveTo(w/2,h/2-12);ctx.lineTo(w/2,h/2+12);ctx.stroke()}
function starTitle(s){return s.zh||s.name||s.western||s.designation||(s.hip?`HIP ${s.hip}`:"未命名恒星")}
function plainPinyin(s){return String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"")}
function formatLines(lines){return lines.filter(Boolean).map(x=>esc(x)).join("<br>")}




let LODGE_DB = {};
let YUAN_DB = {};
let AST_DB = {};
let STAR_DB = {};

async function loadCultureData(){
  const [lodges, yuans, asterisms, stars] = await Promise.all([
    fetch("data/culture/lodges.json").then(r => { if(!r.ok) throw new Error("lodges.json"); return r.json(); }),
    fetch("data/culture/yuans.json").then(r => { if(!r.ok) throw new Error("yuans.json"); return r.json(); }),
    fetch("data/culture/asterisms_culture.json").then(r => { if(!r.ok) throw new Error("asterisms_culture.json"); return r.json(); }),
    fetch("data/culture/stars_culture.json").then(r => { if(!r.ok) throw new Error("stars_culture.json"); return r.json(); })
  ]);
  LODGE_DB = lodges;
  YUAN_DB = yuans;
  AST_DB = asterisms;
  STAR_DB = stars;
}
function setCards(labels, values){[1,2,3,4].forEach((i,idx)=>{$("k"+i).textContent=labels[idx]||"—"; $("d"+i).innerHTML=values[idx]||"—";})}
function formatRefs(refs){if(!refs||!refs.length)return '<span class="muted">数据库待补充。</span>';return refs.map(r=>`<div class="quote"><b>${esc(r.source||"参考")}</b>：${esc(r.explain||"")}<br><span class="mini">原文：${esc(r.quote||"")}</span></div>`).join("")}
function visibilityText(alt){if(alt>=20)return "地平线上方，较易观测"; if(alt>=0)return "地平线上方，可见"; return "地平线下，当前不可见"}
function angularSepDeg(ra1,dec1,ra2,dec2){const a1=deg(ra1*15),a2=deg(ra2*15),d1=deg(dec1),d2=deg(dec2);const c=Math.sin(d1)*Math.sin(d2)+Math.cos(d1)*Math.cos(d2)*Math.cos(a1-a2);return rad(Math.acos(Math.max(-1,Math.min(1,c))))}
function dedupePoints(pts){const m=new Map();for(const p of pts){const k=`${p.ra.toFixed(4)},${p.dec.toFixed(4)}`;if(!m.has(k))m.set(k,p)}return Array.from(m.values())}
function attachMemberships(){for(const s of state.stars){s.asterisms=[];s.primaryAst=s.ast||""}for(const a of state.asterisms){const pts=[];if(a.center)pts.push(a.center);for(const line of a.lines||[])for(const p of line)pts.push(p);const members=[];const seen=new Set();for(const p of dedupePoints(pts)){let best=null,bestD=1e9;for(const s of state.stars){if(!Number.isFinite(s.ra)||!Number.isFinite(s.dec))continue;const d=angularSepDeg(p.ra,p.dec,s.ra,s.dec);if(d<bestD){bestD=d;best=s}}if(best&&bestD<0.45&&!seen.has(best.uid)){seen.add(best.uid);members.push(best);if(!best.asterisms.includes(a.name))best.asterisms.push(a.name)}}a.members=members}for(const s of state.stars){if(!s.primaryAst)s.primaryAst=(s.asterisms&&s.asterisms[0])||""}}
function inferLodgeFromText(text){const m=String(text||"").match(/([角亢氐房心尾箕斗牛女虚危室壁奎娄胃昴毕觜参井鬼柳星张翼轸])宿/);return m?m[1]:""}
function getStarDb(n){return STAR_DB[n]||null} function getAsterismDb(n){return AST_DB[n]||null} function getLodgeDb(n){return LODGE_DB[n]||null} function getYuanDb(n){return YUAN_DB[n]||null}
function getAsterismByName(n){return state.asterisms.find(a=>a.name===n)} function jumpToAsterism(ev,n){if(ev)ev.preventDefault();const a=getAsterismByName(n);if(a)showAst(a)} function showStarByUid(ev,uid){if(ev)ev.preventDefault();const s=state.stars.find(x=>x.uid===uid);if(!s)return;showStar(s,altAz(s.ra,s.dec,date(),state.lat,state.lon))}
function starLinkHTML(s){return `<a href="#" onclick="showStarByUid(event,'${s.uid}')">${esc(s.zh||s.name||s.western||("HIP "+s.hip))}</a>`} function asterismLinkHTML(n){return n?`<a href="#" onclick="jumpToAsterism(event,'${esc(n)}')">${esc(n)}</a>`:"—"}
function inferStarLodge(s){return inferLodgeFromText(s.zh)||((getStarDb(s.zh||"")||{}).lodge)||((getAsterismDb(s.primaryAst||"")||{}).lodge)||""} function inferAsterismLodge(a){return ((getAsterismDb(a.name)||{}).lodge)||((a.members||[]).map(inferStarLodge).find(Boolean)||"")} function inferAsterismYuan(a){return ((getAsterismDb(a.name)||{}).yuan)||""}
function buildCultureHTML(region,imagery,refs,fallbackLodge,yuan){let out=[];if(region)out.push(`<b>星域分野：</b>${esc(region)}`);if(yuan&&YUAN_DB[yuan])out.push(`<b>三垣补充：</b>${esc(YUAN_DB[yuan].imagery)}`);if(imagery)out.push(`<b>传统意向：</b>${esc(imagery)}`);const x=getLodgeDb(fallbackLodge);if(x)out.push(`<span class="mini">宿级补充：${esc(x.name)}｜${esc(x.group)}｜${esc(x.cycle)}｜${esc(x.fenye)}</span>`);let refsAll=[...(refs||[])]; if(!refsAll.length&&x)refsAll=x.refs; if(!refsAll.length&&yuan&&YUAN_DB[yuan])refsAll=YUAN_DB[yuan].refs;return out.join("<br>")+'<div style="margin-top:6px"><b>解释与古籍引文</b></div>'+formatRefs(refsAll)}
function memberListHTML(a){if(!a.members||!a.members.length)return '<span class="muted">暂无自动匹配到的成员星。</span>';return a.members.map(s=>`<span class="member">${starLinkHTML(s)}</span>`).join(" ")}
function getStarKnowledge(s){const own=getStarDb(s.zh||"")||{};const ast=getAsterismDb(s.primaryAst||"")||{};const lodge=own.lodge||inferStarLodge(s);const yuan=own.yuan||ast.yuan||"";const lod=getLodgeDb(lodge)||{};return {asterism:own.asterism||s.primaryAst||"",lodge,yuan,region:own.region||ast.region||lod.fenye||"",imagery:own.imagery||ast.imagery||lod.imagery||"",refs:(own.refs&&own.refs.length)?own.refs:((ast.refs&&ast.refs.length)?ast.refs:(lod.refs||[]))}}
function getAsterismKnowledge(a){const own=getAsterismDb(a.name)||{};const lodge=own.lodge||inferAsterismLodge(a);const yuan=own.yuan||inferAsterismYuan(a);const lod=getLodgeDb(lodge)||{};const ydb=getYuanDb(yuan)||{};return {lodge,yuan,region:own.region||lod.fenye||ydb.region||"",imagery:own.imagery||lod.imagery||ydb.imagery||"",refs:(own.refs&&own.refs.length)?own.refs:((lod.refs&&lod.refs.length)?lod.refs:(ydb.refs||[]))}}


const LODGE_ORDER = "角亢氐房心尾箕斗牛女虚危室壁奎娄胃昴毕觜参井鬼柳星张翼轸".split("");
const LODGE_RA_CENTERS = {
  "角":13.4,"亢":14.6,"氐":15.5,"房":16.2,"心":16.5,"尾":17.2,"箕":18.2,
  "斗":19.0,"牛":20.3,"女":21.2,"虚":22.2,"危":23.2,"室":0.25,"壁":1.0,
  "奎":1.9,"娄":2.6,"胃":3.3,"昴":3.8,"毕":4.6,"觜":5.35,"参":5.65,
  "井":7.0,"鬼":8.4,"柳":9.4,"星":10.2,"张":11.0,"翼":12.0,"轸":13.0
};
const YUAN_ASTERISMS = {
  "紫微垣":["紫微垣","北极","四辅","天乙","太乙","帝","天皇大帝","五帝内座","勾陈","六甲","内阶","天床","天厨","文昌","柱史","尚书","女史","御女","天柱","三师","三公","阴德","大理","天牢","太尊","天枪","天棓","天理","北斗","辅"],
  "太微垣":["太微垣","五帝座","太子","从官","幸臣","谒者","三公","九卿","内屏","五诸侯","郎位","郎将","常陈","虎贲","少微","长垣","灵台","明堂","左执法","右执法","执法"],
  "天市垣":["天市垣","市楼","车肆","宗正","宗人","宗","帛度","屠肆","斛","列肆","贯索","七公","天纪","女床","天辐","王良","策","扶筐","河中","侯","帝座","宦者","天市左垣","天市右垣"]
};
function circularRaDistance(a,b){
  const d=Math.abs(a-b)%24;
  return Math.min(d,24-d);
}
function nearestLodgeByRa(ra){
  let best="角", bestD=999;
  for(const x of LODGE_ORDER){
    const d=circularRaDistance(ra, LODGE_RA_CENTERS[x]);
    if(d<bestD){best=x;bestD=d}
  }
  return best;
}
function centerOfAsterism(a){
  const pts=[];
  if(a.center) pts.push(a.center);
  for(const line of a.lines||[]) for(const p of line) pts.push(p);
  if(!pts.length) return null;
  let sx=0, sy=0, sz=0;
  for(const p of pts){
    const ra=deg(p.ra*15), dec=deg(p.dec);
    sx+=Math.cos(dec)*Math.cos(ra);
    sy+=Math.cos(dec)*Math.sin(ra);
    sz+=Math.sin(dec);
  }
  const n=pts.length;
  let ra=rad(Math.atan2(sy/n,sx/n))/15; if(ra<0)ra+=24;
  const dec=rad(Math.atan2(sz/n,Math.hypot(sx/n,sy/n)));
  return {ra,dec};
}
function inferYuanFromName(name){
  const n=String(name||"");
  for(const [yuan, list] of Object.entries(YUAN_ASTERISMS)){
    if(list.some(x=>n===x || n.includes(x))) return yuan;
  }
  return "";
}
function inferLodgeFromName(name){
  const n=String(name||"");
  for(const x of LODGE_ORDER){
    if(n===x || n===x+"宿" || n.startsWith(x+"宿")) return x;
  }
  return inferLodgeFromText(n);
}
function attachMemberships(){
  for(const s of state.stars){s.asterisms=[];s.primaryAst=s.ast||"";s.autoLodge="";s.autoYuan="";s.assignmentSource=""}
  for(const a of state.asterisms){
    const pts=[];if(a.center)pts.push(a.center);for(const line of a.lines||[])for(const p of line)pts.push(p);
    const members=[];const seen=new Set();
    for(const p of dedupePoints(pts)){
      let best=null,bestD=1e9;
      for(const s of state.stars){
        if(!Number.isFinite(s.ra)||!Number.isFinite(s.dec))continue;
        const d=angularSepDeg(p.ra,p.dec,s.ra,s.dec);
        if(d<bestD){bestD=d;best=s}
      }
      if(best&&bestD<0.45&&!seen.has(best.uid)){
        seen.add(best.uid);members.push(best);
        if(!best.asterisms.includes(a.name))best.asterisms.push(a.name);
      }
    }
    a.members=members;
  }
  for(const s of state.stars){if(!s.primaryAst)s.primaryAst=(s.asterisms&&s.asterisms[0])||""}
  assignTaxonomy();
}
function assignTaxonomy(){
  for(const a of state.asterisms){
    const db=getAsterismDb(a.name)||{};
    a.assignedYuan=db.yuan||inferYuanFromName(a.name)||"";
    a.assignedLodge=db.lodge||inferLodgeFromName(a.name)||"";
    a.assignmentSource="";
    if(db.yuan||db.lodge) a.assignmentSource="星官专属数据库";
    else if(a.assignedYuan) a.assignmentSource="三垣显式名单";
    else if(a.assignedLodge) a.assignmentSource="星官名称推断";
    if(!a.assignedYuan && !a.assignedLodge){
      const memberLodge=(a.members||[]).map(s=>inferStarLodge(s)).find(Boolean);
      if(memberLodge){ a.assignedLodge=memberLodge; a.assignmentSource="由成员恒星推断"; }
    }
    if(!a.assignedYuan && !a.assignedLodge){
      const c=centerOfAsterism(a);
      if(c){ a.assignedLodge=nearestLodgeByRa(c.ra); a.assignmentSource="根据星官中心赤经自动近似归宿"; }
    }
  }
  for(const s of state.stars){
    const db=getStarDb(s.zh||"")||{};
    const astDb=getAsterismDb(s.primaryAst||"")||{};
    s.autoYuan=db.yuan||astDb.yuan||"";
    s.autoLodge=db.lodge||astDb.lodge||"";
    if(db.yuan||db.lodge) s.assignmentSource="恒星专属数据库";
    else if(astDb.yuan||astDb.lodge) s.assignmentSource="所属星官数据库";
    else if(s.primaryAst){
      const ast=getAsterismByName(s.primaryAst);
      if(ast){
        s.autoYuan=ast.assignedYuan||"";
        s.autoLodge=ast.assignedLodge||"";
        s.assignmentSource=ast.assignmentSource ? "所属星官归属：" + ast.assignmentSource : "所属星官推断";
      }
    }
    if(!s.autoYuan && !s.autoLodge && Number.isFinite(s.ra)){
      s.autoLodge=nearestLodgeByRa(s.ra);
      s.assignmentSource="根据赤经自动近似归宿";
    }
  }
}
function inferStarLodge(s){
  return inferLodgeFromText(s.zh)||((getStarDb(s.zh||"")||{}).lodge)||s.autoLodge||((getAsterismDb(s.primaryAst||"")||{}).lodge)||"";
}
function inferAsterismLodge(a){
  return ((getAsterismDb(a.name)||{}).lodge)||a.assignedLodge||((a.members||[]).map(inferStarLodge).find(Boolean)||"");
}
function inferAsterismYuan(a){
  return ((getAsterismDb(a.name)||{}).yuan)||a.assignedYuan||"";
}
function sourceBadge(text){
  return `<div class="source">信息来源层级：${esc(text||"通用回退")}</div>`;
}
function getStarKnowledge(s){
  const own=getStarDb(s.zh||"")||{};
  const ast=getAsterismDb(s.primaryAst||"")||{};
  const astObj=getAsterismByName(s.primaryAst||"");
  const lodge=own.lodge||s.autoLodge||inferStarLodge(s);
  const yuan=own.yuan||s.autoYuan||ast.yuan||"";
  const lod=getLodgeDb(lodge)||{};
  const ydb=getYuanDb(yuan)||{};
  let source="星宿通用信息";
  let region=lod.fenye||"", imagery=lod.imagery||"", refs=lod.refs||[];
  if(yuan && ydb.region && !lodge){source="三垣通用信息";region=ydb.region;imagery=ydb.imagery;refs=ydb.refs||[]}
  if(ast && (ast.region||ast.imagery||ast.refs)){source="所属星官信息";region=ast.region||region;imagery=ast.imagery||imagery;refs=(ast.refs&&ast.refs.length)?ast.refs:refs}
  if(own && (own.region||own.imagery||own.refs)){source="恒星专属信息";region=own.region||region;imagery=own.imagery||imagery;refs=(own.refs&&own.refs.length)?own.refs:refs}
  if(source==="星宿通用信息" && s.assignmentSource) source += "（" + s.assignmentSource + "）";
  if(source==="所属星官信息" && astObj && astObj.assignmentSource && !((ast.refs||[]).length)) source += "（星官归属：" + astObj.assignmentSource + "）";
  return {asterism:own.asterism||s.primaryAst||"",lodge,yuan,region,imagery,refs,source};
}
function getAsterismKnowledge(a){
  const own=getAsterismDb(a.name)||{};
  const lodge=own.lodge||a.assignedLodge||inferAsterismLodge(a);
  const yuan=own.yuan||a.assignedYuan||inferAsterismYuan(a);
  const lod=getLodgeDb(lodge)||{};
  const ydb=getYuanDb(yuan)||{};
  let source="星宿通用信息";
  let region=lod.fenye||"", imagery=lod.imagery||"", refs=lod.refs||[];
  if(yuan && ydb.region && !own.lodge){source="三垣通用信息";region=ydb.region;imagery=ydb.imagery;refs=ydb.refs||[]}
  if(own && (own.region||own.imagery||own.refs)){source="星官专属信息";region=own.region||region;imagery=own.imagery||imagery;refs=(own.refs&&own.refs.length)?own.refs:refs}
  if(source==="星宿通用信息" && a.assignmentSource) source += "（" + a.assignmentSource + "）";
  return {lodge,yuan,region,imagery,refs,source};
}
function buildCultureHTML(region,imagery,refs,fallbackLodge,yuan,source){
  let out=[];
  if(source) out.push(sourceBadge(source));
  if(region)out.push(`<b>星域分野：</b>${esc(region)}`);
  if(yuan&&YUAN_DB[yuan])out.push(`<b>三垣意向：</b>${esc(YUAN_DB[yuan].imagery)}`);
  if(imagery)out.push(`<b>传统意向：</b>${esc(imagery)}`);
  const x=getLodgeDb(fallbackLodge);
  if(x)out.push(`<span class="mini">宿级补充：${esc(x.name)}｜${esc(x.group)}｜${esc(x.cycle)}｜${esc(x.fenye)}</span>`);
  let refsAll=[...(refs||[])];
  if(!refsAll.length&&x)refsAll=x.refs;
  if(!refsAll.length&&yuan&&YUAN_DB[yuan])refsAll=YUAN_DB[yuan].refs;
  return out.join("<br>")+'<div style="margin-top:6px"><b>解释与古籍引文</b></div>'+formatRefs(refsAll);
}
function drawStars(){
state.screens=[];
const d=date();
const labels=[];
for(const s of state.stars){
  if(!Number.isFinite(s.ra)||!Number.isFinite(s.dec)||s.mag>state.magLimit) continue;
  const aa=altAz(s.ra,s.dec,d,state.lat,state.lon);
  const p=project(aa.alt,aa.az);
  if(!p) continue;
  const below=aa.alt<0;
  const br=Math.max(.18,1-(s.mag??6)/6.5),r=Math.max(1.0,4.4-(s.mag??6)*.45);
  if(below){
    ctx.fillStyle=`rgba(180,180,195,${0.08+br*.16})`;
  }else{
    ctx.fillStyle=`rgba(240,248,255,${.22+br*.78})`;
  }
  ctx.beginPath();
  ctx.arc(p.x,p.y,r,0,Math.PI*2);
  ctx.fill();
  if(!below && br>.65){
    ctx.fillStyle=`rgba(240,248,255,${.05+br*.14})`;
    ctx.beginPath();
    ctx.arc(p.x,p.y,r*2.2,0,Math.PI*2);
    ctx.fill();
  }
  state.screens.push({s,x:p.x,y:p.y,r:Math.max(10,r+7),aa});
  const label=s.zh||s.name||"";
  if(label){
    labels.push({x:p.x+6,y:p.y-5,text:label,below,priority:(below?-2:0)+(6-(s.mag??6))+Math.max(0,aa.alt)/90});
  }
}
labels.sort((a,b)=>b.priority-a.priority);
const placed=[];
ctx.save();
ctx.font="11px sans-serif";
ctx.textAlign="left";
ctx.textBaseline="bottom";
ctx.lineWidth=3;
for(const lb of labels){
  let overlap=false;
  for(const p of placed){ if(Math.hypot(p.x-lb.x,p.y-lb.y)<16){overlap=true;break;} }
  if(overlap) continue;
  placed.push(lb);
  ctx.strokeStyle=lb.below?"rgba(0,0,0,.48)":"rgba(0,0,0,.82)";
  ctx.fillStyle=lb.below?"rgba(210,210,220,.40)":"rgba(255,255,255,.95)";
  ctx.strokeText(lb.text,lb.x,lb.y);
  ctx.fillText(lb.text,lb.x,lb.y);
}
ctx.restore();
if(state.selected?.type==="star"){
  const item=state.screens.find(i=>i.s.uid===state.selected.uid);
  if(item){
    ctx.strokeStyle="rgba(244,208,111,.95)";
    ctx.lineWidth=2.3;
    ctx.beginPath();
    ctx.arc(item.x,item.y,item.r,0,Math.PI*2);
    ctx.stroke();
  }
}}
function drawAsterisms(){
state.astScreens=[];
const d=date();
for(const a of state.asterisms){
  const isSel=state.selected?.type==="ast"&&state.selected.id===a.id;
  if(a.lines?.length){
    for(const line of a.lines){
      let prev=null, prevAlt=0;
      for(const q of line){
        const aa=altAz(q.ra,q.dec,d,state.lat,state.lon);
        const p=project(aa.alt,aa.az);
        if(!p){prev=null;continue;}
        if(prev){
          const below=(prevAlt<0 && aa.alt<0);
          ctx.strokeStyle=below ? "rgba(180,180,195,.22)" : (isSel?"rgba(244,208,111,.95)":"rgba(244,208,111,.58)");
          ctx.lineWidth=isSel?2.6:1.35;
          ctx.beginPath();
          ctx.moveTo(prev.x,prev.y);
          ctx.lineTo(p.x,p.y);
          ctx.stroke();
        }
        prev=p; prevAlt=aa.alt;
      }
    }
  }
  let anchor=null, anchorAlt=0;
  if(a.center){
    const aa=altAz(a.center.ra,a.center.dec,d,state.lat,state.lon);
    anchor=project(aa.alt,aa.az); anchorAlt=aa.alt;
  }
  if(!anchor && a.lines?.length){
    const pts=[];
    for(const line of a.lines){
      for(const q of line){
        const aa=altAz(q.ra,q.dec,d,state.lat,state.lon);
        const p=project(aa.alt,aa.az);
        if(p) pts.push({...p,alt:aa.alt});
      }
    }
    if(pts.length){
      anchor={x:pts.reduce((s,p)=>s+p.x,0)/pts.length,y:pts.reduce((s,p)=>s+p.y,0)/pts.length};
      anchorAlt=pts.reduce((s,p)=>s+p.alt,0)/pts.length;
    }
  }
  if(anchor){
    ctx.save();
    ctx.font=isSel?"bold 17px sans-serif":"bold 15px sans-serif";
    ctx.textAlign="center";
    ctx.textBaseline="bottom";
    ctx.lineWidth=4;
    ctx.strokeStyle="rgba(0,0,0,.82)";
    ctx.fillStyle=anchorAlt<0?"rgba(244,208,111,.45)":"#f4d06f";
    ctx.strokeText(a.name,anchor.x,anchor.y-14);
    ctx.fillText(a.name,anchor.x,anchor.y-14);
    ctx.restore();
    state.astScreens.push({a,x:anchor.x,y:anchor.y});
  }
}}
function render(){resize();drawBg();drawGrid();drawStars();drawAsterisms();const sensorExtra=state.sensor&&state.lastSensor?`<br>alpha ${state.lastSensor.alpha}°｜beta ${state.lastSensor.beta}°｜gamma ${state.lastSensor.gamma}°`:"";
$("status").innerHTML=`${state.sensor?"传感器":"手动"}｜${state.camera?"相机叠加":"纯星图"}<br>朝向 ${Math.round(state.viewAz)}°｜仰角 ${Math.round(state.viewPitch)}°｜${state.city}${sensorExtra}`;$("fovText").textContent=state.fov;if($("pitchOffsetText"))$("pitchOffsetText").textContent=state.pitchOffset;$("magText").textContent=state.magLimit.toFixed(1)}
function showStar(s,aa){
state.selected={type:"star",uid:s.uid};
const know=getStarKnowledge(s);
const lodgeName=know.lodge?((getLodgeDb(know.lodge)||{}).name||`${know.lodge}宿`):"";
$("dName").textContent=starTitle(s);
$("dSub").textContent=[plainPinyin(s.py),s.western].filter(Boolean).join(" ｜ ")||"恒星 Star";
setCards(["中国传统体系名称","西方体系","当前位置及可见程度","对应星域分野及传统意向"],[
  formatLines([
    `星名：${s.zh||"暂无"}`,
    s.py?`拼音：${plainPinyin(s.py)}`:"",
    s.meaning?`英文释义：${s.meaning}`:"",
    `所属星官：${know.asterism?asterismLinkHTML(know.asterism):"—"}`,
    `所属星宿：${lodgeName||"—"}`,
    `所属垣：${know.yuan||"—"}`,
    `归属依据：${know.source||"—"}`
  ]),
  formatLines([
    s.western?`西方常用名：${s.western}`:"",
    `所属星座：${constellationLabel(s)}`,
    s.bayer?`Bayer命名：${s.bayer}`:"",
    s.designation?`Designation：${s.designation}`:"",
    s.hip?`HIP：${s.hip}`:"",
    s.hd?`HD：${String(s.hd).replace(/^HD\s*/i,"")}`:""
  ]),
  formatLines([
    `高度角：${aa.alt.toFixed(1)}°`,
    `方位角：${aa.az.toFixed(1)}°`,
    `视星等：${Number.isFinite(s.mag)?s.mag.toFixed(2):"—"}`,
    `可见程度：${visibilityText(aa.alt)}`
  ]),
  buildCultureHTML(know.region,know.imagery,know.refs,know.lodge,know.yuan,know.source)
]);
$("dDesc").innerHTML="数据库说明：若恒星没有逐星条目，系统会回退到所属星官、星宿或三垣条目。";
detail.classList.add("on");$("detailBtn").classList.add("active");render()}
function showAst(a){
state.selected={type:"ast",id:a.id};
const st=currentStats(a), know=getAsterismKnowledge(a);
const lodgeName=know.lodge?((getLodgeDb(know.lodge)||{}).name||`${know.lodge}宿`):"";
$("dName").textContent=a.name||"未命名星官";
$("dSub").textContent=[plainPinyin(a.py),a.en].filter(Boolean).join(" ｜ ")||"中国传统星官";
setCards(["中国传统体系名称","包含的星星","所属星宿及垣","对应星域分野及传统意向"],[
  formatLines([`星官：${a.name||"—"}`,`拼音：${plainPinyin(a.py)||"—"}`,`英文释义：${a.en||"—"}`]),
  memberListHTML(a),
  formatLines([`所属星宿：${lodgeName||"—"}`,`所属垣：${know.yuan||"—"}`,`可见参考点：${st.total?`${st.visible}/${st.total}`:"暂无"}`,`连线组：${a.lines?.length||0}`,
  `归属依据：${know.source||"—"}`]),
  buildCultureHTML(know.region,know.imagery,know.refs,know.lodge,know.yuan,know.source)
]);
$("dDesc").innerHTML=`ID: ${a.id}。点击“包含的星星”中的恒星名字，可跳转到该恒星页面。`;
detail.classList.add("on");$("detailBtn").classList.add("active");render()}
function currentStats(a){const d=date(),pts=[];if(a.center)pts.push(a.center);for(const line of a.lines||[])for(const p of line)pts.push(p);let v=0;for(const p of pts){if(altAz(p.ra,p.dec,d,state.lat,state.lon).alt>0)v++}return{visible:v,total:pts.length}}
function toastMsg(t){toast.textContent=t;toast.classList.add("on");setTimeout(()=>toast.classList.remove("on"),1900)}
function searchItems(){const q=normKey($("search").value);const out=[];for(const a of state.asterisms){const key=normKey([a.name,a.py,a.en,a.id].join(" "));if(!q||key.includes(q))out.push({type:"ast",a})}for(const s of state.stars){const key=normKey([s.zh,s.py,s.western,s.designation,s.bayer,s.flam,s.hd,s.hip,s.name].join(" "));if(q&&key.includes(q))out.push({type:"star",s})}return out.slice(0,80)}
function updateCatalog(){const items=searchItems();$("catalogSummary").textContent=`显示 ${items.length} 项｜星官 ${state.asterisms.length} 个｜亮星 ${state.stars.length} 颗`;$("list").innerHTML="";for(const it of items){const div=document.createElement("div");div.className="item";if(it.type==="ast"){div.innerHTML=`<div class="name">星官：${esc(it.a.name||it.a.id)}</div><div class="meta">${esc([it.a.py,it.a.en].filter(Boolean).join(" ｜ "))}</div>`;div.onclick=()=>showAst(it.a)}else{div.innerHTML=`<div class="name">恒星：${esc(starTitle(it.s))}</div><div class="meta">${esc([it.s.western,it.s.designation,it.s.hip&&"HIP "+it.s.hip].filter(Boolean).join(" ｜ "))}</div>`;div.onclick=()=>{const aa=altAz(it.s.ra,it.s.dec,date(),state.lat,state.lon);showStar(it.s,aa)}}$("list").appendChild(div)}}
canvas.addEventListener("pointerdown",e=>{if(state.sensor)return;state.drag=true;state.dragMoved=false;state.sx=e.clientX;state.sy=e.clientY;state.baz=state.viewAz;state.bp=state.viewPitch;canvas.setPointerCapture?.(e.pointerId)})
canvas.addEventListener("pointermove",e=>{if(!state.drag||state.sensor)return;const dx=e.clientX-state.sx,dy=e.clientY-state.sy;if(Math.abs(dx)>2||Math.abs(dy)>2)state.dragMoved=true;state.viewAz=normDeg(state.baz-dx*.17*state.fov/90);state.viewPitch=clamp(state.bp+dy*.13*state.fov/90,-20,85);render()})
canvas.addEventListener("pointerup",e=>{const moved=state.dragMoved;state.drag=false;if(moved)return;let best=null;for(const it of state.screens){const d=Math.hypot(it.x-e.clientX,it.y-e.clientY);if(d<it.r&&(!best||d<best.d))best={...it,d}}if(best)return showStar(best.s,best.aa);let ba=null;for(const it of state.astScreens){const d=Math.hypot(it.x-e.clientX,it.y-e.clientY);if(d<28&&(!ba||d<ba.d))ba={...it,d}}if(ba)return showAst(ba.a)})
canvas.addEventListener("wheel",e=>{e.preventDefault();state.fov=clamp(state.fov+Math.sign(e.deltaY)*5,35,125);$("fov").value=state.fov;render()},{passive:false})
$("fov").oninput=e=>{state.fov=Number(e.target.value);render()};if($("pitchOffset"))$("pitchOffset").oninput=e=>{state.pitchOffset=Number(e.target.value);render()};$("magLimit").oninput=e=>{state.magLimit=Number(e.target.value);render()};$("now").onclick=()=>{$("dt").value=toLocal(new Date());render()};$("dt").oninput=render;$("lat").oninput=e=>{state.lat=Number(e.target.value);render()};$("lon").oninput=e=>{state.lon=Number(e.target.value);render()};
$("city").onchange=e=>{const c=cities[e.target.value];state.city=c.name;state.lat=c.lat;state.lon=c.lon;$("lat").value=c.lat;$("lon").value=c.lon;render()};
$("detailBtn").onclick=()=>{detail.classList.toggle("on");$("detailBtn").classList.toggle("active",detail.classList.contains("on"))};
$("settingsBtn").onclick=()=>{settings.classList.toggle("on");catalog.classList.remove("on")};$("closeSettings").onclick=()=>settings.classList.remove("on");
$("catalogBtn").onclick=()=>{catalog.classList.toggle("on");settings.classList.remove("on");updateCatalog()};$("search").oninput=updateCatalog;
$("northBtn").onclick=()=>{state.sensor=false;$("sensorBtn").classList.remove("active");state.viewAz=0;state.viewPitch=24;render()};
$("sensorBtn").onclick=async()=>{
  if(state.sensor){
    state.sensor=false;
    $("sensorBtn").classList.remove("active");
    return render();
  }
  try{
    if(typeof DeviceOrientationEvent!=="undefined"&&typeof DeviceOrientationEvent.requestPermission==="function"){
      const p=await DeviceOrientationEvent.requestPermission();
      if(p!=="granted")return toastMsg("没有获得方向传感器权限");
    }
    window.addEventListener("deviceorientationabsolute",ori,true);
    window.addEventListener("deviceorientation",ori,true);
    window.addEventListener("orientationchange",render,true);
    state.sensor=true;
    $("sensorBtn").classList.add("active");
    toastMsg("方向传感器已开启：现在会同时读取朝向和仰角");
  }catch(e){
    toastMsg("方向传感器不可用");
  }
};
function screenAngle(){
  if(window.screen&&screen.orientation&&Number.isFinite(screen.orientation.angle)) return screen.orientation.angle;
  if(Number.isFinite(window.orientation)) return window.orientation;
  return 0;
}
function sensorPitchFromBetaGamma(beta,gamma){
  const angle=((screenAngle()%360)+360)%360;
  let pitch=NaN;
  // 这里的目标是估计“手机背面摄像头”的仰角，而不是屏幕法线的数学角。
  // 竖屏时：手机竖直对准地平线 beta≈90，所以 pitch≈0；向上抬起时 beta>90，所以 pitch>0。
  if(angle===0){
    if(Number.isFinite(beta)) pitch=beta-90;
  }else if(angle===180){
    if(Number.isFinite(beta)) pitch=-beta-90;
  }else if(angle===90){
    if(Number.isFinite(gamma)) pitch=gamma-90;
  }else if(angle===270){
    if(Number.isFinite(gamma)) pitch=-gamma-90;
  }else{
    if(Number.isFinite(beta)) pitch=beta-90;
  }
  if(!Number.isFinite(pitch)) return NaN;
  while(pitch>180) pitch-=360;
  while(pitch<-180) pitch+=360;
  return clamp(pitch+state.pitchOffset,-35,88);
}
function ori(e){
  if(!state.sensor)return;
  const alpha=Number.isFinite(e.alpha)?e.alpha:NaN;
  const beta=Number.isFinite(e.beta)?e.beta:NaN;
  const gamma=Number.isFinite(e.gamma)?e.gamma:NaN;
  state.lastSensor={
    alpha:Number.isFinite(alpha)?Math.round(alpha):"—",
    beta:Number.isFinite(beta)?Math.round(beta):"—",
    gamma:Number.isFinite(gamma)?Math.round(gamma):"—"
  };
  let h=Number.isFinite(e.webkitCompassHeading)?e.webkitCompassHeading:(Number.isFinite(alpha)?360-alpha:NaN);
  if(Number.isFinite(h))state.viewAz=normDeg(h);
  const pitch=sensorPitchFromBetaGamma(beta,gamma);
  if(Number.isFinite(pitch)) state.viewPitch=pitch;
  render();
}
$("cameraBtn").onclick=async()=>{if(state.camera){state.stream?.getTracks().forEach(t=>t.stop());state.stream=null;state.camera=false;camera.classList.remove("on");$("cameraBtn").classList.remove("active");return render()}try{const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"}},audio:false});state.stream=s;camera.srcObject=s;camera.classList.add("on");state.camera=true;$("cameraBtn").classList.add("active");toastMsg("相机叠加已开启");render()}catch(e){toastMsg("相机权限不可用；需要 HTTPS 或 localhost")}};
window.addEventListener("resize",render);window.addEventListener("beforeunload",()=>state.stream?.getTracks().forEach(t=>t.stop()));

// 数据加载与解析
function normKey(v){return String(v||"").toLowerCase().replace(/α/g,"alpha").replace(/β/g,"beta").replace(/γ/g,"gamma").replace(/δ/g,"delta").replace(/ε/g,"epsilon").replace(/ζ/g,"zeta").replace(/η/g,"eta").replace(/θ/g,"theta").replace(/κ/g,"kappa").replace(/λ/g,"lambda").replace(/μ/g,"mu").replace(/[^a-z0-9\u4e00-\u9fa5]/g,"")}
function readProp(o,names,fb=""){for(const n of names){if(o&&o[n]!==undefined&&o[n]!==null&&o[n]!=="")return o[n]}return fb}
function num(x,fb=NaN){const n=Number(x);return Number.isFinite(n)?n:fb}
function normalizeHip(v){const m=String(v??"").match(/(?:HIP\s*)?(\d{1,6})/i);return m?String(Number(m[1])):""}
function lonToRa(lon){const x=Number(lon);return (x<0?x+360:x)/15}
function geoPoint(pt){return{ra:lonToRa(pt[0]),dec:Number(pt[1])}}
function fetchJson(url){return fetch(url,{cache:"force-cache"}).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}
function fetchText(url){return fetch(url,{cache:"force-cache"}).then(r=>{if(!r.ok)throw new Error(r.status);return r.text()})}
function parseStars(geo){const out=[];let i=0;for(const f of geo.features||[]){const p=f.properties||{},c=f.geometry&&f.geometry.coordinates;if(!Array.isArray(c))continue;const eq=geoPoint(c);const hip=normalizeHip(readProp(p,["hip","HIP","id","ids","name","desig"],""));const raw=String(readProp(p,["id","ids","desig","name"],i));out.push({uid:`s-${i}-${hip||raw}`,id:raw,hip,name:String(readProp(p,["name","proper","properName","desig"],"")),western:String(readProp(p,["proper","properName","name"],"")),designation:String(readProp(p,["designation","desig","id","iau"],"")),bayer:String(readProp(p,["bayer","bf","bayer_flamsteed"],"")),flam:String(readProp(p,["flam","flamsteed"],"")),hd:String(readProp(p,["hd","HD"],"")),constellation:String(readProp(p,["con","const","constellation","abbr"],"")),ra:eq.ra,dec:eq.dec,mag:num(readProp(p,["mag","magnitude","vmag","Vmag"],6),6)});i++}return out}
function parseCsv(text){let rows=[],row=[],cell="",q=false;for(let i=0;i<text.length;i++){const ch=text[i],nx=text[i+1];if(ch==='"'){if(q&&nx==='"'){cell+='"';i++}else q=!q}else if(ch===','&&!q){row.push(cell);cell=""}else if((ch==='\n'||ch==='\r')&&!q){if(ch==='\r'&&nx==='\n')i++;row.push(cell);cell="";if(row.some(v=>v.trim()))rows.push(row);row=[]}else cell+=ch}if(cell||row.length){row.push(cell);if(row.some(v=>v.trim()))rows.push(row)}if(!rows.length)return[];const h=rows[0].map(x=>x.trim());return rows.slice(1).map(r=>Object.fromEntries(h.map((k,i)=>[k,(r[i]||"").trim()])))}
function parseCnNames(text){const map=new Map();for(const r of parseCsv(text)){const hip=normalizeHip(readProp(r,["hip","HIP","id","ids","designation","iau"],""));if(!hip)continue;const zh=readProp(r,["name","zh","zh_name","Chinese","chinese","proper"],"");const py=readProp(r,["pinyin","pronounce","pronunciation"],"");const en=readProp(r,["en","english","meaning","translation"],"");if(!map.has(hip))map.set(hip,[]);map.get(hip).push({zh,py,en})}return map}
function parseWesternNames(text){const map=new Map();for(const r of parseCsv(text)){const hip=normalizeHip(readProp(r,["hip","HIP","id","ids"],""));if(!hip)continue;map.set(hip,{western:readProp(r,["proper","properName","name","Name"],""),designation:readProp(r,["designation","desig","iau"],""),bayer:readProp(r,["bayer","Bayer"],""),flam:readProp(r,["flam","flamsteed","Flamsteed"],""),hd:readProp(r,["hd","HD"],"")})}return map}
function mergeNames(stars,cn,west){let cnCount=0,westCount=0;for(const s of stars){if(s.hip&&cn.has(s.hip)){const n=cn.get(s.hip)[0];s.zh=n.zh||s.zh;s.py=n.py||s.py;s.meaning=n.en||s.meaning;cnCount++}if(s.hip&&west.has(s.hip)){const w=west.get(s.hip);s.western=w.western||s.western;s.designation=w.designation||s.designation;s.bayer=w.bayer||s.bayer;s.flam=w.flam||s.flam;s.hd=w.hd||s.hd;westCount++}s.constInfo=westernConstellationInfo(s);if(s.constInfo){s.constZh=s.constInfo.zh;s.constEn=s.constInfo.name}}state.coverage={cn:cnCount,west:westCount};return stars}
function flatCoords(g){if(!g)return[];if(g.type==="Point")return[g.coordinates];if(g.type==="LineString")return g.coordinates;if(g.type==="MultiLineString")return g.coordinates.flat();return[]}
function parseAsterisms(points,lines){const by=new Map();const ensure=id=>{id=String(id);if(!by.has(id))by.set(id,{id,name:id,py:"",en:"",center:null,lines:[]});return by.get(id)}
for(const f of points.features||[]){const p=f.properties||{};const id=String(readProp(p,["id","ids","desig","name"],by.size+1));const a=ensure(id);a.name=String(readProp(p,["name","desig"],a.name));a.py=String(readProp(p,["pinyin","pronounce"],a.py));a.en=String(readProp(p,["en","english"],a.en));if(f.geometry?.type==="Point")a.center=geoPoint(f.geometry.coordinates)}
for(const f of lines.features||[]){const p=f.properties||{};const id=String(readProp(p,["id","ids","desig","name"],by.size+1));const a=ensure(id);a.name=String(readProp(p,["name","desig"],a.name));a.en=String(readProp(p,["en","english"],a.en));if(f.geometry?.type==="LineString")a.lines.push(f.geometry.coordinates.map(geoPoint));else if(f.geometry?.type==="MultiLineString")for(const line of f.geometry.coordinates)a.lines.push(line.map(geoPoint));if(!a.center){const cs=flatCoords(f.geometry);if(cs.length)a.center=geoPoint(cs[Math.floor(cs.length/2)])}}
return Array.from(by.values()).sort((a,b)=>String(a.name).localeCompare(String(b.name),"zh-Hans-CN"))}
function lookupConst(v){if(!v)return null;const raw=String(v).trim();if(CONST_BY_ABBR.has(raw.toLowerCase()))return CONST_BY_ABBR.get(raw.toLowerCase());const k=normKey(raw);if(CONST_BY_GEN.has(k))return CONST_BY_GEN.get(k);return null}
function extractConstToken(t){const parts=String(t||"").replace(/[(),;_]/g," ").split(/\s+/).filter(Boolean);for(let i=parts.length-1;i>=0;i--){const x=parts[i].replace(/[^A-Za-z]/g,"");if(lookupConst(x))return x;for(const c of CONSTS){if(normKey(c.gen)===normKey(x)||normKey(c.name)===normKey(x))return c.abbr}}return""}
function westernConstellationInfo(s){let c=lookupConst(s.constellation);if(!c){for(const v of [s.designation,s.bayer,s.flam,s.name,s.western]){const tok=extractConstToken(v);if(tok){c=lookupConst(tok);break}}}if(!c&&s.hip&&commonConstByHip[String(Number(s.hip))])c=lookupConst(commonConstByHip[String(Number(s.hip))]);return c||null}
function constellationLabel(s){const c=s.constInfo||westernConstellationInfo(s);return c?`${c.zh} / ${c.name}（${c.abbr}；拉丁属格 ${c.gen}）`:(s.constZh&&s.constEn?`${s.constZh} / ${s.constEn}`:"—")}
async function loadFull(){try{$("dataBadge").textContent="正在加载在线全量数据…";const [starsGeo,pointsGeo,linesGeo,cnText,westText]=await Promise.all([fetchJson(DATA_URLS.stars),fetchJson(DATA_URLS.cnPoints),fetchJson(DATA_URLS.cnLines),fetchText(DATA_URLS.starNamesCnCsv),fetchText(DATA_URLS.starNamesWestern)]);state.stars=mergeNames(parseStars(starsGeo),parseCnNames(cnText),parseWesternNames(westText));state.asterisms=parseAsterisms(pointsGeo,linesGeo);attachMemberships();state.mode="full";$("dataBadge").textContent=`已载入：${state.asterisms.length} 个星官 / ${state.stars.length} 颗亮星`;if(state.asterisms.length){showAst(state.asterisms.find(a=>a.name==="北斗")||state.asterisms[0])}toastMsg("全量星官、亮星与扩展知识数据库已载入");updateCatalog();render()}catch(e){console.warn(e);state.mode="fallback";attachMemberships();$("dataBadge").textContent="在线数据失败：当前为少量离线示例";toastMsg("在线数据加载失败，使用离线示例");showAst(state.asterisms[0]);render()}}
async function init(){
  render();
  try{
    await loadCultureData();
  }catch(e){
    console.warn(e);
    toastMsg("文化数据库加载失败：请确认 data/culture 文件夹已上传。");
  }
  await loadFull();
}
init();
