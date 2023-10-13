var elementosDuvidas = document.querySelectorAll('.duvida');

elementosDuvidas.forEach(function(duvida){
  duvida.addEventListener('click', function() {
    duvida.classList.toggle('ativa')
  })
   
});

//TODO fazer com que a seta para baixo fique animada, como se ao clicar ela vire ao contrario demonstrando que se clicar novamente ela minimiza
