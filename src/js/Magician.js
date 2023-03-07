import Maths from './Maths';

export default class Magician extends Maths {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.baseAttack = 50;
    this.attack = this.baseAttack;
  }
}
