class BaseClass{
    constructor(x, y, radius, width, options, image) {
        this.image = image;
        this.width = width;
        this.radius=radius;
        this.body = Bodies.circle(x, y, radius*0.7, options);
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.width);
        pop();
      }
}