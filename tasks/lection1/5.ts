// Используя примитивную типизацию с помощью TypeScript, напишите код, который:
// 1) Принимает строку из нескольких слов, разделённых пробелами, 
// 2) Возвращает строку со словами в отзеркаленном виде, причём последовательность слов должна быть сохранена
// Для зауска тестов npm run 1.5

//! Не меняйте название функции - не пройдете тесты
export function mirrorWords(text) {
    // todo 
}

//! Вы увидите результат вызова скрипта, когда запустите тесты. 
//! Не меняйте название функции, содержимое в вашем распоряжении
export function demo(): void {
    const text = 'Это пример!'
    console.log(mirrorWords(text))   // Должно получиться "отЭ !ремирп"
}




































//? Подсказка
//? Сначала разделите слова по пробелу
//? Отзеркальте каждое слово (можно для этого создать отедльную функцию)
//? Сконкатенируйте слова обратно в строку