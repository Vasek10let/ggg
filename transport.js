$('.slick').slick();

AOS.init({
    // глобальные настройки:
    disable: false, // принимает следующие значения: "телефон", "таблетка", "мобильный", булевская переменная, выражение или функция
    startEvent: 'DOMContentLoaded', // имя события, которое отправляется на документе, что АОС должны инициализировать на
    initClassName: 'aos-init', // класс применяется после инициализации
    animatedClassName: 'aos-animate', // класс применяется на анимации
    useClassNames: false, // если true, то будут добавлять контент данных-АОС` а классы на свитке
    disableMutationObserver: false, // отключает режим автоматического мутации' обнаружения (дополнительно)
    debounceDelay: 50, // задержка на дребезга используется при изменении размера окна (дополнительно)
    throttleDelay: 99, // задержка на дроссель используется при прокрутке страницы (передовая)


    // параметры, которые могут быть переопределены для каждого элемента в отдельности, путем сведения-АОС -* атрибуты:
    offset: 120, // смещение (в пикселях) от оригинальной точки запуска
    delay: 0, // значения от 0 до 3000, с шагом 50 мс
    duration: 900, // значения от 0 до 3000, с шагом 50 мс
    easing: 'ease', // значение по умолчанию для ослабления АОС анимации
    once: true,// ли анимация должно произойти только один раз - во время прокрутки вниз
    mirror: false, // должны ли элементы анимироваться при прокрутке мимо них
    anchorPlacement: 'top-bottom', // определяет, какое положение элемента относительно окна должно вызвать анимацию

});