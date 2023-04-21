"use strict";
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
exports.__esModule = true;
exports.NYPizzaFactory = void 0;
var CheesePizza_1 = require("../Pizza/NY/CheesePizza");
var PepperoniPizza_1 = require("../Pizza/NY/PepperoniPizza");
var PizzaFactory_1 = require("./PizzaFactory");
var NYPizzaFactory = /** @class */ (function (_super) {
    __extends(NYPizzaFactory, _super);
    function NYPizzaFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NYPizzaFactory.prototype.createPizza = function (type) {
        if (type === 'P') {
            return new PepperoniPizza_1.PepperoniPizzza();
        }
        else {
            return new CheesePizza_1.CheesePizzza();
        }
    };
    return NYPizzaFactory;
}(PizzaFactory_1.PizzaFactory));
exports.NYPizzaFactory = NYPizzaFactory;
