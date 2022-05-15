export interface IShape{
    radius:number;
    computeArea: ()=>number;
}

const PI:number = 22/4;


class Circle implements IShape{
    radius: number;
    area:number;

    constructor(radius:number){
        this.radius = radius;
        this.area = this.computeArea()
    }

    computeArea=():number =>{
        return PI * this.radius *this.radius
    };

}

const circle =new  Circle(6)
console.log(6699,circle)