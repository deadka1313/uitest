var buttons = document.getElementsByTagName('button');

Array.prototype.forEach.call(buttons, function (b) {
  b.addEventListener('click', createRipple);
});

function createRipple (e) {
  var circle = document.createElement('div');
  this.appendChild(circle);

  var d = 30;

  circle.style.width = circle.style.height = d + 'px';

  circle.style.left = e.pageX - this.offsetLeft - d / 2 + 'px';
  circle.style.top = e.pageY - this.offsetTop  - d / 2 + 'px';

  circle.classList.add('ripple');
}