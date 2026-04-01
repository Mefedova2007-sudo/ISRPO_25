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

// const numbers1 = [1, 5, 8, 12, 3];
// const numbers2 = [7, 2, 10, 4, 6];

// console.log("Первый массив:", numbers1);
// console.log("Второй массив:", numbers2);
// console.log("---");

// const combinedArray = [...numbers1, ...numbers2];
// console.log("Объединенный массив:", combinedArray);
// console.log("---");

// function findMax(...numbers) {
//   if (numbers.length === 0) {
//     return null;
//   }
//   return Math.max(...numbers);
// }

// console.log("Максимум из 5, 12, 8, 3:", findMax(5, 12, 8, 3));
// console.log("Максимум из объединенного массива:", findMax(...combinedArray));
// console.log("Максимум из 100, 45, 78, 92:", findMax(100, 45, 78, 92));
// console.log("---");

// const user = {
//   name: "Анна",
//   age: 25,
//   city: "Москва"
// };

// const userDetails = {
//   email: "anna@example.com",
//   phone: "+7 (999) 123-45-67",
//   occupation: "Разработчик"
// };

// console.log("Первый объект (user):", user);
// console.log("Второй объект (userDetails):", userDetails);
// console.log("---");

// const mergedUser = {
//   ...user,
//   ...userDetails
// };

// console.log("Объединенный объект (mergedUser):", mergedUser);

// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { b: 10, d: 4, e: 5 };
// const mergedObjects = { ...obj1, ...obj2 };

// console.log("---");
// console.log("Пример с конфликтующими свойствами:");
// console.log("obj1:", obj1);
// console.log("obj2:", obj2);
// console.log("Объединенный (последний перезаписывает предыдущие):", mergedObjects);

// import { greet, add, PI } from "./utils.js";

// console.log("Модули");
// console.log(greet ("Алексей"));
// console.log("5 + 3 =", add(5, 3));
// console.log("Значение PI:", PI);

// import { multiply as умножить } from "./utils.js";
// console.log("4 * 7 =", умножить (4, 7));

// import * as Utils from "./utils.js";
// console.log(Utils.greet("Мария"));
// console.log("Умножение:", Utils.multiply(3, 9));

// import { square, cube, E } from './js/math.js';

// console.log("=== Тестирование математических функций ===\n");

// console.log("Функция square:");
// console.log(`Квадрат числа 5: ${square(5)}`);
// console.log(`Квадрат числа -3: ${square(-3)}`);
// console.log(`Квадрат числа 2.5: ${square(2.5)}`);
// console.log(`Квадрат числа 0: ${square(0)}`);

// console.log("\n---");

// console.log("Функция cube:");
// console.log(`Куб числа 3: ${cube(3)}`);
// console.log(`Куб числа -2: ${cube(-2)}`);
// console.log(`Куб числа 1.5: ${cube(1.5)}`);
// console.log(`Куб числа 0: ${cube(0)}`);

// console.log("\n---");

// console.log("Константа E:");
// console.log(`Число Эйлера (E): ${E}`);
// console.log(`E^2: ${square(E)}`);
// console.log(`E^3: ${cube(E)}`);

// console.log("\n---");

// console.log("Дополнительные тесты:");
// console.log(`5² + 3³ = ${square(5)} + ${cube(3)} = ${square(5) + cube(3)}`);
// console.log(`(2 + 3)² = ${square(2 + 3)}`);
// console.log(`2² + 3² = ${square(2)} + ${square(3)} = ${square(2) + square(3)}`);

// console.log("\n--- Проверка обработки ошибок ---");
// try {
//   console.log(square("string"));
// } catch (error) {
//   console.log("Ошибка:", error.message);
// }

// console.log("Промисы");

// const simplePromise = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve("Операция выполнена успешно!");
//   } else {
//     reject("Произошла ошибка!");
//   }
// });

// simplePromise.then((result) => console.log("Результат:", result)).catch((error) => console.log("Ошибка:", error));

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Прошло ${ms} миллисекунд`);
//     }, ms);
//   });
// }

// delay(1000).then((message) => console.log(message));

// function fetchUserData(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userId > 0) {
//         resolve({
//           id: userId,
//           name: "Иван Иванов",
//           email: "ivan@example.com",
//         });
//       } else {
//         reject("Неверный ID пользователя");
//       }
//     }, 1500);
//   });
// }
// fetchUserData(1)
// .then((user) => console.log("Пользователь:", user))
// .catch((error) => console.log("Ошибка:", error));

// function step1() {
// return new Promise((resolve) => {
// setTimeout(() => resolve("Шаг 1 завершён"), 500);
// });
// }

// function step2 (previousResult) {
// return new Promise((resolve) => {
// setTimeout(() => resolve(`${previousResult} -> Шаг 2 завершён`), 500);
// });
// }

// function step3 (previousResult) {
// return new Promise((resolve) => {
// setTimeout(() => resolve(`${previousResult} -> Шаг 3 завершён`), 500);
// });
// }

// step1()
// .then ((result1) => step2(result1))
// .then((result2) => step3(result2))
// .then((finalResult) => console.log("Финальный результат:", finalResult))
// .catch((error) => console.log("Ошибка в цепочке:", error));

// function checkInventory(productName, quantity) {
//   return new Promise((resolve, reject) => {

//     const inventory = {
//       "ноутбук": { price: 45000, inStock: 10 },
//       "смартфон": { price: 25000, inStock: 5 },
//       "наушники": { price: 3000, inStock: 0 },
//       "клавиатура": { price: 2000, inStock: 3 },
//       "монитор": { price: 15000, inStock: 0 }
//     };

//     const product = productName.toLowerCase();

//     setTimeout(() => {
//       if (!inventory[product]) {
//         reject(new Error(`Товар "${productName}" не найден в базе данных`));
//         return;
//       }

//       const availableQuantity = inventory[product].inStock;

//       if (availableQuantity > 0 && quantity <= availableQuantity) {
//         resolve({
//           success: true,
//           message: ` Товар "${productName}" в наличии!`,
//           details: {
//             product: productName,
//             requested: quantity,
//             available: availableQuantity,
//             price: inventory[product].price,
//             totalCost: inventory[product].price * quantity
//           }
//         });
//       }

//       else if (availableQuantity === 0) {
//         reject(new Error(`Товар "${productName}" отсутствует на складе`));
//       }
//       else {
//         reject(new Error(` Недостаточно товара "${productName}". Доступно: ${availableQuantity}, запрошено: ${quantity}`));
//       }
//     }, 1500);
//   });
// }

// console.log(" Проверка наличия товаров...\n");

// console.log(" Запрос 1: Ноутбук (2 шт.)");
// checkInventory("ноутбук", 2)
//   .then(result => {
//     console.log(result.message);
//     console.log(`   Цена за единицу: ${result.details.price} руб.`);
//     console.log(`   Общая стоимость: ${result.details.totalCost} руб.`);
//     console.log(`   Доступно на складе: ${result.details.available} шт.\n`);
//   })
//   .catch(error => {
//     console.error(error.message);
//     console.log();
//   });

// console.log(" Запрос 2: Смартфон (3 шт.)");
// checkInventory("смартфон", 3)
//   .then(result => {
//     console.log(result.message);
//     console.log(`  Цена за единицу: ${result.details.price} руб.`);
//     console.log(`  Общая стоимость: ${result.details.totalCost} руб.`);
//     console.log(`   Доступно на складе: ${result.details.available} шт.\n`);
//   })
//   .catch(error => {
//     console.error(error.message);
//     console.log();
//   });

// console.log(" Запрос 3: Наушники (1 шт.)");
// checkInventory("наушники", 1)
//   .then(result => {
//     console.log(result.message);
//     console.log(`   Общая стоимость: ${result.details.totalCost} руб.\n`);
//   })
//   .catch(error => {
//     console.error(error.message);
//     console.log();
//   });

// console.log(" Запрос 4: Клавиатура (10 шт.)");
// checkInventory("клавиатура", 10)
//   .then(result => {
//     console.log(result.message);
//   })
//   .catch(error => {
//     console.error(error.message);
//     console.log();
//   });

// console.log(" Запрос 5: Планшет (1 шт.)");
// checkInventory("планшет", 1)
//   .then(result => {
//     console.log(result.message);
//   })
//   .catch(error => {
//     console.error(error.message);
//     console.log();
//   });

// console.log(" Запрос 6: Цепочка проверок");
// checkInventory("монитор", 2)
//   .then(result => {
//     console.log(result.message);
//     console.log(`   Но, к сожалению, товара нет в наличии.`);

//     return checkInventory("клавиатура", 1);
//   })
//   .then(result => {
//     console.log(result.message);
//     console.log(`   Цена: ${result.details.price} руб.`);
//     console.log(`   Общая стоимость: ${result.details.totalCost} руб.\n`);
//   })
//   .catch(error => {
//     console.error(` Ошибка в цепочке: ${error.message}\n`);
//   });

// console.log("Запрос 7: Дополнительная проверка (смартфон, 2 шт.)");
// checkInventory("смартфон", 2)
//   .then(result => {
//     console.log(result.message);
//     console.log(`   Цена: ${result.details.price} руб.`);
//     console.log(`   Общая стоимость: ${result.details.totalCost} руб.`);
//   })
//   .catch(error => {
//     console.error(error.message);
//   })
//   .finally(() => {
//     console.log("    Проверка завершена (finally всегда выполняется)\n");
//   });

// console.log("Async/Await");
// async function greet() {
// return "Привет!";
// }
// greet().then((message) => console.log(message));
// function getWeather() {
// return new Promise((resolve) => {
// setTimeout(() => {
// resolve({ temp: 22, condition: "Солнечно" });
// }, 1000);
// });
// }
// async function showWeather() {
// console.log("Загрузка погоды...");
// const weather = await getWeather();
// console.log(`Температура: ${weather.temp}°C, ${weather.
// condition}`);
// }
// showWeather();

// async function fetchData(shouldFail) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldFail) {
//         reject("Ошибка при загрузке данных");
//       } else {
//         resolve({ data: "Важные данные" });
//       }
//     }, 800);
//   });
// }
// async function getData() {
//   try {
//     const result = await fetchData(false);
//     console.log("Успешно:", result.data);
//     const failedResult = await fetchData(true);
//     console.log("Это не выполнится");
//   } catch (error) {
//     console.log("Поймана ошибка:", error);
//   }
// }
// getData();

// async function cookDinner() {
//   console.log("Начинаем готовить...");

//   const pasta = await delay(1000).then(() => "Паста готова");
//   console.log(pasta);

//   const sauce = await delay(500).then(() => "Соус готов");
//   console.log(sauce);

//   const salad = await delay(700).then(() => "Салат готов");
//   console.log(salad);
//   return "Ужин готов!";
// }
// cookDinner().then((result) => console.log(result));

// async function cookDinnerFast() {
//   console.log("Готовим всё одновременно...");
//   const [pasta, sauce, salad] = await Promise.all([
//     delay(1000).then(() => "Паста готова"),
//     delay(500).then(() => "Cоус готов"),
//     delay(700).then(() => "Салат готов"),
//   ]);
//   console.log(pasta, sauce, salad);
//   return "Ужин готов быстрее!";
// }
// cookDinnerFast().then((result) => console.log(result));

// function checkStock(orderId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isAvailable = Math.random() > 0.3;
//       if (isAvailable) {
//         resolve({ success: true, message: `Товар по заказу ${orderId} в наличии` });
//       } else {
//         reject(new Error(`Товар по заказу ${orderId} отсутствует на складе`));
//       }
//     }, 1000);
//   });
// }

// function calculateCost(orderId, items) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const totalCost = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

//       if (totalCost > 0) {
//         resolve({
//           success: true,
//           totalCost: totalCost,
//           message: `Стоимость заказа ${orderId} рассчитана: ${totalCost} руб.`,
//         });
//       } else {
//         reject(new Error(`Не удалось рассчитать стоимость заказа ${orderId}`));
//       }
//     }, 1000);
//   });
// }

// function confirmOrder(orderId, totalCost) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isConfirmed = Math.random() > 0.2;
//       if (isConfirmed) {
//         resolve({
//           success: true,
//           orderId: orderId,
//           message: `Заказ ${orderId} подтверждён на сумму ${totalCost} руб.`,
//         });
//       } else {
//         reject(new Error(`Не удалось подтвердить заказ ${orderId}`));
//       }
//     }, 1000);
//   });
// }
// async function processOrder(orderId, items) {
//   try {
//     console.log(`Начинаем обработку заказа ${orderId}...`);
//     const stockResult = await checkStock(orderId);
//     console.log(stockResult.message);
//     const costResult = await calculateCost(orderId, items);
//     console.log(costResult.message);
//     const confirmResult = await confirmOrder(orderId, costResult.totalCost);
//     console.log(confirmResult.message);
//     return {
//       success: true,
//       orderId: orderId,
//       totalCost: costResult.totalCost,
//       message: `Заказ ${orderId} успешно оформлен`,
//     };
//   } catch (error) {
//     console.error(`Ошибка при обработке заказа ${orderId}:`, error.message);

//     return {
//       success: false,
//       orderId: orderId,
//       error: error.message,
//       message: `Заказ ${orderId} не может быть обработан`,
//     };
//   }
// }

// const testOrder = {
//   orderId: "ORDER-12345",
//   items: [
//     { name: "Товар 1", price: 1000, quantity: 2 },
//     { name: "Товар 2", price: 500, quantity: 1 },
//     { name: "Товар 3", price: 300, quantity: 3 },
//   ],
// };

// processOrder(testOrder.orderId, testOrder.items).then((result) => {
//   console.log("\n=== ИТОГОВЫЙ РЕЗУЛЬТАТ ===");
//   console.log(result);

//   if (result.success) {
//     console.log(" Заказ успешно оформлен!");
//   } else {
//     console.log(" Заказ не оформлен из-за ошибки");
//   }
// });

// console.log("Fetch API");

// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!response.ok) {
//       throw new Error(`НТТР ошибка! Статус: ${response.status}`);
//     }
//     const users = await response.json();
//     console.log("Первые 3 пользователя:");
//     users.slice(0, 3).forEach((user) => {
//       console.log(`- ${user.name} (${user.email})`);
//     });
//   } catch (error) {
//     console.log("Ошибка при загрузке пользователей:", error.message);
//   }
// }
// getUsers();

// async function getUserById(id) {
//   try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//     const user = await response.json();
//     console.log(`Пользователь #${id}:`);
//     console.log(`Имя: ${user.name}`);
//     console.log(`Город: ${user.address.city}`);
//     console.log(`Компания: ${user.company.name}`);
//   } catch (error) {
//     console.log("Ошибка:", error.message);
//   }
// }
// getUserById(1);

// async function createPost() {
//   try {
//     const newPost = {
//       title: "Моя первая запись",
//       body: "Это содержание моей первой записи в блоге",
//       userId: 1,
//     };
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newPost),
//     });

//     const createdPost = await response.json();
//     console.log("Создана новая запись:");
//     console.log("ID:", createdPost.id);
//     console.log("Заголовок:", createdPost.title);
//   } catch (error) {
//     console.log("Ошибка при создании записи:", error.message);
//   }
// }
// createPost();

// console.log("Optional Chaining");
// const user1 = {
//   name: "Андрей",
//   address: {
//     city: "Волжский",
//     street: "Пушкина",
//   },
// };
// const user2 = {
//   name: "Дмитрий",
// };
// const city1 = user2.address && user2.address.city;
// console.log("Город (старый способ):", city1);

// const city2 = user2.address?.city;
// console.log("Город (новый способ):", city2);

// const street = user1.address?.street;
// console.log("Улица:", street);

// const admin = {
//   пате: "Администратор",
//   permissions: {
//     canDelete: () => true,
//   },
// };
// const guest = {
//   name: "Гость",
// };
// console.log("Админ может удалять?", admin.permissions?.canDelete?.());
// console.log("Гость может удалять?", guest.permissions?.canDelete?.());
// const company = {
//   name: "Tech Corp",
//   employees: [
//     { name: "Надежда", role: "Developer" },
//     { name: "Анна", role: "Designer" },
//   ],
// };
// const startup = {
//   name: "New Startup",
// };
// console.log("Первый сотрудник:", company.employees?.[0]?.name);
// console.log("Первый сотрудник стартапа:", startup.employees?.[0]?.name);

// console.log("Nullish Coalescing");
// const value1 = 0;
// const value2 = "";
// const value3 = false;
// const value4 = null;
// const value5 = undefined;

// console.log('value1 || "default":', value1 || "default");
// console.log('value2 || "default":', value2 || "default");
// console.log('value3 || "default":', value3 || "default");

// console.log('value1 ?? "default":', value1 ?? "default");
// console.log('value2 ?? "default":', value2 ?? "default");
// console.log('value3 ?? "default":', value3 ?? "default");
// console.log('value4 ?? "default":', value4 ?? "default");
// console.log('value5 ?? "default":', value5 ?? "default");

// function displayUserSettings(settings) {
//   const theme = settings?.theme ?? "light";
//   const fontSize = settings?.fontSize ?? 14;
//   const notifications = settings?.notifications ?? true;

//   console.log("Настройки пользователя:");
//   console.log("Тема:", theme);
//   console.log("Размер шрифта:", fontSize);
//   console.log("Уведомления:", notifications);
// }
// displayUserSettings({ theme: "dark", fontSize: 16 });
// displayUserSettings({ notifications: false });
// displayUserSettings({});

// const apiResponse = {
//   data: {
//     user: {
//       profile: {
//         settings: {
//           language: "ru",
//         },
//       },
//     },
//   },
// };
// const language = apiResponse?.data?.user?.profile?.settings?.language ?? "en";
// console.log("Язык:", language);
// const emptyResponse = {};
// const defaultLanguage=emptyResponse?.data?.user?.profile?.
// settings?.language ?? "en";
// console.log("Язык по умолчанию:", defaultLanguage); 

const order = {
    orderId: "ORD-12345",
    customer: {
        name: "Иван Петров",
        email: "ivan@example.com",
        phone: "+7 (999) 123-45-67"
    },
    shipping: {
        address: {
            street: "ул. Ленина, д. 10, кв. 25",
            city: "Москва",
            zipCode: "101000"
        },
        method: "Курьерская доставка",
    },
    payment: null, 
    items: [
        { name: "Ноутбук", price: 75000, quantity: 1 },
        { name: "Мышь", price: 1500, quantity: 2 }
    ]
};
function displayOrder(order) {
    console.log("=".repeat(50));
    console.log(" ИНФОРМАЦИЯ О ЗАКАЗЕ");
    console.log("=".repeat(50));
    
    console.log("\n ИНФОРМАЦИЯ О ЗАКАЗЧИКЕ:");
    console.log(`   Имя: ${order.customer?.name ?? "Не указано"}`);
    console.log(`   Email: ${order.customer?.email ?? "Не указан"}`);
    console.log(`   Телефон: ${order.customer?.phone ?? "Не указан"}`);
    console.log("\n ИНФОРМАЦИЯ О ДОСТАВКЕ:");
    console.log(`   Способ доставки: ${order.shipping?.method ?? "Не выбран"}`);
    console.log(`   Трек-номер: ${order.shipping?.trackingNumber ?? "Не назначен"}`);
    console.log(`   Адрес: ${order.shipping?.address?.street ?? "Не указан"}`);
    console.log(`   Город: ${order.shipping?.address?.city ?? "Не указан"}`);
    console.log(`   Индекс: ${order.shipping?.address?.zipCode ?? "Не указан"}`);
    console.log("\n ИНФОРМАЦИЯ ОБ ОПЛАТЕ:");
    console.log(`   Статус оплаты: ${order.payment?.status ?? "Ожидает оплаты"}`);
    console.log(`   Способ оплаты: ${order.payment?.method ?? "Не выбран"}`);
    console.log(`   Сумма оплаты: ${order.payment?.amount ?? "0"} ₽`);
    console.log(`   Номер транзакции: ${order.payment?.transactionId ?? "Отсутствует"}`);
    console.log("\n ТОВАРЫ В ЗАКАЗЕ:");
    if (order.items && order.items.length > 0) {
        let totalAmount = 0;
        order.items.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            totalAmount += itemTotal;
            console.log(`   ${index + 1}. ${item.name}`);
            console.log(`      Цена: ${item.price} ₽ × ${item.quantity} шт. = ${itemTotal} ₽`);
        });
        console.log(`\n   ИТОГО: ${totalAmount} ₽`);
    } else {
        console.log("   Нет товаров в заказе");
    }
    console.log("\n ОБЩАЯ ИНФОРМАЦИЯ:");
    console.log(`   Номер заказа: ${order.orderId ?? "Не присвоен"}`);
    console.log(`   Дата заказа: ${order.orderDate ?? new Date().toLocaleDateString()}`);
    console.log(`   Комментарий: ${order.comment ?? "Без комментариев"}`);
    
    console.log("\n" + "=".repeat(50));
}
console.log("Пример 1: Заказ с частично заполненными данными\n");
displayOrder(order);
console.log("\n\nПример 2: Заказ с полностью заполненными данными\n");

const fullOrder = {
    orderId: "ORD-67890",
    orderDate: "2024-01-15",
    comment: "Позвонить перед доставкой",
    customer: {
        name: "Анна Смирнова",
        email: "anna@example.com",
        phone: "+7 (916) 987-65-43"
    },
    shipping: {
        address: {
            street: "пр. Вернадского, д. 25, кв. 101",
            city: "Москва",
            zipCode: "119415"
        },
        method: "СДЭК",
        trackingNumber: "TRK-123456789"
    },
    payment: {
        status: "Оплачен",
        method: "Банковская карта",
        amount: 86500,
        transactionId: "TXN-987654321"
    },
    items: [
        { name: "Смартфон", price: 65000, quantity: 1 },
        { name: "Чехол", price: 1500, quantity: 2 },
        { name: "Защитное стекло", price: 1000, quantity: 1 }
    ]
};

displayOrder(fullOrder);
console.log("\n\nПример 3: Заказ с минимальными данными\n");

const minimalOrder = {
    orderId: "ORD-00001",
    customer: {
        name: "Тестовый пользователь"
    }
};

displayOrder(minimalOrder);