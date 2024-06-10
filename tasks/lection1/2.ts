// Найти и исправить ошибку в чужом коде
// Для запуска тестов npm run 1.2


const actor: {
    name: string;
    firstName: string;
    country: string;
    city: string;
    hasOskar: boolean;
    filmsCount: number;
    age: number;
    languages: string[];
} = {
    name: 'Michael',
    firstName: 'Ivanov',
    country: 'Russia',
    city: 'Makhachkala',
    hasOskar: false,
    filmsCount: 10,
    age: '14',
    languages: ['RU-ru', 'EN-us', 'TR-tr'],
};

//! Не меняйте название константы - не пройдете тесты
export const howOldWillBeActorAfterTwentyYears = (actor) => {
    return actor.age + 20;
}

//! Вы увидите результат вызова скрипта, когда запустите тесты. 
//! Не меняйте название функции, содержимое в вашем распоряжении
export function demo(): void {
    console.log(howOldWillBeActorAfterTwentyYears(actor))
}


























//? Подсказка 
//? вынесите тип объекта actor и добавьте типизацию в функцию
//? сделать это можно так type someType = { 
//?   name: string 
//? }
//? Затем используйте этот тип при передаче аргумента в функцию