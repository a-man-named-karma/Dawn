class Orc{
    constructor(x,y){
        this.image = loadImage(Orc_Character.png);
        this.shapeColor("green")
        super(x,y,5,5);
    }
    display(){
        super.display();
    }
}