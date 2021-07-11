let input = document.querySelector('.input');
let button = document.querySelector('.button');
let temp = document.querySelector('.temp');
let feelslike = document.querySelector('.feelslike');
let max = document.querySelector('.max');
let min = document.querySelector('.min');
let pressure = document.querySelector('.pressure');
let humidity = document.querySelector('.humidity');

let cname;
const api = async () => {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cname}&appid=61f2665bdb7edda5091de565bc8f61e2`
  );
  const data = await res.json();
  console.log(data);
  temp.innerHTML=data.main.temp+""
  feelslike.innerHTML=data.main.feels_like+""
  max.innerHTML=data.main.temp_max+""
  min.innerHTML=data.main.temp_min+""
  pressure.innerHTML=data.main.pressure+""
  humidity.innerHTML=data.main.humidity+""



};

button.addEventListener('click', () => {
  if (input.value.length !== 0) {
    cname = input.value;
  } else {
    console.log('Invalid input');
  }

  api();
});
