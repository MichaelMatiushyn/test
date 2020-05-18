'use strict';

// const parent = {
//   parentProp: 'this is a parent prop',
//   a: 5,
// };
// const child = Object.create(parent);
// console.log(child);
// child.childProp = 'this is a child prop';
// child.a = 10;
// console.log(child.hasOwnProperty('a'));
// console.log(child.a);

// ===================
// Объект без прототипа

// const x = Object.create(null);
// console.log(x);

// ==================

// const a = {
//   x: 5,
// };
// const b = Object.create(a);
// b.y = 10;
// const c = Object.create(b);

// console.log(c);

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// ========================================

// const methods = {
//   showName() {
//     console.log(this.name);
//   },
//   changeName(newName) {
//     this.name = newName;
//   },
// };

// function createObjWithMethods(name) {
//   const obj = Object.create(methods);
//   obj.name = name;
//   return obj;
// }
// const mango = createObjWithMethods('mango');
// console.log(mango);
// ===============================================

// function User(name) {
//   this.name = name;
// }
// User.prototype.showName = function () {
//   console.log(this.name);
// };
// User.prototype.changeName = function (newName) {
//   this.name = newName;
// };
// console.log('User.prototype', User.prototype);

// const mango = new User('mango');
// console.log(mango);
// mango.showName();
// mango.changeName('Ajax');
// mango.showName();

// ===================================================
// Пример использования ООП

// const Hero = function (name, level) {
//   this.name = name;
//   this.level = level;
// };
// Hero.prototype.greet = function () {
//   console.log(`Hello, I'm ${this.name}`);
// };

// const hero = new Hero('superman', 999);
// // console.log(hero);
// // hero.greet();

// const Warrior = function (name, level, weapon) {
//   Hero.call(this, name, level);
//   this.weapon = weapon;
// };
// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;
// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with the ${this.weapon}`);
// };

// const warrior = new Warrior('mango', 999, 'axe');
// // console.log(warrior);

// // warrior.greet();
// // warrior.attack();
// // console.log(warrior);

// const Berserker = function (name, level, weapon, battlecry) {
//   Warrior.call(this, name, level, weapon);
//   this.battlecry = battlecry;
// };
// Berserker.prototype = Object.create(Warrior.prototype);
// Berserker.prototype.constructor = Berserker;
// Berserker.prototype.shout = function () {
//   console.log(this.battlecry);
// };

// const bers = new Berserker('poly', 777, 'ring', 'wahhh');
// console.log(bers);

// bers.greet();
// bers.attack();
// bers.shout();

// =============================================================================

// Модуль 6.2

// =============================================================================

// const a = {
//   x: {
//     b: 5,
//   },
// };

// console.log(a.x.b);
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// console.log(arr[0][1]);

// function Hero(name, level) {
//   this.name = name;
//   this.level = level;
// }
// Hero.prototype.getName = function () {
//   return console.log(this.name);
// };
// Hero.prototype.setLevel = function (level) {
//   this.level = level;
// };
// const mango = new Hero('mango', 1);
// console.log(mango);
// mango.getName();
// mango.setLevel(5);
// console.log(mango);

// function Warrior(name, level, weapon) {
//   Hero.call(this, name, level);
//   this.weapon = weapon;
// }
// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;

// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with the ${this.weapon}`);
// };

// const poly = new Warrior('poly', 1, 'axe');

// poly.attack();
// poly.getName();
// console.log(poly);

class HeroClass {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  getName() {
    return this.name;
  }
  setLevel(level) {
    this.level = level;
  }
  getStatus() {
    console.log(this);
  }
  static sayHi() {
    console.log('hello');
  }
}
console.log('HeroClass.prototype:', HeroClass.prototype);

const ajax = new HeroClass('ajax', 2);
console.log(ajax);
console.log(ajax.getName());
ajax.setLevel(10);
ajax.getStatus();
HeroClass.sayHi();

// function Hero(name, level) {
//   this.name = name;
//   this.level = level;
// }
// Hero.prototype.getName = function () {
//   return console.log(this.name);
// };
// Hero.prototype.setLevel = function (level) {
//   this.level = level;
// };
// const mango = new Hero('mango', 1);
// console.log(mango);
// mango.getName();
// mango.setLevel(5);
// console.log(mango);

// function Warrior(name, level, weapon) {
//   Hero.call(this, name, level);
//   this.weapon = weapon;
// }
// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;

// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with the ${this.weapon}`);
// };

// const poly = new Warrior('poly', 1, 'axe');

// poly.attack();
// poly.getName();
// console.log(poly);
