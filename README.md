#### Волков Кирилл 2024 для лицея №130 г. Екатеринбург

# Инструкция по работе с репозиторием

## Перед началом работы в классе

Можете открыть репозиторий в браузере и смотреть эту инструкцию в нем
[ссылка](https://github.com/caimanchik/schoolSeminar)

Когда включили компьютер __*обязательно*__ откройте консоль в VSCode ```ctrl + ` ``` и перейдите в ней в директорию schoolSeminar 

```
cd ./schoolSeminar
```

Проверить, в какой директории вы сейчас находитесь 

```
pwd
```

Затем установите пакеты, так как при перезагрузке компьютера они удаляются

```
npm i
```

Можете приступать к работе

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

Во многих задачах есть функция ```demo```, которая будет выолняться независимо от тестов. В ней вы можете отлаживать работу вашего решения и эксперементировать с входными данными функций. Не удаляйте ее и не изменяйте ее объявление - перестанут запускаться тесты

## Тесты
После выполнения задания откройте консоль в VSCode ```ctrl + ` ```

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

Откройте консоль в VSCode ``` ctrl + ` ```

Введите команду 
```
npm run sandbox 
```

В этом режиме песочница запускается в среде Node.js

### Выполнение песочницы в браузере

Так же есть режим выполнения песочницы в браузере 

Откройте консоль в VSCode ``` ctrl + ` ```

Введите команду 
```
npm run sandboxBrowser 
```

Октройте песочницу в браузере по адресу, написанному в консоли, Дефолтный адрес ``` http://127.0.0.1:8080 ```

Откройте консоль в браузере ``` F12 -> раздел 'Консоль' ```

В консоли появится надпись ``` Песочница работает! ```

## Если решили поработать с репозиторием дома

Скачайте NodeJS с [официального сайта](https://nodejs.org/en)

Скачайте VSCode c [официального сайта](https://code.visualstudio.com/)

Скачайте этот репозиторий с гитхаба

Откройте VSCode

Откройте консоль в VSCode ``` ctrl + ` ```

Введите в консоли команду 
``` 
npm i 
```

Дождитесь выполнения и готово! Теперь можно выполнять задания, запускать тесты и песочницу

Учтите, что репозиторий может обновляться. Чтобы скачать обновления, введите в консоли

__При этом все ваши локальные изменения не сохранятся__

```
git pull -f origin lection1
npm i
```
