import { demo, getPersonInfo } from "../../tasks/lection3/4"
import * as colors from "../colors"

console.log(colors.Bright, "")
console.log(colors.FgCyan, "Скрипт запущен. Можете не прекращать его выполнение - изменения применяются автоматически")

function demoTest() {
    console.log(colors.FgWhite, "Демонстрационный вызов")
    demo()
}

const p1 = {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
}

const p2 = {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator'
}

function test() {
    console.log()
    console.log(colors.FgWhite, "Вызов теста")
    
    type Case = {
        actual: () => string,
        expected: string,
        name: string
    }
    
    const cases: Case[] = [
        {
            actual: () => {
                return getPersonInfo(p1)
            },
            expected: 'Max Mustermann, 25, Chimney sweep',
            name: 'Правильно возвращает occupation'
        },
        {
            actual: () => {
                return getPersonInfo(p2)
            },
            expected: 'Jane Doe, 32, Administrator',
            name: 'Правильно возвращает role'
        },
        {
            actual: () => {
                // @ts-ignore
                return getPersonInfo({})
            },
            expected: '',
            name: 'Не ломается из-за недалеких людей, которые решили использовать нашу функцию в usestrict=false режиме'
        },
    ]
    
    let errors: string[] = []
    
    cases.forEach(testCase => {
        try {
            if (testCase.actual() !== testCase.expected)
                errors.push(testCase.name)
        }
        catch (err) {
            errors.push(testCase.name)
        }
    })
    
    if (errors.length === 0)
        console.log(colors.FgGreen, "Задача 4 решена")
    else {
        console.log(colors.FgRed, "Тесты не пройдены\nНазвания непройденных тестов:")
        errors.forEach(e => console.log(e))
    }
}

demoTest()
test()
