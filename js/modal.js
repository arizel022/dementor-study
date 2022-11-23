// Скрипт появления модального окна на js


// Чтобы скрипт появления модального окна работал так, как нам нужно, необходимо добавить в разметку специальные атрибуты, по которым скрипт будет обращаться к нужным нам элементам.

// data-modal-open - на кнопку открытия модального окна.
// data-modal-close - на кнопку закрытия модального окна.
// data-modal - на бекдроп модального окна.

// Начальное состояние модального окна и бекдропа - скрытое. Поэтому в начальном состоянии у бекдропа указан класс is-hidden. В стилях по этому классу работают свойства visibility, opacity и pointer-events. Если убрать с бекдропа класс is-hidden, то появляется сам бекдроп и модальное окно в нем. Т.е. в начальном состоянии мы прописываем класс is-hidden вручную. Скрипт будет убирать данный класс и возвращать по необходимости.




(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();