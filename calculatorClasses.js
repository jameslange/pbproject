
class Calculator{
    constructor(){
        //properties
        this.pi = Math.PI;
        this.e = Math.E;
    }

    //getter
    
    //methods
    ratio (x, y, width){
        let ratio =  x/y;
        return width/ratio; 
    }  

    percentage(x, y){
        return console.log(`${x/y*100}%`);
    }

    add(x, y){
        return x+y;
    }

    subtract(x, y){
        return x - y;
    }

    multiply(x, y){
        return x * y;
    }

    divide(x, y){
        return x/y;
    }

    modulation(x, y){
        return x % y;
    }

    elevate(x, y){
        return x ** y;
    }
    sqrt(x){
        return Math.sqrt(x);
    }
}

const myCalc = new Calculator();

console.log(myCalc.pi);
myCalc.percentage(50, 100)
console.log(myCalc.ratio(4, 1, 50));