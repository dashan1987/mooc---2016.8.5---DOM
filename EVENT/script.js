window.onload=function(){
  var go=document.getElementById('go'),
      box=document.getElementById('box');

  elmentPack.addhandler(box,'click',function(){
  	alert('我是整个父盒子');
  });

  elmentPack.addhandler(go,'click',function(e){
  	//e=elmentPack.getevent(e);
  	e=e || window.event;
  	alert(elmentPack.getElement(e).nodeName);
  	elmentPack.preventDefault(e);
  	elmentPack.stopPropagation(e);
  });

}