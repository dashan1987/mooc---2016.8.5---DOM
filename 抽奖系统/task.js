//定义抽奖内容数组
var ele=["惠普电脑","华硕笔记本","gtx970","iphone","ipad3","mac台式机","谢谢惠顾"];
var flag=0;
//
window.onload=function (){
	var begin=document.getElementById('begin'),
	    stop=document.getElementById('stop');
    //开始
	    begin.onclick=function(){
	    	fnbegin();
	    }
	//停止 
        stop.onclick=function (){
            fnstop();
        }
    //enter键控制开关
    document.onkeyup=function(event){
        event=event||window.event;
        if(event.keyCode==13){
        	if(flag == 0){
        		fnbegin();
        		flag=1;
        	}
        	else{
        		fnstop();
        		flag=0;
        	}
        }
    }
    

}
//定时器定义
var timer=null;

function fnbegin(){
    var title=document.getElementById('title'),
        begin=document.getElementById('begin');
    clearInterval(timer);
    timer=setInterval(function(){
    	var numb=Math.floor((Math.random())*(ele.length));
    	title.innerHTML=ele[numb];
    }, 50)
    begin.style.background='#999';
}

function fnstop(){
	var begin=document.getElementById('begin');
	clearInterval(timer);
	begin.style.background='#036';
}
