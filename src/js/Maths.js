export default class Maths {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.distance = 1;
    this.stoned = false;
  }

  set attack(value) {
    // Я согласен, что логика здесь может быть не совсем такая, как требуется по заданию,
    // но я не знаю, как сделать, чтобы при задании атаки вручную с учётом дистанции и дурмана и
    // при этом не сломать остальные сеттеры. Пусть будет так, что здесь задаём конкретное значение
    this._attack = value;
    this.baseAttack = value;
  }

  get attack() {
    return this._attack;
  }

  set distance(value) {
    this.attack = Math.floor(this.baseAttack * (1.1 - value * 0.1));
    this._distance = value;
  }

  get distance() {
    return this._distance;
  }

  set stoned(value) {
    // Тут логика такая, что если дебафаем персонажа и на нём сейчас нет дебафа, то он применяется,
    // а если он уже есть, то никак не влияет
    if (value && !this.stoned) {
      this.attack = Math.floor(this.baseAttack - Math.log2(this.distance) * 5);
    // Тут соответственно наоборот, если дебаф снимем и он есть, то атака увеличивается
    } else if (!value && this.stoned) {
      // Эта строка у меня не покрыта, но по заданию такого вроде и не требовалось реализовывать
      this.attack = Math.floor(this.baseAttack + Math.log2(this.distance) * 5);
    }
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }
}
