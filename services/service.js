let menulist = document.getElementById("menubar-mobiles");
menulist.style.maxHeight = "0px";
function toggleMenu() {
    console.log("hogay");

    if (menulist.style.maxHeight == "0px") {
        menulist.style.maxHeight = "80rem";
    } else {
        menulist.style.maxHeight = "0px";
    }
}

function navbar() {

    let tl = gsap.timeline()
    tl.from(".navber li", {
        y: -40,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.2
    }, "sat")
    tl.from(".hero .hero-text h1", {
        y: -100,
        opacity: 0,
        duration: 1,

    }, "sat")
    tl.from(".hero .hero-text p", {
        y: 100,
        opacity: 0,
        duration: 1,

    }, "sat")
    tl.from(".hero-cards .cardbox", {
        opacity: 0,
        duration: 1,
        y: -100,
        stagger: 0.2


    }, "sat")
}
navbar()
function users() {
    let tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: ".users ",
            scroller: "body",
            // markers: true,
            start: "top 60%",
            end: "top 0",
            scrub: 2,
        }
    })

    tl6.from(".users  h1", {
        y: -50,
        opacity: 0,
        duration: 0.5,
    })
    tl6.from(".users  p", {
        y: 50,
        opacity: 0,
        duration: 0.5,
    })
    tl6.from(".users  .btn", {
        y: -50,
        opacity: 0,
        duration: 0.5,
    })
}
users()
function cardodd() {
    let tl7 = gsap.timeline({
        scrollTrigger: {
            trigger: ".content",
            scroller: "body",
            // markers: true,
            start: "top 80%",
            end: "top 0",
            scrub: 2,
        }
    })

    tl7.from(".content .content-cardodd ", {
        x: -100,
        opacity: 0,
        duration: 0.5,
    })


}
cardodd()
function footercard() {
    let tl8 = gsap.timeline({
        scrollTrigger: {
            trigger: ".fcards ",
            scroller: "body",
            // markers: true,
            start: "top 60%",
            end: "top 20",
            scrub: 2,
        }
    })

    tl8.from(".fcards  .cardText ", {
        x: -50,
        opacity: 0,
        duration: 0.5,
    })
    tl8.from(".fcards .cardImg", {
        x: 50,
        opacity: 0,
        duration: 0.5,
    })
}
footercard()
function footer() {
    let tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".footer",
            scroller: "body",
            // markers: true,
            start: "top 70%",
            end: "top 280",
            scrub: 2,
        }
    })

    tl5.from(".footer .footerText", {
        y: 30,
        opacity: 0,
    }, "same")
    tl5.from(".footer .footerRating  ul", {
        y: -30,
        opacity: 0,
        duration: 0.1
    }, "same")
    tl5.from(".footer .footerlogo  img", {
        y: 30,
        opacity: 0,
        duration: 0.1
    }, "same")
}
footer()