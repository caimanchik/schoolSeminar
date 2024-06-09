import { demo, findLongestWord } from "../../tasks/lection1/1"
import * as colors from "../colors"

console.log(colors.Bright, "")
console.log(colors.FgCyan, "Скрипт запущен. Можете не прекращать его выполнение - изменения применяются автоматически")

function demoTest() {
    console.log(colors.FgWhite, "Демонстрационный вызов")
    demo()
}

function test() {
    console.log()
    console.log(colors.FgWhite, "Вызов теста")
    
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni facilis minus! Doloribus numquam earum quod soluta adipisci, dolores unde obcaecati quos, sint ea deleniti nobis modi placeat, expedita iste inventore quidem ipsam magni molestiae ex asperiores. Ipsum, labore. Debitis, obcaecati. Totam, cum. Dignissimos omnis adipisci explicabo neque vero. Ad.'
    
    if (findLongestWord(text) === 'consectetur')
        console.log(colors.FgGreen, "Задача 1 решена")
    else 
        console.log(colors.FgRed, "Тесты не пройдены")
}

demoTest()
test()
