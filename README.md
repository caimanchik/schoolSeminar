# Инструкция по работе с репозиторием

## Задания

Задания находятся в папке ``` tasks/lection + номер_лекции ```

Откройте папку текущей лекции и найдете задание, которое необходимо выполнить

## Работа в файлах заданий

Открыв задание, вы увидите условие задачи в комментариях вверху файла. Прочитайте и выполните задание. После чего запустите тесты

В заданиях есть такие закоментированные строки
```
//! Не меняйте название константы - не пройдете тесты
```

Постарайтесь следовать этим инструкциям)

Если возникли трудности при выполнении задания - внизу во многих заданиях есть подсказки.
```
//? Подсказка
```
Старайтесь ими не пользоваться без особой необходимости. Всегда лучше подумать и дойти до решения самостоятельно

Если не удалось найти решение после прочтения подсказки - позовите меня

## Тесты
После выполнения задания откройте консоль ```ctrl + ` ```

Введите команду 
```
npm run номер_лекции.номер__задачи
```

Запустятся тесты. Все результаты выполнения будут написаны в консоль. Внимательно ознакомьтесь с результатами в консоли

Если в консоли висят ошибки компиляции - не пугайтесь их. Они помогают лучше понять, что же просходит не так, поэтому читайте их

После успешного прохождения теста завершаем выполнение задачи ``` ctrl + C в консоли``` 

## Пример
Требуется выполнить 1 задание 1 лекции

Открываем в проводнике VSCode файл по пути ``` tasks/lection1/1.ts ```

Выполняем задание, запускаем тесты командой 
```
npm run 1.1
```

Смотрим в консоль

## Песочница 
Есть файл песочницы ``` sandbox/index.ts ```.
Здесь можно делать все, что угодно - это никак не повлияет на тесты для заданий

### Выполение в среде Node.js

Откройте консоль ``` ctrl + ` ```

Введите команду 
```
npm run sandbox 
```

В этом режиме песочница запускается в среде Node.js

### Выполнение песочницы в браузере

Так же есть режим выполнения песочницы в браузере 

Откройте консоль ``` ctrl + ` ```

Введите команду 
```
npm run sandboxBrowser 
```

Октройте песочницу в браузере по адресу, написанному в консоли, Дефолтный адрес ``` http://127.0.0.1:8080 ```

Откройте консоль в браузере ``` F12 -> вкладка консоль ```

В консоли появится надпись ``` Песочница работает! ```

## Если решили скачать репозиторий дома

Скачали - теперь нужно установить зависимости 

Откройте консоль ``` ctrl + ` ```

Введите в консоли команду ``` npm i ```

Дождитесь выполнения и готово! Теперь можно выполнять задания, запускать тесты и песочницу