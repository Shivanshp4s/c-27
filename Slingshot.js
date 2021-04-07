class Slingshot  { 

constructor(bird,log){

    var option = {
    
bodyA:bird,
bodyB:log,

stiffness:0.04,
length:10


    }

this.slingshot = Constraint.create(option);
World.add(world,this.slingshot);
 
}
    
display(){

line(this.slingshot.bodyA.position.x,this.slingshot.bodyA.position.y,this.slingshot.bodyB.position.x,this.slingshot.bodyB.position.y);




}


}