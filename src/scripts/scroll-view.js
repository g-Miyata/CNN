  document.querySelectorAll('.wrapper').forEach(wrapper => {
    const container = wrapper.querySelector('.nav-container');
    const items = container.querySelectorAll('.item');
    const botaoProximo = wrapper.querySelector('.botaoProximo');
    const botaoAnterior = wrapper.querySelector('.botaoAnterior');

    let indexAtual = 0;
    const itemWidth = items[0].offsetWidth + 20;

    botaoProximo.addEventListener('click', () => {
      indexAtual++;
      if (indexAtual >= items.length) {
        indexAtual = 0;
      }
      container.scrollTo({
        left: itemWidth * indexAtual,
        behavior: 'smooth'
      });
    });

    botaoAnterior.addEventListener('click', () => {
      indexAtual--;
      if (indexAtual < 0) {
        indexAtual = items.length - 1;
      }
      container.scrollTo({
        left: itemWidth * indexAtual,
        behavior: 'smooth'
      });
    });
  });