import { demo, capitalazeWordsV2 } from "../../tasks/lection2/4"
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
    
    type Case = {
        text: string,
        expected: string,
        name: string
    }
    
    const cases: Case[] = [
        {
            text: 'a bc def',
            expected: 'A Def',
            name: 'Удаляет слово и приводит первые буквы слов к верхнему регистру'
        },
        {
            text: '',
            expected: '',
            name: 'Работает с пустыми строками'
        },
        {
            text: '123 да',
            expected: '123 Да',
            name: 'Не удаляет слово когда длина первого слова больше количества слов и приводит первые буквы слов к верхнему регистру'
        },
        {
            text: 'волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили. наверняка а может и не точно',
            expected: 'Волнуйтесь, Если Что-то Не Работает. Если Бы Всё Работало, Вас Бы Наверняка А Может И Не Точно',
            name: 'Удаляет слово в большом тексте и приводит первые буквы слов к верхнему регистру'
        },
        {
            text: '     ',
            expected: '     ',
            name: 'Работает со строкой из пробелов(подумайте над строкой длиной 0)'
        },
    ]
    
    let errors: string[] = []
    
    cases.forEach(testCase => {
        
        try {
            const actual = capitalazeWordsV2(testCase.text)
            
            if (actual !== testCase.expected)
            errors.push(testCase.name)
        }
        catch (err) {
            errors.push(testCase.name)
        }
    })
    
    if (errors.length === 0)
        console.log(colors.FgGreen, "Задача 4 решена")
    else {
        console.log(colors.FgRed, "Тесты не пройдены!\nНазвания непройденных тестов:")
        errors.forEach(e => console.log(e))
    }
}

demoTest()
test()
