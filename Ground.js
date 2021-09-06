class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        //this.image=loadImage("assets/tower.png")
        this.body=Bodies.rectangle(x,y,this.width,this.height,options)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        //rotate(angle)
        fill("brown")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
        pop()
    }
}