var D=$(document),w=$(window);
var THISW=document.documentElement.clientWidth;
var THISH=document.documentElement.clientHeight;
var SW=640;
var guid=undefined;
var appver=navigator.appVersion.toLowerCase();
var appos="ios";
var wheel=false;
if(appver.indexOf("android")>0){
	appos="android";
}else if(appver.indexOf("windows phone")>0){
	appos="windows";
}

(function newGuid(){  
    var res = "";  
    for (var i=1; i<=32; i++){  
        var n = Math.floor(Math.random()*16.0).toString(16);  
        res +=   n;  
        if((i==8)||(i==12)||(i==16)||(i==20))  
            res += "-";  
    }
    guid=res; 
})()
D.ready(function(){
	var orient="orientationchange";
	if(appos=="android"){
		orient="resize"
	}
	$(window).bind(orient,function(e){
		THISW=document.documentElement.clientWidth;
		THISH=document.documentElement.clientHeight;
		if(wheel==false){
			if((THISW/THISH)>1){
				$("#rotatetipcon").show();
				if((THISW/THISH)>(1008/640)){
					$("#rotatetipcon").css("background-size","100% auto").show();
				}else{
					$("#rotatetipcon").css("background-size","auto 100%").show();
				}
			}else{
				$("#rotatetipcon").hide();
			}
		}	
	}).trigger(orient);
	(function(){
		if(window.DeviceOrientationEvent){
			window.addEventListener("deviceorientation",function(event){
				if(1){
					THISW=document.documentElement.clientWidth;
	 				THISH=document.documentElement.clientHeight;
					var lr=event.gamma/90;
					var tr=event.beta/90;
					$("#loadingcon .bg").css({"left":(lr-1)*0.05*THISW,"top":(tr-1)*0.05*THISH});
					$("#completelayer .bg").css({"left":(lr-1)*0.05*THISW,"top":(tr-1)*0.05*THISH});
					//if(lr>33 && lr<67){
						//$("#completelayer .completecard img").css("left",(lr-16)+"%");
					//}
				}
			});
		}
	})()
	
	var scencetar=null;
	var op=999;
	var ot=0;
	function orientationevent(){
		var c=scencetar,e=null,t=!1,k,l=!1,y=0,H=!1,D=!0,r=0.5,G=!1,E=!0,s=null,B=0,g=0,p=0,u=0,n=0,x=0,v=Math.PI/180;
		function w(b){b%=360;return 180>=b?b:b-360}
		if(window.DeviceOrientationEvent){
			window.addEventListener("deviceorientation",function(event){
				if($(document).data("pano")){
				//if(1){
					var e=0,v=Math.PI/180,m,a=event.alpha*v,h=event.beta*v,d=event.gamma*v,j;j=Math.cos(a);
					var a=Math.sin(a),f=Math.cos(h),h=Math.sin(h),q=Math.cos(d),d=Math.sin(d),a=[a*d-j*h*q,-j*f,j*h*d+a*q,f*q,-h,-f*d,a*h*q+j*d,a*f,-a*h*d+j*q];
					0.9999<a[3]?(j=Math.atan2(a[2],a[8]),a=Math.PI/2,d=0):-0.9999>a[3]?(j=Math.atan2(a[2],a[8]),a=-Math.PI/2,d=0):(j=Math.atan2(-a[6],a[0]),d=Math.atan2(-a[5],a[4]),a=Math.asin(a[3]));
					m={yaw:j,pitch:a,roll:d};
					var d=w(m.yaw/v),a=m.pitch/v,f=d,h=c.view.hlookat,q=c.view.vlookat,k=c.view.camroll,t=h-p;
					j=q-u;
					if(E){
						D&&(n=w(180+Number(e)-m.roll/v));
						if(70<Math.abs(a)){
							f=event.alpha;
							switch(e){case 0:0<a&&(f+=180);break;case 90:f+=90;break;case -90:f+=-90;break;case 180:0>a&&(f+=180)}
							f=w(f);180<Math.abs(f-d)&&(f+=f<d?360:-360);
							b=Math.min(1,(Math.abs(a)-70)/10);d=d*(1-b)+f*b;n*=1-b;
						}
						B+=t;
						g+=j;
						90<Math.abs(a+g)&&(g=0<a+g?90-a:-90-a);
						p=w(-d-180+B);
						u=Math.max(Math.min(a+g,90),-90);
						180<Math.abs(p-h)&&(h+=p>h?360:-360);
						p=(1-r)*p+r*h;
						u=(1-r)*u+r*q;
						180<Math.abs(n-k)&&(k+=n>k?360:-360);
						n=(1-r)*n+r*k;
						b=w(p);
						e=u;
						d=w(n);
						
						
						
						if(appos=="android"){
							if(Math.abs(op-b)>1.5){
								op=b;
								isNaN(b)||(c.view.hlookat=b);
							}
							if(Math.abs(ot-e)>1.5){
								ot=e;
								isNaN(e)||(c.view.vlookat=e);
							}
						}else{
							isNaN(b)||(c.view.hlookat=b);
							isNaN(e)||(c.view.vlookat=e);
						}
						
						
						
						isNaN(d)||(c.view.camroll=d);
						
						0!=g&&0<y&&(0==j?1==y?x=g=0:(x=1-(1-x)*c.control.touchfriction,g*=1-Math.pow(y,2)*x,0.1>Math.abs(g)&&(x=g=0)):x=0)
					}
				}
			});
		}
	}
	
	
	function resetcustomlayer(){
		customparam={"photo":0,"card":0,"tree":0};
		$("#cubecon .scense_panel").each(function(){
			$("img",$(this)).remove();
		});
		if(ispad){
			$("#panel_b").css("background-image","url('http://image.gis-ad.com/images/pano_b.jpg')");
		}else{
			$("#panel_b").css("background-image","url('http://image.gis-ad.com/images/pano_bs.jpg')");
		}
		$("#TextTo").val("Dear Friends");
		$("#TextContent").val("MERRY CHRISTMAS");
		$("#TextFrom").val("GODIVA");
	}
	
	var mcon=$("#maincontent");
	calwindowsize();
	mcon.height(THISW/(640/131));
	$(".productslist",mcon).bind("tapone",function(){
		setTimeout(function(){
			$("#listcon").show();
			if(!myScroll){
				scrollnews();
			}
		},500);
	});
	mcon.hide().css("opacity",1);
	//make card
	$(".makecard",mcon).bind("tapone",function(){
		resetcustomlayer();
		$("#maincontent").hide();
		
		$("#photolayer").css("opacity",1).show();
		resetuploadphoto();
		$("#cardlayer").css("opacity",1).hide();
		resetcardtext();
		$("#treelayer").css("opacity",1).hide();
		$("#treelayer .giftcon").remove();
		$("#completelayer").css("opacity",1).hide();
		$(document).data("pano",false);
	});
	//loading
	$("#loadingcon").bind("touchmove",function(e){e.preventDefault();})
	$("#onprocessing").hide();
	calwindowsize();
	var _rate=THISW/THISH;
	$("#loadingcon .bg").css({"width":THISW*1.1,"height":THISH*1.1,"left":-0.05*THISW,"top":-0.05*THISH});
	if(_rate>750/1008){
		$("#loadingcon .bg").css("background-size","100% auto");
	}else{
		$("#loadingcon .bg").css("background-size","auto 100%");
	}
	if(_rate>640/900){
		$("#loadingcon .textbg").css("background-size","100% auto");
		$("#loadingcon .slidercursor").css("background-size","100% auto");
	}else{
		
		$("#loadingcon .textbg").css("background-size","auto 100%");
		$("#loadingcon .slidercursor").css("background-size","auto 100%");
	}
	var rcv=document.getElementById("loadingrate");
	rcv.style.top=(THISH-THISW*0.6)/2+"px";
	rcv.style.left=(THISW-THISW*0.4)/2+"px";
	var rctx=rcv.getContext("2d");
	rcv.setAttribute("width",THISW*0.4);
	rcv.setAttribute("height",THISW*0.4);
	$("#caminfolink").css("top",THISW*1008/640*0.87-(THISW*1008/640-THISH)/2).bind("tapone",function(){
		$("#campaigninfo").show();
	})
	$("#loadingcon .loadingtip").css({"width":THISW*0.4,"height":THISW*0.4,"top":(THISH-THISW*0.6)/2,"left":(THISW-THISW*0.4)/2});
   	var crnum=0;
   	var crindex=-1;
   	var curper=0;
   	var ispad=!1;
   	if(appver.indexOf("ipad")>0){
   		ispad=!0;
   	}
   	var customparam={
		"photo":0,
		"card":0,
		"tree":0,
		"cardimg":0
	}
   	var loadimgs=[
   		{"url":"http://image.gis-ad.com/img/loadingbg1.jpg"},
   		{"url":"http://image.gis-ad.com/img/loadingtext1.png"},
   		{"url":"http://image.gis-ad.com/img/tip_1.gif"},
   		{"url":"http://image.gis-ad.com/img/tip_2.gif"},
   		{"url":ispad?"http://image.gis-ad.com/images/pano_b.jpg":"http://image.gis-ad.com/images/pano_bs.jpg"},
   		{"url":ispad?"http://image.gis-ad.com/images/pano_f.jpg":"http://image.gis-ad.com/images/pano_fs.jpg"},
   		{"url":ispad?"http://image.gis-ad.com/images/pano_l.jpg":"http://image.gis-ad.com/images/pano_ls.jpg"},
   		{"url":ispad?"http://image.gis-ad.com/images/pano_r.jpg":"http://image.gis-ad.com/images/pano_rs.jpg"},
   		{"url":ispad?"http://image.gis-ad.com/images/pano_u.jpg":"http://image.gis-ad.com/images/pano_us.jpg"},
   		{"url":ispad?"http://image.gis-ad.com/images/pano_d.jpg":"http://image.gis-ad.com/images/pano_ds.jpg"}
   	];
   	if(location.href.indexOf("GODVIA")>0){
   		loadimgs=[
	   		{"url":"http://image.gis-ad.com/img/loadingbg2.jpg"},
	   		{"url":"http://image.gis-ad.com/img/loadingtext2.png"},
	   		{"url":"http://image.gis-ad.com/img/tip_1.gif"},
	   		{"url":"http://image.gis-ad.com/img/tip_2.gif"},
	   		{"url":ispad?"http://image.gis-ad.com/images/pano_b.jpg":"http://image.gis-ad.com/images/pano_bs.jpg"},
	   		{"url":ispad?"http://image.gis-ad.com/images/pano_f.jpg":"http://image.gis-ad.com/images/pano_fs.jpg"},
	   		{"url":ispad?"http://image.gis-ad.com/images/pano_l.jpg":"http://image.gis-ad.com/images/pano_ls.jpg"},
	   		{"url":ispad?"http://image.gis-ad.com/images/pano_r.jpg":"http://image.gis-ad.com/images/pano_rs.jpg"},
	   		{"url":ispad?"http://image.gis-ad.com/images/pano_u.jpg":"http://image.gis-ad.com/images/pano_us.jpg"},
	   		{"url":ispad?"http://image.gis-ad.com/images/pano_d.jpg":"http://image.gis-ad.com/images/pano_ds.jpg"}
	   	];
   	}
   	
   	
    (function(){
    	var step=Math.floor(100/loadimgs.length);
    	var mod=100%loadimgs.length;
    	jQuery.each(loadimgs,function(i,v){
    		if(i==loadimgs.length-1){
    			v.per=100;
    		}else{
    			if(i<=mod){
	    			v.per=(step+1)*(i+1);
	    		}else{
	    			v.per=(step+1)*(i);
	    		}
    		}
    	});
    	curper=loadimgs[0].per;
    	$("<img src=\"http://image.gis-ad.com/img/transparent.png\"/>").load(function(){
    		var tar=$(this);
    		crindex++;
    		if(crindex==0){
    			//invokedraw();
    			//$("#loadingcon .loadingtip .innercon").animate({"opacity":0},1000,function(){
    				//tipanimate();
    			//});
    		}
    		if(loadimgs[crindex]){
    			curper=loadimgs[crindex].per;
    			tar.attr("src",loadimgs[crindex].url);
    		}
    	});
    	
    	var _lphoto=false;
    	var _lcard=false;
    	var _ltree=false;
    	
    	//new or with param
    	var param=location.href.replace("#","");
    	param=param.split("?")[1];
   		if(param && param.indexOf("GODVIA")>=0 ){
   			param=param.split(";");
   			jQuery.each(param,function(i,v){
   				v=v.toLowerCase();
   				if(v.indexOf("photoid")>=0){
   					var _id=v.split("=")[1];
   					if(_id!="0"){
   						customparam.photo=_id;
   						$.ajax({
						  url: "base64/r.php?id="+_id,
						  data: {},
						  success: function(data){
						  	if(data && data.err==0){
						  		customparam.photo=("data:image/png;base64,")+data.img;
						  		_lphoto=true;
						  		//console.log(_lphoto);console.log(_lcard);console.log(_ltree);
						  	}else{
						  		customparam.photo=0;
   								_lphoto=true;
						  	}
						  },
						  dataType: "json"
						});
   					}else{
   						customparam.photo=0;
   						_lphoto=true;
   					}
   				}
   				if(v.indexOf("cardid")>=0){
   					var _id=v.split("=")[1];
   					if(_id!="0"){
   						$.ajax({
						  url: "base64/wenzi_du.php?id="+_id,
						  data: {},
						  success: function(data){
						  	if(data && data.err==0){
						  		customparam.card=_id;
						  		$("#TextTo").val(data.txt1);
						  		$("#TextContent").val(data.txt2);
						  		$("#TextFrom").val(data.txt3);
						  		
						  		var _ttxt=$("#TextTo").val();
						  		if(_ttxt!="Dear Friends"){
						  			if(_ttxt.length>15){
										_ttxt=_ttxt.substr(0,15);
									}
						  		}	
								var _ctxt=$("#TextContent").val();
								if(_ctxt.length>19){
									_ctxt=_ctxt.substr(0,19);
								}
								var _ftxt=$("#TextFrom").val();
								if(_ftxt.length>15){
									_ftxt=_ftxt.substr(0,15);
								}
								$("#SpanTo").text("To:"+_ttxt);
								$("#SpanContent").text(_ctxt);
								$("#SpanFrom").text("From:"+_ftxt);
						  		_lcard=true;
						  		//console.log(_lphoto);console.log(_lcard);console.log(_ltree);
						  	}else{
						  		customparam.card=0;
		   						$("#TextTo").val("Dear Friend");
		            			$("#TextContent").val("Merry Christmas");
		            			$("#TextFrom").val("GODVIA");
		   						_lcard=true;
						  	}
						  	getFont(true);
						  },
						  dataType: "json"
						});
   					}else{
   						customparam.card=0;
   						$("#TextTo").val("Dear Friend");
            			$("#TextContent").val("Merry Christmas");
            			$("#TextFrom").val("GODVIA");
   						_lcard=true;
   						getFont(true);
   					}
   				}
   				if(v.indexOf("treeid")>=0){
   					var _id=v.split("=")[1];
   					if(_id!="0"){
   						customparam.tree=_id;
   						$.ajax({
						  url: "base64/r.php?id="+_id,
						  data: {},
						  success: function(data){
						  	if(data && data.err==0){
						  		customparam.tree=("data:image/png;base64,")+data.img;
						  		_ltree=true;
						  	}else{
						  		customparam.tree=0;
   								_ltree=true;
						  	}
						  },
						  dataType: "json"
						});
   					}else{
   						customparam.tree=0;
   						_ltree=true;
   					}
   				}
   			});
   			(function __(){
   				if(curper>=loadimgs[3].per){
   					$("#loadingcon .loadingbg").remove();
   					$("#loadingcon .bg").css("background-image","url('http://image.gis-ad.com/img/loadingbg2.jpg')");
   					$("#loadingcon .textbg").css("background-image","url('http://image.gis-ad.com/img/loadingtext2.png')");
   					_begin();
   					$(".completecard").appendTo($("#loadingcon")).height(THISH*0.315).css("top","36%");
   				}else{
   					setTimeout(__,100);
   				}
   			})();
   		}else{
   			_lphoto=true;
   			_lcard=true;
   			_ltree=true;
   			(function __(){
   				if(curper>=loadimgs[3].per){
   					$("#loadingcon .loadingbg").remove();
   					$("#loadingcon .bg").css("background-image","url('http://image.gis-ad.com/img/loadingbg1.jpg')");
   					$("#loadingcon .textbg").css("background-image","url('http://image.gis-ad.com/img/loadingtext1.png')");
   					_begin();
   				}else{
   					setTimeout(__,100);
   				}
   			})();
   		}
   		
   		$("#loadingcon .loadingtip").hide().css("opacity",1);
   		function _begin(){
   			//console.log(_lphoto+";"+_lcard+";"+_ltree)
   			if(_lphoto && _lcard && _ltree){	
   				
   				if(_rate>640/1008){
					var rh=THISW*1008/640;
					$(".slidercursor").height(rh).css({"top":(THISH-rh)/2})
				}
   				$(".slidercursor").css({"opacity":0}).show().animate({"opacity":1},function(){
					$(".slidercursor").bind("touchmove",function(e){
							var event=e.originalEvent;
							var touches=event.touches;
							if(touches.length==2){
								
								//$("#loadingcon .textbg").css("background-image","url('http://image.gis-ad.com/img/cover.jpg')");
								var x1=touches[0].clientX;
								var y1=touches[0].clientY;
								var x2=touches[1].clientX;
								var y2=touches[1].clientY;
								
								var dis=Math.pow((Math.pow((x1-x2),2)+Math.pow((y1-y2),2)),0.5);
								if(dis>=THISW/2 && Math.abs(x1-x2)>5*Math.abs(y1-y2)){
									$(".completecard").stop().animate({"opacity":0},function(){
										$(".completecard").css({"opacity":1}).appendTo($("#completelayer"));
									});
									audioEle.play();
									$(".slidercursor").unbind("touchmove");
									$("#loadingcon .bg").addClass("loadinganimate");
									$("#loadingcon .textbg").addClass("loadinganimate");
									$("#loadingcon .slidercursor").animate({"opacity":0},function(){$("#loadingcon .slidercursor").hide()});
									setTimeout(function(){
										//draw
										invokedraw();
										//tip
										$("#loadingcon .loadingtip").show();
										//cursor
										$("#loadingcon .tipbgcon").show();
										$("#loadingcon .textbg").hide();
									},1500);	
								}
							}
						})/*.bind("click",function(){
							$("#loadingcon .bg").css("background","black");
									$("#loadingcon .textbg").addClass("loadinganimate");
									//draw
									invokedraw();
									//tip
									$("#loadingcon .loadingtip").show();
									//cursor
									$("#loadingcon .slidercursor").hide();
						})*/;
					/*
					if(appos=="ios"){
						$(".slidercursor").bind("pinch",function(e,a){
							if(!$(".slidercursor").isanimate){
								if(a.direction.vector==1){
									if(a.scale>2){
										$(".slidercursor").isanimate=true;
										$("#loadingcon").addClass("loadinganimate");
										setTimeout(function(){$("#loadingcon").remove()},2000);
									}
								}else{
									return;
								}
							}
						});
					}
					*/
				});
   			}else{
   				setTimeout(_begin,100);
   			}
   		}
			
    	
    })()
    var loadinghandler=null;
    var tiphandler=null;

    function invokedraw(){
    	if(loadinghandler){
    		clearTimeout(loadinghandler);
    	}
    	if(crnum<curper){
    		drawratecircle();
    		crnum++;
    		if(crnum==50){
    			var tar=$("#loadingcon .tipbgcon");
    			tar.stop().show().animate({"opacity":0},500,function(){
    				tar.css("background-image","url('http://image.gis-ad.com/img/tip_2.gif')").animate({"opacity":1});
    			});
    		}
    		if(crnum==curper){
    			if(crnum<100){
    				loadinghandler=setTimeout(invokedraw,1000);
    				crnum--;
    				$("#loadingcon .percentnum").text(crnum+"%");
    			}else{
    				//end loading
    				crnum=100;
    				if(loadinghandler){
    					$("#loadingcon .percentnum").text("100%");
    					clearTimeout(loadinghandler);
    					clearTimeout(tiphandler)
    					drawratecircle();
    					$("#maincontent").show();
    					$("#audio_d").css("opacity",1).show();
						$("#loadingcon").remove();
						
						$("#loadingcon").stop().animate({"opacity":0},1000,function(){
							$("#loadingcon").remove();
							audioEle.style.display="block";
						})
						try{
						scencetar=custompano({ xml:"snow.xml", target:"pano", html5:(document.domain ? "prefer" : "auto"), passQueryParameters:true});
						}catch(e){alert(e)}
						orientationevent();
						setTimeout(function(){
							$("#panel_f").css("background-image",ispad?"url('http://image.gis-ad.com/images/pano_f.jpg')":"url('http://image.gis-ad.com/images/pano_fs.jpg')");
	    					$("#panel_b").css("background-image",ispad?"url('http://image.gis-ad.com/images/pano_b.jpg')":"url('http://image.gis-ad.com/images/pano_bs.jpg')");
	    					$("#panel_l").css("background-image",ispad?"url('http://image.gis-ad.com/images/pano_l.jpg')":"url('http://image.gis-ad.com/images/pano_ls.jpg')");
	    					$("#panel_r").css("background-image",ispad?"url('http://image.gis-ad.com/images/pano_r.jpg')":"url('http://image.gis-ad.com/images/pano_rs.jpg')");
	    					$("#panel_u").css("background-image",ispad?"url('http://image.gis-ad.com/images/pano_u.jpg')":"url('http://image.gis-ad.com/images/pano_us.jpg')");
	    					$("#panel_d").css("background-image",ispad?"url('http://image.gis-ad.com/images/pano_d.jpg')":"url('http://image.gis-ad.com/images/pano_ds.jpg')");
							D.data("pano",true);
							
							
							
							$("#plugincon").append($("#hs_0").bind("tapone",function(){$("#productslayer").show()}));
							$("#plugincon").append($("#hs_2").bind("tapone",function(){$("#couponcon").show();setTimeout(function(){$("#couponlink").show();},500);}));
							$("#plugincon").append($("#hs_1").bind("tapone",function(){
								$("#onuploading").show();
								$("#onuploading span").hide();
								var _count=0;
								var _imgs=[
									{"url":ispad?"http://image.gis-ad.com/images/inner_f.jpg":"http://image.gis-ad.com/images/inner_fs.jpg"},
									{"url":ispad?"http://image.gis-ad.com/images/inner_b.jpg":"http://image.gis-ad.com/images/inner_bs.jpg"},
									{"url":ispad?"http://image.gis-ad.com/images/inner_l.jpg":"http://image.gis-ad.com/images/inner_ls.jpg"},
									{"url":ispad?"http://image.gis-ad.com/images/inner_r.jpg":"http://image.gis-ad.com/images/inner_rs.jpg"},
									{"url":ispad?"http://image.gis-ad.com/images/inner_u.jpg":"http://image.gis-ad.com/images/inner_us.jpg"},
									{"url":ispad?"http://image.gis-ad.com/images/inner_d.jpg":"http://image.gis-ad.com/images/inner_ds.jpg"}
								]
								
								$("<img  src=\""+_imgs[_count].url+"\" />").load(function(){
									_count++;
									if(_imgs[_count]){
										this.src=_imgs[_count].url;
									}
								})
								function __(){
									if(_count>=5){
										$("#onuploading").hide();
										$("#onuploading span").show();
										$("#maincontent").hide();
										$("#pano").stop().animate({"opacity":0},1000,function(){
											$("#hs_0").hide();
											$("#hs_1").hide();
											$("#plugincon").hide();
											$("img",$("#panel_f").css("background-image",ispad?"url('http://image.gis-ad.com/images/inner_f.jpg')":"url('http://image.gis-ad.com/images/inner_fs.jpg')")).hide();
											$("img",$("#panel_b").css("background-image",ispad?"url('http://image.gis-ad.com/images/inner_b.jpg')":"url('http://image.gis-ad.com/images/inner_bs.jpg')")).hide();
											$("img",$("#panel_l").css("background-image",ispad?"url('http://image.gis-ad.com/images/inner_l.jpg')":"url('http://image.gis-ad.com/images/inner_ls.jpg')")).hide();
											$("img",$("#panel_r").css("background-image",ispad?"url('http://image.gis-ad.com/images/inner_r.jpg')":"url('http://image.gis-ad.com/images/inner_rs.jpg')")).hide();
											$("img",$("#panel_u").css("background-image",ispad?"url('http://image.gis-ad.com/images/inner_u.jpg')":"url('http://image.gis-ad.com/images/inner_us.jpg')")).hide();
											$("img",$("#panel_d").css("background-image",ispad?"url('http://image.gis-ad.com/images/inner_d.jpg')":"url('http://image.gis-ad.com/images/inner_ds.jpg')")).hide();
											scencetar.view.hlookat=160;
											
											$("#pano").animate({"opacity":1},1000,function(){
												$("<img class=\"returnbtn\" src=\"http://image.gis-ad.com/img/returnbtn.png\" />").bind("tapone",function(){
													$("#pano").stop().animate({"opacity":0},1000,function(){
														$("img",$("#panel_f").css("background-image",ispad?"url('http://image.gis-ad.com/images/pano_f.jpg')":"url('http://image.gis-ad.com/images/pano_fs.jpg')")).show();
														if(customparam.card){
															$("img",$("#panel_b").css("background-image",ispad?"url('http://image.gis-ad.com/images/pano_btxt.jpg')":"url('http://image.gis-ad.com/images/pano_btxts.jpg')")).show();
														}else{
															$("img",$("#panel_b").css("background-image",ispad?"url('http://image.gis-ad.com/images/pano_b.jpg')":"url('http://image.gis-ad.com/images/pano_bs.jpg')")).show();
														}
								    					
								    					$("img",$("#panel_l").css("background-image",ispad?"url('http://image.gis-ad.com/images/pano_l.jpg')":"url('http://image.gis-ad.com/images/pano_ls.jpg')")).show();
								    					$("img",$("#panel_r").css("background-image",ispad?"url('http://image.gis-ad.com/images/pano_r.jpg')":"url('http://image.gis-ad.com/images/pano_rs.jpg')")).show();
								    					$("img",$("#panel_u").css("background-image",ispad?"url('http://image.gis-ad.com/images/pano_u.jpg')":"url('http://image.gis-ad.com/images/pano_us.jpg')")).show();
								    					$("img",$("#panel_d").css("background-image",ispad?"url('http://image.gis-ad.com/images/pano_d.jpg')":"url('http://image.gis-ad.com/images/pano_ds.jpg')")).show();
								    					$("#pano").stop().animate({"opacity":1},1000,function(){$("#hs_0").show();$("#hs_1").show();$("#hs_2").show();$("#plugincon").show();});
								    					$("#maincontent").show();
								    					$("#hs_0").show();
														$("#hs_1").show();
													});
													$(this).unbind().remove();
												}).appendTo($("#test"))
											});
										});
									}else{
										setTimeout(__,100);
									}
								}
								
								__();
								
								
				
			}));

							if(customparam.photo){
								con=$("#panel_l");
								$("<img src=\""+customparam.photo+"\"  />").css({"width":con.width(),"height":con.height()}).appendTo(con);
							}
							if(customparam.tree){
								con=$("#panel_f");
								$("<img src=\""+customparam.tree+"\"  />").css({"width":con.width(),"height":con.height()}).appendTo(con)
							}
							
						},100);
    					//$("#loadingcon .bg").css("background-image","url('http://image.gis-ad.com/img/loadingbg1.jpg')");
    					//$(".loadingtip").stop().animate({"opacity":0},function(){})
    					//$("#loadingrate").stop().animate({"opacity":0},function(){
    						//$(".mask").remove();
    					//});
    				}
    			}
    		}else{
    			if(curper==100){
    				loadinghandler=setTimeout(invokedraw,50);
    			}else{
    				loadinghandler=setTimeout(invokedraw,1000/(curper-crnum));
    			}
    			$("#loadingcon .percentnum").text(crnum+"%");
    		}
    	}
    }
    
    function drawratecircle(){
    	calwindowsize();
    	rctx.clearRect(0,0,THISW*0.4,THISW*0.4);
    	rctx.beginPath();
	    rctx.arc(THISW*0.4/2,THISW*0.4/2,THISW*0.4/2-1,Math.PI*2,false);
	    rctx.strokeStyle = "rgba(255,255,255,0.5)";
	    rctx.lineWidth = 1;
	    rctx.stroke();
	    rctx.closePath();
	    if(crnum){
	    	rctx.beginPath();
		    rctx.arc(THISW*0.4/2,THISW*0.4/2,THISW*0.4/2-2,-Math.PI/2,(-Math.PI/2+Math.PI/180*(360*crnum/100)),false);
		    rctx.strokeStyle = "rgba(255,255,255,1)";
		    rctx.lineWidth = 2;
		    rctx.stroke();
		    rctx.closePath();
	    }
    }
       
    //campaign info
    var campaignlayer=$("#campaigninfo");
    $("<img src=\"http://image.gis-ad.com/img/info.png\"/>").load(function(){
    	$(this).css("width","82.65%");
		$("#wrapper").append($(this));
		setTimeout(function(){
			new iScroll("wrapper",{scrollbarClass:"myScrollbar",onScrollEnd:function(){}});
			campaignlayer.css("opacity",1).hide();
		},500);
    });
    $("#campaigninfo .returnbtn").bind("tapone",function(){
    	campaignlayer.hide();
    })
	//product list
	var productlayer=$("#listcon");
	var _plw=THISW;
	var _plh=THISH;
	if(_rate>640/900){
		_plh=THISW*900/640;
		$(".content",productlayer).css("background-size","100% auto");
		//imgcon.css({"width":"100%","height":rh,"top":0});
	}else{
		_plw=THISH*640/900;
		$(".content",productlayer).css("background-size","auto 100%");
		//imgcon.css({"height":"100%","width":rw,"left":(THISW-rw)/2});
	}
	$(".toppart",productlayer).css({"width":_plw,"height":0.377*_plh,"left":(THISW-_plw)/2,"top":(THISH-_plh)/2});
	$("#productlist").css({"height":(THISH-0.377*_plh-(THISH-_plh)/2-20),"top":(0.377*_plh+(THISH-_plh)/2)});
	var myScroll=null;
	function scrollnews(){
		//$("#productlist").css({"height":(THISH-0.377*_plh+(THISH-_plh)/2),"top":(0.377*_plh-(THISH-_plh)/2)});
		var img=$("<img src=\"http://image.gis-ad.com/img/transparent.png\"/>");
		img.load(function(){
			//$(this).css("width","82.65%").bind("tapone",function(){window.open("list.html")});
			var __w=0.8*THISW;
			var __h=932/529*__w;
			var __con=$("<div style=\"position:relative;background:url('"+this.src+"') no-repeat center center;background-size:100%\"></div>").width(__w).height(__h).css("margin","auto");
			$("#scroller").append(__con);
			
			var _a1=$("<a target=\"_blank\" href=\"http://m.godiva.cn/product/5000800/detail.htm\" style=\"position:absolute;left:0;top:0;width:100%;height:22.75%;\"></a>").click(function(){
				_pt_sp_2.push('setTrackEvent,Goumai,Click,shengdanxianliang,0');
			});
			var _a2=$("<a target=\"_blank\" href=\"http://m.godiva.cn/product/5000802/detail.htm\" style=\"position:absolute;left:0;top:22.57%;width:100%;height:24.57%;\"></a>").click(function(){
				_pt_sp_2.push('setTrackEvent,Goumai,Click,shengdansongluxing,0')
			});
			var _a3=$("<a target=\"_blank\" href=\"http://m.godiva.cn/product/2000236/detail.htm\" style=\"position:absolute;left:0;top:47.32%;width:100%;height:26.5%;\"></a>").click(function(){
				_pt_sp_2.push('setTrackEvent,Goumai,Click,shengdanjinzhuang,0')
			});
			var _a4=$("<a target=\"_blank\" href=\"http://m.godiva.cn/product/5000808/detail.htm\" style=\"position:absolute;left:0;top:73.82%;width:100%;height:26.18%;\"></a>").click(function(){
				_pt_sp_2.push('setTrackEvent,Goumai,Click,shengdanxiaoxiong,0');
			});
			__con.append(_a1).append(_a2).append(_a3).append(_a4);
			myScroll = new iScroll("productlist",{scrollbarClass:"myScrollbar",onScrollEnd:function(){}});
		}).attr("src","http://image.gis-ad.com/img/products.png");
	}
	$("#listcon .content .returnbtn").bind("tapone",function(){$("#listcon").hide();});
	$(".couponlink",productlayer).bind("tapone",function(){
		$("#couponcon").css("opacity",1).show();
		setTimeout(function(){$("#couponlink").show();},500);
	});
	//share
	$("#sharelayer").bind("touchmove",function(e){e.preventDefault();}).bind("tapone",function(){$("#sharelayer .returnbtn").trigger("tapone")});
	$("#sharelayer .returnbtn").unbind().bind("tapone",function(){
		if(custest){
			$("#sharelayer").hide();
			completelayer.show();
			custest=false;
		}else{
			$("#sharelayer").hide();
			$("#maincontent").show();
		}		
	});
	
	$("#maincontent .sharebtn").bind("tapone",function(){
		snsparam.link=location.href.split("?")[0];
		if(window.WeixinJSBridge){
			$("#sharelayer .returnbtn").css({"left":0.47*THISW,"top":"55%"});
			try{
			weichat();
			}catch(e){alert(e)}
			$("#sharelayer .wechattip").show();
		}else{
			$("#sharelayer .wechattip").hide();
		}
		$("#sharelayer").show();
	});
	$("#sharelayer .snsbtncursor").css({"height":THISW*0.13,"width":THISW*0.13,"top":"40%"});
	$("#sharelayer .sinabtn").bind("tapone",function(e){
		var _url="http://v.t.sina.com.cn/share/share.php?&searchPic=false";
		_url+=("&url="+encodeURI(snsparam.link));
		_url+=("&title="+encodeURI(snsparam.title));
		_url+=("&pic="+encodeURI(snsparam.img));//"&pic=http://vw.faw-vw.com/http://image.gis-ad.com/images/vwlogo.png";
		//_url+=encodeURI("&utm_campaign=shareSinaweibo&utm_source=minisite&utm_medium=button");
		e.stopPropagation();
		e.preventDefault();
		_pt_sp_2.push('setTrackEvent,Weibo,Click,sinaweibo,0');
		window.open(_url,"_blank");
	});
	$("#sharelayer .tencentbtn").bind("tapone",function(e){
		var _url="http://v.t.qq.com/share/share.php?";
		_url+=("url="+encodeURI(snsparam.link));
		_url+=("&title="+encodeURI(snsparam.title));
		_url+=("&pic="+encodeURI(snsparam.img));
		//_url+=encodeURI("&utm_campaign=tengxunweibo&utm_source=minisite&utm_medium=button");
		e.stopPropagation();
		e.preventDefault();
		_pt_sp_2.push('setTrackEvent,Weibo,Click,tengxunweibo,0');
		window.open(_url,"_blank");
	});
	$("#sharelayer .qzonebtn").bind("tapone",function(e){
		var _url="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?";
		_url+=("url="+encodeURI(snsparam.link));
		_url+=("&summary="+encodeURI(snsparam.title+snsparam.pageurl));
		_url+=("&pics="+encodeURI(snsparam.img));
		//_url+=encodeURI("&utm_source=minisite&utm_medium=button");
		e.stopPropagation();
		e.preventDefault();
		_pt_sp_2.push('setTrackEvent,Weibo,Click,qqkongjian,0');
		window.open(_url,"_blank");
	});
	
	//upload photo
	var photolayer=$("#photolayer").css("background-image","url('http://image.gis-ad.com/imgs/step1.jpg')");
	$(".photomc",photolayer).css({"width":"28.125%","height":"30%","left":"35.15%","top":"42.44%"});
	$(".returnbtn",photolayer).bind("tapone",function(){
		$("#maincontent").show();
		$("#photolayer").css("opacity",1).hide();
		resetuploadphoto();
		$("#cardlayer").css("opacity",1).hide();
		resetcardtext();
		$("#treelayer").css("opacity",1).hide();
		$("#treelayer .giftcon").remove();
		$("#completelayer").css("opacity",1).hide();
		$(document).data("pano",true);
	});
	function resetuploadphoto(){
		$(".skipphoto",photolayer).unbind().bind("tapone",function(){
			resetuploadphoto();
			resetcardtext();
			cardlayer.show();
			photolayer.hide();
		}).show();
		$("#selectphoto").unbind("load").attr("src","http://image.gis-ad.com/img/transparent.png");
	    $(".nextncancel",photolayer).hide();
	    $(".nextncancel .cancelbtn",photolayer).unbind().bind("tapone",resetuploadphoto);
	}
	function lpnextstep(){
		//upload
		var objcon=$(".photomc",imgcon);
		var icw=objcon.width();
		var ich=objcon.height()
		var imgobj=$("#selectphoto");
		
		var il=parseInt(imgobj.css("left"));
		var it=parseInt(imgobj.css("top"));
		var iw=imgobj.width();
		var ih=imgobj.height();
		
		
		var wr=icw/iw;
		var lper=Math.abs(il/iw);
		var hr=ich/ih;
		var tper=Math.abs(it/ih);
		
		
		var cv=document.createElement("canvas");
		var panelsize=640;
		var panelurl="http://image.gis-ad.com/images/pano_ls.jpg";
		if(appver.indexOf("ipad")>0){
			panelsize=1080;
			panelurl="http://image.gis-ad.com/images/pano_l.jpg";
		}
		cv.setAttribute("width",panelsize);
		cv.setAttribute("height",panelsize);
		var ctx=cv.getContext("2d");
		$("<img src=\"img/transparent.png\"/>").load(function(){
			ctx.drawImage(this,0,0,this.width,this.height,0,0,panelsize,panelsize);
			$("<img src=\""+photolayer.bath64+"\" />").load(function(){
				$("#onuploading").show();
				if(panelsize==640){
					ctx.drawImage(this,this.width*lper,this.height*tper,this.width*wr,this.height*hr,258,285,80,121);
				}else{
					ctx.drawImage(this,this.width*lper,this.height*tper,this.width*wr,this.height*hr,436,482,135,204);
				}
				var con=$("#panel_l");
				$("img",con).remove();
				/*
				$("<img src=\""+cv.toDataURL("image/png")+"\"/>").load(function(){
					ctx.clearRect(0,0,panelsize,panelsize);
					cv.setAttribute("width",con.width());
					cv.setAttribute("height",con.height());
					ctx.drawImage(this,0,0,this.width,this.height,0,0,con.width(),con.height());
					con[0].appendChild(cv);
				})
				*/
				$("<img src=\""+cv.toDataURL("image/png")+"\"/>").css({"width":con.width(),"height":con.height()}).appendTo(con);
				
				//$("#panel_l").css("background-image","url("+cv.toDataURL('image/png')+")")
				var imagedata = encodeURIComponent(cv.toDataURL("image/png"));
		        var data = {
		            imagename: guid+"_photo.png",
		            imagedata: imagedata
		        }
				jQuery.ajax({
		            url : "base64/upload.php",
		            data : data,
		            type : "POST",
		            dataType: "json",
		            success:function(obj){
		                if(obj.msg.indexOf("成功")>0){
		                	$("#onuploading").hide();
		                	//next
		                	customparam.photo=obj.id;
		                	resetuploadphoto();
							resetcardtext();
							cardlayer.show();
							photolayer.hide();
		                }else{
		                	$("#onuploading").hide();
                			alert("数据上传失败");
		                }
		            },
		            error:function(){
						$("#onuploading").hide();
						alert("数据上传失败");	
					}
				});
				
			});
			
		});
	}
	photolayer.bind("touchmove",function(e){e.preventDefault();});
	calwindowsize();
	$(".skipphoto",photolayer).height(63*THISW*0.4234/271);
	$(".nextncancel",photolayer).height(63*THISW*0.54375/384);
	var _rate=THISW/THISH;
	var imgcon=$(".photocon",photolayer);
	if(_rate>640/900){
		var rh=THISW*900/640;
		photolayer.css("background-size","100% auto");
		imgcon.css({"width":"100%","height":rh,"top":0});
	}else{
		var rw=THISH*640/900;
		photolayer.css("background-size","auto 100%");
		imgcon.css({"height":"100%","width":rw,"left":(THISW-rw)/2});
	}
	var imgh=$(".photomc",imgcon).height();
	var imgw=$(".photomc",imgcon).width();
	var imgrate=imgw/imgh;
	photolayer.hide().css("opacity",1);
	$(".returnbtn",photolayer).bind("tapone",function(){photolayer.hide();})
	$("#selectphoto").bind("tapone",function(){
		$("#selectfile")[0].click();
	});
	resetuploadphoto();
	var imgtar=$("#selectphoto");
	if(appos=="android"){
		$("#selectfile").show().bind("swipemove",function(e,p){moveimg(e,p,imgtar)});
	}
	
	
	
	if(appos!="android"){
		$("#selectfile").change(function(e){
			$("#onprocessing").show();
			imgtar.unbind().removeAttr("style").load(function(){
				$("#onprocessing").show();
	          	var tar=$(this);
	          	tar.unbind("load").localResizeIMG({
		             width: 300,
		             quality: 1,
		             success: function (result) {
		             	imgtar.removeAttr("style").attr("src",result.base64).load(function(){
		             		$("#onprocessing").show();
		             		//processrotate(gerExif(this.src).Orientation,this.src,this.width,this.height,appos)//.toDataURL("image/png").toDataURL("image/png")
		             		$("#selectfile").hide();
				          	$(".skipphoto",photolayer).hide();
				       		$(".nextncancel",photolayer).show();
				          	$(".nextncancel .nextrbtn",photolayer).unbind().bind("tapone",lpnextstep);
				          	photolayer.bath64=this.src;
				          	//photolayer.bath64=processrotate(gerExif(this.src).Orientation,this.src).toDataURL("image/png")
				          	var thisw=this.width;
				          	var thish=this.height;
				          	var thisr=thisw/thish;
				          	var _para={"conw":imgw,"conh":imgh}
				          	if(thisr>=imgrate){
				          		this.style.height=imgh+"px";
				          		_para.height=imgh;
				          		_para.starth=imgh;
				          		this.style.width=(thisr*imgh)+"px";
				          	}else{
				          		this.style.width=imgw+"px";
				          		_para.width=imgw;
				          		_para.startw=imgw;
				          		this.style.height=(imgw/thisr)+"px";
				          	}
				          	centeralimg(imgtar);
				          	imgtar.data("p",_para).bind("tapone",function(){
				          		$(this).unbind().bind("tapone",function(){
				          			$("#selectfile")[0].click();
				          		});
								//$("#selectfile")[0].click();
							});
							$("#onprocessing").hide();
							imgtar.unbind("load");
		             	}).bind("swipemove",function(e,p){moveimg(e,p,imgtar)}).bind("gesturestart",function(){
							$(this).unbind("swipemove");
						}).bind("gestureend",function(){
							$(this).bind("swipemove",function(e,p){moveimg(e,p,imgtar)});
						}); 
		             }
		         },true);
	         });
	         $("#submitbtn").trigger("click");
		});
 }else{ 
 	$("#selectfile").localResizeIMG({
     width: 300,
     quality: 1,
     success: function (result) {
     	$("#onprocessing").show();
     	imgtar.unbind().removeAttr("style").attr("src",result.base64).load(function(){
     		$("#selectfile").hide();
          	$(".skipphoto",photolayer).hide();
       		$(".nextncancel",photolayer).show();
          	$(".nextncancel .nextrbtn",photolayer).unbind().bind("tapone",lpnextstep);
          	photolayer.bath64=this.src;
          	var thisw=this.width;
          	var thish=this.height;
          	var thisr=thisw/thish;
          	var _para={"conw":imgw,"conh":imgh}
          	if(thisr>=imgrate){
          		this.style.height=imgh+"px";
          		_para.height=imgh;
          		_para.starth=imgh;
          		this.style.width=(thisr*imgh)+"px";
          	}else{
          		this.style.width=imgw+"px";
          		_para.width=imgw;
          		_para.startw=imgw;
          		this.style.height=(imgw/thisr)+"px";
          	}
          	centeralimg(imgtar);
          	imgtar.data("p",_para).bind("tapone",function(){
          		$(this).unbind().bind("tapone",function(){
          			$("#selectfile")[0].click();
          		});
				//$("#selectfile")[0].click();
			})
     	}).bind("swipemove",function(e,p){moveimg(e,p,imgtar)}).bind("gesturestart",function(){
			$(this).unbind("swipemove");
		}).bind("gestureend",function(){
			$(this).bind("swipemove",function(e,p){moveimg(e,p,imgtar)});
		})
		$("#onprocessing").hide(); 
         }
     });
 }
	 
	 
	 
	 function makemessage(txtparam){
	 	var con=$("#panel_b");
        var  param={"url":"http://image.gis-ad.com/images/pano_btxts.jpg?a=1","size":640,"w":318,"top":99}
        if(appver.indexOf("ipad")>0){
			 param={"url":"http://image.gis-ad.com/images/pano_btxt.jpg?a=2","size":1080,"w":540,"top":168}
		}
       	$("img",con).remove();
        var cv=document.createElement("canvas");
        var ctx=cv.getContext("2d");
        cv.setAttribute("width",con.width());
        cv.setAttribute("height",con.height());

        $("<img  src=\"img/transparent.png\"  />").load(function(){
        	ctx.drawImage(this,0,0,this.width,this.height,0,0,con.width(),con.height());
        	$("<img  src=\"img/messagebg1.png\"  />").load(function(){
        		con.css("background-image","url('"+param.url+"')");

	        	var _w=con.width();
	        	var _h=con.width()/640*179
	        	
	        	ctx.drawImage(this,0,0,this.width,this.height,0,(param.top/param.size)*con.height()/2,_w,_h);
	        	
	        	
	        	
	        	//var textcv=document.createElement("canvas");
		        //var textctx=textcv.getContext("2d");
		        //textcv.setAttribute("width",con.width());
		        //textcv.setAttribute("height",con.height());
		        if(appos=="android"){
		        	ctx.font="italic bold 1.5em serif";
		        }else{
		        	ctx.font="italic bold 0.8em serif";
		        }
		        
		        ctx.fillStyle="#efda95";
		        ctx.textAlign="center";
		        var mw=ctx.measureText("To:"+txtparam.t1);
				ctx.fillText(("To:"+txtparam.t1),0.47*con.width(),(0.17*con.height()+10));
				
				if(appos=="android"){
		        	ctx.font="italic bold 1.5em serif";
		        }else{
		        	ctx.font="italic bold 0.8em serif";
		        }
		        ctx.fillStyle="#efda95";
		        ctx.textAlign="center";
		        var mw=ctx.measureText(txtparam.t2);
				ctx.fillText(txtparam.t2,0.47*con.width(),(0.21*con.height()+10));
				
				if(appos=="android"){
		        	ctx.font="italic bold 1.5em serif";
		        }else{
		        	ctx.font="italic bold 0.8em serif";
		        }
		        ctx.fillStyle="#efda95";
		        ctx.textAlign="center";
		        var mw=ctx.measureText("From:"+txtparam.t3);
				ctx.fillText(("From:"+txtparam.t3),0.47*con.width(),(0.25*con.height()+10));
		 
		       //	$("<img   src=\""+textcv.toDataURL('image/png')+"\" />").css({"width":con.width(),"height":con.height(),"position":"absolute","top":0,"left":0,"z-index":99}).appendTo(con)
	        	
	        	
	        	setTimeout(function(){
		        	$("<img   src=\""+cv.toDataURL('image/png')+"\" />").css({"width":con.width(),"height":con.height(),"position":"absolute","top":0,"left":0,"z-index":9}).appendTo(con)
		        },500);
	        });
        });
        
       
	 }
	 
	 
	//making card
	var inutpos={
		"line1":{"bottom":39.3},
		"line2":{"bottom":48.3},
		"line3":{"bottom":54.5}
	}
	
	var cardlayer=$("#cardlayer");
	$(".returnbtn",cardlayer).bind("tapone",function(){
		$("#maincontent").show();
		$("#photolayer").css("opacity",1).hide();
		resetuploadphoto();
		$("#cardlayer").css("opacity",1).hide();
		resetcardtext();
		$("#treelayer").css("opacity",1).hide();
		$("#treelayer .giftcon").remove();
		$("#completelayer").css("opacity",1).hide();
		$(document).data("pano",true);
	});
	calwindowsize();
	$(".skipphoto",cardlayer).height(63*THISW*0.4234/271);
	$(".nextncancel",cardlayer).height(63*THISW*0.54375/384);
	var textmargin=18;
	cardlayer.height(THISH);
	if(appos=="android"){
		if(appver.indexOf("chrome")<0){
			$(".cardtext",cardlayer).css("font-size","2em").focus(function(){
				$("body").height($("body").height())
			})
			textmargin=0;
		}else{
			textmargin=0;
		}
	}
	var _rate=THISW/THISH;
	var _ww=THISH;
	$(".bg",cardlayer).css({"width":THISW*1.1,"height":THISH*1.1,"left":-0.05*THISW,"top":-0.05*THISH});
	if(_rate>750/1008){
		$(".bg",cardlayer).css("background-size","100% auto");
	}else{
		$(".bg",cardlayer).css("background-size","auto 100%");
	}
	if(_rate>640/900){
		var rh=THISW*900/640;
		_ww=rh;
		$(".frontbg",cardlayer).css("background-size","100% auto");
	}else{
		var rw=THISH*640/900;
		$(".frontbg",cardlayer).css("background-size","auto 100%");
	}
	
	$(".returnnskip",cardlayer).show();
	$(".returnnskip .returnbtn",cardlayer).bind("tapone",function(){
		resetcardtext();
		cardlayer.hide();
		photolayer.show();
		customparam.card=0;
	});
	$(".returnnskip .skipbtn",cardlayer).bind("tapone",function(){
		cardlayer.hide();
		$(".giftcon",treelayer).remove();
		treelayer.show();
		if(treecursor){
			clearTimeout(treecursor);
		}
		$("#treecursor").stop().css("opacity",1).show();
		treecursor=setTimeout(function(){
			$("#treecursor").animate({"opacity":0},1000);
		},2000);
       //makemessage({"t1":"Dear Friend","t2":"Merry Christmas","t3":"GODIVA"});
       //ctx.fillText("helloworld",0,50);  
	});
	
	
	$(".returnncomplete .returnbtn",cardlayer).bind("tapone",function(){
		customparam.card=0;
		$(".returnncomplete",cardlayer).hide();
		$(".returnnskip",cardlayer).show();
	});
	$(".returnncomplete .completebtn",cardlayer).bind("tapone",function(){
		
		$("#onuploading").show();
		var data = {
            t1: $("#TextTo").val(),
            t2: $("#TextContent").val(),
            t3:$("#TextFrom").val()
        }
        
        
		jQuery.ajax({
            url : "base64/wenzi.php",
            data : data,
            type : "POST",
            dataType: "json",
            success:function(obj){
                if(obj.id){
                	customparam.card=obj.id;
                	$("#onuploading").hide();
                	//next
                	cardlayer.hide();
					$(".giftcon",treelayer).remove();
					treelayer.show();
					if(treecursor){
						clearTimeout(treecursor);
					}
					$("#treecursor").stop().css("opacity",1).show();
					treecursor=setTimeout(function(){
						$("#treecursor").animate({"opacity":0},1000);
					},2000);
					
                }else{
                	$("#onuploading").hide();
                	alert("数据上传失败");
                }
            },
            error:function(){
				$("#onuploading").hide();
				alert("数据上传失败");	
			}
		});	
	});
	
	$(".returnncomplete .returnbtn",cardlayer).bind("tapone",function(){
		 $("#TextTo").val("Dear Friend");
         $("#TextContent").val("Merry Christmas");
         $("#TextFrom").val("GODIVA");
         customparam.card=0;
	});
	
	
	$("#TextTo").css("top",_ww*inutpos.line1.bottom/100-textmargin).bind("focus",function(){
		if(appos=="android"){
			wheel=true;
		}
		$(this).val("");
		$(".returnnskip",cardlayer).hide();
		$(".returnncomplete",cardlayer).show();
	}).bind("blur",function(){
		var tar=$(this);
		if(!tar.val().length){
			tar.val("Dear Friend");
			$(".returnnskip",cardlayer).show();
			$(".returnncomplete",cardlayer).hide();
		}
		wheel=false;
	}).bind("keydown",function(){
		var tar=$(this);
		var txt=tar.val();
		if(txt.length>15){
			txt=txt.substr(0,15);
			tar.val(txt);
		}
		if(txt.length<6){
			if(appos=="android"){
				if(window.devicePixelRatio>2){
					$("#TextTo").css("font-size","3em");
					//$("#TextContent").css("top",(_ww*inutpos.line2.bottom/100-textmargin-18));
				}else{
					$("#TextTo").css("font-size","2.5em");
					//$("#TextContent").css("top",(_ww*inutpos.line2.bottom/100-textmargin-12));
				}
			}else{
				//tar.css({"font-size":"1.2em","top":(_ww*inutpos.line2.bottom/100-textmargin-3)});
			}
		}else{
			if(appos=="android"){
				if(window.devicePixelRatio>2){
					$("#TextTo").css("font-size","2em");
					//$("#TextContent").css("top",(_ww*inutpos.line2.bottom/100-textmargin-14));
				}else{
					$("#TextTo").css("font-size","1.6em");
					//$("#TextContent").css("top",(_ww*inutpos.line2.bottom/100-textmargin-8));
				}
			}else{
				$("#TextTo").css("font-size","0.8em");
				//tar.css({"font-size":"1em","top":(_ww*inutpos.line2.bottom/100-textmargin-3)});
			}
		}
	});
	$("#TextContent").css({"top":(_ww*inutpos.line2.bottom/100-textmargin-3),"text-align":"center","font-size":"1.2em"}).bind("focus",function(){
		if(appos=="android"){
			wheel=true;
		}
		$(this).val("");
		$(".returnnskip",cardlayer).hide();
		$(".returnncomplete",cardlayer).show();
	}).bind("blur",function(){
		var tar=$(this);
		if(!tar.val().length){
			tar.val("Merry Christmas");
			$(".returnnskip",cardlayer).show();
			$(".returnncomplete",cardlayer).hide();
		}
		wheel=false;
	}).bind("keydown",function(){
		var tar=$(this);
		var txt=tar.val();
		if(txt.length>19){
			txt=txt.substr(0,19);
			tar.val(txt);
		}
		
		if(txt.length<10){
			if(appos=="android"){
				if(window.devicePixelRatio>2){
					$("#TextContent").css("font-size","3.6em");
					//$("#TextContent").css("top",(_ww*inutpos.line2.bottom/100-textmargin-18));
				}else{
					$("#TextContent").css("font-size","3em");
					//$("#TextContent").css("top",(_ww*inutpos.line2.bottom/100-textmargin-12));
				}
			}else{
				//tar.css({"font-size":"1.2em","top":(_ww*inutpos.line2.bottom/100-textmargin-3)});
			}
		}else{
			if(appos=="android"){
				if(window.devicePixelRatio>2){
					$("#TextContent").css("font-size","3.2em");
					$("#TextContent").css("top",(_ww*inutpos.line2.bottom/100-textmargin-14));
				}else{
					$("#TextContent").css("font-size","2.6em");
					$("#TextContent").css("top",(_ww*inutpos.line2.bottom/100-textmargin-8));
				}
			}else{
				tar.css({"font-size":"1em","top":(_ww*inutpos.line2.bottom/100-textmargin-3)});
			}
		}
	});
	
	$("#TextFrom").css("top",_ww*inutpos.line3.bottom/100-textmargin).bind("focus",function(){
		if(appos=="android"){
			wheel=true;
		}
		$(this).val("");
		$(".returnnskip",cardlayer).hide();
		$(".returnncomplete",cardlayer).show();
	}).bind("blur",function(){
		var tar=$(this);
		if(!tar.val().length){
			tar.val("GODVIA");
			$(".returnnskip",cardlayer).show();
			$(".returnncomplete",cardlayer).hide();
		}
		wheel=false;
	}).bind("keydown",function(){
		var tar=$(this);
		var txt=tar.val();
		if(txt.length>15){
			txt=txt.substr(0,15);
			tar.val(txt);
		}
		if(txt.length<6){
			if(appos=="android"){
				if(window.devicePixelRatio>2){
					$("#TextFrom").css("font-size","3em");
					//$("#TextContent").css("top",(_ww*inutpos.line2.bottom/100-textmargin-18));
				}else{
					$("#TextFrom").css("font-size","2.5em");
					//$("#TextContent").css("top",(_ww*inutpos.line2.bottom/100-textmargin-12));
				}
			}else{
				//tar.css({"font-size":"1.2em","top":(_ww*inutpos.line2.bottom/100-textmargin-3)});
			}
		}else{
			if(appos=="android"){
				if(window.devicePixelRatio>2){
					$("#TextFrom").css("font-size","2em");
					//$("#TextContent").css("top",(_ww*inutpos.line2.bottom/100-textmargin-14));
				}else{
					$("#TextFrom").css("font-size","1.6em");
					//$("#TextContent").css("top",(_ww*inutpos.line2.bottom/100-textmargin-8));
				}
			}else{
				$("#TextFrom").css("font-size","0.8em");
				//tar.css({"font-size":"1em","top":(_ww*inutpos.line2.bottom/100-textmargin-3)});
			}
		}
	});
	
	if(appos=="android"){
		if(window.devicePixelRatio>2){
			$("#TextTo").css("font-size","3em");
			$("#TextTo").css("top",(_ww*inutpos.line1.bottom/100-textmargin-5));
			$("#TextContent").css("font-size","3.6em");
			$("#TextContent").css("top",(_ww*inutpos.line2.bottom/100-textmargin-18));
			$("#TextFrom").css("font-size","3em");
			$("#TextFrom").css("top",(_ww*inutpos.line3.bottom/100-textmargin-5));
		}else{
			$("#TextTo").css("font-size","2em");
			$("#TextTo").css("top",(_ww*inutpos.line1.bottom/100-textmargin-3));
			$("#TextContent").css("font-size","3em");
			$("#TextContent").css("top",(_ww*inutpos.line2.bottom/100-textmargin-10));
			$("#TextFrom").css("font-size","2em");
			$("#TextFrom").css("top",(_ww*inutpos.line3.bottom/100-textmargin-3));
		}
	}
	
	cardlayer.css("opacity",1).hide();
	
	function resetcardtext(){
		$(".returnnskip",cardlayer).height(63*THISW*0.4234/271).show();
		$(".returnncomplete",cardlayer).height(63*THISW*0.4234/271).hide();
		$(".returnnnext",cardlayer).height(63*THISW*0.4234/271).hide();
		//$("#TextTo").val("Dear Friends");
		//$("#TextContent").val("MERRY CHRISTMAS");
		//$("#TextFrom").val("GODIVA");
		//customparam.card=0;
	}
	
	//tree gift
	var gifttree={
		"topmin":39.5,
		"leftmin":24.37,
		"topmax":77.88,
		"leftmax":75,
		"lr":330/169,
		"rr":338/174
	}
	var treecursor=null;
	
	calwindowsize();
	var _resizeH=THISH;
	var _resizeW=THISW;
	var treelayer=$("#treelayer");
	treelayer.css("background-image","url('http://image.gis-ad.com/img/step3.jpg')");
	$(".returnskip .returnbtn",treelayer).bind("tapone",function(){
		$("#maincontent").show();
		$("#photolayer").css("opacity",1).hide();
		resetuploadphoto();
		$("#cardlayer").css("opacity",1).hide();
		resetcardtext();
		$("#treelayer").css("opacity",1).hide();
		$("#treelayer .giftcon").remove();
		$("#completelayer").css("opacity",1).hide();
		$(document).data("pano",true);
	});
	if(_rate>640/900){
		var rh=THISW*900/640;
		_resizeH=rh;
		treelayer.css("background-size","100% auto");
		$(".innercon",treelayer).css({"width":"100%","height":rh,"left":0,"top":0});
		gifttree._mt=0;
	}else{
		var rw=THISH*640/900;
		treelayer.css("background-size","auto 100%");
		_resizeW=rw;
		$(".innercon",treelayer).css({"width":rw,"height":"100%","left":(THISW-rw)/2,"top":0});
		gifttree._ml=(THISW-rw)/2;
	}
	//$("<div style=\"position:absolute;opacity:0.5;background:pink;\"></div>").css({"width":(gifttree.leftmax-gifttree.leftmin)/100*_resizeW,"height":(gifttree.topmax-gifttree.topmin)/100*_resizeH,"top":gifttree.topmin/100*_resizeH,"left":gifttree.leftmin/100*_resizeW}).appendTo($("#treelayer .innercon"))

	gifttree.twitdh=(gifttree.leftmax-gifttree.leftmin)/100*_resizeW;
	gifttree.theight=(gifttree.topmax-gifttree.topmin)/100*_resizeH;
	gifttree.left=gifttree.leftmin/100*_resizeW;
	gifttree.top=gifttree.topmin/100*_resizeH;
	
	treelayer.bind("touchmove",function(e){e.preventDefault();});
	function _counttr(){
		var _f=0;
		var _s=0;
		var _b=0;
		$(".giftcon",treelayer).each(function(i,v){
			if(v.src.indexOf("flower.png")>0){
				_f++;
			}
			if(v.src.indexOf("sock.png")>0){
				_s++;
			}
			if(v.src.indexOf("bear.png")>0){
				_b++;
			}
		});
		var _fc=$(".flowercon",treelayer).show();
		var _sc=$(".sockcon",treelayer).show();
		var _bc=$(".bearcon",treelayer).show();
		if(_f>=3){
			_fc.hide();
		}
		if(_s>=3){
			_sc.hide();
		}
		if(_b>=3){
			_bc.hide();
		}
	}
	
	$(".giftcellcon",treelayer).each(function(i,v){
		tar=$(v);
		tar.height(tar.width());
		var _cl=tar.position().left;
		tar.css("left",_cl-(_resizeW-THISW)/2);
		var img=$("img",tar);
		img.css("height","80%");
		setTimeout(function(){
			img.css({"left":(tar.width()-img.width())/2});
		},100)
		img.bind("touchstart",function(e){
			var event=e.originalEvent;
    		var touches=event.touches;
    		var pos=$(this).offset();
    		$("#giftimg").stop().css({"width":this.width,"height":this.height,"top":pos.top,"left":pos.left,"opacity":1}).attr("src",this.src).show();
    		if(touches.length==1){
    			$("#treelayer .innercon").unbind("swipemove").bind("swipemove",function(e,p){
    				var et=p.originalEvent.changedTouches;
    				$("#giftimg").css({"left":et[0].clientX,"top":et[0].clientY}).show();
    			}).bind("touchend",function(e){
    				$("#treelayer .innercon").unbind("swipemove").unbind("touchend");
    				$(".returnskip",treelayer).hide();
    				$(".returncomplete",treelayer).show();
    				var oimg=$("#giftimg");
    				var _ol=parseInt(oimg.css("left"));
    				var _ot=parseInt(oimg.css("top"));
    				calwindowsize();
    				var _f=false;
    				var _minl=gifttree.leftmin/100*_resizeW;
    				var _maxl=gifttree.leftmax/100*_resizeW;
    				var _mint=gifttree.topmin/100*_resizeH;
    				var _maxt=gifttree.topmax/100*_resizeH;
    				if(_ot>(_mint+10) && _ot<_maxt){
    					var _lmin=0.4875*_resizeW-(_ot+tar.height()/2-_mint)/gifttree.lr;
    					var _lmax=0.5*_resizeW+(_ot-_mint)/gifttree.rr;
    					var __ol=_ol-(THISW-_resizeW)/2
    					//console.log(__ol);
    					//console.log(_lmin+";"+_lmax)
    					if(__ol<_lmax && __ol>_lmin){
    						var _gift=$("<img class=\"giftcon\" src=\""+oimg.attr("src")+"\"/>").css({"left":_ol-((THISW-_resizeW)/2),"top":_ot,"width":oimg.width()});
    						_gift.bind("tapone",function(){$(this).remove();_counttr();if($(".giftcon",treelayer).length==0){
    							$(".returnskip",treelayer).show();
    							$(".returncomplete",treelayer).hide();
    						}});
    						$(".innercon",treelayer).append(_gift);
    						oimg.hide();
    						_f=true;
    					}
    				}
    				if(!_f){
    					$("#giftimg").stop().animate({"opacity":0});
    				}
    				_counttr();
    			});
    		}
		});
	});
	$(".returnskip",treelayer).height($(".returnskip",treelayer).width()/(348/63));
	$(".returnskip .returnbtn",treelayer).bind("tapone",function(){
		treelayer.hide();
		cardlayer.show();
	});
	$(".returnskip .skipbtn",treelayer).bind("tapone",function(){
		treelayer.hide();
		completelayer.show();
		
		$(".completecard").appendTo($("#completelayer")).css("top",0.27*_resizeH+(THISH-_resizeH)/2);
		getFont();
		$("<img  class=\"returnbtn\" src=\"http://image.gis-ad.com/img/returnbtn.png\" />").bind("tapone",function(){
			$("#maincontent").show();
			$("#photolayer").css("opacity",1).hide();
			resetuploadphoto();
			$("#cardlayer").css("opacity",1).hide();
			resetcardtext();
			$("#treelayer").css("opacity",1).hide();
			$("#treelayer .giftcon").remove();
			$("#completelayer").css("opacity",1).hide();
			$(document).data("pano",true);
		}).appendTo(completelayer);
	});
	$(".returncomplete",treelayer).height($(".returncomplete",treelayer).width()/(348/63));
	$(".returncomplete .returnbtn",treelayer).bind("tapone",function(){
		$(".giftcon",treelayer).remove();
		$(".returnskip",treelayer).show();
		$(".returncomplete",treelayer).hide();
	});
	$(".returncomplete .completebtn",treelayer).bind("tapone",function(){
		calwindowsize();
		var rect={"w":_resizeW*((gifttree.leftmax-gifttree.leftmin)/100),"h":_resizeH*((gifttree.topmax-gifttree.topmin)/100)};
		console.log(rect.w+";"+rect.h)
		var gifts=$(".giftcon",treelayer);
		if(gifts.length){
			var para={"url":"http://image.gis-ad.com/images/pano_fs.jpg","size":640,"w":295,"h":323,"l":177,"t":206};
			if(appver.indexOf("ipad")>0){
				para={"url":"http://image.gis-ad.com/images/pano_f.jpg","size":1080,"w":440,"h":510,"l":326,"t":348};
			}
			var canvas=document.createElement("canvas");
			var con=$("#panel_f");
			var ctx=canvas.getContext("2d");
			canvas.setAttribute("width",para.size);
			canvas.setAttribute("height",para.size);
			$("<img src=\"img/transparent.png\"/>").load(function(){
				ctx.drawImage(this,0,0,this.width,this.height,0,0,para.size,para.size);
			});
			
			var _conl=gifttree.leftmin*_resizeW/100;
			var _cont=gifttree.topmin*_resizeH/100;
			console.log(_conl+";"+_resizeW)
			
			$(".giftcon",treelayer).each(function(i,v){
				v=$(v);
				var _l=parseInt(v.css("left"));
				var _t=parseInt(v.css("top"));
				var _wr=(v.width()/rect.w);
				var _hr=(v.height()/rect.h);
				var _lr=(_l-gifttree.leftmin*_resizeW/100)/rect.w;
				var _tr=(_t-gifttree.topmin*_resizeH/100)/rect.h;
				
	
				para.rw=(para.w/para.size)*para.size;
				para.rh=(para.h/para.size)*para.size;
				para.rl=(para.l/para.size)*para.size;
				para.rt=(para.t/para.size)*para.size;
			
			
				var _rl=((_l-gifttree.left)/gifttree.twitdh)*para.rw+para.rl;
				var _rt=((_t-gifttree.top)/gifttree.theight)*para.rh+para.rt;	
				$("<img src=\""+v.attr("src").replace("http://image.gis-ad.com/","")+"\"/>").load(function(){
					ctx.drawImage(this,0,0,this.width,this.height,_rl,_rt,_wr*para.w,_hr*para.h);
				});
			});
			setTimeout(function(){
				var imagedata = encodeURIComponent(canvas.toDataURL("image/png"));
		        var data = {
		            imagename: guid+"_tree.png",
		            imagedata: imagedata
		        }
		        $("#onuploading").show();
		        var con=$("#panel_f");
		        $("img",con).remove();
		        $("<img src=\""+canvas.toDataURL("image/png")+"\" />").css({"width":con.width(),"height":con.height()}).appendTo(con);
				jQuery.ajax({url:"base64/upload.php",data:data,type:"POST",dataType:"json",
		            success:function(obj){
		                if(obj.msg.indexOf("成功")>0){
		                	customparam.tree=obj.id
			                treelayer.hide();
					completelayer.show();
					completelayer.isshow=true;
		                }else{
		                	alert("数据上传失败");
		                }
		                $("#onuploading").hide();
		            },
		            error:function(obj){
				$("#onuploading").hide();
                		alert("数据上传失败");
					}
				});
			},500);
		}else{
			treelayer.hide();
			completelayer.show();
			completelayer.isshow=true;
		}
		$(".completecard").appendTo($("#completelayer"));
		getFont();
		$("<img  class=\"returnbtn\" src=\"http://image.gis-ad.com/img/returnbtn.png\" />").bind("tapone",function(){
			$("#maincontent").show();
			$("#photolayer").css("opacity",1).hide();
			resetuploadphoto();
			$("#cardlayer").css("opacity",1).hide();
			resetcardtext();
			$("#treelayer").css("opacity",1).hide();
			$("#treelayer .giftcon").remove();
			$("#completelayer").css("opacity",1).hide();
			$(document).data("pano",true);
		}).appendTo(completelayer);
	});
	treelayer.css("opacity",1).hide();
	
	function getFont(message){
		var _ttxt=$("#TextTo").val();
		if(_ttxt!="Dear Friends"){
  			if(_ttxt.length>15){
				_ttxt=_ttxt.substr(0,15);
			}
  		}
		var _ctxt=$("#TextContent").val();
		if(_ctxt.length>19){
			_ctxt=_ctxt.substr(0,19);
		}
		var _ftxt=$("#TextFrom").val();
		if(_ftxt.length>15){
			_ftxt=_ftxt.substr(0,15);
		}
		if(customparam.card){
			$("#SpanTo").text("To:"+_ttxt);
			$("#SpanContent").text(_ctxt);
			$("#SpanFrom").text("From:"+_ftxt);
			$(".completecard").css("background-image","url('http://image.gis-ad.com/img/card.png')")
			makemessage({"t1":_ttxt,"t2":_ctxt,"t3":_ftxt});
		}else{
			$("#SpanTo").text("");
			$("#SpanContent").text("");
			$("#SpanFrom").text("");
			$(".completecard").css("background-image","url('http://image.gis-ad.com/img/carddefault.png')");
		}
	}
	
	//complete
	var completelayer=$("#completelayer");
	$(".frontbg",completelayer).css("background-image","url('http://image.gis-ad.com/imgs/completec.png')");
	completelayer.bind("touchmove",function(e){e.preventDefault();})
	calwindowsize();
	$(".bg",completelayer).css({"width":THISW*1.1,"height":THISH*1.1,"left":-0.05*THISW,"top":-0.05*THISH});
	if(_rate>750/1008){
		$(".bg",completelayer).css("background-size","100% auto");
	}else{
		$(".bg",completelayer).css("background-size","auto 100%");
	}
	var _comh=THISH;
	var _comw=THISW;
	if(_rate>640/900){
		_comh=THISW*900/640;
		$(".frontbg",completelayer).css("background-size","100% auto");
		$("a.coupon",completelayer).css({"top":_comh*0.6+(THISH-_comh)/2});
	}else{
		_comw=THISH*640/900;
		$(".frontbg",completelayer).css("background-size","auto 100%");
		$("a.coupon",completelayer).css({"top":_comh*0.6})
	}
	$("a.coupon",completelayer).bind("tapone",function(){
		$("#couponcon").css("opacity",1).show();
		setTimeout(function(){$("#couponlink").show();},500)
	})
	$(".bar",completelayer).height(THISW/(640/131));
	var __w=_comh*0.315*(400/289);
	
	$(".completecard",completelayer).height(_comh*0.315).css({"top":0.27*_resizeH+(THISH-_resizeH)/2});
	//console.log(__w)
	$(".completecard span",completelayer).css("left",(THISW-__w)/2+0.25*__w)
	
	
	if(appos=="android"){
		if(window.devicePixelRatio>2){
			$(".completecard span",completelayer).css("font-size","2em");
		}else{
			$(".completecard span",completelayer).css("font-size","1em");
		}
	}
	
	$(".preview",completelayer).bind("tapone",function(){
		completelayer.hide();
		$(document).data("pano",true);
		$("#hs_0").hide();
		$("#hs_1").hide();
		$("#hs_2").hide();
		$("<img id=\"prereturn\" src=\"http://image.gis-ad.com/img/prereturn.png\" />").bind("tapone",function(){
			$("#hs_0").show();
			$("#hs_1").show();
			$("#hs_2").show();
			$(this).remove();
			$(document).data("pano",false);
			completelayer.show();
		}).appendTo($(document.body))
		
	});
	$(".reproduce",completelayer).bind("tapone",function(){
		$("#maincontent .makecard").trigger("tapone");
	});
	$(".sharecard",completelayer).bind("tapone",function(){
		custest=true;
		//alert("?photoid="+customparam.photo+";cardid="+customparam.card+";treeid="+customparam.tree)
		var link=location.href.replace("#","");
		link=link.split("?")[0];
		//var link=(location.href.split("?")[0]+("?photoid="+customparam.photo+";cardid="+customparam.card+";treeid="+customparam.tree));
		if(customparam.photo || customparam.card || customparam.tree){
			link+=("?GODVIAphotoid="+customparam.photo+";cardid="+customparam.card+";treeid="+customparam.tree+";");
		}
		$("#maincontent .sharebtn").trigger("tapone");
		snsparam.link=link;
		completelayer.hide();
		weichat();
		//alert(snsparam.link);
	});
	completelayer.css("opacity",1).hide();	
	
	setTimeout(
		function(){
			$("#productslayer .scroll").css("top","10%");
			$("#productslayer .dotModule_new").css("left",(THISW-68)/2)
		},1000
	);
	var custest=false;
	//coupon
	var couponlayer=$("#couponcon");
	couponlayer.bind("touchmove",function(e){e.preventDefault();})
	calwindowsize();
	if(_rate>640/900){
		 var rh=THISW*900/640;
		couponlayer.css("background-size","100% auto");
		$(".couponimg",couponlayer).css({"top":0.2877*rh+(THISH-rh)/2});
		$("#couponlink").css({"top":0.61*rh+(THISH-rh)/2,"height":0.069*rh});
	}else{
		var rw=THISH*640/900;
		couponlayer.css("background-size","auto 100%");
		$(".couponimg",couponlayer).css({"top":0.2877*THISH});
		$("#couponlink").css({"top":0.61*THISH,"height":0.069*THISH});
	}
	$(".returnbtn",couponlayer).bind("tapone",function(){
		couponlayer.hide();
		$("#couponlink").hide();
	});
	couponlayer.hide().css("opacity",1)
	
	//audio
	var audioEle = $("#audio")[0];
	//alert(THISW*0.05)
	$("#audio_d").width(THISW*0.06).height(THISW*0.06)
	//audioEle.style.width=0.05*THISW+"px";
	//audioEle.style.height=0.05*THISW+"px";
	//audioEle.style.display="none";
	$('.paly_audio').live('click',(function(){
		$(this).removeClass('paly_audio');
		$('#audio_d').addClass('pause_audio');
		audioEle.pause();	//暂停
	}));
	
	$('.pause_audio').live('click',(function(){
		$(this).removeClass('pause_audio');
		$('#audio_d').addClass('paly_audio');
		audioEle.play();	//播放
	}));

    audioEle.addEventListener("canplay", function()
    {
        audioEle.play();

    });
    audioEle.play();

	//albumn
	
	$("#productslayer .mod_01").width(THISW);
	$("#slide_01 .mod_01").each(function(i,v){
		v=$(v);
		$("img",v).attr("src","http://image.gis-ad.com/imgs/"+(i+1)+".png");
	});
	var slide_01 = new ScrollPic();
	slide_01.scrollContId   = "slide_01"; //内容容器ID
	slide_01.dotListId      = "slide_01_dot";//点列表ID
	slide_01.dotOnClassName = "selected";
	slide_01.arrLeftId      = "sl_left"; //左箭头ID
	slide_01.arrRightId     = "sl_right";//右箭头ID
	slide_01.arObj="sl_right";
	slide_01.frameWidth     = THISW;
	slide_01.pageWidth      = THISW;
	slide_01.upright        = false;
	slide_01.speed          = 10;
	slide_01.space          = 1000;
	slide_01.initialize(); //初始化
	$("#productslayer").css("opacity",1).hide();
	$("#productslayer .closebtn").bind("tapone",function(){
		$("#productslayer").hide()
	});
});

function centeralimg(tar){
	var par=tar.parent();
	var parw=par.width();
	var parh=par.height();
	var thisw=tar.width();
	var thish=tar.height();
	tar.css({"left":(parw-thisw)/2,"top":(parh-thish)/2})
}
function moveimg(e,p,tar){
	var ol=parseInt(tar.css("left"));
	var ot=parseInt(tar.css("top"));
	var imgh=tar.parent().height();
	var imgw=tar.parent().width();
	ol+=p.delta[0].lastX;
	ot+=p.delta[0].lastY;
	if(ol<=0 && ol>=(imgw-tar.width())){
		tar.css("left",ol);
	}
	if(ot<=0 && ot>=(imgh-tar.height())){
		tar.css("top",ot);
	}	
}
function calwindowsize(){
	THISW=document.documentElement.clientWidth;
	THISH=document.documentElement.clientHeight;
	
	var temp;
	if(THISW>THISH){
		temp=THISW;
		THISW=THISH;
		THISH=temp;
	}
}


var snsparam={
	"img":"http://image.gis-ad.com/img/sns.jpg",
	"link":location.href.split("?")[0],
	"title":"2014GODIVA＃歌帝梵冬日仙境＃。歌帝梵推出圣诞限量巧克力礼盒，360°转动手机制作你的致臻圣诞贺卡，即刻获赠10元礼惠！拿起手机扫码或直接点击进入体验：",
	"desc":"2014GODIVA＃歌帝梵冬日仙境＃。歌帝梵推出圣诞限量巧克力礼盒，360°转动手机制作你的致臻圣诞贺卡，即刻获赠10元礼惠！拿起手机扫码或直接点击进入体验：",
	"pageurl":"http://www.godiva.cn/ultimate2014"
}

var weichat;
var tid = "";
        var aid = "";
        var uin = "";
        var key = "";
        var biz = "MjM5MjMwNTU0MA==";
        var networkType;
        
        var cookie = {
            get: function(name){
                if( name=='' ){
                    return '';
                }
                var reg = new RegExp(name+'=([^;]*)');
                var res = document.cookie.match(reg);
                return (res && res[1]) || '';
            },
            set: function(name, value){
                var now = new Date();
                    now.setDate(now.getDate() + 1);
                var exp = now.toGMTString();
                document.cookie = name + '=' + value + ';expires=' + exp;
                return true;
            }
        };

        function hash(str){
            var hash = 5381;
            for(var i=0; i<str.length; i++){
                hash = ((hash<<5) + hash) + str.charCodeAt(i);
                hash &= 0x7fffffff;
            }
            return hash;
        }

        function trim(str){
            return str.replace(/^\s*|\s*$/g,'');
        }

        var title="";
        var sourceurl = trim(''.replace(/&lt;/g, '<').replace(/&gt;/g, '>'));
      


        function parseParams(str) {
            if( !str ) return {};

            var arr = str.split('&'), obj = {}, item = '';
            for( var i=0,l=arr.length; i<l; i++ ){
                item = arr[i].split('=');
                obj[item[0]] = item[1];
            }
            return obj;
        }

        function htmlDecode(str){
            return str
                  .replace(/&#39;/g, '\'')
                  .replace(/<br\s*(\/)?\s*>/g, '\n')
                  .replace(/&nbsp;/g, ' ')
                  .replace(/&lt;/g, '<')
                  .replace(/&gt;/g, '>')
                  .replace(/&quot;/g, '"')
                  .replace(/&amp;/g, '&');
        }
                  


        function get_url(link, extargs){
            extargs = extargs || "";
            var queryStr = link.split('?')[1] || '';
                queryStr = queryStr.split('#')[0];
            if( queryStr == '' ){
                return;
            }
            
            var queryarr = [queryStr];
            (extargs != "") && (queryarr.push(extargs));
            queryStr = queryarr.join('&');

            return link.split('?')[0] + '?' + queryStr + '#' + (link.split('#')[1]||'');
        }
        
        function viewProfile(){
            if (typeof WeixinJSBridge != "undefined" && WeixinJSBridge.invoke){
                WeixinJSBridge.invoke('profile',{
                    'username':'gh_504818f3570e',
                    'scene':'57'
                });
            }
        }
(function(){

function onBridgeReady() {
		var appId  = '',
        imgUrl = snsparam.img,
        //link = "http://special.mercedes-benz.com.cn/NewC-Class/?token=1",
        link=htmlDecode(snsparam.link);
        title  = htmlDecode("体验360°歌帝梵冬日仙境全景，赢礼惠！"),
        desc   = htmlDecode("我为您定制了圣诞贺卡，点击体验360°歌帝梵冬日仙境全景！"),
        fakeid = "";
        desc   = desc || link;   
		
    if( "1" == "0" ){
        WeixinJSBridge.call("hideOptionMenu");  
    }
	//console.log(WeixinJSBridge)
    // 发送给好友; 
    setTimeout(function(){
    	 WeixinJSBridge.on('menu:share:appmessage', function(argv){
    
                WeixinJSBridge.invoke('sendAppMessage',{
                                      "appid"      : appId,
                                      "img_url"    : imgUrl,
                                      "img_width"  : "640",
                                      "img_height" : "640",
                                      "link"       : link,
                                      "desc"       : desc,
                                      "title"      : title
                }, function(res) {});
    });

            // 分享到朋友圈;
    WeixinJSBridge.on('menu:share:timeline', function(argv){
               // report(link, fakeid, 2);
                
                WeixinJSBridge.invoke('shareTimeline',{
                                      "img_url"    : imgUrl,
                                      "img_width"  : "640",
                                      "img_height" : "640",
                                      "link"       : link,
                                      "desc"       : desc,
                                      "title"      : title
                }, function(res) {});
    
    });


            // 新的接口
    WeixinJSBridge.on('menu:general:share', function(argv){
        var scene = 0;
        switch(argv.shareTo){
        	
            case 'friend'  : scene = 1; break;
            case 'timeline': scene = 2; break;
            case 'weibo'   : scene = 3; break;
        }
            argv.generalShare({
                                "appid"      : appId,
                                "img_url"    : imgUrl,
                                "img_width"  : "640",
                                "img_height" : "640",
                                "link"       : link,
                                "desc"       : desc,
                                "title"      : title
            }, function(res){});
    });
    },500)
   
	
    // get network type
	var nettype_map = {
		"network_type:fail" : "fail",
		"network_type:edge": "2g",
		"network_type:wwan": "3g",
		"network_type:wifi": "wifi"
	};
	if (typeof WeixinJSBridge != "undefined" && WeixinJSBridge.invoke){
		WeixinJSBridge.invoke('getNetworkType',{}, function(res) {
			networkType = nettype_map[res.err_msg];
			initpicReport();
		});
	}        
}
	
	weichat=onBridgeReady;

if (typeof WeixinJSBridge == "undefined"){
    document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
}else{
    onBridgeReady();
}

})();
