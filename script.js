gsap.to(".cantainer h1",{
    transform:"translateX(-210%)",
    scrollTrigger:{
        trigger:".cantainer h1",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        pin:true,
        scrub:3
    }
})
