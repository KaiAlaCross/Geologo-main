class Stone{
	constructor(x,y,r)
	{
		var options={
			restitution:0.8,
			friction:0.9,
			density:12
		}
		this.body = Bodies.rectangle(x, y, 50, 50, options);
    	this.width = 100;
 		this.height = 100;
    	World.add(world, this.body);

	}
	display()
	{
		var angle = this.body.angle;
        push();
		translate(this.body.position.x, this.body.position.y);
		rotate(angle);
		strokeWeight(1);
		stroke('black')
		fill('black')
		rectMode(CENTER)
		rect(0, 0, this.width, this.height);
		pop();
	}

}