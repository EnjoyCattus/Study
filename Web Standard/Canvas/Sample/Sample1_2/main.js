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
////////////////////////////////////////////////////// Set L System
let axiom = 'F';

let rules = [];
rules[0] = {
    a: 'F',
    b: 'FF+[+F-F-F]-[-F+F+F]'
};

let drawKey = '';

let xStartPos = 0;
let yStartPos = 0;
let xMovePos = 0;
let yMovePos = 0;
//////////////////////////////////////////////////////
xStartPos = 10;
yStartPos = 0;
xMovePos = 0;
yMovePos = 30;

drawKey = axiom;

context.fillStyle = 'rgba(255, 255, 255, 0.2)';
context.font = '12px serif';

let next = '';
const CYCLE_COUNT = 1;

context.fillText(drawKey, xStartPos + xMovePos, yStartPos + yMovePos);
yMovePos += 30;

for(let j = 0; j < CYCLE_COUNT; j++)
{
    for(let i = 0; i < drawKey.length; i++)
    {
        let current = drawKey.charAt(i);
        let found = false;
        
        for(let k = 0; k < rules.length; k++)
        {
            if(current == rules[k].a)
            {
                found = true;
                next += rules[k].b;
                break;
            }
        }

        if(!found)
        {
            next += current;
        }
    }

    drawKey = next;

    context.fillText(drawKey, xStartPos + xMovePos, yStartPos + yMovePos);
    yMovePos += 30;
}
//////////////////////////////////////////////////////
xStartPos = canvas.width / 2;
yStartPos = canvas.height - canvas.height / 5;
xMovePos = 0;
yMovePos = 0;

context.strokeStyle = 'rgba(255, 255, 255, 0.8)';

let len = 100;
const MAX_ANGLE = 360;

context.beginPath();
context.moveTo(xStartPos, yStartPos);

// yMovePos -= len;
// context.lineTo(xStartPos, yStartPos + yMovePos);

// yMovePos -= len;
// context.lineTo(xStartPos, yStartPos + yMovePos);
// console.log(context);
// context.rotate(Math.PI / 180 * 60);
// context.rotate(Math.PI / 180 * 60);
// console.log(context);
// context.rotate(MAX_ANGLE / 6);

// yMovePos -= len;
// context.lineTo(xStartPos, yStartPos + yMovePos);

// context.stroke();

// let points = [];

for(let i = 0; i < drawKey.length; i++)
{
    let current = drawKey.charAt(i);

    if(current == 'F')
    {
        yMovePos -= len;
        context.lineTo(xStartPos + xMovePos, yStartPos + yMovePos);
        // context.translate(xStartPos + xMovePos, yStartPos + yMovePos);
    }
    else if(current == '+')
    {
        context.rotate(Math.PI / 6);
    }
    else if(current == '-')
    {
        context.rotate(-Math.PI / 6);
    }
    else if(current == '[')
    {
        // let temp = {
        //     x : xMovePos,
        //     y : yMovePos
        // };
        // points.push(temp);
        context.save();
    }
    else if(current == ']')
    {
        // let point = points.pop();
        // xMovePos = point.x;
        // yMovePos = point.y;

        context.restore();
    }
}

context.stroke();


//////////////////////////////////////////////////////








