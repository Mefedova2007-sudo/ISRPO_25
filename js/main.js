// console.log("\n=== Деструктуризация массивов ");
// const colors = ["red", "green", "blue"];
// const color1 = colors[0];
// const color2 = colors[1];
// console.log(color1, color2);

// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor, secondColor, thirdColor);

// const [primary, tertiary] = colors;
// console.log(primary, tertiary);

// const [c1, c2, c3, c4 = "yellow"] = colors;
// console.log(c4);

// console.log("Деструктуризация объектов");

// const user = {
//   name: "Алиса",
//   age: 25,
//   city: "Mосква",
// };

// const userName = user.name;
// const userAge = user.age;
// console.log(userName, userAge);

// const { name, age, city } = user;
// console.log(name, age, city);

// const { name: fullName, age: years } = user;
// console.log(fullName, years);

// const { name: personName, country = "Россия" } = user;
// console.log(personName, country);

// console.log("Деструктуризация в параметрах");

// const user = {
//   nаmе: "Алиса",
//   age: 25,
//   city: "Москва",
// };
// function printUserOld(user) {
//   console.log(`Имя: ${user.nаmе}`);
//   console.log(`Возраст: ${user.age}`);
//   console.log(`Город: ${user.city}`);
// }
// function printUser({ nаmе, age, city }) {
//   console.log(`Имя: ${nаmе}`);
//   console.log(`Возраст: ${age}`);
//   console.log(`Город: ${city}`);
// }
// printUserOld(user);
// console.log();
// printUser(user);

// const product = {
//   name: "Ноутбук",
//   price: 45000,
//   category: "Электроника",
//   inStock: true,
// };

// const { name, price, category, inStock } = product;
// console.log("Извлеченные свойства:");
// console.log(`Название: ${name}`);
// console.log(`Цена: ${price}`);
// console.log(`Категория: ${category}`);
// console.log(`В наличии: ${inStock}`);
// console.log("---");

// function printProduct({ name, price, category, inStock }) {
//   console.log("Информация о продукте (из функции):");
//   console.log(`Название: ${name}`);
//   console.log(`Цена: ${price} руб.`);
//   console.log(`Категория: ${category}`);
//   console.log(`В наличии: ${inStock ? "Да" : "Нет"}`);
// }
// printProduct(product);

// console.log("Spread для массивов");

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const combined = [...arr1, ...arr2];
// console.log("Объединённый массив:", combined);

// const copy = [...arr1];
// console.log("Копия массива:", copy);

// const extended = [0, arr1, 7, 8];
// console.log("Расширенный массив:", extended);

// console.log("Spread для объектов");
// const person = {
//   name: "Иван",
//   age: 30,
// };

// const address = {
//   city: "Санкт-Петербург",
//   street: "Невский проспект",
// };

//  const fullInfo = { ...person, ...address };
// console.log("Полная информация:", fullInfo);

// const personCopy = { ...person };
// console.log("Копия объекта:", personCopy);
// const updated = {...person, age: 31, occupation:
// "Developer" };
// console.log("Обновлённый объект:", updated);

// console.log("Rest оператор");

// function sum(...numbers) {
// return numbers.reduce((total, num) => total+num, 0);
// }

// console.log("Сумма 1,2,3:", sum(1, 2, 3));
// console.log("Сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));

// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ... rest] = numbers;
// console.log("Первое число:", first);
// console.log("Второе число:", second);
// console.log("Остальные числа:", rest);

const numbers1 = [1, 5, 8, 12, 3];
const numbers2 = [7, 2, 10, 4, 6];

console.log("Первый массив:", numbers1);
console.log("Второй массив:", numbers2);
console.log("---");

const combinedArray = [...numbers1, ...numbers2];
console.log("Объединенный массив:", combinedArray);
console.log("---");

function findMax(...numbers) {
  if (numbers.length === 0) {
    return null; 
  }
  return Math.max(...numbers);
}


console.log("Максимум из 5, 12, 8, 3:", findMax(5, 12, 8, 3));
console.log("Максимум из объединенного массива:", findMax(...combinedArray));
console.log("Максимум из 100, 45, 78, 92:", findMax(100, 45, 78, 92));
console.log("---");


const user = {
  name: "Анна",
  age: 25,
  city: "Москва"
};

const userDetails = {
  email: "anna@example.com",
  phone: "+7 (999) 123-45-67",
  occupation: "Разработчик"
};

console.log("Первый объект (user):", user);
console.log("Второй объект (userDetails):", userDetails);
console.log("---");

const mergedUser = {
  ...user,
  ...userDetails
};

console.log("Объединенный объект (mergedUser):", mergedUser);


const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 10, d: 4, e: 5 };
const mergedObjects = { ...obj1, ...obj2 };

console.log("---");
console.log("Пример с конфликтующими свойствами:");
console.log("obj1:", obj1);
console.log("obj2:", obj2);
console.log("Объединенный (последний перезаписывает предыдущие):", mergedObjects);