import Magician from '../js/Magician';
import Daemon from '../js/Daemon';

const dataList = [
  [3, false, 40],
  [4, false, 35],
  [3, true, 32],
  [4, true, 25],
];

const handler = test.each(dataList);

handler('Testing attack', (distance, stoned, expected) => {
  const magician = new Magician('Abracadaniel');
  magician.distance = distance;
  magician.stoned = stoned;
  const result = magician.attack;
  expect(result).toBe(expected);
});
