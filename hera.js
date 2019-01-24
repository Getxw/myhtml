
var i=0;
var arr=new Array();
arr[0]="images/0.jpg";
arr[1]="images/1.jpg";
arr[2]="images/2.jpg";
arr[3]="images/3.jpg";
arr[4]="images/4.jpg";
arr[5]="images/5.jpg";
function start(){
	var img=document.getElementById('img');
	var prev=document.getElementById('img_last');
	var next=document.getElementById('img_next');
	if(i==arr.length-1){
		i=0;
	}else{
		i++;
	}
	function change(){
	    var num=document.getElementById('num_'+i);
	    for(var k=0;k<=5;k++){
		var obj=document.getElementById('num_'+k);
		obj.style.backgroundColor="gray";
		num.style.backgroundColor="red";
	    }
	}
	change();
    prev.onclick=function(){

	    window.clearInterval(timer);
	    i--;
	    if(i<0){
	    	i=5;
	    }
	    change();
	    img.src=arr[i];
    }
    next.onclick=function(){
	    window.clearInterval(timer);
	    i++;
	    if(i>5){
	    	i=0;
	    }
	    change();
	    img.src=arr[i];
    }
	img.src=arr[i];
}
var timer=window.onload=setInterval(start,2000);
function study(){
	window.open("study.html");
}
