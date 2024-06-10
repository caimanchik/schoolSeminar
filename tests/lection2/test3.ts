import { demo, capitalazeWords } from "../../tasks/lection2/3"
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
            text: 'работает',
            expected: 'Работает',
            name: '1 слово преобразует к верхнему регистру'
        },
        {
            text: '',
            expected: '',
            name: 'Работает с пустыми строками'
        },
        {
            text: '123 да',
            expected: '123 Да',
            name: 'Работает, если вместо букв цифры'
        },
        {
            text: 'Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили.',
            expected: 'Не Волнуйтесь, Если Что-то Не Работает. Если Бы Всё Работало, Вас Бы Уволили.',
            name: 'Преобразует слова в тексте'
        },
        {
            text: '     ',
            expected: '     ',
            name: 'Работает со строкой из пробелов'
        },
    ]
    
    let errors: string[] = []
    
    cases.forEach(testCase => {
        
        try {
            const actual = capitalazeWords(testCase.text)
            
            if (actual !== testCase.expected)
            errors.push(testCase.name)
        }
        catch (err) {
            errors.push(testCase.name)
        }
    })
    
    if (errors.length === 0)
        console.log(colors.FgGreen, "Задача 3 решена")
    else {
        console.log(colors.FgRed, "Тесты не пройдены!\nНазвания непройденных тестов:")
        errors.forEach(e => console.log(e))
    }
}

demoTest()
test()
