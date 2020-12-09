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

const CYCLE_COUNT = 3;

context.fillText(drawKey, xStartPos + xMovePos, yStartPos + yMovePos);
yMovePos += 30;

for(let j = 0; j < CYCLE_COUNT; j++)
{
    let next = '';
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
let angle = 25;

context.beginPath();

context.moveTo(xStartPos, yStartPos);
context.translate(xStartPos, yStartPos);

let points = [];
let angle_move = 0;

for(let i = 0; i < drawKey.length; i++)
{
    let current = drawKey.charAt(i);

    if(current == 'F')
    {
        yMovePos -= len;
        context.lineTo(xMovePos, -len);
        context.translate(xMovePos, -len);
        context.stroke();
    }
    else if(current == '+')
    {
        angle_move += angle;
        context.rotate(Math.PI / 180 * angle);
    }
    else if(current == '-')
    {
        angle_move -= angle;
        context.rotate(Math.PI / 180 * -angle);
    }
    else if(current == '[')
    {
        let temp = {
            x : xMovePos,
            y : yMovePos,
            degree : angle_move
        };
        points.push(temp);
        
        context.save();
    }
    else if(current == ']')
    {
        let point = points.pop();
        
        xMovePos = point.x;
        yMovePos = point.y;
        angle_move = point.degree;

        context.setTransform(1, 0, 0, 1, 0, 0);
        context.moveTo(xStartPos + xMovePos, yStartPos + yMovePos);
        context.translate(xStartPos, yStartPos + yMovePos);
        context.rotate(Math.PI / 180 * angle_move);
        context.restore();
    }
}

context.stroke();