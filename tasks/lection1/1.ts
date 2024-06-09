// Типизировать данный код
// Для запуска тестов npm run 1.1


//! Не меняйте название функции - не пройдете тесты
export function findLongestWord(text) {
    let whiteSpace = ' '
    
    return text
        .split(whiteSpace)                      // Какой тип у этой переменной?
        .sort((a, b) => b.length - a.length)[0] // В стрелочной функции тоже можно добавить типизацию для понимания
}

//! Вы увидите результат вызова скрипта, когад запустите тесты. 
//! Не меняйте название функции, содержимое в вашем распоряжении
export function demo(): void {
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni facilis minus! Doloribus numquam earum quod soluta adipisci, dolores unde obcaecati quos, sint ea deleniti nobis modi placeat, expedita iste inventore quidem ipsam magni molestiae ex asperiores. Ipsum, labore. Debitis, obcaecati. Totam, cum. Dignissimos omnis adipisci explicabo neque vero. Ad.'
    
    console.log(findLongestWord(text))
}