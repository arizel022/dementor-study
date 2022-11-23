

// Скрипт появления мобильного меню на js


// Чтобы скрипт появления модального окна работал так, как нам нужно, необходимо добавить в разметку специальные атрибуты, по которым скрипт будет обращаться к нужным нам элементам.

// data-menu-button - на кнопку вызова мобильного меню.
// data-menu - на само мобильное меню

// Начальное состояние мобильного меню - скрытое. Поэтому в начальном состоянии у мобильного меню нет никаких технических классов в разметке. В стилях меню скрыто с помощью transform или другого свойства. При клике на кнопку вызова меню сама кнопка и мобильное меню получают класс is-open. По данному классу мобильное меню получает переопределяющие свойства, которые делают его видимым.


(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");
    });
})();