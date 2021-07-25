abstract class CarConstructor {
    name: string;
    price: number;
}

class Car extends CarConstructor {
    name: string;
    color: string;
    doors: number;
    engineType: string;
    price: number;
    enginePower: number;

    // checking price for undefined, if it's undefined, we equals price to 0 to avoid NaN result for price
    private checkPrice() {
        if (this.price === undefined) this.price = 0
    }

    setEngine(engineType: string) {
        this.checkPrice();

        const engine = {
            oil: {
                power: 8,
                price: 100,
            },
            hybrid: {
                power: 7,
                price: 200,
            }
        }

        if (engineType === 'oil') {
            this.enginePower = engine[engineType].power;
            this.engineType = 'oil';
            this.price += engine[engineType].price;
        } else if(engineType === 'hybrid') {
            this.enginePower = engine[engineType].power;
            this.engineType = 'hybrid';
            this.price += engine[engineType].price;
        }

    }

    getEngineInfo() {
        console.log(`Engine type: ${this.engineType}\nEngine power: ${this.enginePower}`)
    }

    getName() {
        if (this.name) {
            console.log(`Name: ${this.name}`)
        } else {
            console.log(`Please set car name using setName(name) method`)
        }
    }

    setName(carName: string) {
        this.name = carName;
    }

    getColor() {
        if (this.color) {
            console.log(`Color: ${this.color}`)
        } else {
            console.log(`Please set car color using setColor(color) method.`)
        }
    }

    setColor(carColor: string) {
        if (this.price === undefined) {
            this.price = 0
        }
        const colorsPriceList = {
            random: 1,
            black: 5,
            white: 5,
            grey: 5,
            yellow: 2,
            purple: 3,
            pink: 2,
            else: 1,
            gold: 6,
            chamelion: 6,
            blue: 4,
            oceanBLue: 5,
            green: 3,
        }
        if (carColor in colorsPriceList) {
            this.price += colorsPriceList[carColor];
        } else {
            this.price += colorsPriceList['else'];
        }
        this.color = carColor;
    }

    getDoors() {
        if (this.doors) {
            console.log(`Doors count: ${this.doors}`)
        } else {
            console.log(`Please set doors count using setDoorsCount method`)
        }
    }

    setDoors(carDoorsCount: number) {
        this.checkPrice();

        if ( carDoorsCount === 2 || carDoorsCount === 4 ) {
            this.doors = carDoorsCount;

            if (carDoorsCount === 2) {
                this.price += 2
            } else if(carDoorsCount === 4){
                this.price += 4
            }
        } else {
            console.log('Please set normal count of doors (2 or 4)')
        }
    }

    // checking every key property, if one of them (or more) did not define, it will log about it
    protected checkAllKeyProps() {
        if (this.doors && this.color && this.engineType && this.name) {
            this.checkForMissingDetails();
            return true
        } else {
            console.log(`
                You are missed some of key configs or entered false values,please fill or correct them with 'set' methods.(setDoors, setColor, setEngine, setName)
            `)
            return false
        }
    }

    // checking price and name properties, if one of them not defined it will log attention about checking some methods
    protected checkForMissingDetails() {
        if ( !(this.price && this.name) ) {
            console.log(`Please configure car with 'set' methods to see the price that fits your selected parts.`)
        }
    }

    logPrice() {
        return this.price
    }

    // if checkAllKeyProps return es true it will show expected text
    getResult() {
        if (this.checkAllKeyProps()){
            console.log(`${this.name} whit color ${this.color} and price ${this.logPrice()}, and your car has a ${this.engineType} engine and ${this.enginePower} power`)
        }
    }

}

const bmw = new Car();


bmw.setName('BMW');
bmw.getName();
bmw.setColor('a');
bmw.getColor();
bmw.setDoors(2);
bmw.getDoors();
bmw.setEngine('hybrid');
bmw.getEngineInfo();

bmw.getResult();