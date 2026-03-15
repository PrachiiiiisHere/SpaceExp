

const sections = document.querySelectorAll(".info");

function revealSections(){

    sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.85;
    if(sectionTop < triggerPoint){
    section.classList.add("show");
}

});

}

window.addEventListener("scroll", revealSections);
revealSections();

