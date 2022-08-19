
const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})

document.querySelectorAll(".github")[0].onclick = function(){window.location.href='https://github.com/InnaVohnysta/organic.git'};
document.querySelectorAll(".live")[0].onclick = function(){window.location.href='https://organic-landing.netlify.app/'};
document.querySelectorAll(".github")[1].onclick = function(){window.location.href='https://github.com/InnaVohnysta/AdaptivLanding.git'};
document.querySelectorAll(".live")[1].onclick = function(){window.location.href='https://prismatic-fairy-d2aef2.netlify.app'};
let downloadCv = document.querySelector(".download-cv-btn").onclick = function(){
    let link = document.createElement('a');
    link.setAttribute('href','VohnystaInna.pdf');
    link.setAttribute('download','Vohnista Inna.pdf');
    onload=link.click();
}