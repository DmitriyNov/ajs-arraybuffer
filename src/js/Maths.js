export default class Maths {
  // Если назвать класс Math, то дальше не получится использовать Math.floor() Math.log2()
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.distance = 1;
    this.stoned = false;
  }

  set attack(value) {
    if (this.stoned) {
      this._attack = Math.floor(value * (1.1 - this.distance * 0.1) - Math.log2(this.distance) * 5);
    } else {
      this._attack = Math.floor(value * (1.1 - this.distance * 0.1));
    }
  }

  get attack() {
    return this._attack;
  }
}
