import Magician from '../js/Magician';
import Daemon from '../js/Daemon';

const magician = new Magician('Abracadaniel');
// Не знаю, в чём смысл создавать два класса, раюотают они одинаково
const daemon = new Daemon('Hunson Abadeer');
const dataList = [
  [3, false, 50, 40],
  [4, false, 40, 28],
  [3, true, 50, 32],
  [4, true, 40, 18],
];

const handler = test.each(dataList);

handler('Testing attak', (distance, stoned, attack, expected) => {
  magician.distance = distance;
  magician.stoned = stoned;
  magician.attack = attack;
  const result = magician.attack;
  expect(result).toBe(expected);
});
