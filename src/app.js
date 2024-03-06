document.addEventListener('DOMContentLoaded', function () {
  var heart = document.getElementById('heart');

  document.addEventListener('mousemove', function (e) {
    var x = e.clientX - heart.offsetWidth / 2;
    var y = e.clientY - heart.offsetHeight / 2;

    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
  });
});
