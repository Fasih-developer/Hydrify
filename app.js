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


gsap.to('.page-2', {
    scrollTrigger:{
        trigger : '.page-1',
        start:'top top',
        end:'bottom 65%',
        pin : true,
    },
    y:-300,
})
gsap.to('.page-1', {
    scrollTrigger:{
        trigger : '.page-2',
        start:'-170% top',
        end:'top 60%',
        scrub:true,
    },
    opacity: 0.9,
    scale:0.9,
    filter:' blur(6px)',

})


gsap.to('.text-3', {
    scrollTrigger:{
        trigger : '.class',
        start:'-300% 8%',
        end:'-180% bottom',
        pin: '.page-3',
        scrub:5,
        markers:true,
    },
    y:'-180vw',
    duration:1,
    ease: "power3.inOutut",

})