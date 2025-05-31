const carrossel = document.querySelector('.carrossel-imagens');
const fotos = document.querySelectorAll('.foto');
const altura = 600;  // Altura fixa das fotos
const musicaFundo = document.getElementById('musicaPresente');
let indiceAtual = 0;

function avancarSlide() {
  indiceAtual++;
  if (indiceAtual >= fotos.length) {
    indiceAtual = 0;
  }
  carrossel.style.transform = `translateY(-${indiceAtual * altura}px)`;
}

setInterval(avancarSlide, 3000);



function atualizaContador() {
    const inicio = new Date('2015-11-14T00:00:00');
    const agora = new Date();
    const diff = agora - inicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    const contador = document.getElementById('contador');
    if (contador) {
        contador.textContent = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
    }
}

setInterval(atualizaContador, 1000); // atualiza a cada minuto
atualizaContador(); // executa logo ao carregar

document.addEventListener('DOMContentLoaded', () => {
  const musicaFundo = document.getElementById('musicaPresente');

  if (musicaFundo){
    musicaFundo.play()
    .then(() => {
      console.log('Música de fundo iniciada.');
    })
    .catch(error => {
      console.warn('Autoplay da música bloqueado: ', error);
    });
  }
});

