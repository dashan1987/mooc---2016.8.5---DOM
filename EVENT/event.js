//将几个简单的函数封装到对象里
var elmentPack={
   //添加句柄
    addhandler:function(even,type,handler){
       if(even.addEventListener){
          even.addEventListener(type,handler,false);
       }else if (even.attachEvent) {
       	  even.attachEvent('on'+type,handler);
       }
       else{
       	  even['on'+type]=handler;
       }
   },
   //删除句柄
    delehandler:function(even,type,handler){
   	if(even.removeEventListener){
   		even.removeEventListener(type,handler,false);
   	}
   	else if(even.detachEvent){
   		even.detachEvent('on'+type,handler);
   	}
   	else{
        even['on'+type]=null;
   	}
   },
   //事件对象获取
    getevent:function(event){
   	return event=event||window.event;
   },
   //事件类型获取
   gettype:function (event){
    return event.type;
   },
   //事件目标获取
   gettarget:function (event){
   	return event.target || event.srcElement; 
   },
   //阻止事件冒泡方法
   precentevent: function (event){
     if(event.preventDefault){
      event.preventDefault();//Dom
    }else{
      event.returnValue=false;//IE
    }
   },
   //阻止事件的默认行为
   stopevent:function (event){
   	if(event.stopPropagation){
     event.stopPropagation();//DOM
   }else{
     event.cancelBubble=true;//IE
   }
   }
}