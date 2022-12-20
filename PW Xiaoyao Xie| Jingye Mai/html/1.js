let b = document.querySelector(".b")
let d = document.getElementsByClassName("d")
let time
let index = 0

let a = function(){
    for(let i = 0;i < d.length; i++){
        d[i].className = "d"
    }
}
let aa = function(){
    a()
    d[index].className = "d dd"
}

function ts(){
    time = setInterval(function(){
        aa()
        index++
        b.style.backgroundImage = "url('img/"+[index]+".jpg')"
        if(index >= 3){
            index=0
        }
    },1500);
}
for(let i = 0;i < d.length;i++){
    d[i].onmousemove = function(){
        b.style.backgroundImage = "url('img/"+[i+1]+".jpg')"
        a()
        clearInterval(time)
        index= i+1
        if(index==3){ 
            index--}
        ts()
    }
}
ts()