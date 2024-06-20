import { demo, whatDoesThePetSay } from "../../tasks/lection3/2"
import * as colors from "../colors"

console.log(colors.Bright, "")
console.log(colors.FgCyan, "Скрипт запущен. Можете не прекращать его выполнение - изменения применяются автоматически")

function demoTest() {
    console.log(colors.FgWhite, "Демонстрационный вызов")
    demo()
}

const cat = {
    name: 'Pushok',
    meow: () => 'meow!'
};

const dog = {
    name: 'Bobik',
    bark: () => 'bark!',
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
                return whatDoesThePetSay(cat)
            },
            expected: 'meow!',
            name: 'Кошка должна мяукать'
        },
        {
            actual: () => {
                return whatDoesThePetSay(dog)
            },
            expected: 'bark!',
            name: 'Собака должна гавкать'
        },
        {
            actual: () => {
                // @ts-ignore
                return whatDoesThePetSay({})
            },
            expected: '',
            name: 'Если передана ни кошка ни собака - не говорить ничего'
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
        console.log(colors.FgGreen, "Задача 2 решена")
    else {
        console.log(colors.FgRed, "Тесты не пройдены\nНазвания непройденных тестов:")
        errors.forEach(e => console.log(e))
    }
}

demoTest()
test()
