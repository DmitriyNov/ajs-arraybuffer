import Maths from './Maths';

// Не вижу смысла вообще делать этот класс, потому что логика абсолютно та же что и в Magician
export default class Daemon extends Maths {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 40;
  }
}
