import { demo, areEqual } from "../../tasks/lection2/5"
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
        a: Object,
        b: Object,
        expected: boolean,
        name: string
    }
    
    const cases: Case[] = [
        {
            a: {
                p: 1
            },
            b: {
                p: 2
            },
            expected: false,
            name: 'Два объекта с одинаковыми свойствами и разными значениями'
        },
        {
            a: {
                
            },
            b: {
                
            },
            expected: true,
            name: 'Два пустых объекта'
        },
        {
            a: {
                p: 1
            },
            b: {
                
            },
            expected: false,
            name: 'Разное количество свойств в объектах'
        },
        {
            a: {
                
            },
            b: {
                p: 2
            },
            expected: false,
            name: 'Разное количество свойств в объектах'
        },
        {
            a: {
                p: 2
            },
            b: {
                p: 2
            },
            expected: true,
            name: 'Два одинаковых объекта'
        },
    ]
    
    let errors: string[] = []
    
    cases.forEach(testCase => {
        try {
            const actual = areEqual(testCase.a, testCase.b)
            
            if (actual !== testCase.expected)
                errors.push(testCase.name)
        }
        catch (err) {
            errors.push(testCase.name)
        }
    })
    
    if (errors.length === 0)
        console.log(colors.FgGreen, "Задача 5 решена")
    else {
        console.log(colors.FgRed, "Тесты не пройдены\nНазвания непройденных тестов:")
        errors.forEach(e => console.log(e))
    }
}

demoTest()
test()
