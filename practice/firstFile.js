//-----------------------------------------------------------
//work with date and time

//const now = new Date("2024-07-08");
//new Date.parse("2024-07-08");

//console.log(now.setHours(12));
//console.log(now);

//console.log(now.getFullYear());
//console.log(now.getDate());
//console.log(now.getDay());
//console.log(now.getHours());
//console.log(now.getTime());

//let start = new Date();

//for (let i = 0; i < 100; i++) {
//  let some = i + 1;
//  console.log(`${some}`);
//}

//let end = new Date();

//console.log(`What we had: ${end - start}`);
//

//-------------------------------------------------------------
//Функція-конструктор

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log(`Hello ${this.name}`);
//   };
// }

// User.prototype.exit = function (name) {
//   console.log(`User ${this.name} leave`);
// };

// const anastasia = new User("Anastasia", 20);
// const sofia = new User("Sofia", 22);

// anastasia.hello();
// sofia.hello();

// sofia.exit();

// console.log(anastasia);
// console.log(sofia);

//this = ручна привязка з call, apply, bind

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: "Annastasia",
// };

// sayName.call(user, "Zastup");
// sayName.apply(user, ["Zastup"]);

// function count(num) {
//   return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));

//class

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   calcArea() {
//     return this.height * this.width;
//   }
// }

// class ColoredRegtangleWittText extends Rectangle {
//   constructor(height, width, text, colorBg) {
//     super(height, width); //викликає те, що в основному класі
//     this.text = text;
//     this.colorBg = colorBg;
//   }

//   showMyProps() {
//     console.log(`Text: ${this.text} and color: ${this.colorBg}`);
//   }
// }

// const square = new Rectangle(2, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());

// const div = new ColoredRegtangleWittText(25, 10, "hello", "red");

// div.showMyProps();
// console.log(div.calcArea());

//rest

// const log = function (...rest) {
//   console.log(rest);
// };

// log("basic", "dddd", "ffff");

// const persona = {
//   name: "Alex",
//   tel: "+3800000000",
//   parent: {
//     mom: "Sasha",
//     dad: "Pasha",
//   },
// };

// const clone = JSON.parse(JSON.stringify(persona));

// clone.parent.mom = "Anna";

// onsole.log(persona);

// console.log(clone);

//-----------------------------------------------------------
// new RegExp('pattern', 'flags');
// /pattern/f
