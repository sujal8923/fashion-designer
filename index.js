let burger= document.querySelector("#burger")
let navlist= document.querySelector('.v-class')
// navlist= document.querySelector('.item')
// navbar= document.querySelector('nav')

burger.addEventListener('click',()=>{
 navlist.classList.toggle('v-class');
})



function changebg(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue<50){
        navbar.classList.remove('bgcolor')
    }
    else{
        navbar.classList.add('bgcolor')

    }
}
window.addEventListener('scroll',changebg);