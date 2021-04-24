class Shooter{
	constructor(x,y,r){
	
		
		
	this.image=loadImage("polygon.png");
	var options={
        'isStatic':false,
		'restitution' :0,
		'friction':1,
		'density' :1.2
	}
    // assign options to the polygon
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
	}
	
	display()
	{
			var shooterpos=this.body.position;		
			push()
			translate(shooterpos.x, shooterpos.y);
			strokeWeight(4);
			image(this.image,0,0,this.r,this.r);
			pop()
	}

}