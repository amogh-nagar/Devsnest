const container = document.querySelector('.inner-container');
for (var i = 0; i < 36; i++) {
  var c = document.createElement('div');
  c.classList.add('box');
  c.classList.add('active');
  container.appendChild(c);
}
let boxes = document.querySelectorAll('.box');
boxes.forEach((box) =>
  box.addEventListener('click', () => {
    console.log('inside');
    if (!box.classList.contains('clicked')) {
      let a = +document.getElementById('output1').innerHTML;
      let b = +document.getElementById('output2').innerHTML;
      a += 1;
      b -= 1;
      document.getElementById('output1').innerHTML = a + '';
      document.getElementById('output2').innerHTML = b + '';
      box.classList.toggle('active');
      box.classList.add('clicked');
    }else{
        let a = +document.getElementById('output1').innerHTML;
      let b = +document.getElementById('output2').innerHTML;
      a -= 1;
      b += 1;
      document.getElementById('output1').innerHTML = a + '';
      document.getElementById('output2').innerHTML = b + '';
      box.classList.add('active');
      box.classList.toggle('clicked');
    }
  })
);
