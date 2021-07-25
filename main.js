var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CarConstructor = /** @class */ (function () {
    function CarConstructor() {
    }
    return CarConstructor;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // checking price for undefined, if it's undefined, we equals price to 0 to avoid NaN result for price
    Car.prototype.checkPrice = function () {
        if (this.price === undefined)
            this.price = 0;
    };
    Car.prototype.setEngine = function (engineType) {
        this.checkPrice();
        var engine = {
            oil: {
                power: 8,
                price: 100,
            },
            hybrid: {
                power: 7,
                price: 200,
            }
        };
        if (engineType === 'oil') {
            this.enginePower = engine[engineType].power;
            this.engineType = 'oil';
            this.price += engine[engineType].price;
        }
        else if (engineType === 'hybrid') {
            this.enginePower = engine[engineType].power;
            this.engineType = 'hybrid';
            this.price += engine[engineType].price;
        }
    };
    Car.prototype.getEngineInfo = function () {
        console.log("Engine type: " + this.engineType + "\nEngine power: " + this.enginePower);
    };
    Car.prototype.getName = function () {
        if (this.name) {
            console.log("Name: " + this.name);
        }
        else {
            console.log("Please set car name using setName(name) method");
        }
    };
    Car.prototype.setName = function (carName) {
        this.name = carName;
    };
    Car.prototype.getColor = function () {
        if (this.color) {
            console.log("Color: " + this.color);
        }
        else {
            console.log("Please set car color using setColor(color) method.");
        }
    };
    Car.prototype.setColor = function (carColor) {
        if (this.price === undefined) {
            this.price = 0;
        }
        var colorsPriceList = {
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
        };
        if (carColor in colorsPriceList) {
            this.price += colorsPriceList[carColor];
        }
        else {
            this.price += colorsPriceList['else'];
        }
        this.color = carColor;
    };
    Car.prototype.getDoors = function () {
        if (this.doors) {
            console.log("Doors count: " + this.doors);
        }
        else {
            console.log("Please set doors count using setDoorsCount method");
        }
    };
    Car.prototype.setDoors = function (carDoorsCount) {
        this.checkPrice();
        if (carDoorsCount === 2 || carDoorsCount === 4) {
            this.doors = carDoorsCount;
            if (carDoorsCount === 2) {
                this.price += 2;
            }
            else if (carDoorsCount === 4) {
                this.price += 4;
            }
        }
        else {
            console.log('Please set normal count of doors (2 or 4)');
        }
    };
    // checking every key property, if one of them (or more) did not define, it will log about it
    Car.prototype.checkAllKeyProps = function () {
        if (this.doors && this.color && this.engineType && this.name) {
            this.checkForMissingDetails();
            return true;
        }
        else {
            console.log("\n                You are missed some of key configs or entered false values,please fill or correct them with 'set' methods.(setDoors, setColor, setEngine, setName)\n            ");
            return false;
        }
    };
    // checking price and name properties, if one of them not defined it will log attention about checking some methods
    Car.prototype.checkForMissingDetails = function () {
        if (!(this.price && this.name)) {
            console.log("Please configure car with 'set' methods to see the price that fits your selected parts.");
        }
    };
    Car.prototype.logPrice = function () {
        return this.price;
    };
    // if checkAllKeyProps return es true it will show expected text
    Car.prototype.getResult = function () {
        if (this.checkAllKeyProps()) {
            console.log(this.name + " whit color " + this.color + " and price " + this.logPrice() + ", and your car has a " + this.engineType + " engine and " + this.enginePower + " power");
        }
    };
    return Car;
}(CarConstructor));
var bmw = new Car();
bmw.setName('BMW');
bmw.getName();
bmw.setColor('a');
bmw.getColor();
bmw.setDoors(2);
bmw.getDoors();
bmw.setEngine('hybrid');
bmw.getEngineInfo();
bmw.getResult();
//# sourceMappingURL=main.js.map