console.log('Create Sample1');

let canvas = document.createElement('canvas');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

document.body.appendChild(canvas);

console.log('Canvas Width : ' + canvasWidth);
console.log('Canvas Height : ' + canvasHeight);

let context = canvas.getContext('2d');
context.fillStyle = 'blue';
context.fillRect(10, 10, 150, 150);
