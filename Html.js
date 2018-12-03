function li(n,m){
for(var i=1;i<=4;){
	var obj=document.getElementById("li"+i);
	obj.style.border="1px solid red";
	obj.style.color="gray";
	i++
}
var Obj=document.getElementById('li'+n);
var objp=document.getElementById('p1');
Obj.style.color="red";
Obj.style.borderBottom="1px solid white";
switch(n){
	case 1:
	objp.innerHTML="《易经》上说：“形而上者谓之道，形而下者谓之器”。天地宇宙未生之前，是混沌状态的。";
	break;
	case 2:
	objp.innerHTML="在颜色上指的是深蓝近于黑的颜色，叫玄。在意义上来说，指的是高远、高深莫测，叫玄。";
	break;
	case 3:
	objp.innerHTML="也有两重意思。我们中国的文化特别是传统文化，炎黄文化中，土的颜色，人的肤色，农作物黍、稷都是黄的，所以说地黄。";
	break;
	case 4:
	objp.innerHTML="呵呵！";
	break;

}
}
window.onload=init;
var dingshiqi;
var k=10;
function init(){
	// document.getElementById('li').firstChild.style.color="red";
	dingshiqi = window.setInterval("tuPian()",2000);	
}
function tuPian(){
	var tp = document.getElementById('tp');
	tp.src="images/"+k+".jpg";
	//
	tp.style.color="red"; 
	k++;
	if(k>=15){
		k=10;
	};
}
function stopTp(){
	window.clearInterval(dingshiqi);
}
function startTp(){
	init();
}
function tingtu(m,j){
	var obj = document.getElementById('tp');
	obj.src="images/"+m+".jpg"
	// for(var k=10;k<=15;k++){
	// 	var obj=document.getElementById("li"+k);
	// 	obj.style.color="black";
	// }
	window.clearInterval(dingshiqi);
	j.style.color="red";
}
function dongtu(p){
	dingshiqi = window.setInterval(tuPian,2000);
	p.style.color="black";
}

