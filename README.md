# myPortfolio

Страничка, которая состоит из разных модулей, которые я пишу в процессе обучения.
Только недавно начал пользоваться ГитХабом и решил залить его сюда.
Он так же висит на моем бесплатном хостинге http://nik-karso.space/

Короткое описание модулей:

1. Простенькая анимация кнопок с индикатором включения, применялся только js

2. Переключаем меню в Бургер, полоски делал через :befor и :after, так же использовался только js

3. Лист ToDo, вводим задачу => нажимаем "Добавить задачу" и она падает в список "Нужно сделать", 
если ставим галочку задача переносится в список "Сделано", если ставим и там галочку - задача удаляется. Использовал Jquery

4. Простенький слайдер по кругу на Jquery, меняются картинки изменением атрибута "src", можно добавлять новые в любом количестве)

5. Стало интересно сделать часы, сначала написал кучу кода и сделал смещенеи стрелки в CSS, потом зарефакторил, сократил и перенес все в Jquery
Задача была очень интересная, использовал setInterval() чтобы часы обновлялись в режиме реального времени)

6. Поставил себе задачу сделать карточки типа мини-галерея с анимацией и PopUp-ом при клике, делал на чистом js, 
ПопАп для каждой карточки прописывать посчитал не разумным, сделал генерацию на лету, т.е. при клике код подставляет значение нужной карточки в "src"

7. И тут меня понесло) Слышал про Канвас, решил попробовать пощупать.
В итоге с помощью отрисовки Квадрата сделал возможность нарисовать линию, но если быстро провести мышкой мы видели просто раздельные квадраты,
перешел на использование Линии, были запарки, зато очень интересно. Потом уже допилил Ширину, цвета и т.д.
Когда дал поиграть сыну понял что нужно было заканчивать линию если она уходит за пределы Канваса, 
в итоге просто отловил событие когда мышка уходит из Канваса с помощью mouseout )
Делал с использованием библеотеки Конвас и Jquery =)

8. Начал потихоньку изучать Vue js, первой задачей поставил себе сделать Лист Todo, надо еще его засунуть в этот проект как отдельный модуль

9. Продолжил свое изучение Vue js и решил сделать мини-вариант Корзины, с отправкой данных на свою почту.
Кликаем на товары, они падают в корзину и там уже можно выбирать их кол-во и выдается общая стоимость.
Столкнулся с интересной проблемой: 
Начал просто присваивать массиву в корзине тот товар, но если мы кликаем не первый товар то первая li в v-for генерилась пустая
и началась какая-то пьянка, вывел массив увидел что первый элемент просто пустой, т.е. Null, почему то долго думал что с этим делать))))
В итоге понял что нужно просто "пушить" элементы в массив  и все заработало ура!)

Все остальное не вызвало никаких проблем, но когда я решил отправить все это дело на свою почту столкнулся с тем что я не мог понять как это делается)
Посоветовавшись со своим знакомым решил использовать для этого Axios и phpMailer, установил на своем компе OpenServer
И обнаружил что все бы круто, но приходят пустые данные, епт.
Покопавшись по просторам интернета понял что я отрубил срабатывание Submit и мои данные отправляются ни как Форма, емае
Нагуглил такую вещь как json_docode(), засунул в нее свой json и сделал из него массив
Ура, данные отправляются)
Выпилил из php файла код для своего мыла и добавил в js Алерт, которые просто выводит данные для отправки.

Осталось встроить в основной проект модуль 8 и 9 + сделать рефакторинг)


