import getBuffer from '../js/getbuffer';
import ArrayBufferConverter from '../js/ArrayBufferConverter';

const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
const abc = new ArrayBufferConverter();

test('Testing ArrayBufferConverter class', () => {
  abc.load(getBuffer(data));
  const result = abc.toString();
  expect(result).toBe(data);
});
