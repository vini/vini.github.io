var flkty = new Flickity('.carousel-logos', {
  wrapAround: true,
  autoPlay: true,
  pauseAutoPlayOnHover: false,
  prevNextButtons: false,
  pageDots: false,
  selectedAttraction: 0.01, // quanto menor, mais suave
  friction: 0.15           // controla desaceleração
});


$(document).ready(function(){

$('a[href^="#"]').on('click', function(e) {
  e.preventDefault(); // evita o comportamento padrão do link

  var myAttr = this.getAttribute('href');
  var alvo = $(myAttr);
  if(alvo.length) {
    $('html, body').animate({
      scrollTop: alvo.offset().top - 60 // ajuste o -60 conforme a altura do menu fixo
    }, {
      easing: 'swing',
      duration: 600,
      complete: function() {
      }
    });
  }
});

});

const maxScroll   = 120;
const maxHeight   = 100;
const minHeight   = 64;

let lastHeight = maxHeight;

$(window).on('scroll', function () {
  const scroll = Math.min($(this).scrollTop(), maxScroll);
  const progress = scroll / maxScroll;

  const targetHeight =
    maxHeight - (maxHeight - minHeight) * progress;

  // evita animar se a diferença for mínima
  if (Math.abs(targetHeight - lastHeight) > 1) {
    $('#header')
      .stop(true)
      .animate(
        { height: targetHeight },
        {
          duration: 80,
          easing: 'linear'
        }
      );

    lastHeight = targetHeight;
  }
});

const toggle = document.getElementById("themeToggle");
const html = document.documentElement;
const status = document.getElementById("status");

toggle.addEventListener("click", () => {
  const atual = html.getAttribute("data-bs-theme");

  if (atual === "dark") {
    html.setAttribute("data-bs-theme", "light");
    toggle.textContent = "🌙";
    status.textContent = "light";
  } else {
    html.setAttribute("data-bs-theme", "dark");
    toggle.textContent = "☀️";
    status.textContent = "dark";
  }
});

const btn = document.getElementById("btnFullscreen");

btn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    btn.innerText = "⛶ Sair da tela cheia";
  } else {
    document.exitFullscreen();
    btn.innerText = "⛶ Tela cheia";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const text = "Welcome to my website ^^";
  const speed = 80; // velocidade da digitação (ms)
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typewriter").textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});