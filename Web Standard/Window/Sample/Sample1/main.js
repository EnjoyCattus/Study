console.log('Create Sample1');

let canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

let context = canvas.getContext('2d');
context.fillStyle = 'green';
context.fillRect(10, 10, 400, 400);

let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
console.log('Canvas Width : ' + canvasWidth);
console.log('Canvas Height : ' + canvasHeight);

let windowOuterWidth = window.outerWidth;
let windowOuterHeight = window.outerHeight;
console.log('Window Outer Width : ' + windowOuterWidth);
console.log('Window Outer Height : ' + windowOuterHeight);

let windowInnerWidth = window.innerWidth;
let windowInnerHeight = window.innerHeight;
console.log('Window Inner Width : ' + windowInnerWidth);
console.log('Window Inner Height : ' + windowInnerHeight);





