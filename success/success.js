let menuBar = document.getElementById("menubar-mobiles");
menuBar.style.maxHeight = "0px";
function toggleList() {

    if (menuBar.style.maxHeight == "0px") {
        menuBar.style.maxHeight = "80rem";
        console.log("jio");

    } else {
        menuBar.style.maxHeight = "0px";
        console.log("no");

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
    tl.from(".users", {
        y: -100,
        opacity: 0,
        duration: 1,

    }, "sat")
}
navbar()
function users1() {
    let tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: ".users1 ",
            scroller: "body",
            // markers: true,
            start: "top 60%",
            end: "top 0",
            scrub: 2,
        }
    })

    tl6.from(".users1  h1", {
        y: -50,
        opacity: 0,
        duration: 0.5,
    })
    tl6.from(".users1  .leftrating", {
        y: -50,
        opacity: 0,
        duration: 0.5,
    })
    tl6.from(".users1  .btn", {
        y: -50,
        opacity: 0,
        duration: 0.5,
    })
}
users1()
function line() {
    let tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".line ",
            scroller: "body",
            // markers: true,
            start: "top 80%",
            end: "top 0",
            scrub: 2,
        }
    })

    tl4.from(".line  img", {
        y: -100,
        opacity: 0,
        duration: 0.5,
    })


}
line()
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