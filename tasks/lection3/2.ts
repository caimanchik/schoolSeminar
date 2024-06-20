// Реализуйте функцию whatDoesThePetSay, которая должна возвращать результат работы функции meow, 
// если аргументом передали «кота», и результат работы функции bark, если аргументом передали «собаку».
// Для запуска тестов: npm run 3.2


type Cat = {
    name: string,
    meow: () => string,
}

type Dog = {
    name: string,
    bark: () => string,
}

const cat: Cat = {
    name: 'Pushok',
    meow: () => 'meow!'
};

const dog: Dog = {
    name: 'Bobik',
    bark: () => 'bark!',
}

//! Не меняйте название функции - не пройдете тесты
export function whatDoesThePetSay(pet: Dog | Cat): string {
    // todo
    
    return ''
}

//! Вы увидите результат вызова скрипта, когда запустите тесты. 
//! Не меняйте название функции, содержимое в вашем распоряжении
export function demo() {
    console.log(whatDoesThePetSay(dog)) // bark!
    console.log(whatDoesThePetSay(cat)) // meow!
}




































//? Подсказка 
//? Используйте тайпгарды