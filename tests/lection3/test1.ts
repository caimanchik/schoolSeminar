import { demo, getHouse } from "../../tasks/lection3/1"
import * as colors from "../colors"

console.log(colors.Bright, "")
console.log(colors.FgCyan, "Скрипт запущен. Можете не прекращать его выполнение - изменения применяются автоматически")

function demoTest() {
    console.log(colors.FgWhite, "Демонстрационный вызов")
    demo()
}

type House = {
    street: string,
    apartmentCount: number,
    buildInfo: {
        year: number,
        material: string,
    }
};

function test() {
    console.log()
    console.log(colors.FgWhite, "Вызов теста")
    
    type Case = {
        checkCorrect: () => void,
        name: string
    }
    
    const cases: Case[] = [
        {
            checkCorrect: () => {
                const house = getHouse()
                
                house.street.toString()
            },
            name: 'У дома должна быть улица'
        },
        {
            checkCorrect: () => {
                const house = getHouse()
                
                house.apartmentCount.toFixed()
            },
            name: 'У дома должно быть количество квартир'
        },
        {
            checkCorrect: () => {
                const house = getHouse()
                
                house.buildInfo.toString()
            },
            name: 'У дома должна быть информация о застройке'
        },
        {
            checkCorrect: () => {
                const house = getHouse()
                
                house.buildInfo.year.toFixed()
            },
            name: 'У дома должен быть год застройки'
        },
        {
            checkCorrect: () => {
                const house = getHouse()
                
                house.buildInfo.material.toString()
            },
            name: 'У дома должен быть материал'
        },
    ]
    
    let errors: string[] = []
    
    cases.forEach(testCase => {
        try {
            testCase.checkCorrect()
        }
        catch (err) {
            errors.push(testCase.name)
        }
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
