export default class Character {
  constructor(name, type) {
    // if (typeof name !== 'string' || typeof type !== 'string') {
    //   throw new Error('Тип переменной не строка');
    // }
    // if (name.length < 2 || name.length > 10) {
    //   throw new Error('Длина переменной name должна быть в проделах от 2 до 10');
    // }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  // levelUp() {
  //   if (this.health === 0) {
  //     throw new Error('нельзя повысить левел умершего');
  //   } else {
  //     this.level += 1;
  //     this.health = 100;
  //     this.attack += (this.attack / 100) * 20;
  //     this.defence += (this.defence / 100) * 20;
  //   }
  // }

  // damage(points) {
  //   if (this.health >= 0) {
  //     this.health -= points * (1 - this.defence / 100);
  //   }
  // }
}
