let navbar = document.querySelector('.navbar');
let bars = document.querySelector('nav i');
let closex = document.querySelector('.nav-close i');
bars.addEventListener('click', function() {
    gsap.to('.navbar', {
        marginTop : '0vh',
        ease: "power3.inOut",
        duration:.5,

    })
})
closex.addEventListener('click', function() {
    gsap.to('.navbar', {
        marginTop : '-100vh',
        ease: "power3.inOut",
        duration:.5
    })
})


let heading  = document.querySelectorAll('.nav-menu h1')
heading.forEach(head => {
    head.addEventListener('mousemove',function(){
        gsap.to(head, {
            marginLeft : '0vw',
            duration:.3
        })
    })
    head.addEventListener('mouseleave',function(){
        gsap.to(head, {
            marginLeft : '-3vw',
            duration:.3
        })
    })
});