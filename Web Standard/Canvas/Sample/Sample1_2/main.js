console.log('Create Sample1_2');
////////////////////////////////////////////////////// Create Canvas
let canvas = document.createElement('canvas');
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;
document.body.appendChild(canvas);
////////////////////////////////////////////////////// Log Canvas Width && Height
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
console.log('Canvas Width : ' + canvasWidth);
console.log('Canvas Height : ' + canvasHeight);
////////////////////////////////////////////////////// Get 2D Context
let context = canvas.getContext('2d');
//////////////////////////////////////////////////////










