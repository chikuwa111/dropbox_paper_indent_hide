var head = document.getElementsByTagName('head')[0];
var style = document.createElement('style');
head.appendChild(style);

var body = document.getElementsByTagName('body')[0];
var select = document.createElement('select');
select.setAttribute('style', 'position: fixed; bottom: 60px; right: 20px;');
select.innerHTML = '' +
  '<option selected value="9"></option>' +
  '<option value="1">1</option>' +
  '<option value="2">2</option>' +
  '<option value="3">3</option>' +
  '<option value="4">4</option>' +
  '<option value="5">5</option>' +
  '<option value="6">6</option>' +
  '<option value="7">7</option>' +
  '<option value="8">8</option>';

select.addEventListener('change', function() {
  var indent = parseInt(select.value);
  var css = '';
  for (i = indent; i <= 8; i++) {
    css += ' .listindent' + i + ' { display: none; } ';
  }
  style.innerHTML = css;
});

body.appendChild(select);
