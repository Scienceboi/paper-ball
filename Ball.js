class Ball{
    constructor(x,y,r){
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2
    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(x,y,r,options)
    this.image=loadImage("paper ball.png")
    World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        fill (255)
    image(this.image,pos.x,pos.y,this.r,this.r)
    }
    }