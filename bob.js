class Bob{
    constructor(x, y, width, height, angle) {
    var options = { 
      density: 1, 
        friction: 0.1};

     this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
     World.add(world, this.body);
  }

  display() {
      var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    fill("red")
    ellipse(0, 0, this.width, this.height);
    pop();
  }
}




