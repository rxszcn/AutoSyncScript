/*
京东到家果园任务脚本,支持qx,loon,shadowrocket,surge,nodejs
用抓包抓 https://daojia.jd.com/html/index.html 页面cookie填写到下面,暂时不知cookie有效期
抓多账号直接清除浏览器缓存再登录新账号,千万别点退出登录,否则cookie失效
cookie只要里面的deviceid_pdj_jd=xxx-xxx-xxx;o2o_m_h5_sid=xxx-xxx-xxx关键信息,填写整个cookie也是可以的
手机设备在boxjs里填写cookie,nodejs在jddj_cookie.js文件里填写cookie
boxjs订阅地址:https://gitee.com/passerby-b/javascript/raw/master/JD/passerby-b.boxjs.json
TG群:https://t.me/passerbyb2021

[task_local]
10 0,8,11,17 * * * https://raw.githubusercontent.com/passerby-b/JDDJ/main/jddj_fruit.js

*/

let isNotify = true;//是否通知,仅限nodejs
let ckPath = './jddj_cookie.js';//ck路径

eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([4acdf-hj-mo-qsu-wyzA-WYZ]|[12]\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';1S $=o API("jddj_fruit");g 1T=\'\',f=\'\',1f=\'\';g 1l=\'30.\'+q.v(q.25()*(2k-26)+26);g 1m=\'114.\'+q.v(q.25()*(2k-26)+26);g 1U=q.v(q.25()*(1500-L)+L);g 1n=[],M=\'\';1g=0,1x=0,1F=\'\',1G=\'\';!(w()=>{c(1n.1o==0){c($.1y.1z){delete 27.cache[2l];1n=27(2l)}G{g 1V=$.2m(\'#jddj_cookies\');c(!!1V){c(1V.2a(\',\')<0){1n.push(1V)}G{1n=1V.1A(\',\')}}}}c(1n.1o==0){j.k(\'\\r\\n请先填写1W\');16}c(!$.1y.1z){1X=$.2m(\'#jddj_isNotify\')}G{M=27(\'./1B\')}1H(g i=0;i<1n.1o;i++){j.k(\'\\r\\n★★★★★开始执行第\'+(i+1)+\'个账号,共\'+1n.1o+\'个账号★★★★★\');1T=1n[i];1g=0,1x=0;c(!1T.2b())2n;1Y 2c={};1Y 2o=1T.1A(\';\');2o.forEach(a=>{c(a.2a(\'=\')>-1)2c[a.1A(\'=\')[0].2b()]=a.1A(\'=\')[1].2b()});f=2c.deviceid_pdj_jd;l 2p();l $.1h(L);l 2d(0);l $.1h(L);j.k(\'2q\');1S 17=l 2r();c(17.18==1){$.M(\'第\'+(i+1)+\'个账号1W过期\',\'请访问B://C.D.z/1I/H.1I抓取1W\',{1J:\'B://C.D.z/1I/H.1I\'});c($.1y.1z&&\'\'+1X+\'\'==\'E\'){l M.1B(\'第\'+(i+1)+\'个账号1W过期\',\'请访问B://C.D.z/1I/H.1I抓取1W\')}2n}l $.1h(L);l 2s(17);l $.1h(L);l 2t();l $.1h(L);l 2u();l $.1h(L);1G=\'\';1H(g H=0;H<17.h.1K.1o;H++){g 1Z=17.h.1K[H];c(1Z.1C==\'23eee1c043c01bc\'){1F+=\'@\'+1Z.uniqueId+\',\';j.k(\'\\n好友互助码:\'+1F);1G=\',助力\'+1Z.finishNum+\'/\'+1Z.totalNum;break}}l 2d(2);l $.1h(L)}$.M(\'京东到家果园互助码:\',\'\',1F);c($.1y.1z){g M=27(\'./1B\');M.1B(\'京东到家果园互助码:\',1F)}})().19(w(e)=>{j.k(\'\',\'❌失败! 原因:\'+e+\'!\',\'\');c($.1y.1z&&\'\'+1X+\'\'==\'E\'){M.1B(\'京东到家果园\',\'❌失败! 原因:\'+e+\'!\')}}).2v(()=>{$.done()});w 1p 2p(){16 o 1q(w u=>{1i{g s=K(\'B://C.D.z/N?1a=\'+q.v(o y())+\'&O=H5&P=Q&R=&S=8.7.6&jdDevice=&T=mine%2FgetUserAccountInfo&m=%U%22refPageSource%22:%22%22,%22fromSource%22:2,%22pageSource%22:%2w%22,%22ref%22:%22%22,%22ctp%22:%2w%22%V&jda=&1b=\'+f+q.v(o y())+\'&W=\'+f+\'&Y=\'+f,\'\');$.I.Z(s).J(p=>{g 4=11.12(p.m);c(4.18==0){1i{1f=4.h.userInfo.userBaseInfo.nickName;j.k("●●●"+1f+"●●●")}19(A){1f=\'昵称获取失败\'}}});u()}19(A){j.k(\'\\n【个人信息】:\'+A);u()}})}w 1p 2r(){16 o 1q(w u=>{1i{g s=K(\'B://C.D.z/N?1a=\'+q.v(o y())+\'&T=1r%2Flist&1c=E&m=%U%1s%22%3A%2x%22%2C%1t%22%1u%V&R=1j&13=6.6.0&O=h5&S=6.6.0&P=Q&1d=1e&1b=\'+f+\'&W=\'+f+\'&Y=\'+f,\'\');$.I.Z(s).J(p=>{g 4=11.12(p.m);u(4)})}19(A){j.k(\'\\n【任务列表】:\'+A);u({})}})}w 1p 2u(){16 o 1q(w u=>{1i{g s=K(\'B://C.D.z/N?1a=\'+q.v(o y()),\'T=2y%2Fwatering&1c=E&2z=2A&m=%U%22waterTime%22%1u%V&R=1j&13=6.6.0&O=h5&S=6.6.0&P=Q&1d=1e&1b=\'+f+\'&W=\'+f+\'&Y=\'+f);g 2e=1,2f=0;do{2f++;j.k(\'\\n**********开始执行第\'+2f+\'次浇水**********\');$.I.2B(s).J(p=>{g 4=11.12(p.m);j.k(\'\\n【浇水】:\'+4.d);2e=4.18;c(4.18==0)1x++});l $.1h(L)}while(2e==0);u()}19(A){j.k(\'\\n【浇水】:\'+A);u()}})}w 1p 2D(){16 o 1q(w u=>{1i{g s=K(\'B://C.D.z/N?1a=\'+q.v(o y())+\'&T=signin%2FuserSigninNew&1c=E&m=%U%22channel%22%3A%22daojiaguoyuan%22%2C%2E%22%3A\'+1U+\'%2C%2F%22%3A\'+1m+\'%2C%2G%22%3A\'+1l+\'%2C%22ifCic%22%3A0%V&R=1j&13=6.6.0&O=h5&S=6.6.0&P=Q&1d=1e&1b=\'+f+\'&W=\'+f+\'&Y=\'+f,\'\');$.I.Z(s).J(p=>{g 4=11.12(p.m);j.k(\'\\n【到家签到】:\'+4.d);u()})}19(A){j.k(\'\\n【到家签到领水滴】:\'+A);u()}})}w 1p 2t(){16 o 1q(w u=>{1i{g 28=[],1v=\'\';l $.I.Z({1J:\'B://gitee.z/passerby-b/javascript/raw/master/2q/sharecode.js\'}).J(p=>{1v=p.m});1i{l $.I.Z({1J:\'I://107.172.97.176:8080/queryJddjCode\'}).J(p=>{1v+=p.m})}19(A){}c(!!1v){1v=1v.substr(0,1v.1o-1);28=1v.1A(\',\')}g 2g=28[q.v(q.25()*(28.1o-1)+0)];g s=K(\'B://C.D.z/N?1l=\'+1l+\'&1m=\'+1m+\'&2H=\'+1l+\'&2I=\'+1m+\'&2J=\'+1U+\'&W=\'+f+\'&Y=\'+f+\'&R=2K&mpChannel=2K&13=5.0.0&O=mini&S=5.0.0&P=Q&1d=1e&xcxVersion=9.2.0&1c=E&business=djgyzhuli&T=1r%2h&m=%U%1s%22%3A%2x%22%2C%1D%22%3A1201%2C%1E%22%3A%2223eee1c043c01bc%22%2C%1t%22%3A5%2C%22assistTargetPin%22%3A%22\'+2g.1A(\'@\')[0]+\'%22%2C%22uniqueId%22%3A%22\'+2g.1A(\'@\')[1]+\'%22%V\',\'\');$.I.Z(s).J(p=>{g 4=11.12(p.m);j.k(\'\\n【助力】:\'+4.d);u()})}19(A){j.k(\'\\n【助力】:\'+A);u()}})}1S 2L=[307,901,2M,1105,1103];w 1p 2s(17){16 o 1q(w u=>{1i{1H(g H=0;H<17.h.1K.1o;H++){1S a=17.h.1K[H];c(a.1L==3||a.1L==2){j.k(\'\\n【\'+a.14+\'】: 任务已完成,跳过做任务\')}G c(a.1w==502){l 2D()}G c(2L.includes(a.1w)){c(a.1L==0){g s=K(\'B://C.D.z/N?1a=\'+q.v(o y())+\'&T=1r%2N&1c=E&m=%U%1s%22%3A%22\'+a.1M+\'%22%2C%1E%22%3A%22\'+1N(a.1C)+\'%22%2C%1D%22%3A\'+a.1w+\'%2C%1t%22%1u%2C%1O%22%1P%V&R=1j&13=6.6.0&O=h5&S=6.6.0&P=Q&1d=1e&1b=\'+f+q.v(o y())+\'&W=\'+f+\'&Y=\'+f,\'\');l $.I.Z(s).J(p=>{g 4=11.12(p.m),d=\'\';c(4.18==0){d=4.d+\',奖励:\'+4.h.1Q}G{d=4.d}j.k(\'\\n领取任务【\'+a.14+\'】:\'+d);16});c(a.29>-1){1H(g t=0;t<2O(a.29);t++){l $.1h(L);j.k(\'计时:\'+(t+1)+\'秒...\')}}}G{j.k(\'\\n【\'+a.14+\'】: 任务已领取或不需要领取\')}s=K(\'B://C.D.z/N?1a=\'+q.v(o y())+\'&T=1r%2h&1c=E&m=%U%1s%22%3A%22\'+a.1M+\'%22%2C%1E%22%3A%22\'+1N(a.1C)+\'%22%2C%1D%22%3A\'+a.1w+\'%2C%1t%22%1u%2C%1O%22%1P%V&R=1j&13=6.6.0&O=h5&S=6.6.0&P=Q&1d=1e&1b=\'+f+q.v(o y())+\'&W=\'+f+\'&Y=\'+f,\'\');l $.I.Z(s).J(p=>{g 4=11.12(p.m),d=\'\';c(4.18==0){d=4.d+\',奖励:\'+4.h.1Q;a.1L=2}G{d=4.d}j.k(\'\\n任务完成【\'+a.14+\'】:\'+d)})}G{j.k(\'\\n【\'+a.14+\'】: 脚本无法执行此任务或任务不需要主动完成\')}c(a.1L==2||a.taskTypes==2M){s=K(\'B://C.D.z/N?1a=\'+q.v(o y())+\'&T=1r%2P&1c=E&m=%U%1s%22%3A%22\'+a.1M+\'%22%2C%1E%22%3A%22\'+1N(a.1C)+\'%22%2C%1D%22%3A\'+a.1w+\'%2C%1t%22%1u%2C%1O%22%1P%V&R=1j&13=6.6.0&O=h5&S=6.6.0&P=Q&1d=1e&1b=\'+f+q.v(o y())+\'&W=\'+f+\'&Y=\'+f,\'\');l $.I.Z(s).J(p=>{g 4=11.12(p.m),d=\'\';c(4.18==0){d=4.d+\',奖励:\'+4.h.1Q}G{d=4.d}j.k(\'\\n领取奖励【\'+a.14+\'】:\'+d)})}G c(a.1L==3){j.k(\'\\n【\'+a.14+\'】: 奖励已领取,跳过领奖励\')}G{j.k(\'\\n【\'+a.14+\'】: 任务未完成,跳过领奖励\')}}u()}19(A){j.k(\'\\n【执行任务】:\'+A);u()}})}w 1p runTask2(17){16 o 1q(w u=>{1i{1H(g H=0;H<17.h.1K.1o;H++){1S a=17.h.1K[H];c(a.14.2a(\'限时\')>-1){g s=K(\'B://C.D.z/N?1a=\'+q.v(o y())+\'&T=1r%2N&1c=E&m=%U%1s%22%3A%22\'+a.1M+\'%22%2C%1E%22%3A%22\'+1N(a.1C)+\'%22%2C%1D%22%3A\'+a.1w+\'%2C%1t%22%1u%2C%1O%22%1P%V&R=1j&13=6.6.0&O=h5&S=6.6.0&P=Q&1d=1e&1b=\'+f+q.v(o y())+\'&W=\'+f+\'&Y=\'+f,\'\');l $.I.Z(s).J(p=>{1Y 4=11.12(p.m),d=\'\';c(4.18==0){d=4.d+\',奖励:\'+4.h.1Q}G{d=4.d}j.k(\'\\n领取任务【\'+a.14+\'】:\'+d)});c(a.29>-1){1H(g t=0;t<2O(a.29);t++){l $.1h(L);j.k(\'计时:\'+(t+1)+\'秒...\')}};s=K(\'B://C.D.z/N?1a=\'+q.v(o y())+\'&T=1r%2h&1c=E&m=%U%1s%22%3A%22\'+a.1M+\'%22%2C%1E%22%3A%22\'+1N(a.1C)+\'%22%2C%1D%22%3A\'+a.1w+\'%2C%1t%22%1u%2C%1O%22%1P%V&R=1j&13=6.6.0&O=h5&S=6.6.0&P=Q&1d=1e&1b=\'+f+q.v(o y())+\'&W=\'+f+\'&Y=\'+f,\'\');l $.I.Z(s).J(p=>{1Y 4=11.12(p.m),d=\'\';c(4.18==0){d=4.d+\',奖励:\'+4.h.1Q}G{d=4.d}j.k(\'\\n任务完成【\'+a.14+\'】:\'+d)});s=K(\'B://C.D.z/N?1a=\'+q.v(o y())+\'&T=1r%2P&1c=E&m=%U%1s%22%3A%22\'+a.1M+\'%22%2C%1E%22%3A%22\'+1N(a.1C)+\'%22%2C%1D%22%3A\'+a.1w+\'%2C%1t%22%1u%2C%1O%22%1P%V&R=1j&13=6.6.0&O=h5&S=6.6.0&P=Q&1d=1e&1b=\'+f+q.v(o y())+\'&W=\'+f+\'&Y=\'+f,\'\');l $.I.Z(s).J(p=>{1Y 4=11.12(p.m),d=\'\';c(4.18==0){d=4.d+\',奖励:\'+4.h.1Q}G{d=4.d}j.k(\'\\n领取奖励【\'+a.14+\'】:\'+d)})}}u()}19(A){j.k(\'\\n【执行任务】:\'+A);u()}})}w 1p 2d(2i){16 o 1q(w u=>{1i{g s=K(\'B://C.D.z:443/N?1a=\'+q.v(o y()),\'T=2y%2FinitFruit&1c=E&2z=2A&m=%U%2E%22%3A\'+1U+\'%2C%2F%22%3A\'+1m+\'%2C%2G%22%3A\'+1l+\'%V&1l=\'+1l+\'&1m=\'+1m+\'&2H=\'+1l+\'&2I=\'+1m+\'&2J=\'+1U+\'&R=1j&13=6.6.0&O=h5&S=6.6.0&P=Q&1d=1e&1b=\'+f+q.v(o y())+\'&W=\'+f+\'&Y=\'+f);l $.I.2B(s).J(w p=>{g 4=11.12(p.m);c(4.18==0){c(2i==0){1g=4.h.20.21;1F+=4.h.F.userPin}c(2i==2){1g=(1x*10)+4.h.20.21-1g;c(1g<0)1g=0;c(4.h.F.23==0){j.k(\'\\n京东到家果园【\'+1f+\'】:\'+4.h.F.1R+\'已成熟,快去收取!\');$.M(\'京东到家果园\',\'【\'+1f+\'】\',\'京东到家果园\'+4.h.F.1R+\'已成熟,快去收取!\');c($.1y.1z&&\'\'+1X+\'\'==\'E\'){l M.1B(\'京东到家果园【\'+1f+\'】\',\'京东到家果园\'+4.h.F.1R+\'已成熟,快去收取!\')}}c(4.h.F.23>0){g 24=\'次\';c(4.h.F.growingStage==5)24=\'%\';j.k(\'\\n京东到家果园【\'+1f+\'】:\'+4.h.F.1R+\',本次领取\'+1g+\'滴水,浇水\'+1x+\'次,还需浇水\'+4.h.F.23+24+4.h.F.2j+\',还剩\'+4.h.20.21+\'滴水\'+1G);$.M(\'京东到家果园\',\'【\'+1f+\'】\',\'【果树信息】:\'+4.h.F.1R+\',本次领取\'+1g+\'滴水,浇水\'+1x+\'次,还需浇水\'+4.h.F.23+24+4.h.F.2j+\',还剩\'+4.h.20.21+\'滴水\'+1G);c($.1y.1z&&\'\'+1X+\'\'==\'E\'){l M.1B(\'京东到家果园【\'+1f+\'】\',\'【果树信息】:\'+4.h.F.1R+\',本次领取\'+1g+\'滴水,浇水\'+1x+\'次,还需浇水\'+4.h.F.23+24+4.h.F.2j+\',还剩\'+4.h.20.21+\'滴水\'+1G)}}}}u()})}19(A){j.k(\'\\n【果树信息】:\'+A);u()}2v{treeInfoTimes=E}})}1p K(1J,m){g s={1J:1J,headers:{\'Host\':\'C.D.z\',\'Content-Type\':\'application/x-www-form-urlencoded;\',\'Origin\':\'B://C.D.z\',\'Cookie\':1T,\'Connection\':\'keep-alive\',\'2Q\':\'*/*\',\'User-Agent\':\'Mozilla/5.0 (2R; CPU 2R OS 14_1 2T Mac OS X) AppleWebKit/605.1.15 (KHTML, 2T Gecko) Mobile/15E148________appName=jdLocal&13=iOS&commonParams={"sharePackageVersion":"2"}&djAppVersion=8.7.5&supportDJSHWK\',\'2Q-Language\':\'zh-cn\'},m:m};16 s};',[],180,'||||data||||||item||if|msg||deviceid|let|result||console|log|await|body||new|response|Math||option||resolve|round|async||Date|com|error|https|daojia|jd|true|activityInfoResponse|else|index|http|then|urlTask|1000|notify|client|platCode|appName|paidaojia|channel|appVersion|functionId|7B|7D|deviceToken||deviceId|get||JSON|parse|platform|taskTitle||return|tslist|code|catch|_jdrandom|traceId|isNeedDealError|deviceModel|appmodel|nickname|waterNum|wait|try|ios||lat|lng|cookies|length|function|Promise|task|22modelId|22plateCode|3A1|codestr|taskType|waterTimes|env|isNode|split|sendNotify|taskId|22taskType|22taskId|shareCode|hzstr|for|html|url|taskInfoList|status|modelId|encodeURIComponent|22subNode|3Anull|awardValue|fruitName|const|thiscookie|cityid|ckstr|cookie|isNotify|var|element|userResponse|waterBalance||curStageLeftProcess|unit|random|10000|require|scodes|browseTime|indexOf|trim|jsonlist|treeInfo|waterStatus|waterCount|scode|2Ffinished|step|stageName|99999|ckPath|read|continue|params|userinfo|test|taskList|runTask|zhuLi|water|finally|22myinfo|22M10007|fruit|method|POST|post||sign|22cityId|22longitude|22latitude|lat_pos|lng_pos|city_id|wx_xcx|do_tasks|1102|2Freceived|parseInt|2FsendPrize|Accept|iPhone||like'.split('|'),0,{}))

/*********************************** API *************************************/
function ENV() { const e = "undefined" != typeof $task, t = "undefined" != typeof $loon, s = "undefined" != typeof $httpClient && !t, i = "function" == typeof require && "undefined" != typeof $jsbox; return { isQX: e, isLoon: t, isSurge: s, isNode: "function" == typeof require && !i, isJSBox: i, isRequest: "undefined" != typeof $request, isScriptable: "undefined" != typeof importModule } } function HTTP(e = { baseURL: "" }) { const { isQX: t, isLoon: s, isSurge: i, isScriptable: n, isNode: o } = ENV(), r = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/; const u = {}; return ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS", "PATCH"].forEach(l => u[l.toLowerCase()] = (u => (function (u, l) { l = "string" == typeof l ? { url: l } : l; const h = e.baseURL; h && !r.test(l.url || "") && (l.url = h ? h + l.url : l.url); const a = (l = { ...e, ...l }).timeout, c = { onRequest: () => { }, onResponse: e => e, onTimeout: () => { }, ...l.events }; let f, d; if (c.onRequest(u, l), t) f = $task.fetch({ method: u, ...l }); else if (s || i || o) f = new Promise((e, t) => { (o ? require("request") : $httpClient)[u.toLowerCase()](l, (s, i, n) => { s ? t(s) : e({ statusCode: i.status || i.statusCode, headers: i.headers, body: n }) }) }); else if (n) { const e = new Request(l.url); e.method = u, e.headers = l.headers, e.body = l.body, f = new Promise((t, s) => { e.loadString().then(s => { t({ statusCode: e.response.statusCode, headers: e.response.headers, body: s }) }).catch(e => s(e)) }) } const p = a ? new Promise((e, t) => { d = setTimeout(() => (c.onTimeout(), t(`${u} URL: ${l.url} exceeds the timeout ${a} ms`)), a) }) : null; return (p ? Promise.race([p, f]).then(e => (clearTimeout(d), e)) : f).then(e => c.onResponse(e)) })(l, u))), u } function API(e = "untitled", t = !1) { const { isQX: s, isLoon: i, isSurge: n, isNode: o, isJSBox: r, isScriptable: u } = ENV(); return new class { constructor(e, t) { this.name = e, this.debug = t, this.http = HTTP(), this.env = ENV(), this.node = (() => { if (o) { return { fs: require("fs") } } return null })(), this.initCache(); Promise.prototype.delay = function (e) { return this.then(function (t) { return ((e, t) => new Promise(function (s) { setTimeout(s.bind(null, t), e) }))(e, t) }) } } initCache() { if (s && (this.cache = JSON.parse($prefs.valueForKey(this.name) || "{}")), (i || n) && (this.cache = JSON.parse($persistentStore.read(this.name) || "{}")), o) { let e = "root.json"; this.node.fs.existsSync(e) || this.node.fs.writeFileSync(e, JSON.stringify({}), { flag: "wx" }, e => console.log(e)), this.root = {}, e = `${this.name}.json`, this.node.fs.existsSync(e) ? this.cache = JSON.parse(this.node.fs.readFileSync(`${this.name}.json`)) : (this.node.fs.writeFileSync(e, JSON.stringify({}), { flag: "wx" }, e => console.log(e)), this.cache = {}) } } persistCache() { const e = JSON.stringify(this.cache, null, 2); s && $prefs.setValueForKey(e, this.name), (i || n) && $persistentStore.write(e, this.name), o && (this.node.fs.writeFileSync(`${this.name}.json`, e, { flag: "w" }, e => console.log(e)), this.node.fs.writeFileSync("root.json", JSON.stringify(this.root, null, 2), { flag: "w" }, e => console.log(e))) } write(e, t) { if (this.log(`SET ${t}`), -1 !== t.indexOf("#")) { if (t = t.substr(1), n || i) return $persistentStore.write(e, t); if (s) return $prefs.setValueForKey(e, t); o && (this.root[t] = e) } else this.cache[t] = e; this.persistCache() } read(e) { return this.log(`READ ${e}`), -1 === e.indexOf("#") ? this.cache[e] : (e = e.substr(1), n || i ? $persistentStore.read(e) : s ? $prefs.valueForKey(e) : o ? this.root[e] : void 0) } delete(e) { if (this.log(`DELETE ${e}`), -1 !== e.indexOf("#")) { if (e = e.substr(1), n || i) return $persistentStore.write(null, e); if (s) return $prefs.removeValueForKey(e); o && delete this.root[e] } else delete this.cache[e]; this.persistCache() } notify(e, t = "", l = "", h = {}) { const a = h["open-url"], c = h["media-url"]; if (s && $notify(e, t, l, h), n && $notification.post(e, t, l + `${c ? "\n多媒体:" + c : ""}`, { url: a }), i) { let s = {}; a && (s.openUrl = a), c && (s.mediaUrl = c), "{}" === JSON.stringify(s) ? $notification.post(e, t, l) : $notification.post(e, t, l, s) } if (o || u) { const s = l + (a ? `\n点击跳转: ${a}` : "") + (c ? `\n多媒体: ${c}` : ""); if (r) { require("push").schedule({ title: e, body: (t ? t + "\n" : "") + s }) } else console.log(`${e}\n${t}\n${s}\n\n`) } } log(e) { this.debug && console.log(`[${this.name}] LOG: ${this.stringify(e)}`) } info(e) { console.log(`[${this.name}] INFO: ${this.stringify(e)}`) } error(e) { console.log(`[${this.name}] ERROR: ${this.stringify(e)}`) } wait(e) { return new Promise(t => setTimeout(t, e)) } done(e = {}) { console.log('done!'); s || i || n ? $done(e) : o && !r && "undefined" != typeof $context && ($context.headers = e.headers, $context.statusCode = e.statusCode, $context.body = e.body) } stringify(e) { if ("string" == typeof e || e instanceof String) return e; try { return JSON.stringify(e, null, 2) } catch (e) { return "[object Object]" } } }(e, t) }
/*****************************************************************************/