class Particle {
    constructor(x, y,radius) {
 
     var options={
         restituion:0.4
     }

      this.body=Bodies.circle(x,y,radius,options)
      World.add(world, this.body);
this.radius=radius
this.color=color(random(0,255))
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill(this.color);
      ellipseMode(RADIUS);
      ellipse(0, 0,this.radius,this.radius);
      pop();
    }
  };