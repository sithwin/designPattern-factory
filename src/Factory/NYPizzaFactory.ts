import { CheesePizzza } from '../Pizza/NY/CheesePizza';
import { PepperoniPizzza } from '../Pizza/NY/PepperoniPizza';
import { PiazzaBase } from '../Pizza/PizzaBase';
import { PizzaFactory } from './PizzaFactory';

export class NYPizzaFactory extends PizzaFactory {
  createPizza(type: string): PiazzaBase {
    if (type === 'P') {
      return new PepperoniPizzza();
    } else {
      return new CheesePizzza();
    }
  }
}
