

// Скрипт появи мобільного меню на js


// Щоб скрипт модального вікна працював так, як нам потрібно, необхідно додати в розмітку спеціальні атрибути, якими скрипт буде звертатися до потрібних нам елементів.

// data-menu-button - на кнопку виклику мобільного меню.
// data-menu - на мобильне меню

// Початковий стан мобільного меню – прихований. Тому в початковому стані у мобільного меню немає жодних технічних класів у розмітці. У стилях меню приховано за допомогою transform чи іншої властивості. При натисканні на кнопку виклику меню сама кнопка та мобільне меню отримують клас is-open. За цим класом мобільне меню отримує перевизначальні властивості, які роблять його видимим.


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