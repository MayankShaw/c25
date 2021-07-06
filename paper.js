class Paper{
    constructor(x,y,width,height){
        var paper_options ={
            restitution: 0.3,
            friction:5,
            density:1
        }
		this.image=loadImage("paper.png")
        this.paper=Bodies.rectangle(x,y,width,height,paper_options);
        World.add(world,this.box);
this.width=width
this.height=height
    }
    display () {
        fill("black");
        rectMode(CENTER);
        rect(this.paper.position.x,this.paper.position.y,this.width,this.height);
    }
}
