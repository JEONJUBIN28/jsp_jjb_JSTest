var canvas;
var ctx;

function pDraw(){
	canvas = document.getElementById("myCanvas");
	
	ctx = canvas.getContext("2d");
	
	ctx.fillStyle = "green";
	
	ctx.fillRect(10, 25, 100, 100);
	
	ctx.lineWidth = 5;
	
	ctx.strokeStyle = "rgba(0,0,0,0.4)";
	
	ctx.strokeRect(10, 25, 100, 100);
		
}

function pClear(){
	ctx.clearRect(10, 25, 100, 100);	
}

function pFont(){
	ctx.fillText("Hello Canvas", 10, 150);
	
	ctx.font = "15pt Arial";
	ctx.fillStyle = "blue";
	ctx.fillText("Hello Font", 10, 180);
}

function pImage(){
	var newImage = new Image();
	newImage.src = "images/fier.png";
	
	newImage.onload = function(){
		ctx.drawImage(newImage, 0,0,newImage.width, newImage.height, 10,300,newImage.width, newImage.height );
	}
}














