var crsr= document.getElementById("cursor");
var blur=document.getElementById("cursor-blur");
document.addEventListener("mousemove", function(dets){
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
    blur.style.left=dets.x-200+"px";
    blur.style.top=dets.y-200+"px";

})
var h4all=document.querySelectorAll("#nav h4");
h4all.forEach(function(elem) {
    elem.addEventListener("mouseenter", function(){
        crsr.style.backgroundColor="transparent";
        crsr.style.scale=4;
        crsr.style.border="0.01px solid #fff";

    });
    elem.addEventListener("mouseleave", function(){
        crsr.style.backgroundColor="#95C11E";
        crsr.style.scale=1;
        crsr.style.border="0.01px ";

    });
});

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    },
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    },
});

gsap.from("#about-us , img, about-us-in",{
    y:50,
    duration:1,
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
        scroller:"body",
        trigger:"#about-us",
    }

})

gsap.from(".card",{
    duration:1,
    opacity:0,
    scale:0.5,
    scrollTrigger:{
        scroller:"body",
        trigger:".card",
        scrub:1,
        // markers:true,
        end:"top 40%"
    }
})

gsap.from("#quote-left",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#quote-left",
        scroller:"body",
        scrub:4
    }

})

gsap.from("#quote-right",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger:"#quote-right",
        scroller:"body",
        scrub:4
    }

})
gsap.from("#page4 #page4-in",{
    y:70,

})