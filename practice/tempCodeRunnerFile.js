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
