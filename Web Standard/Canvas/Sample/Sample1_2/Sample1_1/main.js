console.log('Create Sample1');

let canvas = document.createElement('canvas');
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;
document.body.appendChild(canvas);

let context = canvas.getContext('2d');

let xStartPos = canvas.width / 2;
let yStartPos = 50;
let xMovePos = 0;
let yMovePos = 0;

context.lineTo(xStartPos + xMovePos, yStartPos + yMovePos);


let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
console.log('Canvas Width : ' + canvasWidth);
console.log('Canvas Height : ' + canvasHeight);





