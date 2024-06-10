import { demo, arrayDiff } from "../../tasks/lection2/1"
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
        a: number[],
        b: number[],
        expected: number[],
        name: string
    }
    
    const cases: Case[] = [
        {
            a: [1, 2],
            b: [1],
            expected: [2],
            name: 'Убрать 1 неповторяющийся элемент'
        },
        {
            a: [1, 2, 3, 4],
            b: [5, 6],
            expected: [1, 2, 3, 4],
            name: 'Нет пересечений между двумя массивами'
        },
        {
            a: [2, 2, 2, 2, 3],
            b: [2],
            expected: [3],
            name: 'Убирает повторяющийся элемент'
        },
        {
            a: [],
            b: [1],
            expected: [],
            name: 'Работает с пустым массивом a'
        },
        {
            a: [1],
            b: [],
            expected: [1],
            name: 'Работает с пустым массивом b'
        },
    ]
    
    let errors: string[] = []
    
    cases.forEach(testCase => {
        const actual = arrayDiff(testCase.a, testCase.b)
        
        let isRight = true
        
        actual.forEach((e, i) => {
            isRight = isRight && (e === testCase.expected[i])
        })
        
        if (!isRight)
            errors.push(testCase.name)
    })
    
    if (errors.length === 0)
        console.log(colors.FgGreen, "Задача 1 решена")
    else {
        console.log(colors.FgRed, "Тесты не пройдены\nНазвания непройденных тестов:")
        errors.forEach(e => console.log(e))
    }
}

demoTest()
test()
