var index = 0;
var prev=document.getElementById('img_last');
var next=document.getElementById('img_next');
function change(){
	var num=document.getElementById('num_'+index);
	for(var k=0;k<=5;k++){
	var obj=document.getElementById('num_'+k);
    obj.style.backgroundColor="gray";
    }
	num.style.backgroundColor="red";
}
window.onload=function load()
	{
	var divs = document.getElementsByTagName("div");
	for (var i = 0; i < divs.length; i++){
		if (divs[i].className == "div"){
			divs[i].style.width = document.body.clientWidth / 2 - 2 + "px";
			divs[i].style.height = document.body.clientHeight / 2 - 2 + "px";
		}
	}
	var timer=setInterval(makePic,3000);
	prev.onclick=function(){
    window.clearInterval(timer);
    makeImg();
	if(index==0){
	    	index=6;
	    }
    }
    next.onclick=function(){
	window.clearInterval(timer);
	makePic();
	if(index>5){
	    index=0;
	}
    }

}
window.onresize = function(){
	window.resizeTo(1920, 1080);
}
function makePic(){
	var pDiv = document.getElementById("parent");
	pDiv.innerHTML = "";
	for (var i = 0; i < 6; i++){
		for (var j = 0; j < 10; j++){
			var cDiv = document.createElement("div");
			cDiv.style.left = pDiv.clientWidth / 10* j + "px";
			cDiv.style.top = pDiv.clientHeight / 6 * i + "px";
			cDiv.setAttribute("class", "inner");
			cDiv.style.background = "url(images/" + index + ".jpg) no-repeat " + pDiv.clientWidth / 10 * (-j) + "px " + pDiv.clientHeight / 6 * (-i) + "px";
			pDiv.appendChild(cDiv);
		}
	}
	index == 5 && (index = -1);
	pDiv.style.background = "url(images/" + (++index) + ".jpg)";
	smash();
}
function smash(){
	change();
	var pDiv = document.getElementById("parent");
	var nodes = pDiv.childNodes;
	for (var i = 0; i < nodes.length; i++){
		nodes[i].style.transform = "rotateX(" + Math.ceil(Math.random() * 360 - 180) + "deg) rotateY(" + Math.ceil(Math.random() * 360 - 180) + "deg) " + 
		"translate3d(" + Math.ceil(Math.random() * 800 - 400) + "px," + Math.ceil(Math.random() * 800 - 400)  + "px," + Math.ceil(Math.random() * 800 - 400) + "px)";
		//nodes[i].style.left = (512 - 64) + 'px';
		nodes[i].style.opacity = "0";
	}
}
function makeImg(){
	var pDiv = document.getElementById("parent");
	pDiv.innerHTML = "";
	for (var i = 0; i < 6; i++){
		for (var j = 0; j < 10; j++){
			var cDiv = document.createElement("div");
			cDiv.style.left = pDiv.clientWidth / 10* j + "px";
			cDiv.style.top = pDiv.clientHeight / 6 * i + "px";
			cDiv.setAttribute("class", "inner");
			cDiv.style.background = "url(images/" + index + ".jpg) no-repeat " + pDiv.clientWidth / 10 * (-j) + "px " + pDiv.clientHeight / 6 * (-i) + "px";
			pDiv.appendChild(cDiv);
		}
	}
	index == -1 && (index = 5);
	pDiv.style.background = "url(images/" + (--index) + ".jpg)";
	smash();
}
function study(){
	window.open("https://github.com/Getxw/myhtml/study.html");
}
