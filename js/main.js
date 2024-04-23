document.querySelector('.menu').onclick = ()=>{
    if (document.getElementById('menu__body').style.left == '-100%'){
        document.getElementById('menu__body').style.left = '0px';
        document.body.style.overflow = 'hidden';
    } else{
        document.getElementById('menu__body').style.left = '-100%';
        document.body.style.overflow = 'scroll';
    }
}
