// function locomotive() {
//     gsap.registerPlugin(ScrollTrigger);

//     // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
//     const locoScroll = new LocomotiveScroll({
//       el: document.querySelector(".main"),
//       smooth: true
//     });
//     // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//     locoScroll.on("scroll", ScrollTrigger.update);
    
//     // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
//     ScrollTrigger.scrollerProxy(".main", {
//       scrollTop(value) {
//         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//       }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//       getBoundingClientRect() {
//         return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//       },
//       // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//       pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
//     });
//     // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
//     // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//     ScrollTrigger.refresh();
    
// }
// locomotive()
// ----------------------------animation-----------------------
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
        // markers:true,
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

gsap.to('.page-3', {
    scrollTrigger:{
        trigger : '.page-3',
        start:'top top',
        end:'bottom 10%',
        pin:'.page-3',
        markers:true,
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