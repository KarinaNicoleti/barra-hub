// ===== Menu Mobile =====
const menuToggle = document.querySelector('.menu-toggle'); // botão do menu
const navUl = document.querySelector('nav ul'); // lista de navegação
const navLinks = document.querySelectorAll('nav ul li a'); // links do menu

// Abrir/fechar menu ao clicar no botão
menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('show'); // mostra/oculta menu
    menuToggle.classList.toggle('active'); // efeito do botão
});

// Fechar menu ao clicar em qualquer link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navUl.classList.remove('show'); // oculta menu
        menuToggle.classList.remove('active'); // remove efeito do botão
    });
});

// ===== Efeito .active para botões =====
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove a classe active de todos os botões
        buttons.forEach(btn => btn.classList.remove('active'));
        // Adiciona active no botão clicado
        button.classList.add('active');
    });
});
