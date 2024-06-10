// У вас есть готовый код, сейчас нужно: 
// определить тип User и использовать его в коде, 
// избавиться от ошибок TypeScript

// для этой задачи нет тестов)))
// Но вы можете посмотреть на работающий код запустив 
// npm run 2.6


export type User = unknown;

export const users: unknown[] = [
    {
        name: 'Roman Abramov',
        age: 25,
        occupation: 'Millionaire'
    },
    {
        name: 'Andrey Fox',
        age: 23,
        occupation: 'Developer'
    }
];

export function logPerson(user: unknown) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);


































//? Подсказка
//? Подсказывать тут нечего)