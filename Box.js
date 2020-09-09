class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);

      this.block=Bodies.rectangle(x,y,width,height);
      this.width=width;
      this.height=height;

      World.add(world,this.block);

    }
      display(){
         var pos=this.block.position;
         rectMode(CENTRE);
         fill("yellow");
         rect(pos.x,pos.y,pos.width,pos.height);
      }
  };
  