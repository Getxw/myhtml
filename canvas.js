var d=document.getElementById("Mycanvas");
var ctx=d.getContext("2d");
window.onload=function(){
    // draw();
    ctx.beginPath();
	ctx.moveTo(300,150);
    ctx.strokeStyle="#f00";
	ctx.quadraticCurveTo(150,50,120,200);
	ctx.quadraticCurveTo(100,350,300,500);
	ctx.quadraticCurveTo(500,350,480,200);
	ctx.quadraticCurveTo(450,50,300,150);
    ctx.stroke();
	ctx.fillStyle="#f00";
	// ctx.fill();
	ctx.shadowColor = "gray"; 
    ctx.shadowOffsetX = 10; 
    ctx.shadowOffsetY = 5; 
    ctx.shadowBlur = 10; 
    ctx.fill();
    ctx.font="24px 宋体";
    ctx.fillText("Thanks for your accompany all of my days.",50,540);
    ctx.fillText("---他是个宝宝",400,590);

}
// 绘制坐标参考线
// function draw(){
//     ctx.strokeStyle="gray";
//     for(var i=0;i<=600;i+=50){
//     ctx.beginPath();
//     ctx.moveTo(i,0);
//     ctx.lineTo(i,600);
//     ctx.moveTo(0,i);
//     ctx.lineTo(600,i);
//     ctx.stroke();
// }
// }
