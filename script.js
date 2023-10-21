const eyeImage = document.querySelector('.image');
const input = document.querySelector('.card input')
eyeOpen = false;
eyeImage.addEventListener('click', function(){
    eyeOpen = !eyeOpen;
    if(eyeOpen){
        input.type = "password"
        eyeImage.src = './images/closed-eye.png'
    }
    else{
        input.type = "text"
        eyeImage.src = './images/open-eye.png'
    }  
})

