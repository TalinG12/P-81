canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color="grey";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(350, 200, 40, 0, 2*Math.PI);
ctx.stroke();

color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(400, 200, 40, 0, 2*Math.PI);
ctx.stroke();

color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(450, 200, 40, 0, 2*Math.PI);
ctx.stroke();

color="yellow";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(375, 240, 40, 0, 2*Math.PI);
ctx.stroke();

color="orange";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(425, 240, 40, 0, 2*Math.PI);
ctx.stroke();