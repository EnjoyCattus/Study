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


let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
console.log('Canvas Width : ' + canvasWidth);
console.log('Canvas Height : ' + canvasHeight);





