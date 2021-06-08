class Ball{

    constructor(x,y){
         var options ={
             'restitution':0.3,
             'isStatic':false,
             'density':1.2
         }
         this.body = Bodies.circle(x,y,20,options);
         this.radius = 20;
         this.x = x;
         this.y = y;

         World.add(world,this.body);
      }
      display(){
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(0,0,this.radius,this.radius);
        pop();
      }

}
