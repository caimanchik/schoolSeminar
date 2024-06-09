import { demo, powDigits } from "../../tasks/lection1/6"
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
    
    const num1 = 40567
    const num2 = -333
    const num3 = 0
    
    if (powDigits(num1) === 160253649 && powDigits(num2) === -333 && powDigits(num3) === 0)
        console.log(colors.FgGreen, "Задача 6 решена")
    else 
        console.log(colors.FgRed, "Тесты не пройдены")
}

demoTest()
test()
