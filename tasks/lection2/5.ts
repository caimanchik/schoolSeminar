// Реализуйте функцию areEqual, которая принимает два объекта в качестве аргументов. Не забывайте про типизацию.
// Если два переданных объекта содержат одинаковое количество ключей
// с одинаковыми значениями и одинаковыми названиями ключей — функция должна вернуть true.
// Иначе — false

// запуск тестов npm run 2.5


//! Не меняйте название функции - не пройдете тесты
export function areEqual(obj1: object, obj2: object): boolean {
    return obj1 === obj2;
}


//! Вы увидите результат вызова скрипта, когда запустите тесты. 
//! Не меняйте название функции, содержимое в вашем распоряжении
export function demo(): void {
    const obj1 = {
        a: 1
    }
    
    const obj2 = {
        a: 3
    }
    
    console.log(areEqual(obj1, obj2)) // Должно получиться false
}




































//? Подсказка
//? Проверьте что данные на входе - действительно объекты
//? Используйте Object.keys() для получения ключей объекта
//? for ... of ... для итерации по ключам объекта
//? Когда будете сравнивать значения по ключу, ts будет ругаться - используйте специальную конструкцию 
//? // @ts-ignore - она отключает типизацию для следующей строки 