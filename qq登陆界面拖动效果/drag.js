//封装获取函数   class
function getclass(elsclass,parent){
	var oparent=parent?document.getElementById(parent):document,
	    els=[],
	    elements=oparent.getElementsByTagName('*');//遍历

	for (var i = 0; i < elements.length; i++) {
		if(elements[i].className==elsclass){
           els.push(elements[i]);
		}
	}
    return els;
}
window.onload=drag;
function drag(){
    var otitle=getclass('login_logo_webqq','loginPanel')[0];
    otitle.onmousedown=down;
    // 关闭
   var oClose=document.getElementById('ui_boxyClose');
   oClose.onclick=function(){
   	  document.getElementById('loginPanel').style.display='none';
   }
}
function down(event){
	event=event||window.event;
	var odag=document.getElementById('loginPanel');
	//光标按下处与坐标点的距离
	var clix=event.clientX-odag.offsetLeft;
	var cliy=event.clientY-odag.offsetTop;
	//移动鼠标
	document.onmousemove=function(event){
      event=event||window.event;
      fnmove(event,clix,cliy);
      console.log('clix');
	}
	//释放鼠标
	document.onmouseup=function() {
      document.onmouseup=null;
      document.onmousemove=null;
	}
}
function fnmove(e,pox,poy){
    var odag=document.getElementById('loginPanel');
	     i=e.clientX-pox,
	     l=e.clientY-poy,
	     winW=document.documentElement.clientWidth||document.body.clientWidth,
	     winH=document.documentElement.clientHeight||document.body.clientHeight,
	     maxW=winW-odag.offsetWidth-10,
	     maxH=winH-odag.offsetHeight;
	     if(i<0){
	     	i=0;
	     }else if(i>maxW){
            i=maxW;
	     }
	     if(l<10){
	     	l=10;
	     }else if(l>maxH){
	     	l=maxH;
	     }
    odag.style.left=i+"px";
    odag.style.top=l+"px";
}