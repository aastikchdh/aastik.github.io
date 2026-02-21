const heading1 = document.getElementById("main-heading1");
const heading2 = document.getElementById("main-heading2");
function fade(element){
    let opacity = 0;
    let interval = setInterval(() => {
        opacity += 0.05;
        element.style.opacity = opacity;
        if(opacity >= 1)
        {
            clearInterval(interval);
        }
    }, 100);
}
fade(heading1);
interval2 = setInterval(()=>{
    fade(heading2);
    clearInterval(interval2);
},400)