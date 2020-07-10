class Bin{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true

        }

        this.body = Bodies.rectangle(x,y,20,20,options);
        this.width = 20;
        this.height = 20;

        World.add(world, this.body,);
    }

    display() {
        rectMode(CENTER);
       rect(this.body.position.x, this.body.position.y, 10,100); 
    }
}