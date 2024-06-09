import { demo, mirrorWords } from "../../tasks/lection1/5"
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
    
    const text = 'абоба зачем ТЫ Сюда залез?'
    
    if (mirrorWords(text) === 'абоба мечаз ЫТ адюС ?зелаз')
        console.log(colors.FgGreen, "Задача 5 решена")
    else 
        console.log(colors.FgRed, "Тесты не пройдены")
}

demoTest()
test()
