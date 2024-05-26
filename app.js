// ----------------------------animation-----------------------
function navbar(){
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
}
function blurAnimation(){
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
            start:'-170% 20%',
            end:'top 60%',
            scrub:true,
        },
        opacity: 0.9,
        scale:0.9,
        filter:' blur(5px)',
    
    })
}
function cards(){
    gsap.to('.page-3', {
        scrollTrigger:{
            trigger : '.page-3',
            start:'top top',
            end:'bottom 10%',
            markers:true,
            pin:'.page-3',
            // markers:true,
            scrub:true,
        },
    })
    gsap.to('#card4', {
        scrollTrigger:{
            trigger : '#card4',
            start:'-23% top',
            // markers:true,    
            end:'-18% top',
            scrub:true,
        },
        ease:'power2.inout',
        opacity:0,
        y:-1200,
    })
    gsap.to('#card3', {
        scrollTrigger:{
            trigger : '#card4',
            start:'25% top',
            // markers:true,
            end:'31% top',
            scrub:true,
        },
        ease:'power2.inout',
        opacity:0,
        y:-1200,
    })
    gsap.to('#card2', {
        scrollTrigger:{
            trigger : '#card4',
            start:'57% top',
            // markers:true,
            end:'60% top',
            scrub:true,
        },
        ease:'power2.inout',
        y:-1200,
        opacity:0,
    })
}






navbar();
blurAnimation();
cards();