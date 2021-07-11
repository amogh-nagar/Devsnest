const container=document.querySelector('.inner-container')
for(var i=0;i<400;i++){
let element=document.createElement('div')
element.classList.add('box')
element.classList.add('active')
container.appendChild(element)
}

let boxes=document.querySelectorAll('.box')
boxes.forEach(box=>box.addEventListener('click',()=>{
    box.classList.toggle('active')
}))