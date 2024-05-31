/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/require-top-level-describe */
import Car from './10-car';

class TestCar extends Car { }

test('car cloneCar check for species', () => {
  const opel = new TestCar();
  const newCar = opel.cloneCar();

  expect(newCar instanceof TestCar).toBe(true);
});
