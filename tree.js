var canvas = document.querySelector('canvas');
var btnf = document.querySelector('.btnf');
var curve;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

function drawTree(startx,starty,len,angle,branchwidth,color1,color2){
    ctx.beginPath();
    ctx.save();
    ctx.strokeStyle=color1;
    ctx.lineWidth = branchwidth;
    ctx.fillStyle=color2;
    // ctx.shadowBlur = 15;
    // ctx.shadowColor = 'rgba(150,150,150,0.5)';
    ctx.translate(startx, starty);
    
    ctx.rotate(Math.PI / 180 *angle);
    ctx.moveTo(0,0);
    ctx.lineTo(0, -len);
    ctx.stroke();
    
    if(len < 1)
    {
        ctx.beginPath();
        ctx.arc(0,-len,10,0,Math.PI/2);
        ctx.fill();
        ctx.restore();
        return;
    }
    curve = (Math.random()*7 + 7);
    drawTree(0,-len,len*0.75,angle+curve,branchwidth*0.5);
    // drawTree(0,-len,len*0.75,angle,branchwidth*0.5);
    drawTree(0,-len,len*0.75,angle-curve,branchwidth*0.5);
    ctx.restore();
}
drawTree(canvas.width/2,canvas.height - 80 , 500,0,20,'brown','green');

function getrandomtree()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    var lengthx = canvas.width/2;
    let len = Math.floor(Math.random()*20 + 100);
    let angle = 0;
    let branchwidth = (Math.random()*10)+30;
    let color1 = 'rgb('+Math.random()*255+','+Math.random()*255+','+Math.random()*255+ ')';
    let color2 = 'rgb('+Math.random()*255+','+Math.random()*255+','+Math.random()*255+ ')';
    btnf.style.background = color1;
    drawTree(lengthx,canvas.height-80,len,angle,branchwidth,color1,color2);
    
    
    
}

setInterval(() => {
    getrandomtree();
//     // getrandomtree(canvas.width-50,canvas.height);
}, 2000);


// setInterval(() => {
    
// }, 2000);

// btnf.addEventListener('click',getrandomtree);

