const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var tower
var balls=[]
var boats=[]
function preload(){

backgroundIng=loadImage("./assets/background.gif")
towerImage=loadImage("./assets/tower.png")    
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    angle=-PI/4
ground=new Ground(0,height-1,width*2,1)
tower=new Tower(150,350,160,310);
cannon=new Cannon(180,110,100,50,angle) 
boat=new Boat(width-79,height-60,170,170,-80)
//cannonBall=new CannonBall(cannon.x,cannon.y)
}

function draw(){
    background(189);
    image(backgroundIng,0,0,width,height)
    Engine.update(engine);
 
   ground.display()
  // cannon.display()
   tower.display()
   for(var i=0;i<balls.length;i++){
       showCannonBalls(balls[i],i)
       collisionWithBoat(i)
   }
   cannon.display()
   Matter.Body.setVelocity(boat.body,{x:-0.9,y:0})
   boat.display()
   showBoats();
  // image(backgroundIng,0,0,width,height)
}
function keyPressed() {
    if(keyCode===DOWN_ARROW){
        var cannonBall=new CannonBall(cannon.x,cannon.y)
        balls.push(cannonBall)
    }
}
function showCannonBalls(ball,index){
   if(ball){
    ball.display()
    if(ball.body.position.x>=width || ball.body.position.y>=height-50){
       // Matter.World.remove(world,ball.body)
       // balls.splice(index,1)
       ball.remove(index)
    }
   }
}
function keyReleased(){
    if(keyCode===DOWN_ARROW){
        balls[balls.length-1].shoot()
    }

}
function showBoats(){
    if(boats.length>0){
if(boats[boats.length-1]===undefined||
    boats[boats.length-1].body.position.x<width-300){
    var positions=[-40,-60,-70,-20]
    var position=random(positions)
     var boat=new Boat(width,height-60,170,170,-60)
    boats.push(boat)
}
        for(var i=0;i<boats.length;i++){
            if(boats[i]){
                Matter.Body.setVelocity(boats[i].body,{
                  x  :-0.9,
                  y:0
                })
                boats[i].display()
            }
    }
}
    else{
        var boat=new Boat(width,height-60,170,170,-60)
        boats.push(boat)

    }
    

}
function collisionWithBoat(index){
    for(var i=0;i<boats.length;i++){
        if(balls[index]!==undefined&&boats[i]!==undefined){
            var collision=Matter.SAT.collides(balls[index].body,boats[i].body)
            if(collision.collided){
                boats[i].remove(i)
                Matter.World.remove(world,balls[index].body)
                delete balls[index]

            }
        }
    }
}
