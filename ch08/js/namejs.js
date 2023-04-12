window.onload = function(){
    let text = document.querySelector["h1"];

    window.addEventListener('scroll', function(){
        let value = this.window.scrollY;
        console.log(value);

        if(value > 300){
            text.style.animation = "back_slide 3s ease-out forward"
        }
        else{
            text.style.animation = "go_slide 3s ease-out"
        }
    })
}