const faqItems = document.querySelectorAll('.faq-item');
let timeoutId = null;

faqItems.forEach(item => {
  const btn = item.querySelector('button');

  btn.addEventListener('click', () => {
    // fecha tudo antes de abrir
    faqItems.forEach(i => i.classList.remove('active'));

    // ativa este
    item.classList.add('active');

    // limpa timeout anterior
    clearTimeout(timeoutId);

    // fecha automaticamente depois de 20s
    timeoutId = setTimeout(() => {
      item.classList.remove('active');
    }, 20000); // 20000 ms = 20 segundos
  });
});

function toggleMenu() {
  document.querySelector(".servicos").classList.toggle("active");
}
