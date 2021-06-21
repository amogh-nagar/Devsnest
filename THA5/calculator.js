function number(val) {
  document.getElementById('input').value += val;
  console.log('number');

}

function solve() {
  var a = eval(document.getElementById('input').value);
  document.getElementById('input').value = a;
}

function clearit() {
  document.getElementById('input').value = '';
  console.log('cleared');
}
