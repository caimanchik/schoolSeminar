// Чтобы различать пользователей и администраторов, необходимо изменить функцию logPerson. 
// Это позволит ей выводить соответствующую дополнительную информацию в зависимости от типа Person.
// Можно использовать условный оператор if, который проверяет, является ли объект типом Admin. 
// И если да, то использовать значение свойства role.А в противном случае использовать значение свойства occupation.
// Вам необходимо модифицировать функцию getPersonInfo

// Для запуска тестов: npm run 3.4

type Human = {
    name: string;
    age: number;
}

type User = Human & {
    occupation: string;
}

type Admin = Human & {
    role: string;
}

type Person = User | Admin;

//! Не меняйте название функции - не пройдете тесты
export function getPersonInfo(person: Person): string {
    let additionalInformation: string = '';
    
    if (person.role) {
        additionalInformation = person.role;
    } else if (person.occupation) {
        additionalInformation = person.occupation;
    }
    return `${person.name}, ${person.age}, ${additionalInformation}`
}

//! Вы увидите результат вызова скрипта, когда запустите тесты. 
//! Не меняйте название функции, содержимое в вашем распоряжении
export function demo() {
    console.log(getPersonInfo({
        name: 'Shumaher',
        age: 125,
        role: 'vegetable'
    }))                              // Shumaher, 125, vegetable
    
    console.log(getPersonInfo({
        name: 'Hamilton',
        age: 25,
        occupation: 'Mercedes'
    }))                              // Hamilton, 25, Mercedes
}








































//? Подсказка
//? Используйте тайпгарды, только они вас спасут
//? Их должно быть 3