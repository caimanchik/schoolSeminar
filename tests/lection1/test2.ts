import { demo, howOldWillBeActorAfterTwentyYears } from "../../tasks/lection1/2"
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
    
    type Actor = {
        name: string;
        firstName: string;
        country: string;
        city: string;
        hasOskar: boolean;
        filmsCount: number;
        age: number;
        languages: string[];
    }
    
    type Func = (actor: Actor) => number
    
    const func: Func = howOldWillBeActorAfterTwentyYears;
    
    
    const actor = {
        age: 20
    }
    
    // @ts-ignore
    if (func(actor) === 40)
        console.log(colors.FgGreen, "Задача 2 решена")
    else 
        console.log(colors.FgRed, "Тесты не пройдены")
}

demoTest()
test()
