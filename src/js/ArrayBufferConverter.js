export default class ArrayBufferConverter {
  load(buffer) {
    this.data = new Int16Array(buffer);
  }

  toString() {
    let result = '';
    for (const code of this.data) {
      result += String.fromCharCode(code);
    }
    return result;
  }
}
