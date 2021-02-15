const menu = document.querySelector('.menu__mobile')
const botaoAbrir = document.querySelector('.cabecalho__icone-hamburguer')
const botaoFechar = document.querySelector('.menu__mobile-close')

botaoAbrir.addEventListener('click', function(){
    menu.classList.add('abre__menu')
}) 

botaoFechar.addEventListener('click', () => {
    menu.classList.remove('abre__menu')
})
