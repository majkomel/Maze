const canvas = document.getElementById("mazeCanvas")
const ctx = canvas.getContext("2d")

let walls=[]
let carImg = new Image();
carImg.src = "img/car.png";

// zdaj player objekt ostane, brez spremembe x, y, r
// r še vedno uporabimo za detekcijo trkov
let player={x:234,y:10,r:6}

let goal={x:251,y:475,r:5}

let playing=false

// =====================
// PREBERI SVG
// =====================

const svgContainer=document.getElementById("mazeSVG")
const lines=svgContainer.querySelectorAll("line")
// naložimo sliko avta

lines.forEach(l=>{

walls.push({
x1:parseFloat(l.getAttribute("x1")),
y1:parseFloat(l.getAttribute("y1")),
x2:parseFloat(l.getAttribute("x2")),
y2:parseFloat(l.getAttribute("y2"))
})

})

// =====================
// RISANJE
// =====================

function drawMaze(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.strokeStyle="#111"
ctx.lineWidth=2

ctx.beginPath()

walls.forEach(w=>{
ctx.moveTo(w.x1,w.y1)
ctx.lineTo(w.x2,w.y2)
})

ctx.stroke()

// cilj (lepši)
ctx.fillStyle="#2ecc71"

ctx.beginPath()
ctx.arc(goal.x,goal.y,goal.r,0,Math.PI*2)
ctx.fill()

}

// =====================

function drawPlayer(){

ctx.drawImage(carImg, player.x - player.r, player.y - player.r, player.r*2, player.r*2);



}

// =====================

function update(){

drawMaze()
drawPlayer()

}

// =====================
// GEOMETRIJA ZA STENE
// =====================

function distToSegment(px,py,x1,y1,x2,y2){

let A=px-x1
let B=py-y1
let C=x2-x1
let D=y2-y1

let dot=A*C+B*D
let len=C*C+D*D

let param=-1

if(len!==0) param=dot/len

let xx,yy

if(param<0){
xx=x1
yy=y1
}
else if(param>1){
xx=x2
yy=y2
}
else{
xx=x1+param*C
yy=y1+param*D
}

let dx=px-xx
let dy=py-yy

return Math.sqrt(dx*dx+dy*dy)

}

// =====================
// COLLISION
// =====================

function canMove(x,y){

if(x<0||x>canvas.width||y<0||y>canvas.height) return false

for(let w of walls){

let d=distToSegment(x,y,w.x1,w.y1,w.x2,w.y2)

if(d<player.r+1) return false

}

return true

}

// =====================
// PLAYER CONTROL
// =====================

document.addEventListener("keydown",e=>{

if(!playing) return

let step=3

let nx=player.x
let ny=player.y

if(e.key==="ArrowUp") ny-=step
if(e.key==="ArrowDown") ny+=step
if(e.key==="ArrowLeft") nx-=step
if(e.key==="ArrowRight") nx+=step

if(canMove(nx,ny)){

player.x=nx
player.y=ny

update()

checkWin()

}

})

// =====================
// CHECK WIN
// =====================

function checkWin(){

let dx=player.x-goal.x
let dy=player.y-goal.y

let d=Math.sqrt(dx*dx+dy*dy)

if(d<goal.r+player.r){

alert("🎉 Labirint rešen!")

playing=false

}

}

// =====================
// A* SOLVER
// =====================

function heuristic(a,b){
return Math.abs(a.x-b.x)+Math.abs(a.y-b.y)
}

function solveMaze(){

let start={x:234,y:10}
let end={x:goal.x,y:goal.y}

let open=[{...start,g:0,f:0,path:[start]}]

let visited=new Set()

let step=4

while(open.length){

open.sort((a,b)=>a.f-b.f)

let current=open.shift()

let key=current.x+","+current.y

if(visited.has(key)) continue
visited.add(key)

let dx=current.x-end.x
let dy=current.y-end.y

if(Math.sqrt(dx*dx+dy*dy)<goal.r+3){

drawSolution(current.path)
return

}

let dirs=[
{dx:step,dy:0},
{dx:-step,dy:0},
{dx:0,dy:step},
{dx:0,dy:-step}
]

for(let d of dirs){

let nx=current.x+d.dx
let ny=current.y+d.dy

if(!canMove(nx,ny)) continue

let g=current.g+1
let h=heuristic({x:nx,y:ny},end)

open.push({
x:nx,
y:ny,
g,
f:g+h,
path:[...current.path,{x:nx,y:ny}]
})

}

}

alert("Rešitve ni bilo mogoče najti")

}

// =====================
// RISANJE REŠITVE
// =====================

function drawSolution(path){

update()

ctx.strokeStyle="#2ecc71"
ctx.lineWidth=5
ctx.lineCap="round"

ctx.beginPath()
ctx.moveTo(path[0].x,path[0].y)

let i=1

function animate(){

if(i>=path.length){

ctx.stroke()
return

}

ctx.lineTo(path[i].x,path[i].y)
ctx.stroke()

i++

requestAnimationFrame(animate)

}

animate()

}

// =====================
// BUTTONS
// =====================

document.getElementById("playBtn").onclick=()=>{
playing=true
}

document.getElementById("solveBtn").onclick=()=>{
solveMaze()
}

document.getElementById("resetBtn").onclick=()=>{

player.x=234
player.y=10
playing=false

update()

}

// =====================

update()