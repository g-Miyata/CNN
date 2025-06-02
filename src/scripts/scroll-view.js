  const container = document.getElementById('nav-container');
  const items = container.querySelectorAll('.item');
  let indexAtual = 0;

  const botaoProximo = document.getElementById('botaoProximo');
  const botaoAnterior = document.getElementById('botaoAnterior');

  const itemWidth = items[0].offsetWidth + 20; 

  botaoProximo.addEventListener('click', () => {
    indexAtual++;
    if (indexAtual >= items.length) {
      indexAtual = 0; // volta para o começo
    }
    container.scrollTo({
      left: itemWidth * indexAtual,
      behavior: 'smooth'
    });
  });

  botaoAnterior.addEventListener('click', () => {
    indexAtual--;
    if (indexAtual < 0) {
      indexAtual = items.length - 1; // volta para o final
    }
    container.scrollTo({
      left: itemWidth * indexAtual,
      behavior: 'smooth'
    });
  });