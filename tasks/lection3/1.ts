// В этом задании нужно провести манипуляции над готовым кодом, понять причины проблем и решить их.
// Внимательно читайте ошибки в тестах которые пишутся в консоль
// После того как исправили ошибки - подумайте, что можно переписать,
// чтобы таких ошиоок не возникало в будущем

// Для запуска тестов: npm run 3.1


type House = {
    street: string,
    apartmentCount: number,
    buildInfo: {
        year: number,
        material: string,
    }
};


//! Не меняйте название функции - не пройдете тесты
export function getHouse(): House {
    const house = {} as House;
    
    // todo
    
    return house;
}

//! Вы увидите результат вызова скрипта, когда запустите тесты. 
//! Не меняйте название функции, содержимое в вашем распоряжении
export function demo(): void {
    const house = getHouse();

    console.log(`${house.street} st., ${house.apartmentCount} apartments total`);
    
    console.log(`build in ${house.buildInfo?.year}, build from ${house.buildInfo?.material} `);
}







































//? Подсказка
//? Все подсказки в консоли после запуска тестов