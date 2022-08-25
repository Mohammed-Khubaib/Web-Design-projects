const press = document.querySelector('.pressme')
const closedEye = document.querySelector('.eye')
const closedEar = document.querySelector('.ear')
const closedMouth = document.querySelector('.mouth')

//Add event Listner

press.addEventListener('click',()=>{
    if(closedEye.classList.contains('eye')){
        closedEye.classList.add('active');
        press.classList.remove('active')
    }
})
closedEye.addEventListener('click',()=>{
    if(closedEar.classList.contains('ear')){
        closedEar.classList.add('active');
        closedEye.classList.remove('active')
    }
})
closedEar.addEventListener('click',()=>{
    if(closedMouth.classList.contains('mouth')){
        closedMouth.classList.add('active');
        closedEar.classList.remove('active')
    }
})
closedMouth.addEventListener('click',()=>{
    if(closedEye.classList.contains('eye')){
        closedEye.classList.add('active');
        closedMouth.classList.remove('active')
    }
})