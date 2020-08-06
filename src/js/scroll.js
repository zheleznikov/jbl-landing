import SmoothScroll from 'smooth-scroll';

new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  easing: 'easeInCubic'
});
