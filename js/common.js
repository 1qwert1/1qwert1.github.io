$(function () {


    //выровнять блоки по высоте
    $(".equal").equalHeights();


    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function () {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };

    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Thank you!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});


//показать скрытый див после загрузки страницы
$(document).ready(function(){
    // $('.main-lesson').show();
    $('.main-lesson').fadeTo(400, 1);
});

//построение вопроса к первому уроку
var dic = "Agree-Соглашаться,Allow-Позволять,Answer-Отвечать,Ask-Спрашивать,Be(Was)-Быть,Become(Became)-Становиться," +
    "Begin(Began)-Начинать,Believe-Верить,Borrow-Занимать,Break(Broke)-Ломать,Bring(Brought)-Приносить,Buy(Bought)-Покупать," +
    "Call-Звонить,Can(Could)-Мочь,Carry-Носить,Change-Менять,Close-Закрывать,Come(Came)-Приходить,Cook-Готовить," +
    "Copy-Копировать,Cut(Cut)-Резать,Decide-Решать,Discuss-Обсуждать,Do(Did)-Делать,Eat(Ate)-Есть,Explain-Объяснять," +
    "Fall(Fell)-Падать,Feel(Felt)-Чувствовать себя,Fill-Заполнять,Find(Found)-Находить,Finish-Заканчивать,Follow-Следовать," +
    "Fly(Flew)-Лететь,Forget(Forgot)-Забывать,Get(Got)-Получать,Give(Gave)-Давать,Go(Went)-Идти,Happen-Случаться,Have(Had)-Иметь," +
    "Hear(Heard)-Слушать,Help-Помогать,Hold(Held)-Держать,Keep(Kept)-Держать,Know(Knew)-Знать,Learn-Учить,Leave(Left)-Оставлять," +
    "Like-Нравится,Listen-Слушать,Live-Жить,Look-Смотреть,Loose(Lost)-Терять,Make(Made)-Делать,May-Иметь возможность," +
    "Mean(Meant)-Значить,Meet(Met)-Встречать,Move-Двигать,Must-Должен,Need-Нуждаться,Open-Открывать,Pay(Paid)-Платить," +
    "Play-Играть,Promise-Обещать,Put(Put)-Класть,Read(Read)-Читать,Remember-Помнить,Run(Ran)-Бежать,Say(Said)-Сказать,See(Saw)-Видеть," +
    "Sell(Sold)-Продавать,Send(Sent)-Посылать,Set(Set)-Ставить,Sell(Sold)-Продавать,Should-Следует,Show(Showed)-Показывать," +
    "Sit(Sat)-Сидеть,Sleep(Slept)-Спать,Speak(Spoke)-Говорить,Spend(Spent)-Проводить,Stand(Stood)-Стоять,Start-Начинать,Stop-Останавливать," +
    "Study-Изучать,Suggest-Предлагать,Take(Took)-Брать,Talk-Говорить,Tell(Told)-Сказать,Think(Thought)-Думать,Travel-Путешествовать," +
    "Try-Пытаться,Turn-Поворачивать,Understand(Understood)-Понимать,Use-Использовать,Wait-Ждать,Wake(Woke) up-Просыпаться," +
    "Walk-Ходить,Watch-Смотреть,Win(Won)-Выигрывать,Work-Работать,Worry-Беспокоиться,Write(Wrote)-Писать";

var arrDicEngl = dic.split(',');
var all = document.getElementById('hidden');
var but = document.getElementById('vision');
var arrTipe = ['вопросительное', 'утвердительное', 'отрицательное'];
var arrTime = ['будущего', 'настоящего', 'прошлого'];
function chengFunkVis() {
    all.classList.remove('hidden');
    but.classList.add('hidden')
}

function chengFunk() {
    cheng('question', arrDicEngl, arrTipe, arrTime, [], ' ');
    all.classList.add('hidden');
    but.classList.remove('hidden')
}

function cheng(element, arr1, arr2, arr3, arr4, txt) {
    var elem = document.getElementsByClassName('change');
    if(elem[1].innerHTML =='Начать')
        elem[1].innerHTML = 'Изменить';

    var el = document.getElementById(element);

    el.innerHTML = newText(arr1, arr2, arr3, arr4, txt);
}

function randQwestion(arr) {
    try {
        var rendNumCount = arr.length;
    } catch (e) {
    }
    var rand_1 = Math.floor(Math.random() * rendNumCount);
    var rand_2 = Math.floor(Math.random() * 6);
    var txt = "";
    if (arguments.length !== 0) {
        switch (rand_1) {
            case 0:
                txt = arr[0];
                break;
            case 1:
                txt = arr[1];
                break;
            case  2:
                txt = arr[2];
                break;
            case  3:
                txt = arr[3];
                break;
            case  4:
                txt = arr[4];
                break;
            case  5:
                txt = arr[5];
                break;
            case  6:
                txt = arr[6];
                break;
        }
    } else {
        switch (rand_2) {
            case 1:
                txt = 'Я';
                break;
            case 2:
                txt = 'Ты';
                break;
            case 3:
                txt = 'Мы';
                break;
            case 4:
                txt = 'Они';
                break;
            case 5:
                txt = 'Он';
                break;
            case 0:
                txt = 'Она';
                break;
        }
    }
    return txt;
}

function stringFromArr(arr) {
    try {
        var count = arr.length;
    } catch (e) {
    }
    var str = arr[Math.round(Math.random() * count)];
    var newArr = str.split('-');
    var txt = '<i style="color:red">';
    for (var i = 0; i < newArr.length - 1; i++) {


        txt += '<a href="https://translate.google.com.ua/?hl=ru#en/ru/' + newArr[i].toLowerCase() + '" target="_blank">'
            + newArr[i].toLowerCase() + '</a>';


    }
    return txt += '</i> - ' + '<i style="color:#4288B5">' + newArr[newArr.length - 1].toLowerCase() + '</i>';
}

function newText(arr1, arr2, arr3, arr4, text) {
    var txt = '';

    if (text !== undefined) {
        txt = 'Составте ' + '<i style="color:#4288B5">' + randQwestion(arr2)
            + '</i>' + " предложение " + '<i style="color:#4288B5">' +
            randQwestion(arr3) + '</i>' + ' времени' +
            ' ' + 'с глаголом: "' + stringFromArr(arr1)
            + '" (для местоимения "' + '<i style="color:#4288B5">' + randQwestion() + '</i>' + '") ' + text;
    } else {
        txt = 'Составте <i style="color:#4288B5">' + randQwestion(arr2)
            + '</i>' + " предложение " + ' с вопросом: <i style="color:#4288B5">' +
            stringFromArr(arr4) + '</i> для ' + '<i style="color:#4288B5"> ' +
            randQwestion(arr3) + '</i>' + ' времени' +
            ' ' + 'с глаголом: "' + stringFromArr(arr1)
            + '" (для местоимения "' + '<i style="color:#4288B5">' + randQwestion() + '</i>' + '")';
    }

    return txt;
}

//построение вопроса к первому уроку

//построение вопроса ко второму уроку

var qwestion = 'What?-Что? Какой?,Why?-Почему? Зачем?,Who?-Кто?,Where?-Где? Куда?,When?-Когда?,How?-Как?';
var qwestArr = qwestion.split(',');
function chengFunk2less() {
    cheng('question', arrDicEngl, ['вопросительное'], arrTime, qwestArr);
    all.classList.add('hidden');
    but.classList.remove('hidden')

}

//построение вопроса ко второму уроку

function chengFunk3less() {
    cheng('question', arrDicEngl, arrTipe, arrTime, [], 'обозначающее действие в состоянии процесса - если' +
        ' прошлое или будущее время то укажите конкретное время этого процесса.');
    all.classList.add('hidden');
    but.classList.remove('hidden')
}

//каруселька start
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        },
        navText: ['&#8592; назад', 'вперед &#8594;']
    })
});

//каруселька and

//нижняя навигация
var div = document.createElement('div');
var loc = location.pathname;

var butPrev = '';
var butNext = '';

function replacerPrev(match) {
    return parseInt(match) - 1;
    
}
if (loc == '/index.html' || loc == '/') {
    butPrev = '/lesson16.html';
} else if (loc == '/lesson1.html') {
    butPrev = '/';
}else {
    butPrev = loc.replace(/[0-9]+/g, replacerPrev);
}


function replacerNext(match) {
    return parseInt(match) + 1;

}
if (loc == '/index.html' || loc == '/') {
    butNext = '/lesson1.html';
} else if (loc == '/lesson16.html') {
    butNext = '/';
}else {
    butNext = loc.replace(/[0-9]+/g, replacerNext);
}


div.className = "_navigation";
div.innerHTML = '<a href="'+butPrev +'">&#8592;</a>&nbsp;&nbsp;&nbsp;<a href="/index.html">На главную</a>&nbsp;&nbsp;&nbsp;<a href="'+butNext+'">&#8594;</a>';

document.body.appendChild(div);

//нижняя навигация

// alert(document.documentElement.clientWidth)