let banner = document.querySelector('.banner-destaque img');
let banners = [
    './resources/img/modelo_11.JPG',
    './resources/img/modelo10.JPG',
    './resources/img/modelo3.JPG',
    './resources/img/modelo4.JPG',
];

let bannerAtual = 0;

function trocaBanner(){
    bannerAtual++;
    if(bannerAtual == banners.length){
        bannerAtual = 0;
    }
    banner.src = banners[bannerAtual];
}

//executa uma função a cada x milisegundos
setInterval(trocaBanner, 2000);