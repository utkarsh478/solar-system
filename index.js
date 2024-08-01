let showSideBox = document.querySelector(".header span");
let sideBox = document.querySelector(".side_box");
let hideBox = document.querySelector(".cross");

let scrollBtn=document.querySelector(".scroll-to-top");

let hide1 = document.querySelector("#more-link .hide1");
let moreText1 = document.querySelector("#more-link .more-text");

let hide11 = document.querySelector("#more-link2 .hide1");
let moreText2 = document.querySelector("#more-link2 .more-text");


function nav_show1() {
    hide1.style.display = "flex";
}

function nav_hide1() {
    hide1.style.display = "none";

}


function nav_show2() {
    hide11.style.display = "flex";

}

function nav_hide2() {
    hide11.style.display = "none";

}


function nav_hide1() {
    hide1.style.display = "none";
}
let k=1;

function nav_show1() {
    if(k===1){
        hide1.style.display = "flex";
        k=k+1;
    }
    else{
        nav_hide1()
        k=k-1;
    }
}

function nav_hide2() {
    hide11.style.display = "none";
}

function nav_show2() {
    if(k===1){
        hide11.style.display = "flex";
        k=k+1
    }
    else{
        nav_hide2();
        k=k-1
    }
}



/*show side box*/
showSideBox.addEventListener("click", () => {
    sideBox.style.display = "flex";
});

hideBox.addEventListener("click", () => {
    sideBox.style.display = "none";
});


/*scroll functiom*/

window.onscroll=function(){
    scrollTop()
}

function scrollTop() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

scrollBtn.addEventListener("click",()=>{
    window.scrollTo({top:0,behavior:"smooth"})
})

