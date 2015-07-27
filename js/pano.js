function removepano(e){var t,n,r,i,s=document.getElementById(e);if(s){t=window._krpMW;if(t)for(n=0;n<t.length;n++){r=t[n];if(r&&r.id===e){t.splice(n,1);break}}s.unload&&s.unload(),i=s.parentNode,i&&i.removeChild(s)}}

function custompano(e){
	var param={
			"basepath":"./",
			"bgcolor":"#000",
			"height":"100%",
			"html5":"prefer",
			"htmltarget":"pano",
			"id":"test",
			"mwheel":false,
			"target":"pano",
			"targetelement":document.getElementById("pano"),
			"vars":[],
			"width":"100%",
			"wmode":null,
			"xml":"snow.xml"
		}
		return krpanojs_init(param);
}

function createswf(e,t,n,r,i){return createPanoViewer({swf:e,id:t,width:n,height:r,bgcolor:i})}
function createkrpanoJSviewer(e,t,n){return createPanoViewer({id:e,width:t,height:n,html5:"always"})}
var embedPanoViewer,createkrpanoSWFviewer;embedPanoViewer=custompano,createkrpanoSWFviewer=createswf;

function krpanojs_init(c){
	function embedhtml5(gd,Bb){
		function hd(){
			function A(a){return(""+a).toLowerCase()}
			function W(a,b){
				var c=0,d=0,e,f=a.length,k;
				for(e=0;e<f;e++){
					if(k=a.charCodeAt(e),32>=k)c++;else break;
				}
				for(e=f-1;0<e;e--){
					if(k=a.charCodeAt(e),32>=k)d++;else break;	
				}
				if(void 0===b&&(e=a.charAt(c),k=a.charAt(f-d-1),("'"==e&&"'"==k||'"'==e&&'"'==k)&&3==a.split(e).length)){
					c++,d++;
				}
				return a=a.slice(c,f-d);
			}
			function Fa(a){return 0<=_[308].indexOf(String(a).toLowerCase())}
			function Wa(a,b){return _[461]==b?Number(a):_[57]==b?Fa(a):_[38]==b?null==a?null:String(a):a}
			function Ga(a){return(1E3*Number(a)|0)/1E3}
			function mb(a,b,c,d){a.__defineGetter__(b,c);void 0!==d&&a.__defineSetter__(b,d)}
			function Xa(a,b,c){
				var d="_"+b;
				a[d]=c;
				a.__defineGetter__(b,function(){return a[d]});
				a.__defineSetter__(b,function(b){a[d]=Wa(b,typeof c);a.haschanged=!0})}
			function Rb(){for(var a=0;4100>a;a++);}
			function va(a){a&&a.preventDefault()}
			function x(a,b,c,d){a&&a.addEventListener(b,c,d)}
			function O(a,b,c,d){a&&a.removeEventListener(b,c,d)}
			function U(a){console.log();var b=B.createElement(1==a?"img":2==a?_[459]:"div");b&&(1==a&&"off"!=yc)&&(b.crossOrigin=yc);return b}
			function nb(a){return function(){return a.apply(a,arguments)}}
			function sb(a){return a.split("<").join("&lt;").split(">").join("&gt;")}
			function ja(a,b){var c="("+(a>>16&255)+","+(a>>8&255)+","+(a&255);return void 0!==b?"rgba"+c+","+b+")":"rgb"+c+")"}
			function Ob(a){return a.split("[").join("<").split("<<").join("[").split("]").join(">").split(">>").join("]")}
			function hc(a,b){a=Number(a);for(b=Number(b);0>a;)a+=360;for(;360<a;)a-=360;var c=Math.abs(b-a),d=Math.abs(b-(a-360)),e=Math.abs(b-(a+360));d<c&&d<e?a-=360:e<c&&e<d&&(a+=360);return a}
			function rb(a){if(a){var b=a.indexOf("?");0<=b&&(a=a.slice(0,b));b=a.indexOf("#");0<=b&&(a=a.slice(0,b))}return a}
			function Qb(a){a=rb(a);var b=a.lastIndexOf("/"),c=a.lastIndexOf("\\");c>b&&(b=c);return a.slice(b+1)}
			function Ab(a,b){var c=String(a).charCodeAt(0);return 48<=c&&57>=c?($(3,b+_[127]),!1):!0}
			function Pb(a,b,c,d){
				for(;32>=a.charCodeAt(b);){
					b++;
				}
				for(;32>=a.charCodeAt(c-1);){
					c--;
				}
				var e=a.charCodeAt(b);
				if(37==e){
					a=N(a.slice(b+1,c),d);
				}else if(103==e&&"get("==a.slice(b,b+4)){
					for(b+=4;32>=a.charCodeAt(b);){
						b++;
					}
					for(c=a.lastIndexOf(")");32>=a.charCodeAt(c-1);){
						c--;
					}
					a=N(a.slice(b,c),d)
				}else{
					d=a.charCodeAt(b);
					if((39==d||34==d)&&d==a.charCodeAt(c-1)){
						b++,c--;
					}
					a=a.slice(b,c);
				}
				return a
			}
			function id(a){var b=[];if(null==a||void 0==a)return b;var c,d=0,e,f,k=0;a=A(a);e=a.length;for(c=0;c<e;c++)f=a.charCodeAt(c),40==f?k++:41==f?k--:46==f&&0==k&&(b.push(a.slice(d,c)),d=c+1);b.push(a.slice(d));return b}
			function ea(a,b){a=A(a);var c,d,e,f;e=Sb[a];null!=e&&(void 0!==e&&""!=e)&&zc(e,null,b);f=Sb.getArray();d=f.length;for(c=0;c<d;c++)e=f[c][a],null!=e&&(void 0!==e&&""!=e)&&zc(e,null,b)}
			function I(a,b,c,d,e){var f=null,k,l=id(a);k=l.length;if(1==k&&d&&(f=l[0],void 0!==d[f])){d[f]=_[57]==typeof d[f]?Fa(b):b;return}var r=m,f=null;1<k&&(f=l[k-1]);for(a=0;a<k;a++){var j=l[a],h=a==k-1,p=null,q=j.indexOf("[");0<q&&(p=Pb(j,q+1,j.length-1,d),j=j.slice(0,q));q=!1;if(void 0===r[j]){if(c)break;h||(null==p?r[j]=new Tb:(r[j]=new Ya(Tb),q=!0))}else q=!0;if(q&&!1==h&&!0==r[j].isArray&&null!=p)if(h=null,r=r[j],h=c?r.getItem(p):r.createItem(p)){if(a==k-2&&"name"==f){b=A(b);p!=b&&(null==b||"null"==b||""==b?r.removeItem(p):r.renameItem(p,b));break}r=h;continue}else break;h?r[j]=!0==e?b:Wa(b,typeof r[j]):r=r[j]}}
			function N(a,b){var c,d,e,f=id(a);d=f.length;if(1==d&&_[270]==f[0])return b?b._type+"["+b.name+"]":"";if(1==d&&b&&(e=f[0],b.hasOwnProperty(e)))return b[e];var k=m;for(c=0;c<d;c++){e=f[c];var l=c==d-1,r=null,j=e.indexOf("[");0<j&&(r=Pb(e,j+1,e.length-1,b),e=e.slice(0,j));if(k&&void 0!==k[e]){if(null!=r&&(j=k[e])&&j.isArray)if(e=j.getItem(r)){if(l)return e;k=e;continue}else break;if(l)return k[e];k=k[e]}else break}return null}
			function zc(a,b,c){Q.callaction(a,b,c)}
			function gd(a,b,c){zc(a,b?N(b):null,c?Fa(c):null)}
			function $(a,b){
				//console.log(a);
				//console.log(b)
				//if(!jd&&(0<a||m.debugmode)){
					//b=["DEBUG","INFO",_[396],"ERROR",_[324]][a]+": "+b,G.log(b),2<a&&m.showerrors&&setTimeout(function(){try{G.showlog(!0)}catch(a){}},500);
				//}
			}
			function Rd(){this.caller=this.args=this.cmd=null;this.breakable=!1}
			function Ub(a,b,c){if(null==a||""==a)return null;for(var d=0,e=0,f=0,k=0,l=0,r=0,j=0,h=0,p="",p=0;;)if(p=a.charCodeAt(l),0<p&&32>=p)l++;else break;for(var q=[],e=a.length,d=l;d<e;d++)if(p=a.charCodeAt(d),0==h&&0==j&&40==p)f++;else if(0==h&&0==j&&41==p){if(k++,f==k){r=d+1;p=a.slice(l,r);q.push(p);for(l=r;;)if(p=a.charCodeAt(l),0<p&&32>=p)l++;else break;p=a.charCodeAt(l);if(59!=p){r=e;break}for(l++;;)if(p=a.charCodeAt(l),59==p||0<p&&32>=p)l++;else break;d=l}}else 34==p?0==j?j=1:1==j&&(j=0):39==p?0==j?j=2:2==j&&(j=0):91==p&&0==j?h++:93==p&&0==j&&h--;r!=e&&(p=a.slice(l,e),0<p.length&&q.push(p));a=null;e=q.length;for(d=0;d<e;d++){p=q[d];j=p.indexOf("[");k=p.indexOf("]");f=p.indexOf("(");0<j&&(0<k&&f>j&&f<k)&&(f=p.indexOf("(",k));l=k=null;0<f?(k=p.slice(0,f),l=W(p.slice(f+1,p.lastIndexOf(")")),!1),0>=l.length&&(l=null)):(k=p,l=null);k=W(k);r=[];if(null!=l){var n,h=l.length,f=0,K=-1,g=-1,wa=j=0,p=null;for(n=0;n<h;n++)p=l.charCodeAt(n),0==j&&40==p?f++:0==j&&41==p?f--:34==p?1==j&&0<=K?(K=-1,j=0):0==j&&(K=n,j=1):39==p&&(2==j&&0<=g?(g=-1,j=0):0==j&&(g=n,j=2)),44==p&&(0==f&&0==j)&&(p=W(l.slice(wa,n)),r.push(p),wa=n+1);0==f&&(p=W(l.slice(wa,n)),r.push(p))}null==a&&(a=[]);f=new Rd;f.cmd=c?k:A(k);f.args=r;f.caller=b;a.push(f)}return a}
			//relative to move 
			function ic(){this.z=this.y=this.x=0;this.to_euler_xyz=function(){var a=new ic;a.x=-Math.atan2(-this.y,Math.sqrt(this.x*this.x+this.z*this.z))/la;a.y=Math.atan2(this.x,this.z)/la+180;return a}}
			function Bc(a){return _[33]!==typeof Float32Array?new Float32Array(void 0!==a?a:16):void 0!==a?a:Array(16)}
			function ld(a,b){var c=b.x,d=b.y,e=b.z;b.x=c*a[0]+d*a[4]+e*a[8];b.y=c*a[1]+d*a[5]+e*a[9];b.z=c*a[2]+d*a[6]+e*a[10]}
			//relative to snow
			function Sd(a,b,c){var d,e,f;d=-b*la;b=Math.cos(d);e=Math.sin(d);d=-a*la;a=Math.cos(d);f=Math.sin(d);d=-c*la;c=Math.cos(d);d=Math.sin(d);return Bc([a*c-f*e*d,a*d+f*e*c,-f*b,0,-b*d,b*c,e,0,f*c+a*e*d,f*d-a*e*c,a*b,0,0,0,0,1])}
			//relative to snowfall,revoke all the time very very important
			function Xe(){
				var a=s.haschanged,b=!1;
				Wb++;
				var c=G.resizeCheck(),d=Q.processAnimations(),a=a|s.haschanged;
				if(!h.ios||h.ios&&"5"<=h.iosversion){
					d=!1;
				}
				d|=md;
				md=!1;
				d&&(s._hlookat+=((Wb&1)-0.5)/(1+s.r_zoom),a=!0);
				!1==Q.blocked&&(a|=Ca.handleFrictions(),ma.checkautorotate(s.haschanged)&&(a=b=!0));
				a||c?(ma.updateview(b,!0)):(s.updateView());
				ma.updateplugins(c);
				//h.desktop&&ma.checkHovering();
			}
			//this instance of hd(function hd(){})
			var kc=this;
			var Ma=navigator;
			var B=document;
			var BDE=B.documentElement;
			var t=window;
			var Na=Math.PI;
			var la=Na/180;
			var Ud=Number.NaN;
			var nd=0;
			var ga=t.performance&&t.performance.now?function(){return t.performance.now()-nd}:function(){return(new Date).getTime()-nd};
			var nd=ga();
			var Gc=String.fromCharCode;
			var m=null;
			var ob=0;
			var eb=0;
			var Ha=0;
			var oa=0;
			var F=1;
			var lc=1;
			var Hc=0;
			var fb=null;
			var na=null;
			var Y=null;
			var ib=null;
			var Sb=null;
			var Ic=null;
			var Qa=null;
			var X=null;
			var v=null;
			var Ba=null;
			var s=null;
			var Za=null;
			var $a=null;
			var Wb=0;
			var Ja=14;
			var od=null;
			var Jc=[_[313],[436]];
			var Ka=null;
			var yc="";
			var pd=!1;
			var md=!1;
			var qd=!1;
			var Cb=0;
			var h={
				runDetection:function(a){
					function b(){
						var a=screen.width,b=screen.height,c=h.topAccess?top:t,d=c.innerWidth,g=c.innerHeight,c=c.orientation|0,e=a/(b+1),f=d/(g+1);
						if(1<e&&1>f||1>e&&1<f){
							e=a,a=b,b=e;
						}
						r.width=a;
						r.height=b;
						r.orientation=c;
						h.window={width:d,height:g};
						a/=d;
						return h.pagescale=a
					}
					var c="multires flash html5 html mobile tablet desktop ie webkit ios iosversion iphone ipod ipad retina hidpi android androidstock blackberry touchdevice gesturedevice fullscreensupport windows mac linux air standalone".split(" ");
					var d,e,f,k,l=B.documentElement;
					e=c.length;
					for(d=0;d<e;d++){
						f=c[d],h[f]=!1;
					}
					h.html5=h.html=!0;
					h.iosversion=0;
					h.css3d=!1;
					h.webgl=!1;
					h.topAccess=!1;
					h.simulator=!1;
					var r=h.screen={};
					try{top&&top.document&&(h.topAccess=!0)}catch(j){}
					var w=Ma.platform,c=A(w);
					f=Ma.userAgent;
					var p=A(f),q=d="";
					0<=c.indexOf("win")?h.windows=!0:0<=c.indexOf("mac")?h.mac=!0:0<=c.indexOf("linux")&&(h.linux=!0);
					var n=t.devicePixelRatio,K=2<=n;
					e=1;
					var g=0<=c.indexOf("ipod"),wa=0<=c.indexOf(_[40]),D=0<=c.indexOf("ipad"),H=wa||g||D,C=0<=p.indexOf(_[415]),y=!1,aa=!1,m=!1,tb=f.indexOf(_[424]),s=f.indexOf(_[417]),c=!1,z=0;
					lc=b();

					//ios
					if(H){
						h.ios=!0;
						d=w;
						k=f.indexOf("OS ");
						if(0<k&&(k+=3,z=f.slice(k,f.indexOf(" ",k)).split("_").join("."),d+=_[416]+z,h.iosversion=z,"6.0"<=z&&(wa&&!K||g&&K))){
							h._iOS6_canvas_bug=!0;
						}
						y=wa||g;
						aa=D;
						h.iphone=wa||g;
						h.ipod=g;
						h.ipad=D;
						h.retina=K;
						if(wa||g)e/=2
					//android
					}else if(C){
						if(k=f.indexOf(_[410]),z=parseFloat(f.slice(k+8)),h.android=!0,h.androidversion=z,d=f.slice(k,f.indexOf(";",k)),y=0<A(p).indexOf(_[123]),aa=!y,d+=y?_[409]:_[402],k=f.indexOf(")"),5<k&&(z=f.slice(0,k).lastIndexOf(";"),5<z&&(K=f.indexOf(_[447],z),0<K&&(k=K),d+=" ("+f.slice(z+2,k)+")")),0<s&&(n=lc),aa&&1<n){
							if(h.hidpi=!0,e=n,0<=tb||0<s||1<lc)h.hidpi=!1,e=1
						}else{
							if(y){h.hidpi=1<n;e=n/2;0.5>e&&(e=0.5);if(0<=tb||1<lc)h.hidpi=!1,e=0.5;0<s&&(h.hidpi=!1,e=0.5)}
						}
					//pc
					}else{
						if(0<=p.indexOf(_[304])||0<=p.indexOf(_[327])||0<=p.indexOf("bb10")){
							h.blackberry=!0,d=_[279],c=!0;
						}
						0<=p.indexOf("ipad")||0<=p.indexOf(_[40])?m=!0:0<=p.indexOf(_[453])?(aa=!0,d+=_[454]):0<=p.indexOf(_[123])?(y=!0,d+=_[457],e=0.5):m=!0
					}
					g=Ma.vendor&&0<=Ma.vendor.indexOf("Apple");
					wa=t.opera;
					K=!1;
					m&&(d=_[385]+w);
					k=f.indexOf(_[398]);
					if(0<k&&(g||wa||C)){
						k+=8,z=f.slice(k,f.indexOf(" ",k)),g?(h.safari=!0,h.safariversion=z,q=_[445]):(C&&(q=_[222],c=!0),wa&&(h.opera=!0,h.operaversion=z,q="Opera")),q+=" "+z;
					}
					H&&(k=f.indexOf(_[441]),0<k&&(h.safari=!0,k+=6,z=parseFloat(f.slice(k,f.indexOf(" ",k))),h.crios=z,q=_[112]+z.toFixed(1)));
					k=tb;
					if(0<=k){
						z=parseFloat(f.slice(k+7)),h.chrome=!0,h.chromeversion=z,q=_[112]+z.toFixed(1),k=p.indexOf("opr/"),0<k&&(q=_[429]+parseFloat(f.slice(k+4)).toFixed(1)+_[339],c=!0),C&&28>z&&(c=!0),C&&(1<n&&20>z)&&(h.hidpi=!0,e=n,y&&(e/=2));
					}else if(k=s,0>k&&(k=f.indexOf(_[428])),0<=k&&(z=parseFloat(f.slice(1+f.indexOf("/",k))),h.firefox=!0,h.firefoxversion=z,q=_[376]+(isNaN(z)?"":z.toFixed(1)),C&&(c=!0)),k=f.indexOf("MSIE "),K=0<=k||0<=f.indexOf(_[413])){
						m=h.ie=!0,aa=!1,q=_[197];
						0<p.indexOf(_[364])||0<p.indexOf(_[240])?(y=!0,m=!1,q=_[420]+q,e=1):0<p.indexOf("arm;")&&1<Ma.msMaxTouchPoints&&(aa=!0,m=!1,q=_[299]+q,c=!0),0<=k?(z=f.slice(k+4,f.indexOf(";",k)),h.ieversion=parseFloat(z),q+=z):(k=f.indexOf("rv:"),0<=k&&(z=parseFloat(f.slice(k+3)),!isNaN(z)&&(10<=z&&100>z)&&(h.ieversion=z,q+=" "+z.toFixed(1)))),d=q,q="";
					}
					h.android&&(h.androidstock=!(h.chrome||h.firefox||h.opera));
					if(0<(k=p.indexOf(_[412])))z=parseFloat(p.slice(k+7)),!isNaN(z)&&0<z&&(h.webkit=!0,h.webkitversion=z);
					h.pixelratio=isNaN(n)?1:n;
					var p={},M=U();
					var n=function(a){
						for(var b=["ms","Moz",_[427],"O"],c=0;5>c;c++){
							var d=0<c?b[c-1]+a.slice(0,1).toUpperCase()+a.slice(1):a;
							if(void 0!==M.style[d]){
								return d;
							}
						}
						return null;
					};
					p.prefix=K?"ms":h.firefox?"moz":h.safari||h.chrome||h.androidstock?_[60]:"";
					p.perspective=n(_[293]);
					p.transform=n(_[347]);
					p.backgroundsize=n(_[237]);
					p.boxshadow=n(_[354]);
					p.boxshadow_style=_[233]==p.boxshadow?_[195]:_[261]==p.boxshadow?_[216]:_[98];
					C&&"4.0">h.androidversion&&(p.perspective=null);

					if(p.perspective&&(h.css3d=!0,_[198]==p.perspective&&t.matchMedia&&(n=t.matchMedia(_[166])))){
						h.css3d=!0==n.matches;
					}
					M=null;
					n=h;
					tb=null;
					try{
						for(var u=U(2),s=0;4>s&&!(tb=u.getContext([_[67],_[75],_[101],_[99]][s]));s++);
					}catch(R){}
					n.webgl=null!=tb;
					n={}			
					n.useragent=f;
					n.platform=w;
					u=n.events={};
					n.css=p;
					
					if(H||C||void 0!==l.ontouchstart){
						h.touchdevice=!0,h.gesturedevice=!0;
					}
					w=0;
					if((Ma.msPointerEnabled||Ma.pointerEnabled)&&h.ie){
						H=Ma.msMaxTouchPoints||Ma.maxTouchPoints,Ma.msPointerEnabled&&(w=2),Ma.pointerEnabled&&(w=1),h.touchdevice=0<H,h.gesturedevice=1<H;
					}
					u.touchstart=[_[317],_[288],_[258]][w];
					u.touchmove=[_[103],_[287],_[257]][w];
					u.touchend=[_[107],_[355],_[283]][w];
					u.touchcancel=[_[281],_[252],_[221]][w];
					u.gesturestart=[_[262],_[84],_[84]][w];
					u.gesturechange=[_[251],_[80],_[80]][w];u.gestureend=[_[322],_[86],_[86]][w];
					u.pointerover=[_[7],_[7],_[27]][w];
					u.pointerout=[_[5],_[5],_[19]][w];
					h.pointerEvents=function(){
						if(h.firefox)return!0;
						var a=B.createElement("x"),b=t.getComputedStyle,c=a.style;
						if(!(_[85]in c))return!1;
						c.pointerEvents="auto";
						c.pointerEvents="x";
						l.appendChild(a);
						b=b&&"auto"===b(a,"").pointerEvents;
						l.removeChild(a);return!!b
					}();
					q&&(d+=" - "+q);
					h.realDesktop=m;
					a=a.vars?A(a.vars.simulatedevice):null;
					_[353]==a&&(0<=f.indexOf(_[124])||0<=f.indexOf("iPod")?a=_[40]:0<=f.indexOf("iPad")&&(a="ipad"));
					h.touchdeviceNS=h.touchdevice;
					a=_[40]==a?1:"ipad"==a?2:0;
					0<a&&(h.simulator=!0,h.crios=0,d+=" - "+(1==a?_[124]:"iPad")+_[326],e=a/2,y=1==a,aa=2==a,m=!1,h.ios=!0,h.iphone=y,h.ipad=aa,h.touchdevice=!0,h.gesturedevice=!0);
					h.browser=n;
					h.infoString=d;
					h.mobile=y;
					h.tablet=aa;
					h.desktop=m;
					h.getViewportScale=b;
					F=e;
					!1==h.simulator&&(!1!=B.fullscreenEnabled&&!1!=B.mozFullScreenEnabled&&!1!=B.webkitFullScreenEnabled&&!1!=B.webkitFullscreenEnabled&&!1!=B.msFullscreenEnabled)&&(a=[_[204],_[168],_[165],_[164],_[185]],d=-1,e=null,f=_[211],l[a[0]]?(e="",d=0):l[a[1]]?(e="moz",d=1):l[a[2]]?(e=_[60],d=2):l[a[3]]?(e=_[60],d=3):l[a[4]]&&(e="MS",f=_[206],d=4),0<=d&&!1==c&&(h.fullscreensupport=!0,u.fullscreenchange=e+f,u.requestfullscreen=a[d]));
					h.buildList();
					delete h.runDetection
				},
				buildList:function(){
					var a,b="all";
					for(a in h)a==A(a)&&h[a]&&(b+="|"+a);
					h.haveList=b;
				}
		}
		var Ra=0,Xb=0,Vd=0,rd=!0,Ia=0,Kc=0,Db=0,jd=!1,xa=null,sd=null,td=null,ud=null,Ac=null,Lc=null,vd=!1,ab=0;
		var Tb=function(){
			var a=this;
			a._type="base";
			a.registerattribute=function(b,c,d,e){
				b=A(b);
				d&&e?(a.hasOwnProperty(b)&&(c=Wa(a[b],typeof c)),a.__defineGetter__(b,e),a.__defineSetter__(b,d),d(c)):a[b]=a.hasOwnProperty(b)?Wa(a[b],typeof c):c
			};
			
			a.createobject=function(b){
				b=A(b);
				try{return a.hasOwnProperty(b)?a[b]:a[b]=new Tb}catch(c){}
				return null
			};
			a.removeobject=a.removeattribute=function(b){
				b=A(b);
				try{a[b]=null,delete a[b]}catch(c){}
			};
			a.createarray=function(b){
				b=A(b);
				return a[b]&&a[b].isArray?a[b]:a[b]=new Ya(Tb)
			};
			a.removearray=function(b){
				b=A(b);
				a[b]&&a[b].isArray&&(a[b]=null,delete a[b]);
			};
			a.getattributes=function(){
				var b=[],c=["index",_[382]],d;
				for(d in a){_[10]!=typeof a[d]&&(-1==c.indexOf(d)&&"_"!=d.charAt(0))&&b.push(d);}
				return b
			}
		};
		//render for return objrct array
		var Ya=function(a,b){
			var c=[],d={};
			this.isArray=!0;
			this.isDynArray=!0==b;
			this.__defineGetter__("count",function(){return c.length});
			this.__defineSetter__("count",function(a){0==a?(c=[],d={}):c.length=a});
			this.createItem=function(b,f){
				var k=-1,l=null,k=String(b).charCodeAt(0);
				if(48<=k&&57>=k){
					if(f){
						return null;
					}
					k=parseInt(b,10);
					l=c[k];
					if(null==l||void 0==l)l=null!=a?new a:{},l.name="n"+k,l.index=k,c[k]=l,d[l.name]=l
				}else if(b=A(b),l=d[b],null==l||void 0==l){
					l=f?f:null!=a?new a:{},k=c.push(l)-1,l.index=k,l.name=b,c[k]=l,d[b]=l;
				}
				return l;
			};
			this.getItem=function(a){
				var b=-1,b=String(a).charCodeAt(0);
				48<=b&&57>=b?(b=parseInt(a,10),a=c[b]):a=d[A(a)];
				return a;
			};
			this.getArray=function(){return c};
			this.renameItem=function(a,b){
				var k=-1,k=String(a).charCodeAt(0);
				48<=k&&57>=k?(k=parseInt(a,10),k=c[k]):k=d[A(a)];
				k&&(delete d[k.name],b=A(b),k.name=b,d[b]=k)
			};
			this.removearrayitem=this.removeItem=function(a){
				var b=-1,b=null;
				a=String(a);
				b=String(a).charCodeAt(0);
				48<=b&&57>=b?(b=parseInt(a,10),b=c[b]):b=d[A(a)];
				if(b){
					d[b.name]=null;
					delete d[b.name];
					c.splice(b.index,1);
					var k;
					k=c.length;
					for(a=b.index;a<k;a++){
						c[a].index--;
					}
				}
				return b;
			}
		}
		
		var ya={};
		var Wd=function(a){
			for(var b=Ye,c=[],d,e,f,k,l,r=a.length,j=0,h=0;j<r;)d=b.indexOf(a.charAt(j++)),e=b.indexOf(a.charAt(j++)),k=b.indexOf(a.charAt(j++)),l=b.indexOf(a.charAt(j++)),d=d<<2|e>>4,e=(e&15)<<4|k>>2,f=(k&3)<<6|l,c[h++]=d,64!=k&&(c[h++]=e),64!=l&&(c[h++]=f);
			return c
		};
		var Xd=function(a,b,c){
			if(null==a){
				return null;
			}
			!0==b&&m.basedir&&0>a.indexOf("://")&&0!=a.indexOf("/")&&(a=m.basedir+a);
			a=a.split("\\").join("/");
			null==ha.firstxmlpath&&(ha.firstxmlpath="");
			null==ha.currentxmlpath&&(ha.currentxmlpath="");
			null==ha.swfpath&&(ha.swfpath="");
			null==ha.htmlpath&&(ha.htmlpath="");
			for(b=a.indexOf("%");0<=b;){
				var d=a.indexOf("%",b+1);
				if(d>b){
					var e=a.slice(b+1,d),f=null;
					if(36==e.charCodeAt(0)){
						if(e=N(e.slice(1)),null!=e){
							a=a.slice(0,b)+e+a.slice(d+1);
							b=a.indexOf("%");
							continue;
						}
					}else switch(e){
						case _[383]:
							f=!0==c?"":ha.firstxmlpath;
							break;
						case _[328]:
							f=ha.currentxmlpath;
							break;
						case _[421]:
							f=!0==c?"":ha.swfpath;
							break;
						case _[386]:
							f=!0==c?"":ha.htmlpath;
							break;
						case _[391]:
							f=!0==c?"":m.basedir
					}
					null!=f?(d++,"/"==a.charAt(d)&&d++,a=f+a.slice(d),b=a.indexOf("%")):b=a.indexOf("%",b+1);
				}else{ 
					b=-1;
				}
			}
			return a
		};
		
		var wd=function(a,b,c){
			var d,e;
			if(0<=(d=b.indexOf(_[303]))){
				if((e=b.indexOf(_[271]))>d){b=b.slice(d+11,e);}d=null;
			}
			void 0!==c?e=b:(c=b.slice(0,8),e=b.slice(8));
			if("KENC"!=c.slice(0,4)){return b;}
			var f=!1,k=b=0,k=0;
			b=String(c).charCodeAt(4);
			if(80==b||82==b||71==b){
				k=String(c).charCodeAt(5),85==k&&(k=String(c).charCodeAt(6),66==k&&(f=!0));
			}
			if(!f){
				return a&&$(3,a+_[139]),null;
			}
			if(Ja&32&&80==b){
				return a&&ka(a+_[46]),null;
			}
			a=Wd(e);
			c=b;
			var l,r;
			b=[];
			b.length=256;
			if(80==c||82==c){
				r=15;
				e=_[78];
				82==c&&od&&(r=127,e=od);
				l=a[65]&7;
				for(c=0;128>c;c++){
					b[2*c]=a[c],b[2*c+1]=String(e).charCodeAt(c&r);
				}
				r=a.length-128-l;
				l+=128;
			}else if(71==c){
				l=a[4];
				r=(a[l]^l)&15|((a[2+l]^l)>>2&63)<<4|((a[1+l]^l)>>1&63)<<10|((a[3+l]^l)&63)<<16;
				for(c=0;256>c;c++){
					b[c]=a[c]^a[256+r+l+2*c];
				}
				l=256;
			}
			Yd.srand(b,256);
			a=Yd.flip(a,l,r);
			null!=a&&(d=Zd(a));
			return d;
		}
		var Zd=function(a){
			for(var b="",c=0,d=0,e=0,f=0,k=a.length;c<k;)d=a[c],128>d?(b+=Gc(d),c++):191<d&&224>d?(e=a[c+1],b+=Gc((d&31)<<6|e&63),c+=2):(e=a[c+1],f=a[c+2],d=(d&15)<<12|(e&63)<<6|f&63,65279!=d&&(b+=Gc(d)),c+=3);
			return b;
		}
		var ha=ya;
		var Ye=_[128];
		ha.firstxmlpath=null;
		ha.currentxmlpath=null;
		ha.swfpath=null;
		ha.htmlpath=null;
		ha.parsePath=Xd;
		var Yd=new function(){
			var a,b,c;
			this.srand=function(d,e){
				var f,k,l,r,j=[];
				j.length=256;
				for(f=0;256>f;f++){
					j[f]=f;
				}
				for(k=f=0;256>f;f++){
					k=k+j[f]+d[f%e]&255,r=j[f],j[f]=j[k],j[k]=r;
				}
				for(l=k=f=0;256>l;l++){
					f=f+1&255,k=k+j[f]&255,r=j[f],j[f]=j[k],j[k]=r;
				}
				a=j;
				b=f;
				c=k;
			}
			this.flip=function(d,e,f){
				var k=[],l,r;
				k.length=f;
				var j=a,h=b,p=c;
				for(l=0;l<f;l++,e++){
					h=h+1&255,p=p+j[h]&255,k[l]=d[e]^a[j[h]+j[p]&255],r=j[h],j[h]=j[p],j[p]=r;b=h;c=p;
				}
				return k;
			}
		};
		ha.loadfile=function(a,b,c){
			ha.loadfile2(a,null,b,c);
		};
		ha.loadfile2=function(a,b,c,d){
			var e={errmsg:!0};
			e.rqurl=a;
			a=Xd(a);
			var f=e.url=a;
			var k=function(b,c){
				d&&d(e);
				e.errmsg&&$(3,a+_[25]+c+")");
			}
			var l=new XMLHttpRequest;
			void 0!==l.overrideMimeType&&b&&l.overrideMimeType(b);
			l.onreadystatechange=function(){
				if(4==l.readyState){
					var a=l.status,b=l.responseText;
					0==a&&b||200==a||304==a?(a=wd(f,b),e.data=a,null!=a?c&&c(e):d&&d(e)):void 0!==k?k(f,l.status):ka(f+_[25]+l.status+")");
				}
			};
			try{l.open("GET",f,!0),l.send(null)}catch(h){void 0!==k?k(f,l.e):ka(f+_[70])}
		};
		ha.resolvecontentencryption=wd;
		ha.b64u8=function(a){return Zd(Wd(a))};
		ha.decodeLicense=function(a){
			a=(new DOMParser).parseFromString(a,_[20]);
			if(a=P.findxmlnode(a,_[397])){
				var b=wd(null,a.firstChild.nodeValue,_[360]);
				if(b){
					if(a=a.attributes.regname)a=a.nodeValue;
					var b=b.split(";"),c={},d;
					for(d=0;d<b.length;d++){
						var e=b[d].split("=");
						2==e.length&&(c[e[0]]=e[1]);
					}
					if(c.user==a)return c
				}
			}
			return null;
		};
		var P={};
		var $d=function(a){
			var b,c,d=a.childNodes,e;
			c=d.length;
			for(b=0;b<c;b++)if(e=d.item(b))switch(e.nodeType){case 1:$d(e);break;case 8:a.removeChild(e),b--,c--}
		}
		var ae=function(a,b){
			var c,d,e=a.childNodes,f=-1;d=e.length;
			if(1<=d){
				for(c=0;c<d;c++){
					if(A(e[c].nodeName)==b){f=c;break}return 0<=f?e[f]:null;
				}
			}
		}
		//relative to xml
		var be=function(a,b,c){
			for(var d,e,f,k,l,r,j,w=a.length,p=new XMLSerializer,q=0;q<w;q++){
				if((d=a[q])&&d.nodeName&&"#text"!=d.nodeName){
					if(e=d.nodeName,e=A(e),e=null==b&&"snow"==e?null:b?b+"."+e:e,f=d.attributes,!f||!(f.devices&&!1==h.checkSupport(f.devices.nodeValue))){
						j=(k=f&&f.name?f.name.nodeValue:null)?!0:!1;
						if(c){
							if((_[41]==e||"layer"==e)&&c&4){
								continue;
							}
							if(_[11]==e&&c&128){
								continue;
							}
							if(_[43]==e&&c&65536){
								continue;
							}
							if(c&64&&k){
								if(_[41]==e||"layer"==e){
									var n=Ba.getItem(k);
									if(n&&n._pCD&&n.keep){
										continue;
									}
								}else if(_[11]==e&&(n=Qa.getItem(k))&&n._pCD&&n.keep){
									continue;
								}
							}
						}
						if(e)if(j){if(_[12]==e||"data"==e||"scene"==e){$d(d);j=null;if((_[12]==e||"data"==e)&&d.childNodes&&1<=d.childNodes.length)for(n=0;n<d.childNodes.length;n++)if(4==d.childNodes[n].nodeType){j=d.childNodes[n].nodeValue;break}null==j&&(j=p.serializeToString(d),j=j.slice(j.indexOf(">")+1,j.lastIndexOf("</")),_[12]==e&&(j=j.split(_[435]).join('"').split(_[434]).join("'").split(_[433]).join(String.fromCharCode(160)).split("&amp;").join("&")));I(e+"["+k+_[34],j);if(f){n=f.length;for(j=0;j<n;j++)l=f[j],r=A(l.nodeName),l=l.nodeValue,"name"!=r&&(r=e+"["+k+"]."+A(r),I(r,l))}continue}e=e+"["+k+"]";if(!Ab(k,e))continue;I(e+".name",k)}else if((k=N(e))&&k.isArray&&!k.isDynArray)k="n"+String(k.count),e=e+"["+k+"]",I(e+".name",k);if(f){n=f.length;for(j=0;j<n;j++)l=f[j],r=A(l.nodeName),l=l.nodeValue,k=e?e+".":"","name"!=r&&(r=k+A(r),I(r,l))}d.childNodes&&0<d.childNodes.length&&be(d.childNodes,e,c)
					}
				}
			}
		}
		var ce=function(a,b){
			var c=null,d,e;
			e=a.length;
			for(d=0;d<e;d++)if(c=a[d],!c||!(c.nodeName&&_[12]==A(c.nodeName))){var f=c.attributes;if(f){var k,l=f.length;for(k=0;k<l;k++){var h=f[k],j=A(h.nodeName),w=j.indexOf("url");if(0==w||0<w&&w==j.length-3)j=h.nodeValue,0<j.indexOf("://")||47==j.charCodeAt(0)||""!=j&&(j=b+j),h.nodeValue=j}}c.childNodes&&0<c.childNodes.length&&ce(c.childNodes,b)}
		}
		var de=function(a,b){
			var c=rb(b),d=c.lastIndexOf("/"),e=c.lastIndexOf("\\");
			e>d&&(d=e);
			0<d&&(c=c.slice(0,d+1),ce(a,c));
		}
		var ee=function(a,b){
			var c=ae(a,_[332]);
			if(c){
				var d="",e,f;
				f=c.childNodes.length;
				for(e=0;e<f;e++){
					d+=c.childNodes[e].nodeValue;
				}
				if(c=ya.resolvecontentencryption(b,d)){
					return(c=(new DOMParser).parseFromString(c,_[20]))&&c.documentElement&&_[31]==c.documentElement.nodeName?($(3,b+_[18]),null):c;
				}
				ka(b+_[46]);
				return null;
			}
			return Ja&32?(ka(b+_[46]),null):a
		}
		//step4
		var fe=function(a,b){
			b();
		}
		var Ze=P;
		P.resolvexmlencryption=ee;
		//step3
		P.resolvexmlincludes=function(a,b){
			var c=a.childNodes;
			P.xmlDoc=a;
			P.xmlAllNodes=[];
			P.addNodes(c);
			//de(c,m.xml.url);
			P.xmlIncludeNode=null;
			fe(null,b);
		};
		P.parsexml=be;
		P.xmlDoc=null;
		P.xmlAllNodes=null;
		P.xmlIncludeNode=null;
		P.addNodes=function(a){
			var b,c,d;
			d=a.length;
			for(c=0;c<d;c++){
				if((b=a[c])&&b.nodeName&&_[12]!=A(b.nodeName)){
					P.xmlAllNodes.push(b),b.childNodes&&0<b.childNodes.length&&P.addNodes(b.childNodes);
				}
			}
		};
		var Q={};
		(function(){
			function a(a,b,c){
				var d,g=a.length;
				c=!0!=c;
				for(d=0;d<g;d++){
					var e=String(a[d]);
					c&&"null"==(""+e).toLowerCase()?a[d]=null:")"==e.charAt(e.length-1)&&"get("==e.slice(0,4).toLowerCase()&&(e=String(N(W(e.slice(4,e.length-1)),b)),a[d]=e)
				}
			}
			function b(a,b){
				var c="",d,g,e,f,j;
				e=a.length;
				j=b.length;
				for(g=0;g<e;g++)d=a.charAt(g),"%"==d?(g++,d=a.charCodeAt(g)-48,0<=d&&9>=d?(g+1<e&&(f=a.charCodeAt(g+1)-48,0<=f&&9>=f&&(g++,d=10*d+f)),c=d<j?c+String(b[d]):c+"null"):c=-11==d?c+"%":c+("%"+a.charAt(g))):c+=d;
				return c;
			}
			function d(a){var b=w,c=b.length,d;for(d=0;d<c;d++)if(b[d].id==a){b.splice(d,1);break}}
			function e(a){
				var b=a.length;
				if(2==b||3==b){
					var c=N(a[b-2],j.actioncaller),d=N(a[b-1],j.actioncaller);
					null==c&&(c=a[b-2]);
					null==d&&(d=a[b-1]);
					return[a[0],parseFloat(c),parseFloat(d)];
				}
				return null;
			}
			function f(a,b,c){var d=1==b.length?N(b[0],c):b[1],d=0==a?escape(d):unescape(d);I(b[0],d,!1,c,!0)}
			function l(a){var b=a.waitfor;"load"==b?ma.isLoading()&&(a.position=0):_[66]==b&&ma.isBlending()&&(a.position=0)}
			var j=Q;
			
			//Q = j
			j.busy=!1;
			j.blocked=!1;
			j.queue=[];
			j.actioncaller=null;
			var w=[],p=[],q=null,n=0;
			var K=function(){
				this.id=null;
				this.blocking=!1;
				this.position=this.maxruntime=this.starttime=0;
				this.updatefu=this.actioncaller=this.donecall=this.process=null	
			};
			j.isblocked=function(){
				if(j.blocked){
					var a=q;
					if(a){
						q=null,j.stopall(),"break"!=A(a)&&j.callaction(a),j.processactions();
					}else{ return!0
					}
				}
				return!1
			};
			//step 11
			j.callaction=function(a,b,c){
				if(a&&"null"!=a&&""!=a){
					var d=typeof a;
					if(_[10]===d){
						//a();
					}else if(_[114]!==d&&(a=Ub(a,b))){
						var d=a.length,g=0<j.queue.length,e=!1;
						for(b=0;b<d;b++){
							var f=a[b];
							_[290]==f.cmd&&(e=!0);
							f.breakable=e;
							!0==c?j.queue.splice(b,0,f):j.queue.push(f);
						}
						!1==g&&j.processactions();
					}
				}
			};
			var g=!1;
			//step12
			j.processactions=function(){
				if(!g){
					g=!0;
					for(var c=null,d=null,e=null,f=null,l=0,k=j.queue;null!=k&&0<k.length;){
						if(j.busy||j.blocked){g=!1;return}
						l++;
						if(1E4<l){$(2,_[78]);k.length=0;break}
						c=k.shift();
						d=String(c.cmd);
						e=c.args;
						c=c.caller;
						j.actioncaller=c;
						if((!c||!c._busyonloaded||!c._destroyed)&&"//"!=d.slice(0,2)){
							if("call"==d&&(d=A(e.shift())),a(e,c,"set"==d),void 0!==j[d]){
								j[d].apply(j[d],e);
							}else if(c&&void 0!==c[d]){
								f=c[d],_[10]===typeof f?f.apply(f,e):j.callaction(c[d],c,!0);
							}else{
								f=null;
								if(null!=(f=N(d))){
									var h=typeof f;
									_[10]===h?f.apply(f,e):_[114]===h?$(2,_[77]+sb(d)):(e.splice(0,0,d),f=b(f,e),j.callaction(f,c,!0))
								}else{
									(f=N(_[419]+d+_[34]))?(e.splice(0,0,d),f=b(f,e),j.callaction(f,c,!0)):$(2,_[77]+sb(d))
								}
							}
						}
					}
					j.blocked||(q=null);
					j.actioncaller=null;
					g=!1
				}
			};
			j.processAnimations=function(a){var b=!1,c=w,d=c.length,g,e=ga();a=!0==a;for(g=0;g<d;g++){var f=c[g],l=(e-f.starttime)/1E3/f.maxruntime;isNaN(l)&&(l=1);1<l&&(l=1);f.position=l;null!=f.process&&(b=!0,f.process(f),l=f.position);if(1<=l||a)c.splice(g,1),d--,g--,f.blocking?(j.blocked=!1,j.processactions()):f.donecall&&!1==a&&j.callaction(f.donecall,f.actioncaller)}j.blocked&&(b=!1);return b};
			//step1
			j.loadpano=function(a,b,c,d,e){ma.loadpano(a,b,c,d,e)};
		})();
		
		
		
		var G={};
		var ge=function(a){a=_[159]+a;t.console?t.console.log(a):alert(a)};
		var Yb=function(a,b,c,d,e,f){var k=U(),l=k.style;l.position=_[0];"LT"==a?(l.left=b,l.top=c):(l.left=b,l.bottom=c);l.width=d;l.height=e;l.overflow=_[4];!1===f&&(l.webkitUserSelect=l.MozUserSelect=l.msUserSelect=l.oUserSelect=l.userSelect="none");return k};
		var xd=function(a){if(E.fullscreen=a)t.activekrpanowindow=Ea.id;ea(!0==a?_[201]:_[209])};
		var he=function(a){ub&&(va(a),E.onResize(a),setTimeout(mc,250))}
		var vb=function(a,b){for(var c=a.style,d=b.length,e=0,e=0;e<d;e+=2)c[b[e]]=b[e+1]};
		var ie=function(){xd(!(!B.fullscreenElement&&!B.mozFullScreenElement&&!B.webkitIsFullScreen&&!B.webkitFullscreenElement&&!B.msFullscreenElement))}
		var je=function(){if(ub){var a=t.innerHeight,b=eb;a<b?E.__scrollpage_yet=!0:E.__scrollpage_yet&&(E.__scrollpage_yet=!1,mc());if(a!=b)E.onResize(null)}}
		var mc=function(){var a=t.innerWidth,b=t.innerHeight;E.__scrollpage_yet&&b==eb&&(E.__scrollpage_yet=!1);var c=screen.height-64,d=268;26<=h.crios&&(c+=44,d=300);(320==a&&b!=c||a==screen.height&&b!=d)&&t.scrollTo(0,1)};
		var yd=function(a,b){va(a);var c="none"==bb.style.display?"":"none";void 0!==b&&(c=!0==b?"":"none");bb.style.display=c;pa.scrollTop=pa.scrollHeight};
		var ke=function(){Mc&&(La.removeChild(Mc),Mc=null);var a,b=U();a=25;h.androidstock&&h.hidpi?a=38:h.mobile&&(a=14,h.androidstock?a=14*h.pixelratio:h.android&&h.chrome&&(a=25/h.pixelratio));vb(b,[_[54],_[0],"left","50%","top","50%",_[65],_[35],_[104],a+"px",_[45],"none",_[85],"none"]);a=b.style;a.zIndex=999999;a.opacity=0.67;a=U();vb(a,"position;relative;left;-50%;top;-25px;fontFamily;sans-serif;textShadow;#000000 1px 1px 2px;lineHeight;110%".split(";"));a.innerHTML=_[375]+(Ka&&Ka[1]&&6<W(Ka[1],!1).length?Ka[1]:_[137])+_[340];b.appendChild(a);La.appendChild(b);Mc=b};

		var E=G;
		E.fullscreen=!1;
		var le=!0,ub=!1,zd=!1;
		E.__scrollpage_yet=!1;
		var nc=null,Ea=null,La=null;
		E.htmltarget=null;
		E.viewerlayer=null;
		E.controllayer=null;
		E.panolayer=null;
		E.pluginlayer=null;
		var bb=E.hotspotlayer=null,pa=null,pb=null,Eb=null,me=0,ne=0,Nc=!1,Ad=!1;
		//create pano container very important
		E.build=function(a){
			/*
			 a is custom config{"basepath":"","bgcolor":""...............}			 
			 * */
			function b(){yd(null,!1)}
			var c=a.target,d=a.id,e=B.getElementById(c);
			if(!e){
				return ge(_[140]+c),!1;
			}
			for(var c=null,f=d,k=1;;)if(c=B.getElementById(d))if(_[231]==f)k++,d=f+k;else return ge(_[135]+d),!1;else break;
			//
			c=U();
			c.id=d;
			c.style.position=_[108];
			c.style.overflow=_[4];
			c.style.lineHeight=_[61];
			c.style.fontWeight=_[61];
			c.style.fontStyle=_[61];
			c.tabIndex=-1;
			c.style.outline=0;
			d="#000000";
			a.bgcolor&&(d=a.bgcolor);
			a=A(a.wmode);
			if(_[294]==a||_[425]==a){
				d=null;
			}
			null!=d&&(c.style.background=d);
			//$("#pano").append($("#test"))
			e.appendChild(c);
			
			Ea=c;
			E.htmltarget=e;
			E.viewerlayer=c;
			La=Yb("LT",0,0,"100%","100%",!1);
			vb(La,"msTouchAction none msContentZooming none -webkit-tap-highlight-color rgba(255,255,255,0)".split(" "));
			E.controllayer=La;
			d=Yb("LT",0,0,"100%","100%");
			d.id="panocon"
			E.panolayer=d;
			E.spellpano();
			//pointer-events:none
			vb(d,[_[238],"none"]);
			e=Yb("LT",0,0,"100%","100%",!1);
			//transformStyle:preserve-3d 
			e.id="plugincon"
			vb(e,[sd,_[30]]);
			a=e;
			h.android&&h.firefox&&(f=Yb("LT",0,0,"1px","1px"),f.style.background="rgba(0,0,0,0.1)",f.style.pointerEvents="none",f.style.zIndex=999999999,f.style.transform="translateZ(+2000000000000px) ",e.appendChild(f));
			f=h.hidpi?216:156;
			//bb seem a div for alert information
			//bb=Yb("LB",0,0,"100%",f+"px",!0);
			//bb.style.display="none";
			//if(!0!==h.opera&&(2>Ia&&(bb.style[xa]=_[17]),h.ios&&!1==h.simulator||h.android&&h.chrome)){
				//bb.style[xa]=_[17];
			//}
			//h.ie&&(bb.style.zIndex=999999999);
			//k=Yb("LT",0,0,"100%","100%",!0);
			//k.style.opacity=0.67;
			//h.android&&h.opera&&(k.style.borderTop=_[149]);
			//vb(k,[_[228],_[21],Ac,_[365]+(h.hidpi?16:8)+_[321],_[100],(h.hidpi?6:8)+"px",_[418],0.67]);
			//pa=B.createElement("pre");
			//var l=null;
			//h.mac&&(l=_[256]+(t.chrome?"1px":"0"));
			//h.realDesktop?(pa.style.fontFamily=_[50],pa.style.fontSize="11px",l&&(pa.style.fontSize="13px",pa.style.textShadow=l)):(pa.style.fontFamily=_[52],pa.style.fontSize=h.iphone&&h.retina?"8px":h.hidpi?"20px":h.android&&h.mobile&&!1==h.androidstock?"9px":"13px");
			//vb(pa,[_[54],_[0],"left","5px","top","0px",_[42],"left",_[285],0,_[268],h.realDesktop?"16px":0,_[318],0,_[245],0,_[96],"none",_[63],0,_[100],(h.realDesktop?10:8)+"px",_[44],"100%",_[39],f-10+"px",_[356],"auto",_[192],"none",_[406],"block",_[351],"left",_[311],_[387],_[45],"none",_[65],_[35]]);
			//pb=U();
			//l&&(pb.style.textShadow=l);
			//vb(pb,[_[54],_[0],_[2],0,_[1],0,_[44],h.iphone&&h.retina?"24px":h.hidpi?"60px":"34px",_[39],f-10+"px",_[212],"none",_[254],"none",_[443],_[36],_[155],_[189],_[310],h.realDesktop?_[50]:_[52],_[104],h.iphone&&h.retina?"6px":h.realDesktop?"10px":h.hidpi?"18px":"9px",_[65],_[35]]);
			//pb.innerHTML="CLOSE";
			//x(pb,_[103],va,!0);
			//x(pb,_[107],b,!0);
			//x(pb,_[6],b,!0);
			//bb.appendChild(k);
			//bb.appendChild(pa);
			//bb.appendChild(pb);
			c.appendChild(La);
			La.appendChild(d);
			0<h.iosversion&&"5">h.iosversion&&(a=U(),a.style.position=_[0],e.appendChild(a),La.style.webkitTransformStyle=_[30],e.style.webkitTransformStyle="flat");
			La.appendChild(e);
			d=U();
			d.style.position=_[0];
			d.style.webkitTransformStyle="preserve-3d";
			a.appendChild(d);
			//c.appendChild(bb);
			E.pluginlayer=e;
			E.hotspotlayer=a;
			h.fullscreensupport&&x(B,h.browser.events.fullscreenchange,ie);
			Eb=[c.style.width,c.style.height];
			E.onResize(null);
			
			x(t,"resize",E.onResize,!1);
			h.iphone&&h.safari&&x(t,"scroll",je,!1);
			x(t,"orientationchange",he,!1);
			return!0
		};
		E.setFullscreen=function(a){
			if(h.fullscreensupport){
				if(a){
					Ea[h.browser.events.requestfullscreen]();
				}else {
					try{B.exitFullscreen&&B.exitFullscreen(),B.mozCancelFullScreen&&B.mozCancelFullScreen(),B.webkitCancelFullScreen&&B.webkitCancelFullScreen(),B.webkitExitFullscreen&&B.webkitExitFullscreen(),B.msExitFullscreen&&B.msExitFullscreen()}catch(b){}
				}
			}else{
				var c=B.body,d=c.style;
				if(a){
					E.fsbkup=[d.padding,d.margin,d.overflow,c.scrollTop,c.scrollLeft,t.pageYOffset],d.padding="0 0",d.margin="0 0",d.overflow=_[4],c.scrollTop="0",c.scrollLeft="0",c.appendChild(Ea),Ea.style.position=_[0],Ea.style.left=0,Ea.style.top=0,Ea.style.width="100%",Ea.style.height="100%",Ca.domUpdate(),t.scrollTo(0,0),xd(!0);
				}else if(a=E.fsbkup){
					E.htmltarget.appendChild(Ea),d.padding=a[0],d.margin=a[1],d.overflow=a[2],c.scrollTop=a[3],c.scrollLeft=a[4],Ea.style.position=_[108],Ca.domUpdate(),t.scrollTo(0,a[5]),E.fsbkup=null,xd(!1)
				}
			}
		};
		E.onResize=function(a,b){
			Nc=b;
			va(a);
			var c=Ea,d="100%",e="100%";
			null==Eb&&(Eb=[c.style.width,c.style.height]);
			Eb&&(d=Eb[0],e=Eb[1],""==d&&(d="100%"),""==e&&(e="100%"),Eb=null);
			var f=kc.so;f&&(f.width&&(d=f.width),f.height&&(e=f.height));
			E.fullscreen&&(d=e="100%");
			var k=c.parentNode,l=0,r=c;
			do{
				 if(l=r.offsetHeight,0>=l){
				 	if(r=r.parentNode,null==r){l=t.innerHeight;break}
				 }else{
				 	 break;
				 }
			}while(1);
			f=0;
			for(r=c;r&&"body"!=A(r.nodeName);){
				f++,r=r.parentNode;
			}
			var k=k?k.offsetHeight:t.innerHeight,j=c.clientWidth,r=d,c=e;
			0<String(d).indexOf("%")?d=parseFloat(d)*j/100:(d=parseFloat(d),r=d+"px");
			0<String(e).indexOf("%")?e=parseFloat(e)*l/100:(e=parseFloat(e),c=e+"px");
			1>e&&(e=100);
			//l,j
			l=screen.width;
			j=screen.height;
			h.iphone&&320==l&&"4.0">h.iosversion&&480>j&&(j=480);
			var w=t.innerWidth,p=t.innerHeight;
			h.ios&&2>=f&&(26<=h.crios&&k>p&&(p=e=k),"7"<=h.iosversion&&e>p&&(e=p,ub=zd=!0,setTimeout(mc,10)));
			if(le){
				if(le=!1,h.iphone){
					if(320==w&&p>=j-124?p=j-124:w==j&&208<=p&&(p=208),2>=f){
						if(w==d&&p&&(320==d&&e==j-124||d==j&&(208==e||320==e))){
							ub=!0;
						}
						if(26<=h.crios&&(320==d||d==j)){
							ub=!0;
						}
					}
				}else{
					 h.ipad&&(28<=h.crios&&2>=f)&&(d>e!=l>j&&(f=l,l=j,j=f),d==l&&e==j-20&&(zd=ub=!0));
				}
			}
			ub&&(zd?(d=w,e=p):320==t.innerWidth?(d=320,e=j-64,h.crios&&(e+=44)):(d=j,e=320==t.innerHeight?320:268,26<=h.crios&&(e=300)),r=d+"px",c=e+"px");
			h.getViewportScale();
			f=r;
			Ca&&Ca.focusLoss();
			ub&&null==nc&&(nc=setInterval(mc,4E3),setTimeout(mc,250));
			k=!1;
			if(ob!=d||eb!=e||Nc){
				k=!0,Nc=!1,ob=d,eb=e;
			}
			Za&&(Za._pxw=Za.pixelwidth=Za.imagewidth=ob/F,Za._pxh=Za.pixelheight=Za.imageheight=eb/F);
			$a&&($a._pxw=$a.pixelwidth=$a.imagewidth=ob/F,$a._pxh=$a.pixelheight=$a.imageheight=eb/F);
			k&&(fb&&fb.calc(ob,eb),ea(_[55]),k=!1);
			fb?(k|=fb.calc(ob,eb),La.style.left=fb.pixelx*F+"px",La.style.top=fb.pixely*F+"px",La.style.width=Ha+"px",La.style.height=oa+"px",d=Ha,e=oa):(Ha=ob,oa=eb);
			Hc=Math.max(4*e/3,d);
			Ea.style.width=f;
			Ea.style.height=c;
			//
			//sa.size(d,e);
			Ad=!0;
			k&&ea(_[55]);
			ma.updateview(!1,!0);
			E.resizeCheck(!0);
			
			for(__ in E.scence){
				E.scence[__].con.style.webkitTransform=E.scence[__].rotate+"translateZ(-"+e/2+"px)";
				E.scence[__].con.style.mozTransform=E.scence[__].rotate+"translateZ(-"+e/2+"px)";
				E.scence[__].con.style.msTransform=E.scence[__].rotate+"translateZ(-"+e/2+"px)";
				E.scence[__].con.style.oTransform=E.scence[__].rotate+"translateZ(-"+e/2+"px)";
			}
			s.panocon.style.marginLeft=((d-e)/2)+"px";
			s.panocon.style.width=e+"px";
			s.panocon.style.height=e+"px";
			Nc=!1;
		};
		E.resizeCheck=function(a){
			var b=!1,c=Ea,d=c.clientWidth,c=c.clientHeight;
			if(d!=me||c!=ne||a||fb&&fb.haschanged)if(me=d,ne=c,b=!0,!0==a)b=!1;else E.onResize(null);Ad&&!0!==a&&(b=!0,Ad=!1);255==(Wb&511)&&0==(Ja&1)&&ke();
			return b
		};
		var Zb="";
		E.log=function(a){
			if("cls"==a){
				pa.innerHTML="";
			}else if("d"==a){
				ke();
			}else{
				var b=4>h.firefoxversion?4096:1E4;
				Zb+=a+"\n";Zb.length>b?(Zb=Zb.slice(-b/2,-1),pa.innerHTML=Zb):pa.firstChild?pa.firstChild.nodeValue+="\n"+a:pa.innerHTML+=a;
				pa.scrollTop=pa.scrollHeight;
				kc.so.vars&&(Fa(kc.so.vars.consolelog)&&t.console&&t.console.log)&&t.console.log(a)
			}
		};
		E.showlog=function(a){yd(null,a)};
		E.togglelog=yd;
		E.getMousePos=function(a,b){
			var c;
			if(_[33]!=typeof WebKitPoint){
				c=new WebKitPoint,c.x=a.pageX,c.y=a.pageY,c=t.webkitConvertPointFromPageToNode(b?b:La,c);
			}else{
				c={};
				var d=b?b:La,e=d.getBoundingClientRect();
				c.x=Math.round(a.clientX-e.left-d.clientLeft+d.scrollLeft);
				c.y=Math.round(a.clientY-e.top-d.clientTop+d.scrollTop);
			}
			return c;
		};
		E.scence={
			"f":{"con":(function(){var _t=U();_t.className="scense_panel scense_f";return _t;})(),"img":"images/pano_f.jpg","size":0,"rotate":"rotateY(0deg)","id":"f"},
			"r":{"con":(function(){var _t=U();_t.className="scense_panel scense_r";return _t;})(),"img":"images/pano_r.jpg","size":0,"rotate":"rotateY(-90deg)","id":"r"},
			"l":{"con":(function(){var _t=U();_t.className="scense_panel scense_l";return _t;})(),"img":"images/pano_l.jpg","size":0,"rotate":"rotateY(-180deg)","id":"l"},
			"b":{"con":(function(){var _t=U();_t.className="scense_panel scense_b";return _t;})(),"img":"images/pano_b.jpg","size":0,"rotate":"rotateY(-270deg)","id":"b"},
			"u":{"con":(function(){var _t=U();_t.className="scense_panel scense_u";return _t;})(),"img":"images/pano_u.jpg","size":0,"rotate":"rotateX(-90deg)","id":"u"},
			"d":{"con":(function(){var _t=U();_t.className="scense_panel scense_d";return _t;})(),"img":"images/pano_d.jpg","size":0,"rotate":"rotateX(90deg)","id":"d"}
		}
		E.spellpano=function(){
			var _ww=BDE.clientWidth;
			var _wh=BDE.clientHeight;
			var temp=0;
			if(_ww>_wh){
				temp=_ww;
				_ww=_wh;
				_wh=temp;
			}
			var _cd=U();
			s.panocon=_cd;
			_cd.id="scencecon";
			_cd.style.marginLeft=((_ww-_wh)/2)+"px";
			_cd.style.height=(_wh)+"px";
			_cd.style.width=(_wh)+"px";
			var _pcon=U();
			
			_pcon.id="perspectivecon";
			s.perspectcon=_pcon;
			var _tcon=U();
			_tcon.id="translatecon";
			s.translatecon=_tcon;
			var _cubecon=U();
			_cubecon.id="cubecon";
			s.cubecon=_cubecon
			var _s=E.scence;
			for(__ in _s){
				_s[__].con.id="panel_"+_s[__].id;
				_s[__].con.style.width=(_wh)+"px";
				_s[__].con.style.height=(_wh)+"px";
				_s[__].con.style.background="url('img/transparent.png') no-repeat center center";
				_s[__].con.style.backgroundSize="100% 100%";
				_cubecon.appendChild(_s[__].con);
			}
			_tcon.appendChild(_cubecon);
			_pcon.appendChild(_tcon);
			_cd.appendChild(_pcon);
			
			E.panolayer.appendChild(_cd);
		}
		var Mc=null,Ca={};
		var $b=function(){
			var a=A(Y.usercontrol);
			return _[68]==a||"all"==a;
		};
		var Oc=function(a){return a&&(a=a.pointerType,4==a||_[68]==a)?!0:!1};
		var oe=function(a){for(;0<jb.length&&!(100>=a-jb[0].t);)jb.shift()};
		var oc=function(a,b,c,d){
			b=s.inverseProject(a,b);
			var e=s.inverseProject(c,d);
			d=(Math.atan2(e.z,e.x)-Math.atan2(b.z,b.x))/la;
			b=-(Math.atan2(b.y,Math.sqrt(b.x*b.x+b.z*b.z))-Math.atan2(e.y,Math.sqrt(e.x*e.x+e.z*e.z)))/la;
			if(c<a&&0>d||c>a&&0<d)d=-d;
			return{h:d,v:b}
		};
		
		//relative to fov onchange
		var pe=function(a){
			var b=Math.tan(Math.min(0.5*s.fov,45)*la);
			a*=Math.min(10*b,1);
			Pc=!0;
			Fb+=a;
		};
		//function for visibility change
		/*
		var wb=function(a){
			(B.hidden||B.webkitHidden||B.mozHidden||B.msHidden)&&ac(a)
		};
		*/
		var qe=function(a,b,c,d){
			$b()?(a=oc(a,b,c,d),Gb=!1,Sa=a.h,Ta=a.v,s.hlookat+=Sa,s.vlookat+=Ta,ma.updateview()):Ta=Sa=0;
		};
		var ac=function(a){
			bc();
			a&&(_[56]==a.type&&!1===a.persisted&&(jd=!0),v.down&&Qc(a));
			for(var b in Rc){
				m.keycode=b,ea(_[113]),Rc[b]=!1;
			}
			m.hlookat_moveforce=m.vlookat_moveforce=m.fov_moveforce=0;
			m.keycode=0;
			Pc=pc=Gb=!1;
			Fb=Bd=Sc=Tc=Sa=Ta=xb=Hb=0;
		};
		var Uc=function(a){
			var b=0;
			!0!=Y.disablewheel&&(va(a),Ra=ga(),$b()&&(a.wheelDelta?b=a.wheelDelta/-120:a.detail&&(b=a.detail,!1==h.mac&&(b/=3)),pe(b*Y.mousefovchange),m.wheeldelta_raw=-b,m.wheeldelta=3*-b,ea(_[87])))
		};
		var se=function(a){
			var b=G.viewerlayer;
			!1!=(B.activeElement==b)&&t.activekrpanowindow==b.id&&(b=a.keyCode,!1==(a.altKey||a.ctrlKey||a.shiftKey||111<b&&124>b)&&va(a),m.keycode=b,Rc[b]=!0,ea(_[335]),79==b&&(m.logkey||!(Ja&1))&&G.togglelog(),re(b,1),27==b&&(bc(),G.fullscreen&&(G.fsbkup||h.opera)&&G.setFullscreen(!1)))
		};
		var te=function(a){
			var b=G.viewerlayer;
			!1!=(B.activeElement==b)&&t.activekrpanowindow==b.id&&(a=a.keyCode,m.keycode=a,Rc[a]=!1,ea(_[113]),re(a,0))
		};
		var re=function(a,b){
			var c=A(Y.usercontrol);
			if("all"==c||"keyb"==c)a=","+a+",",0<=(","+Y.keycodesin+",").indexOf(a)?m.fov_moveforce=-b:0<=(","+Y.keycodesout+",").indexOf(a)?m.fov_moveforce=+b:0<=(","+Y.keycodesleft+",").indexOf(a)?m.hlookat_moveforce=-b:0<=(","+Y.keycodesright+",").indexOf(a)?m.hlookat_moveforce=+b:0<=(","+Y.keycodesup+",").indexOf(a)?m.vlookat_moveforce=Y.keybinvert?+b:-b:0<=(","+Y.keycodesdown+",").indexOf(a)&&(m.vlookat_moveforce=Y.keybinvert?-b:+b)
		};
		var ue=function(a){Ra=ga();a=kb(a);v.x=a.x/F;v.y=a.y/F;v.moved=!0};
		var we=function(a){
			a=a.changedTouches?a.changedTouches:[a];
			O(J,ba.touchend,we,!0);
			-120>a[0].pageY-ve&&G.showlog(!0)
		};
		var bc=function(){
			if(cc){try{J.removeChild(cc),J.removeChild(qc)}catch(a){}qc=cc=null}
		};
		//omg
		var Cd=function(a,b){
			var c=a.timeStamp|0;
			if(500<c&&500>c-Cb){
				Cb=0;
			}else{
				t.activekrpanowindow=G.viewerlayer.id;
				G.viewerlayer.focus();
				Ra=ga();
				va(a);
				if(!Q.isblocked()){
					if(0==(a.button|0)){
						bc();
						!0!=b?(x(t,_[8],Xc,!0),x(t,_[3],rc,!0),h.topAccess&&x(top,_[3],Qc,!0)):x(h.topAccess?top:t,ba.touchend,Yc,!0);
						c=kb(a);
						gb=c.x,hb=c.y,Jb=a.timeStamp,yb=0,v.down=!0,v.up=!1,v.moved=!1,v.downx=v.x=c.x/F,v.downy=v.y=c.y/F,ea(_[90]);
					}
				}
			}
		};
		//relative to move screen
		var Xc=function(a){
			va(a);
			var b=kb(a);

			v.x=b.x/F;
			v.y=b.y/F;
			v.moved=!0;
			if(_[37]==A(Y.mousetype)){
				pc=!0;
				var c=oc(gb,hb,b.x,b.y).h;
				-180>c?c=360+c:180<c&&(c=-360+c);
				yb+=c
			}else {
				qe(gb,hb,b.x,b.y);
			}
			gb=b.x;
			hb=b.y;
			Jb=a.timeStamp;
		}
		var rc=function(a,b){
			Ra=ga();
			va(a);
			O(t,_[8],Xc,!0);
			O(t,_[3],rc,!0);
			h.topAccess&&O(top,_[3],Qc,!0);
			Gb=!0;
			v.down=!1;
			!1==v.up&&(v.up=!0,ea(_[102]),!0!==b&&(!1==v.moved||5>Math.abs(v.x-v.downx)&&5>Math.abs(v.y-v.downy))&&ea(_[111]))
		}
		
		//touch event 
		var Wc=function(a){
			Ra=ga();
			var b,c,d=a.changedTouches?a.changedTouches:[a];
			c=d.length;
			var e=A(a.type),f=0<=e.indexOf("start")||0<=e.indexOf("down");
			-99!=Ib&&f&&(Vc=!0);
			for(b=0;b<c;b++){
				var e=d[b],k=e.pointerId?e.pointerId:e.identifier;
				-99==Ib&&f&&(Ib=k);
				if(Ib==k){
					c=kb(e);
					v.x=c.x/F;
					v.y=c.y/F;
					v.moved=!0;
					if(0==(Ja&16)&&(!1==h.realDesktop||10<=h.ieversion&&!Oc(a))&&v.x>ob/F-22&&v.y>eb/F-32&&a.type==ba.touchstart){
						ve=e.pageY,x(J,ba.touchend,we,!0);
					}
					break
				}
			}
		};
		
		var Qc=function(a){rc(a,!0)}
		var ye=function(a){
			Cb=a.timeStamp|0;
			if(sc){
				if(Oc(a)){
					a.currentPoint&&(a.currentPoint.properties&&!1==a.currentPoint.properties.isLeftButtonPressed)&&(a.button=0);
					Cb=0;
					Cd(a,!0);
					return
				}
				dc&&(cb++,2==cb&&(Dd=1),Kb.addPointer(a.pointerId),J.setPointerCapture?J.setPointerCapture(a.pointerId):J.msSetPointerCapture&&J.msSetPointerCapture(a.pointerId))
			}
			t.activekrpanowindow=G.viewerlayer.id;
			Ra=ga();
			!1==G.__scrollpage_yet&&va(a);
			bc();
			if(!lb&&!Q.isblocked()){
				var b=a.changedTouches?a.changedTouches[0]:a,c=kb(b);
				Lb=b.pointerId?b.pointerId:b.identifier;
				gb=c.x;
				hb=c.y;
				Jb=a.timeStamp;
				jb=[];
				yb=0;
				v.down=!0;
				v.up=!1;
				v.moved=!1;
				v.downx=v.x=c.x/F;
				v.downy=v.y=c.y/F;
				ea(_[90]);
			}
		}
		var Ae=function(a){
			if(sc){
				if(Oc(a)){
					v.down&&Xc(a);
					return
				}if(1<cb){
					return
				}
			}
			var b=$b(),c=h.opera&&a.touches?a.touches:a.changedTouches?a.changedTouches:[a];
			if(b&&!1==Ed&&1<c.length){
				b=c[0].pageX-c[1].pageX,c=c[0].pageY-c[1].pageY,c=Math.sqrt(b*b+c*c),1>c&&(c=1),!1==ec?(ec=!0,ze=c,Zc(a)):Fd(a,c/ze);
			}else if(Ra=ga(),!1==G.__scrollpage_yet&&va(a),!lb&&!1!=b&&(c=a.changedTouches?a.changedTouches[0]:a,Lb==(c.pointerId?c.pointerId:c.identifier))){
				c=kb(c);
				_[37]==A(Y.touchtype)?(pc=!0,b=oc(gb,hb,c.x,c.y).h,-180>b?b=360+b:180<b&&(b=-360+b),yb+=b):qe(gb,hb,c.x,c.y);
				gb=c.x;
				hb=c.y;
				Jb=a.timeStamp;
				a=gb;
				var b=hb,d=Jb;
				oe(d);
				jb.push({x:a,y:b,t:d});
				-99==Ib&&(v.x=c.x/F,v.y=c.y/F);
			}
		}
		var Yc=function(a){
			Ib=-99;
			Vc=!1;
			if(sc){
				O(h.topAccess?top:t,ba.touchend,Yc,!0);
				cb--;0>cb&&(cb=0);
				if(2>cb&&lb){fc(a);return}
				if(Oc(a)){rc(a);return}
			}
			ec&&(fc(a),ec=!1);
			!1==G.__scrollpage_yet&&va(a);
			if(lb)Lb=-99;
			else{
				var b=a.changedTouches?a.changedTouches[0]:a;
				if(Lb==(b.pointerId?b.pointerId:b.identifier)){
					Lb=-99;b=kb(b);v.x=b.x/F;v.y=b.y/F;gb=b.x;hb=b.y;Jb=a.timeStamp;a=gb;var b=hb,c=Jb;oe(c);jb.push({x:a,y:b,t:c});
					_[37]!=A(Y.touchtype)&&($b()&&1<jb.length?(b=jb[0],c=jb[jb.length-1],a=(c.t-b.t)/15,0<a&&(b=oc(b.x,b.y,c.x,c.y),Gb=!0,Sa=b.h/a,Ta=b.v/a)):(Gb=!1,Ta=Sa=0));
					v.down=!1;
					!1==v.up&&(v.up=!0,ea(_[102]),(!1==v.moved||5>Math.abs(v.x-v.downx)&&5>Math.abs(v.y-v.downy))&&ea(_[111]));
				}
			}
		}
		var Be=function(){ec=!1;Ib=Lb=-99;lb=!1;cb=0}
		var Zc=function(a){dc&&2>cb||(va(a),lb=!0,Ce=s.fov,Lb=-99,v.down=!1)}
		var Fd=function(a,b){
			var c=void 0!==b?b:a.scale;
			if(dc){
				if(2>cb){
					return;
				}
				!1==lb&&Zc(a);
				c=Dd*=c
			}
			va(a);
			Ra=ga();
			if($b()){
				Ta=Sa=0;
				var d=2/la,e=1/Math.tan(Ce/d),c=Math.atan(1/(e*c))*d;
				m.wheeldelta=c>s.fov?-3:3;
				m.wheeldelta_raw=m.wheeldelta/3;
				s.fov=c;
				ea(_[87]);
				ma.updateview()
			}
		}
		var fc=function(a){lb&&(lb=!1);Vc=!1;va(a)}
		//touchevent end
		//somthing about event control
		var Va=Ca;
		Va.mouse=!1;
		Va.touch=!1;
		var kb=null,ba=null,J=null,Rc=[],lb=!1,ve=0,Ed=!1,ec=!1,ze=1,Ce=90,Lb=-99,gb=0,hb=0,Jb=0,jb=[],Ib=-99,Vc=!1,sc=!1,dc=!1,Kb=null,cb=0,Dd=1,Gb=!1,Sa=0,Ta=0,pc=!1,Sc=0,Tc=0,Bd=0,yb=0,Pc=!1,Fb=0,xb=0,Hb=0,cc=null,qc=null;
		//bind event very important
		Va.registerControls=function(a){	
			J=a;
			ba=h.browser.events;
			kb=G.getMousePos;
			h.ie&&(dc=(sc=Ma.msPointerEnabled||Ma.pointerEnabled)&&(1<Ma.msMaxTouchPoints||1<Ma.maxTouchPoints));
			Ed=dc||!1==h.simulator&&h.ios||void 0!==B.documentElement.ongesturestart;
			a=!(!1==h.simulator&&h.ios||h.android||10<=h.ieversion&&h.touchdeviceNS);
			var b=h.touchdeviceNS;
			if(b&&(h.mobile||h.tablet)&&!1==h.simulator){
				a=!1;
			}
			Va.mouse=a;
			Va.touch=b;
			ba.mouse=a;
			ba.touch=b;
			//x(B,"keydown",se,!1);
			//x(B,"keyup",te,!1);
			//x(h.topAccess?top:t,"contextmenu",ac,!0);
			x(h.topAccess?top:t,"pagehide",ac,!0);
			//visibilitychange
			//x(B,_[79],wb);
			//x(B,_[71],wb);
			//x(B,_[73],wb);
			//x(B,_[74],wb);
			if(a||sc)x(J,"DOMMouseScroll",Uc,!1),x(J,"mousewheel",Uc,!1);
			//bind pc event (Cd)
			a&&(x(t,"mousemove",ue,!0),x(J,"mousedown",Cd,!1));
			//(a&&h.realDesktop||h.ie)&&x(J,_[32],xe,!1);
			//bind touch event
			if(1){
				x(J,ba.touchstart,Wc,!0);
				x(J,ba.touchmove,Wc,!0);
				x(J,ba.touchstart,ye,!1);
				x(J,ba.touchmove,Ae,!0);
				x(J,ba.touchend,Yc,!0);
				x(J,ba.touchcancel,Be,!0);
				Ed&&(x(J,ba.gesturestart,Zc,!1),x(J,ba.gesturechange,Fd,!1),x(J,ba.gestureend,fc,!0),dc&&(x(J,_[82],fc,!0),Kb=new MSGesture,Kb.target=J));
			}
			//b&&(x(J,ba.touchstart,Wc,!0),x(J,ba.touchmove,Wc,!0),x(J,ba.touchstart,ye,!1),x(J,ba.touchmove,Ae,!0),x(J,ba.touchend,Yc,!0),x(J,ba.touchcancel,Be,!0),Ed&&(x(J,ba.gesturestart,Zc,!1),x(J,ba.gesturechange,Fd,!1),x(J,ba.gestureend,fc,!0),dc&&(x(J,_[82],fc,!0),Kb=new MSGesture,Kb.target=J)))
		};
		Va.domUpdate=function(){
			if(Kb){
				var a=J;
				cb=0;
				Va.unregister();
				Va.registerControls(a)
			}
		};
		Va.unregister=function(){
			Kb&&(Kb=Kb.target=null);
			O(B,_[109],se,!1);
			O(B,"keyup",te,!1);
			O(h.topAccess?top:t,_[32],ac,!0);
			O(h.topAccess?top:t,_[56],ac,!0);
			h.topAccess&&O(top,_[3],Qc,!0);
			O(B,_[79],wb);
			O(B,_[71],wb);
			O(B,_[73],wb);
			O(B,_[74],wb);
			O(t,_[8],ue,!0);
			O(t,_[8],Xc,!0);
			O(t,_[3],rc,!0);
			O(J,_[83],Uc,!1);
			O(J,_[95],Uc,!1);
			O(J,_[6],Cd,!1);
			O(J,_[32],xe,!1);
			O(J,ba.touchstart,Wc,!0);
			O(J,ba.touchmove,Wc,!0);
			O(J,ba.touchstart,ye,!1);
			O(J,ba.touchmove,Ae,!0);
			O(J,ba.touchend,Yc,!0);
			O(J,ba.touchcancel,Be,!0);
			O(J,ba.gesturestart,Zc,!1);
			O(J,ba.gesturechange,Fd,!1);
			O(J,ba.gestureend,fc,!0);
			O(J,_[82],fc,!0);
			kb=ba=J=null;
		};
		//change the pan&view ---core---- 
		Va.handleFrictions=function(){
			//c,d,e=0
			var a,b=a=!1,c=m.hlookat_moveforce,d=m.vlookat_moveforce,e=m.fov_moveforce;
			0!=e&&pe(Y.keybfovchange*e);
			if(0!=c||0!=d||0!=xb||0!=Hb){
				var f=Y.keybfriction,b=Y.keybspeed,e=s.hlookat,k=s.vlookat,l=Y.keybaccelerate*Math.tan(Math.min(0.5*Number(s.fov),45)*la);
				xb+=c*l;c=Hb+=d*l;d=xb;xb*=f;Hb*=f;
				f=Math.sqrt(c*c+d*d);
				0<f?(c/=f,d/=f):d=c=0;
				f>b&&(f=b);
				d*=f;
				e=180>=(Math.floor(k)%360+450)%360?e+d:e-d;
				k+=c*f;
				s.hlookat=e;
				s.vlookat=k;
				f<0.05*l&&(Hb=xb=0);
				b=!0;
			}
			a|=b;
			//Gb:when event over,pc:on event
			
			
			if(Gb){
				b=Math.pow(Y.touchfriction,0.92),Sa*=b,Ta*=b,b=Math.sqrt(Ta*Ta+Sa*Sa),e=Math.min(0.04*Hc/s.r_zoom,0.5),0!=b&&(s.hlookat+=Sa,s.vlookat+=Ta),b<e&&(Gb=!1,Ta=Sa=0),a|=1;
			}else if(pc){
				
				var b=v,e=Bd,k=Sc,l=Tc,d=0.025*Y.mouseaccelerate,f=Y.mousespeed,h=Y.mousefriction,c=!1;
				if($b()){
					if(b.down&&(b.x!=b.downx||b.y!=b.downy)){
						var j=oc(b.downx,b.downy,b.x,b.y);
						j.h=yb;
						k=e*k-j.h*d;
						l=e*l-j.v*d;
						e=Math.sqrt(k*k+l*l);
						0<e&&(k/=e,l/=e,e>f&&(e=f))
					}
					s.hlookat+=e*k;
					s.vlookat+=e*l*Y.mouseyfriction;
					e*=h;
					d=Math.min(0.04*Hc/s.r_zoom,0.5);
					!1==b.down&&e<d&&(c=!0);
				}else {
					c=!0;
				}
				c&&(pc=!1,yb=l=k=e=0);
				Bd=e;Sc=k;Tc=l;a|=1
				
				//hotspots
				
				
				
				
			}
			for(var _i=0;_i<m.hotspots.length;_i++){
					var _tar=m.hotspots[_i];
					
					var __a=Math.PI/180;
					var __j=Math.cos((360-s.hlookat)*__a);
					var __q=Math.sin((360-s.hlookat)*__a);
					var __t=Math.cos(s.vlookat*__a);
					var __l=Math.sin(s.vlookat*__a);
					var __v=0;
					var __u=0;
					var __i=(360-_tar.param.pan)*__a;
					var __p=_tar.param.titl*__a;
					var __h=Math.cos(__i)*Math.cos(__p);
					var __g=Math.sin(__i)*Math.cos(__p);
					var __f=Math.sin(__p);
					var __k=__j*__h+__q*__g;
					var __o=__t*__k+__l*__f;
					var __e=false;
					
					if(__o>0){
						var n=BDE.clientHeight/(2*Math.tan(Math.PI/180*(s.fov/2)))/__o;
						__v=(-__j*__g+__q*__h)*n+BDE.clientWidth/2;
						__u=-(__t*__f+__l*__k)*n+BDE.clientHeight/2;
						if(_tar.id=="hs_2"){
							__u=(__t*__f+__l*__k)*n+BDE.clientHeight/2;
						}
						__e=true;
					}else{v=-1000;u=-1000}
					if(__v==0 && __u==0){
						__v=-1000;
					}
					m.hotspots[_i].style.left=__v+"px";
					m.hotspots[_i].style.top=__u+"px";
					
				}
			//m.repos();
			//document.getElementById("maincontent").innerHTML=s.hlookat//(new Date())
			var perspect=BDE.clientHeight/(2*Math.tan(Math.PI/180*(s.fov/2)))
			s.cubecon.style.webkitTransform="rotateX("+(-s.vlookat)+"deg) rotateY("+s.hlookat+"deg)";
			s.cubecon.style.mozTransform="rotateX("+(-s.vlookat)+"deg) rotateY("+s.hlookat+"deg)";
			s.cubecon.style.msTransform="rotateX("+(-s.vlookat)+"deg) rotateY("+s.hlookat+"deg)";
			s.cubecon.style.oTransform="rotateX("+(-s.vlookat)+"deg) rotateY("+s.hlookat+"deg)";
			s.translatecon.style.webkitTransform="translateZ("+perspect+"px)";
			s.translatecon.style.mozTransform="translateZ("+perspect+"px)";
			s.translatecon.style.msTransform="translateZ("+perspect+"px)";
			s.translatecon.style.oTransform="translateZ("+perspect+"px)";
			s.perspectcon.style.webkitPerspective=perspect;
			s.perspectcon.style.mozPerspective=perspect;
			s.perspectcon.style.msPerspective=perspect;
			s.perspectcon.style.oPerspective=perspect;
			// hahaha
			Pc&&(b=s.fov,e=Fb,k=!1,0<Math.abs(e)&&(k=e,l=Y.fovspeed,c=s.fovmin,d=s.fovmax,e*=Y.fovfriction,Math.abs(k)>l&&(k=l*(k/Math.abs(k))),b+=k*(0.9*(b/90)+0.1),b<c&&(b=c,e=0),b>d&&(b=d,e=0),s.fov=b,Fb=e,k=!0),b=Math.min(0.1,Math.tan(Math.min(0.5*s.fov,45)*la)),Math.abs(Fb)<b&&(Fb=0,Pc=!1),a|=k);
			return a
		};
		Va.stopFrictions=function(a){
			0==(0|a)&&(a=3);
			a&1&&(Sc=Sa=0);
			a&2&&(Tc=Ta=0)
		};
		Va.isMultiTouch=function(){return lb||ec||1<cb||Vc};
		Va.focusLoss=ac;
		var ta=null,T=null,ma={};
		
		//update pano view important
		var tc=function(a,b){
			//false,true
			if(!0!==b){
				s.haschanged=!0
			}else{
				//ef s=m.view=new ef
				s.updateView();
				//(!0!==a&&(Xb=ga()),ea(_[277]),s.updateView(),ta&&sa.renderpano(ta,2),T&&sa.renderpano(T,1),ea(_[247]))
			}
		};
		
		var De=function(){return 1<Aa.count&&Aa.removeid!=Aa.id&&(Aa.removeid=Aa.id,ea(_[274],!0),Aa.removeid!=Aa.id)?!1:!0};
		var Fe=function(a){var b,c,d="";a=rb(a);b=a.lastIndexOf("/");c=a.lastIndexOf("\\");c>b&&(b=c);0<=b&&(d=a.slice(0,b+1));return d};
		//step5
		var Gd=function(a,b,c,d,e){
			P.parsexml(a.childNodes,null,ca);
			Ge();
		}
		//step6
		var Ge=function(){
			if(!1!=He(!0)&&(!1==uc&&(ca&32&&(s.hlookat=Z[0],s.vlookat=Z[1],s.camroll=Z[2],s.fov=Z[3],s.fovtype=Z[4],s.fovmin=Z[5],s.fovmax=Z[6],s.maxpixelzoom=Z[7],s.fisheye=Z[8],s.fisheyefovlink=Z[9],s.stereographic=Z[10],s.pannini=Z[12],s.architectural=Z[13],s.architecturalonlymiddle=Z[14]),ma.updateview(),ta&&ta.removemainpano(),Rb(),"1"==ib.html5rendermode?rd=!0:"2"==ib.html5rendermode&&(rd=!1),void 0!==ib.hardwarelimit&&(ab=parseFloat(ib.hardwarelimit),isNaN(ab)&&(ab=0)),void 0!==ib.usedesktopimages&&(vd=Fa(ib.usedesktopimages)),Mb=!0,Ic.progress=0,0<zb&&(Hd=!0,T.setBlend(0),Dc=!0,Ec=0)),Q.busy=!1,a=m.onstart,$c&&(a=$c,$c=null),d=Aa.id,Q.callaction(a,null,!0),d==Aa.id&&(ea(_[250]),d==Aa.id))){
				He();
			}
		}
		//step7
		var He=function(a){
			var b=Ba.getArray(),c=b.length,d,e=!0;
			for(d=0;d<c;d++){
				var f=b[d];
				if(f){
					//_[13]=container
					var k=!1;
					if(!0==a){
						!0==f.preload&&_[13]!=f.type&&!1==f.loaded&&(f.onloaded=Ge,f.altonloaded=null,k=!0,e=!1)
					}else{
						(!0==f.preload&&(f.preload=!1,f.onloaded=null),k=!0);
					}
					k&&null==f.sprite&&(f.create(),null==f._parent&&G.pluginlayer.appendChild(f.sprite));
				}
			}
			return e;
		};
		var Id=function(){ea(_[202]);ea(_[333])};
		var db=ma;
		//step2
		db.loadpano=function(a,b,c,d,e){
			Aa.count++;
			Aa.id=Aa.count;
			console.log(db)
			if(De()){
				if(0>A(c).indexOf(_[309])&&I(_[92],0),"null"==A(a)&&(a=null),a){
					Q.busy=!0;
					null==ya.firstxmlpath?ya.firstxmlpath=Fe(a):a=ya.parsePath(a,!0);
					ya.currentxmlpath=Fe(a);
					m.xml.url=a;
					m.xml.content=null;
					m.xml.scene=null;
					var f=Aa.id,k=new XMLHttpRequest;
					void 0!==k.overrideMimeType&&k.overrideMimeType(_[20]);
					k.onreadystatechange=function(){
						if(f==Aa.id&&4==k.readyState){
							var l=k.status;
							if(0==l||200==l||304==l){
								var j=k.responseXML;
								if(j&&j.childNodes){var h=j.childNodes,p=h.length;0==p?j=null:2==p&&h[1]&&_[31]==h[1].nodeName&&(j=null)}
								j?(j=P.resolvexmlencryption(j,a),null!=j&&P.resolvexmlincludes(j,function(){j=P.xmlDoc;Gd(j,b,c,d,e)})):200==l?ka(a+_[18]):ka(a+_[69]);
							}else{
								ka(a+_[25]+k.status+")");
							}
						}
					};
					try{k.open("GET",a,!0),k.send(null)}catch(l){ka(a+_[154]+l)}
				}else{
					Ee(_[200],b,c,d,e);
				}
				
			}
		};
		db.updateview=tc;
		db.updateplugins=function(a){var b=Ba.getArray(),c=b.length,d;for(d=0;d<c;d++){var e=b[d];e&&(a||e.poschanged)&&e.loaded&&e.updatepos()}};
		db.checkautorotate=function(a){
			var b=ga();
			a&&(Xb=b);
			Xb>Ra&&(Ra=Xb);
			a=b-Ra;
			a>1E3*m.idletime&&Ra!=Vd&&(Vd=Ra,ea(_[440]));
			a=b-Xb;
			if(na.enabled&&a>1E3*na.waittime){
				var c=s._hlookat;
				a=s._vlookat;
				var b=s._fov,d=Math.tan(Math.min(0.5*b,45)*la),e=na.accel,f=na.speed,k=na.currentmovingspeed,e=e/60,f=f/60;
				0<f?(k+=e*e,k>f&&(k=f)):(k-=e*e,k<f&&(k=f));
				na.currentmovingspeed=k;
				c+=d*k;
				d=Math.abs(d*k);
				s._hlookat=c;
				c=parseFloat(na.horizon);
				
				isNaN(c)||(c=(c-a)/60,e=Math.abs(c),0<e&&(e>d&&(c=d*c/e),a+=c,s._vlookat=a));
				a=parseFloat(na.tofov);
				isNaN(a)||(a<s.fovmin&&(a=s.fovmin),a>s.fovmax&&(a=s.fovmax),a=(a-b)/60,c=Math.abs(a),0<c&&(c>d&&(a=d*a/c),b+=a,s._fov=b));
				return!0
			}
			na.currentmovingspeed=0;
			return!1;
		};
		var qa=function(){};
		db.drawimagequeue=qa;
		qa.busy=function(){return 0<qa.commands.length};
		qa.ctx=null;
		qa.image=null;
		qa.commands=[];
		qa.lastdraw=0;
		var Z=[],Aa={count:0,id:0},ca=0,uc=!1,zb=0,Jd=!1,Mb=!1,Hd=!1,vc=!1,ad=!1;
		db.isLoading=function(){return Mb};
		db.isBlending=function(){return Hd||vc};
		var $c=null;
		db.previewdone=Id;
		var $e=function(a,b,c){
			var d="",e=a.length,f,k=!1,l=0,h;
			for(f=0;f<e;f++){
				var j=a.charAt(f);
				if("%"==j){
					k=!0,l=0;
				}else if("0"==j){
					k?l++:d+=j;
				}else if(k){
					if(k=!1,h=null,0<=_[380].indexOf(j)?h=b:0<=_[430].indexOf(j)&&(h=c),null!=h){for(;h.length<=l;)h="0"+h;d+=h}else{ d+="%"+j;}
				}else {
					k=!1,d+=j;
				}
			}
			return d;
		};
		db.checkHovering=function(){
			if(!(1==(Wb&1)||Q.blocked)){
				var b,c,d,e,f;
				for(f=0;2>f;f++){b=a[f];d=b.length;for(e=0;e<d;e++)(c=b[e])&&(c._visible&&c.hovering&&c.onhover)&&Q.callaction(c.onhover,c)}
			}
		};
		
		var sa={};
		var bf=function(){
			var a=Oa;
			try{
				var b=a.COMPILE_STATUS,c=a.createShader(a.VERTEX_SHADER);
				a.shaderSource(c,"attribute vec3 vx;attribute vec2 tx;uniform float sh;uniform float ch;uniform mat4 wm;uniform mat4 pm;varying vec2 tt;void main(){vec3 vs=1000.0*normalize(vx);vec2 c2=vec2(vx.x,vx.z);c2=c2/max(1.0,length(c2));vec3 vc=1000.0*vec3(c2.x,clamp(vx.y*inversesqrt(1.0+vx.x*vx.x+vx.z*vx.z),-30.0,+30.0),c2.y);vec3 vv=vx*(1.0-sh)+sh*(vs*(1.0-ch)+vc*ch);gl_Position=pm*wm*vec4(vv,1);tt=tx;}");
				a.compileShader(c);
				if(!a.getShaderParameter(c,b)){
					return!1;
				}
				var d=a.createShader(a.FRAGMENT_SHADER);
				a.shaderSource(d,"#ifdef GL_ES\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n#endif\nuniform float aa;uniform sampler2D sm;varying vec2 tt;void main(){vec4 c=texture2D(sm,vec2(tt.s,tt.t)"+(h.opera||h.ie?"":",-1.0")+");gl_FragColor=vec4(c.rgb,c.a*aa);}");
				a.compileShader(d);
				if(!a.getShaderParameter(d,b)){
					return!1;
				}
				var e=a.createProgram();
				a.attachShader(e,c);
				a.attachShader(e,d);
				a.linkProgram(e);
				if(!a.getProgramParameter(e,a.LINK_STATUS)){
					return!1;
				}
				a.useProgram(e);
				Ld=a.getAttribLocation(e,"vx");
				Md=a.getAttribLocation(e,"tx");
				Ke=a.getUniformLocation(e,"sh");
				Le=a.getUniformLocation(e,"ch");
				Me=a.getUniformLocation(e,"aa");
				Ne=a.getUniformLocation(e,"sm");
				Oe=a.getUniformLocation(e,"pm");
				Pe=a.getUniformLocation(e,"wm");
				a.enableVertexAttribArray(Ld);
				a.enableVertexAttribArray(Md);
				za.sh=e;
				za.vs=c;
				za.ps=d;
			}catch(f){return!1}
			return!0;
		};

		//the view of pano  very important
		var ef=function(){
			function a(a){
				var b=Ha,c=oa;
				return"VFOV"==a?c:"HFOV"==a?b:"DFOV"==a?Math.sqrt(b*b+c*c):Math.max(b,4*c/3);
			}
			var b=this;
			b.haschanged=!1;
			var c=_[125].split(" "),d=[_[359],_[248],_[401],_[162]],e;
			for(e in c){
				Xa(b,c[e],0);
			}
			for(e in d)Xa(b,d[e],!1);
			Xa(b,_[400],"VFOV");
			b.defaults=function(){
				b._hlookat=0;
				b._vlookat=0;
				b._architectural=0;
				b._architecturalonlymiddle=!1;
				b._fov=90;
				b._fovtype=h.desktop?"VFOV":"MFOV";
				b._camroll=0;
				b._maxpixelzoom=Number.NaN;
				b._stereographic=!1;
				b._pannini=!1;
				b._fisheye=0;
				b._fisheyefovlink=0.5;
				b.fovmin=50;
				b.fovmax=179;
				b.r_zoom=1;
				b.r_yoff=0;
				b.r_zoff=0;
				b.haschanged=!1;
				b.limitview="auto";
				b.hlookatmin=Number.NaN;
				b.hlookatmax=Number.NaN;
				b.vlookatmin=Number.NaN;
				b.vlookatmax=Number.NaN
			};
			b.inverseProject=function(a,c){
				var d,e,f,h,q,n,m,g;
				f=-1E3;
				q=f/b.r_zoom;
				d=(a-Ha/2)*q;
				e=(c-oa/2-b.r_yoff)*q;
				q=1/Math.sqrt(d*d+e*e+f*f);
				d*=q;
				e*=q;
				f*=q;
				h=b.r_zoff;
				if(0<h){
					if(!1==b._stereographic&&(g=Math.atan(1E3/h)/la-1,(1>-f?Math.acos(-f)/la:0)>g)){
						n=-e,m=d,q=n*n+m*m,0<q&&(q=1/Math.sqrt(q),n*=q,m*=q),g*=la,q=Math.sin(g),d=q*m,e=-q*n,f=-Math.cos(g);
					}
					n=h*f;m=n*n-(h*h-1E6);
					0<m&&(q=-n+Math.sqrt(m),d*=q,e*=q,f=f*q- -h,q=1/Math.sqrt(d*d+e*e+f*f),d*=q,e*=q,f*=q);
				}
				h=new ic;
				h.x=d;
				h.y=e;
				h.z=f;
				return h
			};
			var f=b.fovRemap=function(b,c,d){b=Math.tan(b/360*Na);c=a(c);d=a(d);return b=360*Math.atan(b*d/c)/Na};
			b.screentosphere=function(a,c){
				var d=new ic,e=b.inverseProject(a*F,c*F),f,h=b.r_rmatrix;
				f=h[0];
				var m=h[1],n=h[2],s=h[4],g=h[5],t=h[6],D=h[8],H=h[9],h=h[10],C=1/(f*g*h+m*t*D+s*H*n-D*g*n-s*m*h-H*t*f);f=Bc([(g*h-H*t)*C,(-m*h+H*n)*C,(m*t-g*n)*C,0,(-s*h+D*t)*C,(f*h-D*n)*C,(-f*t+s*n)*C,0,(s*H-D*g)*C,(-f*H+D*m)*C,(f*g-s*m)*C,0,0,0,0,1]);
				ld(f,e);
				e=e.to_euler_xyz();
				e.x*=-1;
				e.y+=90;
				180<e.y&&(e.y-=360);
				d.x=e.y;
				d.y=e.x;
				d.z=0;
				return d;
			};
			b.spheretoscreen=function(a,c){
				var d=new ic,e=(180-a)*la,f=c*la;
				d.x=1E3*Math.cos(f)*Math.cos(e);
				d.z=1E3*Math.cos(f)*Math.sin(e);
				d.y=1E3*Math.sin(f);
				ld(b.r_rmatrix,d);
				//console.log(b.r_zoff)
				e=d.z+b.r_zoff;
				10<=e?(e=b.r_zoom/e,d.x=(d.x*e+0.5*Ha)/F,d.y=(d.y*e+0.5*oa)/F+b.r_yoff):(d.x=Ud,d.y=Ud);
				return d;
			};
			b.updateView=function(){
				var a=b._fov,c=b._hlookat,d=b._vlookat,e=b._camroll,m=h.webgl?b._fisheye:0,p=b._fisheyefovlink,q=b._stereographic,n=0;
				a<b.fovmin&&(a=b.fovmin);
				a>b.fovmax&&(a=b.fovmax);
				179<a&&(a=179);
				if(0<m){
					var t=f(a,b._fovtype,"VFOV");
					q?(170<a&&(a=170),n=1E3*m*Math.sin(0.5*Math.pow(Math.min(t/130,1),2*p)*Na),1E3<n&&(n=1E3)):(m+=Math.pow(Math.min(m,1),10)/10,n=m*Math.sin(0.5*Math.pow(t/180,p)*Na),n=3E3*n*n);
				}
				var g=0,v=0,D=0,p=Number(b.hlookatmin),t=Number(b.hlookatmax),H=Number(b.vlookatmin),C=Number(b.vlookatmax);
				isNaN(H)&&(H=-90);
				isNaN(C)&&(C=90);
				isNaN(p)&&(p=-180);
				isNaN(t)&&(t=180);
				if(C<H)var y=H,H=C,C=y;
				t<p&&(y=p,p=t,t=y);
				var y=t-p,B=C-H,F=!1,x=!0,G=180;
				switch(A(b.limitview)){
					case "off":
					case _[23]:
						y=360;p=-180;t=180;H=-1E5;C=1E5;
						break;
					case "auto":
						y=360,p=-180,t=180,H=-90,C=90;
					case _[449]:
						break;
					case _[367]:
					case _[343]:
						x=!1;
					case "range":
						360>y&&(F=!0),D=f(a,b._fovtype,"HFOV"),D>y&&(D=y,x&&(a=f(D,"HFOV",b._fovtype))),g=f(a,b._fovtype,"VFOV"),g>B&&(g=B,x&&(a=f(g,"VFOV",b._fovtype))),G=g,v=g*=0.5,D*=0.5,-89.9>=H&&(g=0),89.9<=C&&(v=0);
				}
				d-g<H?(d=H+g,Ca.stopFrictions(2)):d+v>C&&(d=C-v,Ca.stopFrictions(2));
				F&&(D=-d*la,v=0.5*Ha,g=0.5*oa,G=g/Math.tan(0.5*G*la),0<D&&(g=-g),v=1/Math.sqrt(1+(v*v+g*g)/(G*G)),g=g/G*v,G=Math.acos(-v*Math.sin(D)+g*Math.cos(D))-Na/2,isNaN(G)&&(G=-Na/2),v=Math.acos((v*Math.cos(D)+g*Math.sin(D))/Math.sin(G+Na/2)),isNaN(v)&&(v=0),D=180*v/Na,2*D>=y&&(x&&(D=f(y,"HFOV",b._fovtype),D<a&&(a=D)),D=y/2));
				360>y&&(y=!1,c-D<p?(c=p+D,y=!0):c+D>t&&(c=t-D,y=!0),y&&(Ca.stopFrictions(1),0!=na.currentmovingspeed&&(na.currentmovingspeed=0,na.speed*=-1)));
				b._fov=a;
				b._hlookat=c;
				b._vlookat=d;
				a=f(a,b._fovtype,"MFOV");
				0<m&&!1==q?(t=f(a,"MFOV","VFOV"),m=Math.asin(1E3*Math.sin(0.5*t*la)/(1E3+0.72*n)),m=0.5*oa/Math.tan(m)):m=0.5*Hc/Math.tan(a/114.591559);
				b.hfov=f(a,"MFOV","HFOV");
				b.r_fov=a;
				b.r_zoom=m;
				b.r_zoff=n;
				b.r_vlookat=d;
				q=Number(b._architectural);
				0<q?(!1==b._architecturalonlymiddle&&(p=Math.abs(d/90),1<p&&(p=1),p=Math.tan(0.25*p*Na),q*=1-p),b.r_yoff=q*(-d*(oa/Math.tan(f(a,"MFOV","VFOV")/114.591559))/90),d*=1-q):b.r_yoff=0;
				b.r_rmatrix=Sd(c-90,-d,e);
				c=Math.floor(1E6*c)/1E6;
				d=Math.floor(1E6*d)/1E6;
				e=Math.floor(1E6*e)/1E6;
				b.r_hlookat=c;
				b.r_vlookatA=d;
				b.r_roll=e;
				a=!1==h.realDesktop&&h.ios&&"5">h.iosversion||h.androidstock||Db?"":"px";jc=!1==h.simulator&&(h.iphone||h.ipad)?0.25:1;
				h.ie&&(jc=5);
				if(h.androidstock||h.android&&h.chrome||h.blackberry){
					jc=s.r_zoom/1E3/4;
				}
				Td=_[269]+m+a+_[323]+-e+_[26]+(m-jc*(n/2))+"px) ";
				b.haschanged=!1
			};
			b.getState=function(){
				return{h:b._hlookat,v:b.r_vlookatA,z:b.r_zoom,r:b._camroll,zf:b.r_zoff,yf:b.r_yoff,ch:b._pannini?1:0,vr:null}
			};
			b.defaults();
		};
		
		//relative to event control
		var ff=function(){
			var a=this;
			a.defaults=function(){
				a.usercontrol="all";
				a.mousetype=_[37];
				a.touchtype=_[455];
				a.mouseaccelerate=1;
				a.mousespeed=10;
				a.mousefriction=0.8;
				a.mouseyfriction=1;
				a.mousefovchange=1;
				a.keybaccelerate=0.5;
				a.keybspeed=10;
				a.keybfriction=0.9;
				a.keybfovchange=0.75;
				a.keybinvert=!1;
				a.fovspeed=3;
				a.fovfriction=0.9;
				a.camrollreset=!0;
				a.keycodesleft="37";
				a.keycodesright="39";
				a.keycodesup="38";
				a.keycodesdown="40";
				a.keycodesin="";
				a.keycodesout="";
				a.touchfriction=0.87;
				a.zoomtocursor=!1;
				a.zoomoutcursor=!0;
				a.disablewheel=!1;
			};
			a.defaults();
		};
		//relative to plugins
		var xc=function(){
			function a(){
				var a=Number(g._alpha);
				g.sprite&&(_[11]==g._type&&(a*=Ec),g.sprite.style.opacity=a);
				g.autoalpha&&(a=0<a,a!=g._visible&&(g.visible=a));
			}
			function b(){
				if(g.sprite&&null!=g._zorder){
					var a=parseInt(g._zorder);
					!isNaN(a)&&0<=a?(g.sprite.style.zIndex=C+a,g._zdeep=a,g._deepscale=100/(200+a)):(g._zdeep=0,g._deepscale=0.5);
				}
			}
			function c(){g.sprite&&(g.sprite.style.overflow=g._maskchildren?_[4]:_[59])}
			function d(a,b){
				b&&(b=a._enabled)&&_[13]==a.type&&(b=!1!=a.bgcapture);
				a._enabledstate=b;
				var c=a.sprite.style;
				c.cursor=b&&a._handcursor?_[36]:_[22];
				c.pointerEvents=b?"auto":"none";
				if(c=a._childs){
					var e,f,g;
					f=c.length;
					for(e=0;e<f;e++){
						(g=c[e])&&g.sprite&&d(g,b);
					}
				}
			}
			function e(){
				if(g.sprite){
					var a=g._enabled;
					H&&(a=g.bgcapture);
					if(a&&g._parent)a:{for(a=f(g._parent);a;){if(!1==a._enabled||!1==a.children){a=!1;break a}if(a._parent)a=f(a._parent);else break}a=!0}a!=g._enabledstate&&d(g,a);
				}
			}

			function K(a,b){
				var c=0,d=0,e=a.loader;
				e&&(c=e.naturalWidth,d=e.naturalHeight);
				b&&(b=String(b).split("|"),4==b.length&&(c=b[2],d=b[3]));
				null==a.jsplugin&&!1==a._isNE()&&(a.imagewidth=c,a.imageheight=d,e=a._gOSF(),e&1&&(a._width=String(c)),e&2&&(a._height=String(d)));
				a.updatepos();
			}
			
			var g=this;
			//m is instance of Tb
			g.prototype=Tb;
			this.prototype.call(this);
			g._type=_[41];
			g.layer=g.plugin=new Ya(xc);
			g.createvar=function(a,b,c){
				var d="_"+a;
				g[d]=void 0===b?null:b;
				g.__defineGetter__(a,function(){return g[d]});
				void 0!==c?g.__defineSetter__(a,function(a){g[d]=a;c()}):g.__defineSetter__(a,function(a){g[d]=a;g.poschanged=!0});
			};
			var E=!1,D=!1,H=!1,C=0,y=3,aa=!1;
			g._isNE=function(){return D};
			g._gOSF=function(){return y};
			g.sprite=null;
			g.loader=null;
			g.jsplugin=null;
			g._use_css_scale=!1;
			g._finalxscale=1;
			g._finalyscale=1;
			g._eT=0;
			g._eP=0;
			g._pCD=!1;
			g.__defineGetter__("type",function(){return _[49]==g.url?_[13]:_[43]});
			g.__defineSetter__("type",function(a){_[13]==A(a)&&(g.url=_[49])});
			g.imagewidth=0;
			g.imageheight=0;
			g.pixelwidth=0;
			g.pixelheight=0;
			g._pxw=0;
			g._pxh=0;
			g.pressed=!1;
			g.hovering=!1;
			g.loading=!1;
			g.loaded=!1;
			g.loadedurl=null;
			g.loadingurl=null;
			g.preload=!1;
			g.keep=!1;
			g.poschanged=!1;
			g.style=null;
			g.capture=!0;
			g.children=!0;
			g.autoalpha=!1;
			g._deepscale=0.5;
			g._zdeep=0;
			g.accuracy=0;
			g._dyn=!1;
			g.onloaded=null;
			g.altonloaded=null;
			var J=g.createvar;
			var I=function(a,b){
				var c="_"+a;
				g[c]=null;
				g.__defineGetter__(a,function(){return g[c]});
				g.__defineSetter__(a,b);
			};
			J("url",null,function(){
				if(""==g._url||"null"==g._url){
					g._url=null;
				}
				null!=g._url?g.reloadurl():(g.jsplugin&&g.jsplugin.unloadplugin&&g.jsplugin.unloadplugin(),g.jsplugin=null,g.loadedurl=null,g.loadingurl=null,g.loading=!1,g.loaded=!1);
			});
			J("scale",1);
			J(_[59],!0,function(){g.sprite&&(!1==g._visible?g.sprite.style.display="none":g.poschanged=!0)});
			J("crop",null,function(){K(g,g._crop)});
			g._childs=null;
			g._parent=null;
			g.__defineGetter__(_[118],function(){return g._parent});
			g.__defineSetter__(_[118],function(a){if(null==a||""==a||"null"==A(a))a=null;g.sprite?k(a):g._parent=a});
			for(var P=[_[42],"edge",_[330],_[325]],z=0;z<P.length;z++){
				J(P[z]);
			}
			//width
			I(_[44],function(a){
				0==0*parseFloat(a)?y&=2:a&&"prop"==a.toLowerCase()?(a="prop",y&=2):(a=null,y|=1);
				g._width=a;g.poschanged=!0;
			});
			//height
			I(_[39],function(a){0==0*parseFloat(a)?y&=1:a&&"prop"==a.toLowerCase()?(a="prop",y&=1):(a=null,y|=2);g._height=a;g.poschanged=!0});
			I("x",function(a){0!=0*parseFloat(a)&&(a=null);g._x=a;g.poschanged=!0});
			I("y",function(a){0!=0*parseFloat(a)&&(a=null);g._y=a;g.poschanged=!0});
			I("ox",function(a){0!=0*parseFloat(a)&&(a=null);g._ox=a;g.poschanged=!0});
			I("oy",function(a){0!=0*parseFloat(a)&&(a=null);g._oy=a;g.poschanged=!0});
			
			
			//step8
			g.create=function(){
				g._pCD=!0;
				//g.alturl==~/snow.js
				g.alturl&&(g.url=g.alturl,g._alturl=null);
				var d=g.sprite=U();
				var f=g.loader=U(1);
				null!=g._url&&g.reloadurl();
			};
			g.getfullpath=function(){return g._type+"["+g.name+"]"};
			g.registercontentsize=function(a,b){
				null!=a&&(g.imagewidth=Number(a),y&1&&(g._width=String(a)));
				null!=b&&(g.imageheight=Number(b),y&2&&(g._height=String(b)));
				g.poschanged=!0;
			};
			var M=null,u=null;
			//step9
			g.reloadurl=function(){
				if(g.sprite){
					var a=ya.parsePath(g.url);
					if(g.loadedurl!=a){
						D=!0;
						g.loader.src=null;
						ya.loadfile2(a,_[227],function(b){
							g.loadedurl=a;
							//plugin data file
							b=b.data;
							//console.log(b)
							if(null!=b){
								var c='the file "'+a+'" is not a krpano plugin!';
								try{eval(b+";")}catch(d){c='parsing "'+a+'" failed: '+d}
								_[10]==typeof snowplugin?(b=new snowplugin,b.registerplugin(m,g.getfullpath(),g),g._nativeelement=!0,g.jsplugin=b,g.loadurl_done()):$(3,c);
							}
						});
					}
				}
			};
			//step 10
			g.loadurl_done=function(){
				if(!0!=g._destroyed){
					aa=g.loaded=!0;
					Q.callaction(null!=g.altonloaded?g.altonloaded:g.onloaded,g,!0);
				}
			};
					
			var R=null;
			g.updatepluginpos=g.updatepos=function(){
				var a=_[11]==g._type;
				g.poschanged=!1;
				var b=g.sprite,c=g.loader;
				if(b&&(c||!1!=D)){
					var d=g._align,e=g._scale;
					d||(d=_[58]);
					var k=g._use_css_scale,j=g.imagewidth,l=g.imageheight,n=!1,m=g._crop;
					g.pressed&&g._ondowncrop?m=g._ondowncrop:g.hovering&&g._onovercrop&&(m=g._onovercrop);
					m&&(m=String(m).split("|"),4==m.length?(m[0]|=0,m[1]|=0,m[2]|=0,m[3]|=0):m=null);
					var p=g.scale9grid;
					p&&(p=String(p).split("|"),4<=p.length?(p[0]|=0,p[1]|=0,p[2]|=0,p[3]|=0,k=g._use_css_scale=!1,g._scalechildren=!1):p=null);
					var q=F,r=Ha,s=oa;
					a&&g.distorted&&(q=1,r=s=1E3);
					var C=1,t=1,u=g._parent,H=!0;
					if(u){
						var y=f(u);
						y?(y.poschanged&&y.updatepos(),!1==k?(r=y._pxw*q,s=y._pxh*q):(r=y.imagewidth*q,s=y.imageheight*q),y._scalechildren?(C=r/q/y.imagewidth,t=s/q/y.imageheight):(C*=y._finalxscale,t*=y._finalyscale),!1==y.loaded&&(H=!1,b.style.display="none")):$(3,'no parent "'+u+'" found');
					}
					var w=g._width,v=g._height,z=g._x,A=g._y,u=g._ox,K=g._oy;
					w&&0<String(w).indexOf("%")?w=parseFloat(w)*(r/q)/(100*C):null==w&&(w=j);
					v&&0<String(v).indexOf("%")?v=parseFloat(v)*(s/q)/(100*t):null==v&&(v=l);
					"prop"==w&&(w=Number(v)*j/l);
					"prop"==v&&(v=Number(w)*l/j);
					w=Number(w)*q*e*C;
					v=Number(v)*q*e*t;
					0>w&&(w=r+w);
					0>v&&(v=s+v);
					z&&0<String(z).indexOf("%")?z=parseFloat(z)*(r/q)/(100*C):null==z&&(z=0);
					A&&0<String(A).indexOf("%")?A=parseFloat(A)*(s/q)/(100*t):null==A&&(A=0);
					z=Number(z)*q*C;
					A=Number(A)*q*t;
					u=u&&0<String(u).indexOf("%")?parseFloat(u)*w/100/q:null==u?0:u*C;
					K=K&&0<String(K).indexOf("%")?parseFloat(K)*v/100/q:null==K?0:K*t;
					u=Number(u)*q;K=Number(K)*q;
					0==g.accuracy&&(w=Math.round(w),v=Math.round(v));
					var e=w/j,B=v/l,x=w/q,q=v/q;
					if(x!=g._pxw||q!=g._pxh){
						g._pxw=x,g._pxh=q,g.pixelwidth=x/C,g.pixelheight=q/t,n=!0;
					}
					this._scalechildren?(g._finalxscale=e,g._finalyscale=B):(g._finalxscale=C,g._finalyscale=t);
					k?(b.style.width=j+"px",b.style.height=l+"px"):(b.style.width=w+"px",b.style.height=v+"px");
					if(p){
						var x=p,G=w,J=v,E=m,m=g.sprite,l=g.loader,M;
						M=F;
						5==x.length&&(M*=Number(x[4]));
						c=l.naturalWidth;
						j=l.naturalHeight;
						null==E&&(E=[0,0,c,j]);
						p='url("'+l.src+'")';
						if(null==R){
							R=Array(9);
							for(C=0;9>C;C++){
								l=U(),l.kobject=g,l.imgurl=null,l.style.position=_[0],l.style.overflow=_[4],R[C]=l,m.appendChild(l);
							}
						}
						for(var C=[E[0]+0,E[0]+x[0],E[0]+x[0]+x[2],E[0]+E[2]],t=[E[1]+0,E[1]+x[1],E[1]+x[1]+x[3],E[1]+E[3]],q=[x[0],x[2],E[2]-x[0]-x[2]],x=[x[1],x[3],E[3]-x[1]-x[3]],G=[q[0]*M|0,G-((q[0]+q[2])*M|0),q[2]*M|0],I=[x[0]*M|0,J-((x[0]+x[2])*M|0),x[2]*M|0],N=[0,G[0],G[0]+G[1]],O=[0,I[0],I[0]+I[1]],P,Q,E=0;3>E;E++)
						for(M=0;3>M;M++){
							l=R[3*E+M],J=l.style,P=G[M]/q[M],Q=I[E]/x[E],l.imgurl!=p&&(l.imgurl=p,J.backgroundImage=p),J[td]=c*P+"px "+j*Q+"px",J.backgroundPosition=-C[M]*P+"px "+-t[E]*Q+"px",J.left=N[M]+"px",J.top=O[E]+"px",J.width=G[M]+"px",J.height=I[E]+"px";
						}
						m.style.background="none";
					}else{
						if(R){
							try{for(j=0;9>j;j++)R[j].kobject=null,b.removeChild(R[j])}catch(T){}
							R=null;
							g.sprite&&g.loader&&(g.sprite.style.backgroundImage='url("'+g.loader.src+'")');
						}
						m?(j=-m[0],m=-m[1],k||(j*=e,m*=B),b.style.backgroundPosition=j+"px "+m+"px"):b.style.backgroundPosition="0 0";
						c&&(b.style[td]=!1==k?c.naturalWidth*e+"px "+c.naturalHeight*B+"px":c.naturalWidth+"px "+c.naturalHeight+"px");
					}
					if(g.jsplugin&&g.jsplugin.onresize&&(g._pxw!=g.imagewidth||g._pxh!=g.imageheight)){
						m=[g.imagewidth,g.imageheight],g.imagewidth=g._pxw,g.imageheight=g._pxh,!0===g.jsplugin.onresize(g._pxw,g._pxh)&&(g.imagewidth=m[0],g.imageheight=m[1]);
					}
					g._oxpix=u;
					g._oypix=K;
					l="";
					c=m=0;
					if(!1==a){
						m=g._edge;
						if(null==m||""==m){
							m=d;
						}
						a=j=0;
						j=0<=m.indexOf("left")?j+0:0<=m.indexOf(_[2])?j+-w:j+-w/2;
						a=0<=m.indexOf("top")?a+0:0<=m.indexOf(_[1])?a+-v:a+-v/2;
						m=0<=d.indexOf("left")?z+j:0<=d.indexOf(_[2])?r-z+j:r/2+z+j;
						c=0<=d.indexOf("top")?A+a:0<=d.indexOf(_[1])?s-A+a:s/2+A+a;
						g._finalx=m;
						g._finaly=c;
						k&&(r=d=1,s=g.imagewidth/2,z=g.imageheight/2,l=A=0,y&&!1==y._scalechildren&&(d/=y.pixelwidth/y.imagewidth,r/=y.pixelheight/y.imageheight,A=-j*(1-d),l=-a*(1-r)),l=_[51]+(-s+A)+"px,"+(-z+l)+_[316]+e*d+","+B*r+_[263]+s+"px,"+z+"px) ");
						0==g.accuracy&&(m=Math.round(m),c=Math.round(c));
						y=w/2+j;
						v=v/2+a;
						k&&(y/=e,v/=B,u/=e,K/=B);
						l=_[51]+m+"px,"+c+"px) "+l+_[51]+-y+"px,"+-v+_[291]+g._rotate+_[217]+(y+u)+"px,"+(v+K)+"px)";
						2>Ia&&!0!==h.opera?l=_[152]+l:h.androidstock&&(l=_[181]+l);
						xa?b.style[xa]=l:(b.style.left=m+"px",b.style.top=c+"px");
						k=g._visible&&H?"":"none";
						k!=b.style.display&&(b.style.display=k);
					}
					if(n||aa){
						if(b=g._childs){
							n=b.length;
							for(j=0;j<n;j++){
								b[j].updatepos();
							}
						}
						aa=!1;
					}
				}
			}
		};
		
		
		var Dc=!1;
		var Ec=1;

		var Td="";
		var jc=1;
		var Ve="translate3D(;;px,;;px,0px) ;;rotateX(;;deg) rotateY(;;deg) rotateY(;;deg) rotateX(;;deg) scale3D(;;) translateZ(;;px) rotate(;;deg) translate(;;px,;;px) rotate;;deg) rotate;;deg) rotate;;deg) scale(;;,;;) translate(;;px,;;px)".split(";");
		var We="translate(;;px,;;px) translate(;;px,;;px) rotate(;;deg) translate(;;px,;;px) scale(;;,;;) translate(;;px,;;px)".split(";");
		var kd,Te=function(){Pd&&(Qd(),fd(Te))};
		var Pd=!0,Qd=null,Ue=0;
		var fd=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame;
		kd={start:function(a){
				if(!fd||h.ios){
					fd=function(a){var c=(new Date).getTime(),d=Math.max(0,16-(c-Ue));t.setTimeout(a,d);Ue=c+d};
				}
				Pd=!0;
				//Xe acturally
				Qd=a;
				//god know
				setTimeout(function(){fd(Te);})
				
			},
			stop:function(){Pd=!1;Qd=null}
		};
		
		
		kc.init=function(a){
			
			kc.so=a;
			h.runDetection(a);
			if(h.css3d||h.webgl){
				//xa=transform,_[62]=origin
				xa=h.browser.css.transform,sd=xa+"Style",ud=xa+_[62];
			}
			td=h.browser.css.backgroundsize;
			Ac=h.browser.css.boxshadow;
			Lc=_[98];//box-shadow
			var b=h.webkit&&534>h.webkitversion;
			b&&(Lc=_[357]+Lc);
			if(h.ios&&!1==h.simulator){
				(Ia=0,"5"<=h.iosversion&&1!=lc&&(Ia=1,h._cubeOverlap=4))
			}else{
				h.android?(Ia=2,h._cubeOverlap=0,h.chrome&&(Ia=1,Kc=0,h._cubeOverlap=4)):(h.windows||h.mac)&&b?(Db=1,Kc=Ia=0,h._cubeOverlap=4):(Ia=1,Kc=0,h._cubeOverlap=8,h.chrome&&(h._cubeOverlap=22<=h.chromeversion&&25>=h.chromeversion?64:4));
			}
			m=new Tb;
			m.set=I;
			m.get=N;
			m.call=zc;
			m.trace=$;
			m["true"]=!0;
			//m["false"]
			m[_[23]]=!1;
			//m.version=_[432];
			//m.build=_[319];
			//m.buildversion=m.version;
			m.debugmode=1;
			m.basedir=_[315];
			m[Jc[0]]=m[Jc[1]]=!0;
			m.haveexternalinterface=!0;
			m.havenetworkaccess=!0;
			m.device=h;
			m.browser=h.browser;
			m._have_top_access=h.topAccess;
			m._isrealdesktop=h.realDesktop;
			m.iosversion=h.iosversion;
			m.isphone=h.iphone;
			m.ispad=h.ipad;
			m.isandroid=h.android;
			m.ishtml5=!0;
			m.isflash=!1;
			m.ismobile=h.mobile;
			m.istablet=h.tablet;
			m.isdesktop=h.desktop;
			m.istouchdevice=h.touchdevice;
			m.isgesturedevice=h.gesturedevice;
			m.__defineGetter__(_[314],function(){return ob/F});
			m.__defineGetter__(_[296],function(){return eb/F});
			mb(m,_[306],function(){return F},function(a){a=Number(a);isNaN(a)&&(a=1);1E-4<Math.abs(a-F)&&(F=a,G.onResize(null,!0))});
			m.wheeldelta=0;
			m.wheeldelta_raw=Number.NaN;
			m.keycode=0;
			m.idletime=0.5;
			m.__defineGetter__(_[352],ga);
			m.__defineGetter__(_[438],Math.random);
			mb(m,_[93],function(){return G.fullscreen},function(a){G.setFullscreen(Fa(a))});
			mb(m,_[349],function(){return ya.swfpath},function(a){ya.swfpath=a});
			m.hlookat_moveforce=0;
			m.vlookat_moveforce=0;
			m.fov_moveforce=0;
			v=m.mouse={};
			v.down=!1;
			v.up=!1;
			v.moved=!1;
			v.downx=0;
			v.downy=0;
			v.x=0;
			v.y=0;
			v.__defineGetter__(_[439],function(){return v.x+fb.pixelx});
			v.__defineGetter__(_[446],function(){return v.y+fb.pixely});
			
			s=m.view=new ef;
			
			m.screentosphere=s.screentosphere;
			m.spheretoscreen=s.spheretoscreen;
			m.loadFile=ya.loadfile;
			m.decodeLicense=ya.decodeLicense;
			m.parsepath=m.parsePath=ya.parsePath;
			Y=m.control=new ff;
			ib=m.display={mipmapping:"auto"};
			X=m.image={};
			Ba=m.plugin=new Ya(xc);
			m.layer=Ba;
			Sb=m.events=new Ya(null,!0);
			Sb.dispatch=ea;
			Ic=m.progress={};
			Ic.progress=0;
			Za=new xc;
			$a=new xc;
			Ba.alpha=1;
			Ba.visible=!0;
			m.xml={};
			m.xml.url="";
			m.xml.content=null;
			m.xml.scene=null;
			b=m.security={};
			mb(b,"cors",function(){return yc},function(a){yc=a});
			na=m.autorotate={};
			na.enabled=!1;
			na.waittime=1.5;
			na.accel=1;
			na.speed=10;
			na.horizon=0;
			na.tofov=null;
			na.currentmovingspeed=0;
			
			var b=m;
			var c=function(a){
				return function(b,c){
					void 0===c?I(b,Math[a](f(b))):I(b,Math[a](f(c)))
				}
			};
			var d={};
			var e=_[130].split(" ");
			var f=function(a){
				var b=N(a);
				return Number(null!==b?b:a);
			};
			var k;
			for(k in e){var l=e[k];d[l]=c(l)}
			d.pi=Na;
			d.atan2=function(a,b,c){I(a,Math.atan2(f(b),f(c)))};
			d.min=function(){var a=arguments,b=a.length,c=3>b?0:1,d=f(a[c]);for(c++;c<b;c++)d=Math.min(d,f(a[c]));I(a[0],d)};
			d.max=function(){var a=arguments,b=a.length,c=3>b?0:1,d=f(a[c]);for(c++;c<b;c++)d=Math.max(d,f(a[c]));I(a[0],d)};
			d.pow=Q.pow;
			b.math=d;
			m.action=new Ya;
			m.scene=new Ya;
			m.data=new Ya;
			m.addlayer=m.addplugin=function(a){
				if(Ab(a,_[184]+a+")")&&(a=Ba.createItem(a))&&null==a.sprite){
					a._dyn=!0,a.create(),null==a._parent&&G.pluginlayer.appendChild(a.sprite);
				}
			};
			m.removelayer=m.removeplugin=function(a){
				var b=Ba.getItem(a);
				b&&(b.visible=!1,b.parent=null,b.sprite&&G.pluginlayer.removeChild(b.sprite),b.destroy(),Ba.removeItem(a));
			};
			if(!G.build(a)){
				return!1;
			}
			Y.layer=G.controllayer;
			$(1,_[110]+m.version+_[366]+m.build+(m.debugmode?_[399]:")"));
			k=!(h.androidstock||h.android&&h.firefox&&22>h.firefoxversion||h.ios);
			a.html5&&(b=A(a.html5),0<=b.indexOf(_[67])?k=!0:0<=b.indexOf("css3d")&&(k=!1));
			//h.webgl&&k?sa.setup(2):sa.setup(1);
			$(1,h.infoString+sa.infoString);
			a&&(a.basepath&&""!=a.basepath)&&(ya.swfpath=a.basepath);
			G.onResize(null);
			
			h.android&&h.androidstock&&!1==h.webgl&&(pd=!0);
			//bind event
			Ca.registerControls(G.controllayer);
			
			if(customhs.length){
				m.hotspots=[];
				m.hscon=U();
				m.repos=function(){}
				vb(m.hscon,[_[54],_[0],"left","0","top","0","z-index","99999","width","100%","height","100%"]);
				
				E.panolayer.appendChild(m.hscon)
				for(var i=0;i<customhs.length;i++){
					var hs=U();
					vb(hs,[_[54],_[0],"left","0","top","0","width",document.documentElement.clientWidth*0.1+"px","height",document.documentElement.clientWidth*0.1+"px"]);
					hs.id="hs_"+i;
					hs.style.background="url('img/point.gif') no-repeat center center";
					hs.style.backgroundSize="80%";
					hs.param=customhs[i];
					m.hotspots.push(hs);
					m.hscon.appendChild(hs);
				}
			}
			
			kd.start(Xe);
			
			if(!h.css3d&&!h.webgl&&0>A(a.html5).indexOf(_[451])){
				ka(_[129]);
			}else{
				var r,j=[],e={},l=!0;
				k=!1;
				var b=[],w=c=null,d="d",p=["kr","user","mail=","file","id"],q;
				j=A(B[p[3]]);
				0==j.indexOf("www.")&&(j=j.slice(4));
				//key
				j="localhost"
				q=""==j||"localhost"==j||"127.0.01"==j||0==j.indexOf(p[4]);
				
				//license expected
				if(null!=c&&new Date>c){
					ka(_[213]),null!=w&&setTimeout(function(){t.location=w},500);
				//license error
				}else if(k){
					ka(_[246]);
				}else{
					//Ka&&$(1,Ka[0]);
					//!1==l&&(r?$(1,_[225]+r):l=!0);
					//(l||0==(Ja&1))&&G.log(d);
					r=null;
					a.xml&&(r=a.xml);
					a.vars&&(a.vars.xml&&(r=a.vars.xml),r||(r=a.vars.pano));
					0==(Ja&4)&&(a.vars=null);
					Ja&16&&(m[Jc[0]]=m[Jc[1]]=!1);
					
					//viewerlayer is the container of all
					k=G.viewerlayer;
					Ja&8?(k.get=nb(N),k.set=nb(I),k.call=gd):(k.set=function(){$(2,_[150])},k.get=Ka?nb(N):k.set,k.call=nb(Q.SAcall));
					k.screentosphere=s.screentosphere;
					k.spheretoscreen=s.spheretoscreen;
					k.unload=hd;
					
					Q.loadpano(r,a.vars);
					if(a.onready){
						a.onready(k);
					}//alert(376)
					//return!0;
					return m;
				}
			}
			
			
		}
	}
	
	
	
	var obj=null;
	var _=_pa_;
	if(_){
		var instance=new hd();
		
		obj=instance.init(gd);
	}
	return obj
};
	
	
	
	c.params||(c.params=c);
	c.vars&&(c.params.vars=c.vars);
	c.htmltarget&&(c.params.target=c.htmltarget);
	return embedhtml5(c.params);
}
