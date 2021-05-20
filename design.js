
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//sorted
// console.log(canvas.height,canvas.width);

const maxlevel = 5;
const branches = 2;

ctx.translate(canvas.width/2 , canvas.height/2);

const angle = Math.PI*2*0.85;

function drawline(level){
    if(level > maxlevel) return;
    // let colorf = 'green';
    ctx.strokeStyle = 'black';  //color = white
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(200,0);
    ctx.stroke();
    //draw a line with 200px long

    for(let i=1;i<branches+1;i++)
    {
        
        ctx.save(); //save the work into stack
        ctx.translate(200*i/(branches+1),0);
        ctx.scale(0.5,0.5);
        ctx.save();

        ctx.rotate(angle);
        drawline(level+1);
        ctx.restore();
        ctx.save();

        ctx.rotate(-angle);
        drawline(level+1);
        ctx.restore();

        ctx.restore();
    }
}
    
for (let i = 0; i < 24; i++) {
   
    drawline(0);
        ctx.rotate(Math.PI*2/24);
  
    
}
ctx.resetTransform();
ctx.translate(canvas.width/2 , canvas.height/2);





// function animate()
// {
//     ctx.rotate(degree);
// degree++;


//     requestAnimationFrame(animate);
// }


// let deg = Math.PI/180;

// setInterval(()=>{
//     ctx.rotate(deg)
// },100);



// let anglef = 1;
// while(1)
// {
//     anglef = 1;
//     ctx.rotate(anglef);
//     anglef++;
//     if(anglef == 52)
//     {
//         anglef = 1;
//     }
// }
