//const square = new Rectangle(2, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());

//------------Promise---------
// console.log("Ok");

// const req = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Okkk");

//     const product = {
//       name: "TV",
//       price: 2000,
//     };

//     resolve(product);
//   }, 2000);
// });

// req
//   .then((product) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         product.status = "order";
//         resolve(product);
//       }, 2000);
//     });
//   })
//   .then((data) => {
//     data.modify = true;
//     return data;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(() => {
//     console.log("Oppps...");
//   })
//   .finally(() => {
//     console.log("It's over");
//   });

// const test = (time) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(), time);
//   });
// };

// // test(1000).then(() => console.log("1000 ms"));
// // test(2000).then(() => console.log("2000 ms"));

// Promise.all([test(1000), test(2000)]).then(() => {
//   console.log("All");
// });

// Promise.race([test(1000), test(2000)]).then(() => {
//   console.log("What");
// });

//---------------методи масива--------------

//filter

// const names = ["Ivan", "Nastya", "Sasha", "Masha"];

// const shortNames = names.filter(function (name) {
//   return name.length < 6;
// });

// console.log(shortNames);

// //map

// const answers = ["IvaN", "NastyA", "SaSha", "Ok"];

// const result = answers.map((item) => {
//   return item.toLowerCase();
// });

// console.log(result);

// // every/some

// const some = [4, 10, "WHAT", "Ok"];

// console.log(
//   some.some((item) => {
//     return typeof item === "number"; // some якщо хоча б один
//   })
// );

// console.log(
//   some.every((item) => {
//     return typeof item === "number"; // every якщо всі
//   })
// );

// // reduce

// const arr = [4, 10, 12, 5, 7];

// const res = arr.reduce((sum, current) => sum + current);
// const res3 = arr.reduce((sum, current) => sum + current, 2);

// console.log(res);
// console.log(res3);

// //

// const arr1 = ["apple", "pear", "plum"];

// const res1 = arr1.reduce((sum, current) => sum + ", " + current);
// const res2 = arr1.reduce((sum, current) => `${sum}, ${current}`);

// console.log(res1);
// console.log(res2);

//

// const obj = {
//   ivan: "persona",
//   ann: "persona",
//   dog: "animal",
//   cat: "animal",
// };

// const newArray = Object.entries(obj)
//   .filter((item) => item[1] === "persona")
//   .map((item) => item[0]);

// console.log(newArray);

// const films = [
//   {
//     name: "Titanic",
//     rating: 9,
//   },
//   {
//     name: "Die hard 5",
//     rating: 5,
//   },
//   {
//     name: "Matrix",
//     rating: 8,
//   },
//   {
//     name: "Some bad film",
//     rating: 4,
//   },
// ];

// function showGoodFilms(arr) {
//   return arr.filter((film) => film.rating >= 8);
// }

// function showListOfFilms(arr) {
//   const names = arr.map((item) => item.name);
//   const show = names.reduce((sum, current) => `${sum}, ${current}`);
//   return show;
// }

// function setFilmsIds(arr) {
//   return arr.map((film, index) => {
//     film.id = index;
//     return film;
//   });
// }

// const tranformedArray = setFilmsIds(films);

// function checkFilms(arr) {
//   return arr.every((item) => (item.id === 0 ? true : false));
// }

// showGoodFilms(films);
// showListOfFilms(films);
// const transformedArray = setFilmsIds(films);
// console.log("Films with IDs:", transformedArray);
// checkFilms(films);

const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

const getPositiveIncomeAmount = (data) => {
  const arr = data
    .filter((item) => item.amount >= 0)
    .reduce((sum, current) => sum + current.amount, 0);

  console.log(arr);
};

const getTotalIncomeAmount = (data) => {
  return data.some((item) => item.amount < 0)
    ? data.reduce((acc, curr) => acc + curr.amount, 0)
    : getPositiveIncomeAmount(data);
};
getPositiveIncomeAmount(funds);
getTotalIncomeAmount(funds);
