class Paper{
	constructor(x,y){
		var options={
			isStatic:false,
			restitution:0.5,
			friction:1.0,
			density:1.5
		}
		this.body=Bodies.rectangle(x.y,50,50,options)
		this.width=50;
		this.high50;
		this.image=loadImage("paper.png");
		World.add(World,this.body);

	}
	display(){
		var pos=this.body.position
		pos.x=mouseX;
		pos.y=mouseY;



	}
}