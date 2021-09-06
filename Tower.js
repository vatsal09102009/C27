class Tower{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.image=loadImage("assets/tower.png")
        this.body=Bodies.rectangle(x,y,this.width,this.height,options)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
translate(pos.x,pos.y)
rotate(angle)

        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}