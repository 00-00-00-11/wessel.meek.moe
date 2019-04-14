var onKonamiCode = function (cb) {
  var input = '';
  var key = '38384040373937396665';
  document.addEventListener('keydown', function (e) {
    input += ('' + e.keyCode);
    if (input === key) return cb();
    if (!key.indexOf(input)) return;
    input = ('' + e.keyCode);
  });
}

onKonamiCode(function () {
  document.getElementById('body').style.background = 'url(\'static/img/bg3.png\')';
  document.getElementById('title').innerHTML = '200: FOUND';
  document.getElementById('logo').src = 'static/img/easter_egg.png';
  document.getElementById('logo').className = 'logo';
  document.getElementById('content').innerHTML = [
    '<span style="font-size: 15px; color: #c9c9c9;">',
    'It seems like you\'ve found an existing page!',
    '<br />',
    '<span class="emerald">This is a secret konami easter egg</span>',
    '<br />',
    'You might\'ve found this page legitemately, if so well done!',
    '<br />',
    '<span style="color: red;">But if you lurked in the code and found this, you ruined the easter egg :(</span>',
    '<br />',
    '<span style="font-size: 10px;">You just wasted your precious time reading this >:^)</span>',
    '</span>',
  ].join('')
});