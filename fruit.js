class Fruit{
    constructor(x,y,r ){
      var options={ restitution:0.2,density:0.01
    }
    this.body=Bodies.circle(x,y,r,options)
    this.r= r
    World.add(world,this.body)
    }
 display(){
     ellipse(this.body.position.x,this.body.position.y,this.r)

 }
}