// JavaScript
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const title = item.querySelector('.accordion-title');
  title.onclick = function() {
    accordionItems.forEach(item => item.classList.remove('active'));
    item.classList.add('active');
  }
});