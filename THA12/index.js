let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let list = document.querySelector('.list');

let arr = [];

function reload() {
  let x = localStorage.getItem('list');
  let l = document.querySelectorAll('.listitem');
  let ax = [];
  l.forEach((x) => {
    x.remove();
  });
  arr = x.split(' ');
  arr.forEach((a) => {
    let listitem = document.createElement('div');
    // listitem.innerHTML = a;
    listitem.classList.add('listitem');
    let t = document.createElement('p');
    t.classList.add('t');
    t.innerHTML = a;

    let b = document.createElement('button');
    b.innerHTML = 'x';
    b.classList.add('crossbtn');

    listitem.appendChild(t);
    listitem.appendChild(b);
    list.appendChild(listitem);
  });
}

btn.addEventListener('click', () => {
  let x = localStorage.getItem('list');
  let l = document.querySelectorAll('.listitem');
  l.forEach((x) => {
    x.remove();
  });
  if (x == null) {
    localStorage.setItem('list', input.value);
    arr.push(input.value);
  } else {
    localStorage.setItem('list', input.value + ' ' + x);
    x = localStorage.getItem('list');
    arr = x.split(' ');
  }

  arr.forEach((a) => {
    let listitem = document.createElement('div');
    // listitem.innerHTML = a;
    listitem.classList.add('listitem');
    let t = document.createElement('p');
    t.classList.add('t');
    t.innerHTML = a;

    let b = document.createElement('button');
    b.innerHTML = 'x';
    b.classList.add('crossbtn');
    
    listitem.appendChild(t);
    listitem.appendChild(b);
    list.appendChild(listitem);
    let z=document.querySelector('.crossbtn');
    z.addEventListener('click', () => {
      console.log('inside');
      let x = localStorage.getItem('list');
    let  ar = x.split(' ');
    console.log(ar);
      // console.log(i);
// let i=ar.findIndex(ax=>ax===this)
//       a.splice(i, 1);
//       localStorage.setItem('list', a.join(' '));
//       reload();
//       console.log(a);
    });
  });

  
});
// let cross = document.querySelectorAll('.crossbtn');
//   console.log(cross);
//   let a = [];
//   cross.forEach((c, i) => {
   
//   });
// // console.log('inside');
// let x = localStorage.getItem('list');
//     let a = x.split(' ');
