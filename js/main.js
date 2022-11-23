










// --------------------------ПРОСТО ПОЛЕЗНЫЕ СКРИПТЫ, КОТОРЫЕ МОГУТ ПРИГОДИТЬСЯ



// Script to add padding to the body depending on the height of the header
// скрипт добавления паддинга к бади в зависимости от высоты липкого хедера
const { height: pageHeaderHeight } = document
.querySelector(".header") // подставляете класс вашего хедера
.getBoundingClientRect();
document.body.style.paddingTop = `${pageHeaderHeight}px`;