
function mostrar(el){
    const mostraTexto = document.getElementById(el).style.display 
    console.log(mostraTexto);
    if(mostraTexto =='none'){
        document.getElementById(el).style.display ='block'
    }else{
        document.getElementById(el).style.display='none'
    }
}
