//1. Создайте объект person, который содержит следующие свойства: name (строка), age (число), hobby (строка).

let person = {
    name: "Имя",
    age: 25,
    hobby: "Хобби"
  };
 // 2. Используя объект person, напишите код, который выводит имя человека в консоль.
 
 console.log(person.name);
  
//3. Измените возраст person на 30.
  person.age = 30;
  
// 4. Добавьте новое свойство job в объект person.
  person.job = "Работа";
  
// 5. Удалите свойство hobby из объекта person.
  delete person.hobby;
  
// 6. Напишите цикл, который перебирает все свойства объекта person и выводит их в консоль.
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  
// 7. Добавьте метод greet в объект person, который выводит приветствие в консоль.
  person.greet = function() {
    console.log("Привет!");
  };
  
 // 8. Создайте объект car, который содержит свойства model и engine. Свойство engine должно быть объектом с свойствами fuel и volume.
  let car = {
    model: "Модель",
    engine: {
      fuel: "Топливо",
      volume: "Объем"
    }
  };
  
// 9.Копирование объектов: Создайте копию объекта person.
  let personCopy = Object.assign({}, person);
  
// 10. Сравните два объекта: оригинальный person и его копию.
  console.log(JSON.stringify(person) === JSON.stringify(personCopy));