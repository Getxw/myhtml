function Father(){
		startTime();
	}
	function startTime(){
	var x = new Date();
	var a = x.getHours(); 
	var b = x.getMinutes();
	var c = x.getSeconds();
	b = checkTime(b);
	c = checkTime(c);
    y = document.getElementById("time");
	y.innerHTML=a+":"+b+":"+c;
	y.innerText.color="red";
	t = setTimeout(function(){
		startTime();
	},1000);
}
function checkTime(i){
	if(i<10){
		i = "0"+i;
	}
	return i;
}
var ps=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
var curIndex=0;
function Img(){
	var B=document.getElementById("img");
	if(curIndex==ps.length-1)
	{
		curIndex=0;
	}else
	{
		curIndex+=1;
	}
	B.src=ps[curIndex];
}
setInterval(Img,4000);
