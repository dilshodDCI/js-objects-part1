// const carName = "VW";
// const carModel = 2000;
// const carColor = "Braun";
// const carWeight = 850;

const car = {
  name: "VW",
  model: 2000,
  color: "Braun",
  weight: 850,
  nameAndModel: function () {
    return this.name + " " + this.model;
  },
};

//console.log(car.nameAndModel());

// const cars = [
//   {
//     name: "VW",
//     model: 2000,
//     color: "Braun",
//     weight: 850,
//   },
//   {
//     name: "BMW",
//     model: 4000,
//     color: "White",
//     weight: 850,
//   },
//   {
//     name: "KIA",
//     model: 1400,
//     color: "Blue",
//     weight: 8550,
//   },
// ];

// const carNames = cars.map((car) => car.model);

// console.log(carNames);

//const myFunc= ()=>{}

const users = [
  { id: 1, username: "John", age: 32 },
  { id: 2, username: "Jane", age: 67 },
  { id: 3, username: "Tom", age: 22 },
  { id: 4, username: "Tom", age: 23 },
];

const getUserById = (id) => users.find((user) => user.id === id);

console.log(getUserById(1));
