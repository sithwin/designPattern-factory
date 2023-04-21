import { PiazzaBase } from '../Pizza/PizzaBase';

export abstract class PizzaFactory {
  order(type: string): PiazzaBase {
    const pizza: PiazzaBase = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  abstract createPizza(type: string): PiazzaBase;
}
