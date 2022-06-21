//Slider de Fotos
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Botones
const botonPrev = document.querySelector('#botonPrev');
const botonNext = document.querySelector('#botonNext');

//Contador de Imagenes
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

botonNext.addEventListener('click',()=>{
    if(counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

botonPrev.addEventListener('click',()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
    if (carouselImages[counter].id === 'ultimoClon'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length -2 ;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
    if (carouselImages[counter].id === 'primerClon'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
});
//Fin Slider de Fotos

//Contadores
const countdownCanada = () => {
    const contarFecha = new Date('June 19, 2022 15:00:00').getTime();
    const hoy = new Date().getTime();
    const diferencia = contarFecha - hoy;

    const segundo = 1000;
    const minuto = segundo * 60;
    const hora = minuto * 60;
    const dia = hora * 24;

    const textoDia = Math.floor(diferencia / dia);
    const textoHora = Math.floor((diferencia % dia) / hora);
    const textoMinuto = Math.floor((diferencia % hora) / minuto);
    const textoSegundo = Math.floor((diferencia % minuto) / segundo);

    document.querySelector('.dia-canada').innerText = textoDia;
    document.querySelector('.hora-canada').innerText = textoHora;
    document.querySelector('.minuto-canada').innerText = textoMinuto;
    document.querySelector('.segundo-canada').innerText = textoSegundo;

    if(diferencia < 0){
        document.querySelector('.dia-canada').innerText = 0;
        document.querySelector('.hora-canada').innerText = 0;
        document.querySelector('.minuto-canada').innerText = 0;
        document.querySelector('.segundo-canada').innerText = 0;
        document.querySelector('.race-status').innerText = 'Race Ended'
    }
};
setInterval(countdownCanada, 1000);


const countdownSilverstone  = () => {
    const contarFecha = new Date('July 03, 2022 11:00:00').getTime();
    const hoy = new Date().getTime();
    const diferencia = contarFecha - hoy;

    const segundo = 1000;
    const minuto = segundo * 60;
    const hora = minuto * 60;
    const dia = hora * 24;

    const textoDia = Math.floor(diferencia / dia);
    const textoHora = Math.floor((diferencia % dia) / hora);
    const textoMinuto = Math.floor((diferencia % hora) / minuto);
    const textoSegundo = Math.floor((diferencia % minuto) / segundo);

    document.querySelector('.dia-silverstone').innerText = textoDia;
    document.querySelector('.hora-silverstone').innerText = textoHora;
    document.querySelector('.minuto-silverstone').innerText = textoMinuto;
    document.querySelector('.segundo-silverstone').innerText = textoSegundo;

    if(diferencia < 0){
        document.querySelector('.dia-silverstone').innerText = 0;
        document.querySelector('.hora-silverstone').innerText = 0;
        document.querySelector('.minuto-silverstone').innerText = 0;
        document.querySelector('.segundo-silverstone').innerText = 0;
        document.querySelector('.race-status').innerText = 'Race Ended'
    }
};
setInterval(countdownSilverstone, 1000)

const countdownAustria  = () => {
    const contarFecha = new Date('July 10, 2022 10:00:00').getTime();
    const hoy = new Date().getTime();
    const diferencia = contarFecha - hoy;

    const segundo = 1000;
    const minuto = segundo * 60;
    const hora = minuto * 60;
    const dia = hora * 24;

    const textoDia = Math.floor(diferencia / dia);
    const textoHora = Math.floor((diferencia % dia) / hora);
    const textoMinuto = Math.floor((diferencia % hora) / minuto);
    const textoSegundo = Math.floor((diferencia % minuto) / segundo);

    document.querySelector('.dia-austria').innerText = textoDia;
    document.querySelector('.hora-austria').innerText = textoHora;
    document.querySelector('.minuto-austria').innerText = textoMinuto;
    document.querySelector('.segundo-austria').innerText = textoSegundo;

    if(diferencia < 0){
        document.querySelector('.dia-austria').innerText = 0;
        document.querySelector('.hora-austria').innerText = 0;
        document.querySelector('.minuto-austria').innerText = 0;
        document.querySelector('.segundo-austria').innerText = 0;
        document.querySelector('.race-status').innerText = 'Race Ended'
    }

};
setInterval(countdownAustria, 1000)

const countdownFrancia  = () => {
    const contarFecha = new Date('July 24, 2022 10:00:00').getTime();
    const hoy = new Date().getTime();
    const diferencia = contarFecha - hoy;

    const segundo = 1000;
    const minuto = segundo * 60;
    const hora = minuto * 60;
    const dia = hora * 24;

    const textoDia = Math.floor(diferencia / dia);
    const textoHora = Math.floor((diferencia % dia) / hora);
    const textoMinuto = Math.floor((diferencia % hora) / minuto);
    const textoSegundo = Math.floor((diferencia % minuto) / segundo);

    document.querySelector('.dia-francia').innerText = textoDia;
    document.querySelector('.hora-francia').innerText = textoHora;
    document.querySelector('.minuto-francia').innerText = textoMinuto;
    document.querySelector('.segundo-francia').innerText = textoSegundo;

    if(diferencia < 0){
        document.querySelector('.dia-francia').innerText = 0;
        document.querySelector('.hora-francia').innerText = 0;
        document.querySelector('.minuto-francia').innerText = 0;
        document.querySelector('.segundo-francia').innerText = 0;
        document.querySelector('.race-status').innerText = 'Race Ended'
    }
};
setInterval(countdownFrancia, 1000)

const countdownHungria  = () => {
    const contarFecha = new Date('July 31, 2022 10:00:00').getTime();
    const hoy = new Date().getTime();
    const diferencia = contarFecha - hoy;

    const segundo = 1000;
    const minuto = segundo * 60;
    const hora = minuto * 60;
    const dia = hora * 24;

    const textoDia = Math.floor(diferencia / dia);
    const textoHora = Math.floor((diferencia % dia) / hora);
    const textoMinuto = Math.floor((diferencia % hora) / minuto);
    const textoSegundo = Math.floor((diferencia % minuto) / segundo);

    document.querySelector('.dia-hungria').innerText = textoDia;
    document.querySelector('.hora-hungria').innerText = textoHora;
    document.querySelector('.minuto-hungria').innerText = textoMinuto;
    document.querySelector('.segundo-hungria').innerText = textoSegundo;

    if(diferencia < 0){
        document.querySelector('.dia-hungria').innerText = 0;
        document.querySelector('.hora-hungria').innerText = 0;
        document.querySelector('.minuto-hungria').innerText = 0;
        document.querySelector('.segundo-hungria').innerText = 0;
        document.querySelector('.race-status').innerText = 'Race Ended'
    }
};
setInterval(countdownHungria, 1000)

const countdownBelgica  = () => {
    const contarFecha = new Date('August 28, 2022 10:00:00').getTime();
    const hoy = new Date().getTime();
    const diferencia = contarFecha - hoy;

    const segundo = 1000;
    const minuto = segundo * 60;
    const hora = minuto * 60;
    const dia = hora * 24;

    const textoDia = Math.floor(diferencia / dia);
    const textoHora = Math.floor((diferencia % dia) / hora);
    const textoMinuto = Math.floor((diferencia % hora) / minuto);
    const textoSegundo = Math.floor((diferencia % minuto) / segundo);

    document.querySelector('.dia-belgica').innerText = textoDia;
    document.querySelector('.hora-belgica').innerText = textoHora;
    document.querySelector('.minuto-belgica').innerText = textoMinuto;
    document.querySelector('.segundo-belgica').innerText = textoSegundo;

    if(diferencia < 0){
        document.querySelector('.dia-belgica').innerText = 0;
        document.querySelector('.hora-belgica').innerText = 0;
        document.querySelector('.minuto-belgica').innerText = 0;
        document.querySelector('.segundo-belgica').innerText = 0;
        document.querySelector('.race-status').innerText = 'Race Ended'
    }
};
setInterval(countdownBelgica, 1000)

const countdownHolanda  = () => {
    const contarFecha = new Date('September 04, 2022 10:00:00').getTime();
    const hoy = new Date().getTime();
    const diferencia = contarFecha - hoy;

    const segundo = 1000;
    const minuto = segundo * 60;
    const hora = minuto * 60;
    const dia = hora * 24;

    const textoDia = Math.floor(diferencia / dia);
    const textoHora = Math.floor((diferencia % dia) / hora);
    const textoMinuto = Math.floor((diferencia % hora) / minuto);
    const textoSegundo = Math.floor((diferencia % minuto) / segundo);

    document.querySelector('.dia-holanda').innerText = textoDia;
    document.querySelector('.hora-holanda').innerText = textoHora;
    document.querySelector('.minuto-holanda').innerText = textoMinuto;
    document.querySelector('.segundo-holanda').innerText = textoSegundo;

    if(diferencia < 0){
        document.querySelector('.dia-holanda').innerText = 0;
        document.querySelector('.hora-holanda').innerText = 0;
        document.querySelector('.minuto-holanda').innerText = 0;
        document.querySelector('.segundo-holanda').innerText = 0;
        document.querySelector('.race-status').innerText = 'Race Ended'
    }
};
setInterval(countdownHolanda, 1000)

const countdownItalia  = () => {
    const contarFecha = new Date('September 11, 2022 10:00:00').getTime();
    const hoy = new Date().getTime();
    const diferencia = contarFecha - hoy;

    const segundo = 1000;
    const minuto = segundo * 60;
    const hora = minuto * 60;
    const dia = hora * 24;

    const textoDia = Math.floor(diferencia / dia);
    const textoHora = Math.floor((diferencia % dia) / hora);
    const textoMinuto = Math.floor((diferencia % hora) / minuto);
    const textoSegundo = Math.floor((diferencia % minuto) / segundo);

    document.querySelector('.dia-italia').innerText = textoDia;
    document.querySelector('.hora-italia').innerText = textoHora;
    document.querySelector('.minuto-italia').innerText = textoMinuto;
    document.querySelector('.segundo-italia').innerText = textoSegundo;

    if(diferencia < 0){
        document.querySelector('.dia-italia').innerText = 0;
        document.querySelector('.hora-italia').innerText = 0;
        document.querySelector('.minuto-italia').innerText = 0;
        document.querySelector('.segundo-italia').innerText = 0;
        document.querySelector('.race-status').innerText = 'Race Ended'
    }
};
setInterval(countdownItalia, 1000)

const countdownSingapur  = () => {
    const contarFecha = new Date('October 02, 2022 09:00:00').getTime();
    const hoy = new Date().getTime();
    const diferencia = contarFecha - hoy;

    const segundo = 1000;
    const minuto = segundo * 60;
    const hora = minuto * 60;
    const dia = hora * 24;

    const textoDia = Math.floor(diferencia / dia);
    const textoHora = Math.floor((diferencia % dia) / hora);
    const textoMinuto = Math.floor((diferencia % hora) / minuto);
    const textoSegundo = Math.floor((diferencia % minuto) / segundo);

    document.querySelector('.dia-singapur').innerText = textoDia;
    document.querySelector('.hora-singapur').innerText = textoHora;
    document.querySelector('.minuto-singapur').innerText = textoMinuto;
    document.querySelector('.segundo-singapur').innerText = textoSegundo;

    if(diferencia < 0){
        document.querySelector('.dia-singapur').innerText = 0;
        document.querySelector('.hora-singapur').innerText = 0;
        document.querySelector('.minuto-singapur').innerText = 0;
        document.querySelector('.segundo-singapur').innerText = 0;
        document.querySelector('.race-status').innerText = 'Race Ended'
    }
};
setInterval(countdownSingapur, 1000)

const countdownJapon  = () => {
    const contarFecha = new Date('October 09, 2022 02:00:00').getTime();
    const hoy = new Date().getTime();
    const diferencia = contarFecha - hoy;

    const segundo = 1000;
    const minuto = segundo * 60;
    const hora = minuto * 60;
    const dia = hora * 24;

    const textoDia = Math.floor(diferencia / dia);
    const textoHora = Math.floor((diferencia % dia) / hora);
    const textoMinuto = Math.floor((diferencia % hora) / minuto);
    const textoSegundo = Math.floor((diferencia % minuto) / segundo);

    document.querySelector('.dia-japon').innerText = textoDia;
    document.querySelector('.hora-japon').innerText = textoHora;
    document.querySelector('.minuto-japon').innerText = textoMinuto;
    document.querySelector('.segundo-japon').innerText = textoSegundo;

    if(diferencia < 0){
        document.querySelector('.dia-japon').innerText = 0;
        document.querySelector('.hora-japon').innerText = 0;
        document.querySelector('.minuto-japon').innerText = 0;
        document.querySelector('.segundo-japon').innerText = 0;
        document.querySelector('.race-status').innerText = 'Race Ended'
    }
};
setInterval(countdownJapon, 1000)

const countdownUS  = () => {
    const contarFecha = new Date('October 23, 2022 16:00:00').getTime();
    const hoy = new Date().getTime();
    const diferencia = contarFecha - hoy;

    const segundo = 1000;
    const minuto = segundo * 60;
    const hora = minuto * 60;
    const dia = hora * 24;

    const textoDia = Math.floor(diferencia / dia);
    const textoHora = Math.floor((diferencia % dia) / hora);
    const textoMinuto = Math.floor((diferencia % hora) / minuto);
    const textoSegundo = Math.floor((diferencia % minuto) / segundo);

    document.querySelector('.dia-us').innerText = textoDia;
    document.querySelector('.hora-us').innerText = textoHora;
    document.querySelector('.minuto-us').innerText = textoMinuto;
    document.querySelector('.segundo-us').innerText = textoSegundo;

    if(diferencia < 0){
        document.querySelector('.dia-us').innerText = 0;
        document.querySelector('.hora-us').innerText = 0;
        document.querySelector('.minuto-us').innerText = 0;
        document.querySelector('.segundo-us').innerText = 0;
        document.querySelector('.race-status').innerText = 'Race Ended'
    }
};
setInterval(countdownUS, 1000)

const countdownMexico  = () => {
    const contarFecha = new Date('October 30, 2022 17:00:00').getTime();
    const hoy = new Date().getTime();
    const diferencia = contarFecha - hoy;

    const segundo = 1000;
    const minuto = segundo * 60;
    const hora = minuto * 60;
    const dia = hora * 24;

    const textoDia = Math.floor(diferencia / dia);
    const textoHora = Math.floor((diferencia % dia) / hora);
    const textoMinuto = Math.floor((diferencia % hora) / minuto);
    const textoSegundo = Math.floor((diferencia % minuto) / segundo);

    document.querySelector('.dia-mexico').innerText = textoDia;
    document.querySelector('.hora-mexico').innerText = textoHora;
    document.querySelector('.minuto-mexico').innerText = textoMinuto;
    document.querySelector('.segundo-mexico').innerText = textoSegundo;

    if(diferencia < 0){
        document.querySelector('.dia-mexico').innerText = 0;
        document.querySelector('.hora-mexico').innerText = 0;
        document.querySelector('.minuto-mexico').innerText = 0;
        document.querySelector('.segundo-mexico').innerText = 0;
        document.querySelector('.race-status').innerText = 'Race Ended'
    }
};
setInterval(countdownMexico, 1000)

const countdownBrazil  = () => {
    const contarFecha = new Date('November 13, 2022 15:00:00').getTime();
    const hoy = new Date().getTime();
    const diferencia = contarFecha - hoy;

    const segundo = 1000;
    const minuto = segundo * 60;
    const hora = minuto * 60;
    const dia = hora * 24;

    const textoDia = Math.floor(diferencia / dia);
    const textoHora = Math.floor((diferencia % dia) / hora);
    const textoMinuto = Math.floor((diferencia % hora) / minuto);
    const textoSegundo = Math.floor((diferencia % minuto) / segundo);

    document.querySelector('.dia-brazil').innerText = textoDia;
    document.querySelector('.hora-brazil').innerText = textoHora;
    document.querySelector('.minuto-brazil').innerText = textoMinuto;
    document.querySelector('.segundo-brazil').innerText = textoSegundo;

    if(diferencia < 0){
        document.querySelector('.dia-brazil').innerText = 0;
        document.querySelector('.hora-brazil').innerText = 0;
        document.querySelector('.minuto-brazil').innerText = 0;
        document.querySelector('.segundo-brazil').innerText = 0;
        document.querySelector('.race-status').innerText = 'Race Ended'
    }
};
setInterval(countdownBrazil, 1000)

const countdownAbuDhabi  = () => {
    const contarFecha = new Date('November 20, 2022 10:00:00').getTime();
    const hoy = new Date().getTime();
    const diferencia = contarFecha - hoy;

    const segundo = 1000;
    const minuto = segundo * 60;
    const hora = minuto * 60;
    const dia = hora * 24;

    const textoDia = Math.floor(diferencia / dia);
    const textoHora = Math.floor((diferencia % dia) / hora);
    const textoMinuto = Math.floor((diferencia % hora) / minuto);
    const textoSegundo = Math.floor((diferencia % minuto) / segundo);

    document.querySelector('.dia-abudhabi').innerText = textoDia;
    document.querySelector('.hora-abudhabi').innerText = textoHora;
    document.querySelector('.minuto-abudhabi').innerText = textoMinuto;
    document.querySelector('.segundo-abudhabi').innerText = textoSegundo;

    if(diferencia < 0){
        document.querySelector('.dia-abudhabi').innerText = 0;
        document.querySelector('.hora-abudhabi').innerText = 0;
        document.querySelector('.minuto-abudhabi').innerText = 0;
        document.querySelector('.segundo-abudhabi').innerText = 0;
        document.querySelector('.race-status').innerText = 'Race Ended'
    }
};
setInterval(countdownAbuDhabi, 1000)
//Fin Contadores

//Responsive
if ('WebSocket' in window) {
    (function () {
        function refreshCSS() {
            var sheets = [].slice.call(document.getElementsByTagName("link"));
            var head = document.getElementsByTagName("head")[0];
            for (var i = 0; i < sheets.length; ++i) {
                var elem = sheets[i];
                var parent = elem.parentElement || head;
                parent.removeChild(elem);
                var rel = elem.rel;
                if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                    var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                    elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
                }
                parent.appendChild(elem);
            }
        }
        var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
        var address = protocol + window.location.host + window.location.pathname + '/ws';
        var socket = new WebSocket(address);
        socket.onmessage = function (msg) {
            if (msg.data == 'reload') window.location.reload();
            else if (msg.data == 'refreshcss') refreshCSS();
        };
        if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
            console.log('Live reload enabled.');
            sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
        }
    })();
}
else {
    console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
};
//Fin Responsive