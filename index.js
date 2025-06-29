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
function animation() {

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
            x: -200,
            opacity: 0,
            duration: 0.5,

        }, "sat")
        tl.from(".hero .hero-text span ", {
            x: -100,
            opacity: 0,
            duration: 0.5,

        }, "sat")
        tl.from(".hero .hero-text p", {
            x: -100,
            opacity: 0,
            duration: 0.5,

        }, "sat")
        tl.from(".hero .hero-text .btn", {
            opacity: 0,
            duration: 0.5,
            x: -100
        }, "sat")
        tl.from(".hero .hero-image img", {
            opacity: 0,
            duration: 1,
            x: 100

        }, "sat")
    }
    navbar()

    function quoteSection() {
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".quote-section ",
                scroller: "body",
                // markers: true,
                start: "top 80%",
                end: "top 0",
                scrub: 2,
            }
        })

        tl2.from(".quote-section .Quote", {
            y: 30,
            opacity: 0,
        })
        tl2.from(".quote-section .qcolor", {
            x: 30,
            opacity: 0,
            duration: 0.5
        })

    }

    quoteSection()

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
            y: -30,
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
}
animation()





