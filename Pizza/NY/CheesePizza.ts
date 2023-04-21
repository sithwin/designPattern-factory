import { PiazzaBase } from '../PizzaBase';

export class CheesePizzza extends PiazzaBase {
  prepare(): void {
    console.log('Cheese Prepare');
  }
  cut(): void {
    console.log('Cheese Cut');
  }
  bake(): void {
    console.log('Cheese Bake');
  }
  box(): void {
    console.log('Cheese Box');
  }
}
