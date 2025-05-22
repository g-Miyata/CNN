function scrollGames(direction) {
  const container = document.querySelector('.games');
  const scrollAmount = 1272;
  container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}
