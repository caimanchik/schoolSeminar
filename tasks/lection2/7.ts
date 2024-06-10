// В этом задании нужно доработать код, чтобы раздать роль администратора всем, 
// кто хочет помочь наполнять комьюнити фичами.
// Для этого можно ввести новый тип данных Admin, который будет содержать поля name, age и role. 
// Затем нужно обновить массив persons таким образом, чтобы он мог хранить объекты типов User и Admin.
// Также нужно обновить функцию logPerson, 
// чтобы она могла выводить в консоль информацию о пользователях с ролью администратора

// для этой задачи нет тестов)))
// Но вы можете посмотреть на работающий код запустив 
// npm run 2.7


type User = {
    name: string;
    age: number;
    occupation: string;
}

type Admin = {
    name: string;
    age: number;
    role: string;
}

export type Person = unknown; // todo

export const persons: User[] = [   // todo
    {
        name: 'Roman Abramov',
        age: 25,
        occupation: 'Millionaire'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Andrey Fox',
        age: 23,
        occupation: 'Developer'
    }
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(user: User) { // todo
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);








































//? Подсказка
//? Смотри задание, там и так все написано