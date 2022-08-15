
const btn = document.querySelector('button')

btn.addEventListener('click',()=>{
    const mostraTexto = document.querySelector('.oculto');
    mostraTexto.classList.remove('oculto');
});
