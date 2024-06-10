// Используя типизацию массивов, напишите функцию, которая принимает строку, 
// содержащую предложение на русском языке, а возвращает строку, 
// где каждое слово в предложении начинается с большой буквы.
// При этом порядок слов должен сохраняться.

// запуск тестов npm run 2.3


//! Не меняйте название функции - не пройдете тесты
export function capitalazeWords(text: string): string{
    return text;
}


//! Вы увидите результат вызова скрипта, когда запустите тесты. 
//! Не меняйте название функции, содержимое в вашем распоряжении
export function demo(): void {
    const text = 'оно работает!'
    
    console.log(capitalazeWords(text)) // Должно получиться 'Оно Работает!'
}





































//? Подсказка
//? Разделите строку по пробелам и работайте с каждым словом отдельно
//? Если тесты падают на пустых и пробельных строках - просто добавьте проверку на это