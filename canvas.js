var d=document.getElementById("Mycanvas");
var ctx=d.getContext("2d");
function draw(){
    // draw();
    ctx.font="24px 宋体";
    ctx.fillText("Thanks for your accompany all of my days.",50,540);
    ctx.fillText("--爱吃小馒头",400,590);
	ctx.moveTo(300,150);
	ctx.quadraticCurveTo(150,50,120,200);
	ctx.quadraticCurveTo(100,350,300,500);
	ctx.quadraticCurveTo(500,350,480,200);
	ctx.quadraticCurveTo(450,50,300,150);
    // ctx.stroke();
	ctx.fillStyle="black";
	ctx.shadowColor = "#232020"; 
    ctx.shadowOffsetX = 20; 
    ctx.shadowOffsetY = -10; 
    ctx.shadowBlur = 5; 
    ctx.fill();

}
draw();
console.log("Fuck you");
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
