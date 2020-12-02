console.log('Create Sample1');

let canvas = document.createElement('canvas');
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;
document.body.appendChild(canvas);

let context = canvas.getContext('2d');

let xStartPos = 10;
let yStartPos = 10;
let xMovePos = 0;
let yMovePos = 0;

let colors = [
    'rgb(200 ,0 ,0, 0.5)',
    'rgb(0 ,200 ,0, 0.5)',
    'rgb(0 ,0 ,200, 0.5)'
];

const cycleCount = 3;

for(let i = 0; i < cycleCount; i++)
{
    colors.forEach(function(item, index, array){
        
        context.fillStyle = item;
        context.fillRect(xStartPos + xMovePos, yStartPos + yMovePos, 150, 150);
        // context.strokeRect(xStartPos + xMovePos, yStartPos + yMovePos, 150, 150);
        // context.clearRect(xStartPos + xMovePos, yStartPos + yMovePos, 150, 150);        
        yMovePos += 200;
    });

    xMovePos += 200;
    yMovePos = 0;
}

// Set line width
context.lineWidth = 10;
context.fillStyle = 'black';

// Wall
xMovePos += 10;
yMovePos = 200;
context.strokeRect(xStartPos + xMovePos, yStartPos + yMovePos, 150, 110);

// Door
xMovePos += 55;
yMovePos += 50;
context.fillRect(xStartPos + xMovePos, yStartPos + yMovePos, 40, 60);

// Roof
context.beginPath();

xMovePos -= 80;
yMovePos -= 50;

context.moveTo(xStartPos + xMovePos, yStartPos + yMovePos);

xMovePos += 200;
yMovePos += 0;

context.lineTo(xStartPos + xMovePos, yStartPos + yMovePos);

xMovePos -= 100;
yMovePos -= 70;

context.lineTo(xStartPos + xMovePos, yStartPos + yMovePos);
context.closePath();
context.stroke();

let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
console.log('Canvas Width : ' + canvasWidth);
console.log('Canvas Height : ' + canvasHeight);





