class Car {
    price: number;
    model: string;
    color: string;
    engine: object;
    doors: number;
    result: string;
    constructor() {
        this.price = 1000;
        this.model = 'car';
        this.color = 'color'
        this.engine = {
            oil: {
                type: 'oil',
                power: 11
            },
            hybrid: {
                type: 'hybrid',
                power: 9
            }
        }
        this.doors = 2;
        this.result = ''
    }
    
    getPrice() {
        return this.price;
    }
    
    getModel() {
        return this.model;
    }

    getColor() {
        return this.color;
    }
    getEngine() {
        return this.engine
    }
    getEnginePower() {
        return this.engine
    }
    getDoors() {
        return this.doors
    }
    getResult() {
        return this.result
    }

}

class Tesla extends Car {
    constructor() {
        super();
        this.price = 500;
        this.model = 'tesla';
        this.color = 'red';
        this.engine = {
            type: 'hybrid',
            power: 9,
        };
        this.doors = 4;
        this.result = 'result'

    }
}
class Bmw extends Car {
    constructor() {
        super();
        this.price = 300;
        this.model = 'bmw';
        this.color = 'white';
        this.engine = {
            type: 'oil',
            power: 22,
        };
        this.doors = 2;
        this.result = 'result'

    }
}

class Model {
    car: any;
    constructor(car) {
        this.car = car
    }
    getPrice() {
        return this.car.getPrice()
    }
    getModel() {
        return this.car.getModel()
    }
    getColor() {
        return this.car.getColor()
    }
    getEngine() {
        return this.car.getEngine()
    }
    getEnginePower() {
        return this.car.getEngine()
    }
    getDoors() {
        return this.car.getDoors()
    }
    getResult() {
        return this.car.getResult()
    }
}

class Color {
    car: any;
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 100 // + color price
    }
    getModel() {
            return this.car.getModel()
    }
    getColor() {
        return this.car.getColor()
    }
    getEngine() {
        return this.car.getEngine()
    }
    getEnginePower() {
        return this.car.getEngine()
    }
    getDoors() {
        return this.car.getDoors()
    }
    getResult() {
        return this.car.getResult()
    }

}

class Engine {
    car: any;
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 500 // + engine price
    }
    getModel() {
            return this.car.getModel()
    }
    getColor() {
        return this.car.getColor()
    }
    getEngine() {
        return this.car.getEngine()
    }
    getEnginePower() {
        return this.car.getEngine()
    }
    getDoors() {
        return this.car.getDoors()
    }
    getResult() {
        return this.car.getResult()
    }
}

class Doors {
    car: any;
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 50 // + doors price
    }
    getModel() {
        return this.car.getModel()
    }
    getColor() {
        return this.car.getColor()
    }
    getEngine() {
        return this.car.getEngine()
    }
    getEnginePower() {
        return this.car.getEngine()
    }
    getDoors() {
        return this.car.getDoors()
    }
    getResult() {
        return this.car.getResult()
    }
}

class Result {
    car: any;
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice()
    }
    getModel() {
        return this.car.getModel()
    }
    getColor() {
        return this.car.getColor()
    }
    getEngine() {
        return this.car.getEngine()["type"]
    }
    getEnginePower() {
        return this.car.getEngine()["power"]
    }
    getDoors() {
        return this.car.getDoors()
    }
    getResult() {
        return `${this.getModel()} with color ${this.getColor()}, and price ${this.getPrice()}, with ${this.getEngine()} engine.`
    }

}

let tesla: any = new Tesla();
tesla = new Model(tesla);
tesla = new Color(tesla);
tesla = new Engine(tesla);
tesla = new Doors(tesla);
tesla = new Result(tesla);

console.log(tesla.getPrice());
console.log(tesla.getModel());
console.log(tesla.getColor());
console.log(tesla.getEngine());
console.log(tesla.getEnginePower());
console.log(tesla.getDoors());
console.log(tesla.getResult());

console.log('----------------------------------------')

let bmw: any = new Bmw();
bmw = new Model(bmw);
bmw = new Color(bmw);
bmw = new Engine(bmw);
bmw = new Doors(bmw);
bmw = new Result(bmw);

console.log(bmw.getPrice());
console.log(bmw.getModel());
console.log(bmw.getColor());
console.log(bmw.getEngine());
console.log(bmw.getEnginePower());
console.log(bmw.getDoors());
console.log(bmw.getResult());