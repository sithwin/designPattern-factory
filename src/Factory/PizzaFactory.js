"use strict";
exports.__esModule = true;
exports.PizzaFactory = void 0;
var PizzaFactory = /** @class */ (function () {
    function PizzaFactory() {
    }
    PizzaFactory.prototype.order = function (type) {
        var pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    };
    return PizzaFactory;
}());
exports.PizzaFactory = PizzaFactory;
