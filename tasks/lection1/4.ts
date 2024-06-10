// Найти и исправить ошибку в чужом коде
// В этой задаче нет тестов! 


type Human = {
    name: string,
    age: number,
    gender: 'male' | 'female',
}

function someFunc(data: Human[]): number {
    return data.reduce((acc: number, current: Human) => {
            acc + Number(current.age > 18 && current.gender === 'male'), 0);
        };
}



































//? Подсказка
//? Здесь ее не будет)))