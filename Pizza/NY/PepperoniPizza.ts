import { PiazzaBase } from '../PizzaBase';

export class PepperoniPizzza extends PiazzaBase {
  prepare(): void {
    console.log('Pepperoni Prepare');
  }
  cut(): void {
    console.log('Pepperoni Cut');
  }
  bake(): void {
    console.log('Pepperoni Bake');
  }
  box(): void {
    console.log('Pepperoni Box');
  }
}
