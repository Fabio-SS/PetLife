const elementosDuvidas = document.querySelectorAll('.duvida');

elementosDuvidas.forEach(function(duvida){
  const imagem = duvida.querySelector('.setaBaixo');
  let girada = false;

  duvida.addEventListener('click', function() {
    duvida.classList.toggle('ativa');

    if (!girada) {
      imagem.classList.add('girar180');
    } else {
      imagem.classList.remove('girar180');
    }
    girada = !girada;
  });
});