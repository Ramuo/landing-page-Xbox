var container = document.querySelector('.container');
var left = document.querySelector('.left');
var right = document.querySelector('.right');

left.addEventListener('mouseenter',()=>container.classList.add('hover-left', false));
left.addEventListener('mouseleave',()=>container.classList.remove('hover-left', false));
right.addEventListener('mouseenter',()=>container.classList.add('hover-right', false));
right.addEventListener('mouseleave',()=>container.classList.remove('hover-right', false));