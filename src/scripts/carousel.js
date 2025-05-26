function scrollGames(direction) {
  const container = document.querySelector('.games');
  const scrollAmount = 305;
  container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}
