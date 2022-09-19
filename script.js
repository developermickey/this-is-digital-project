gsap.registerPlugin(ScrollTrigger);

gsap.from("#img1", {
    delay: 0.4,
    opacity: 0,
    y: 60
})
gsap.from("#img2", {
    delay: 0.4,
    opacity: 0,
    duration: 1,
    x: 60
})

gsap.from("#img3", {
    delay: 0.4,
    opacity: 0,
    duration: 0.7,
    y: -60
})

gsap.from("#main h1", {
    delay: 0.4,
    opacity: 0,
    duration: 0.7,
    y: -60
})

gsap.from("#section", {
    ScrollTrigger: {
        tigger: "#frist h3",
        start: "Top 90%",
        markers: true,
        scrub: true,
        ease: Expo.easeInout
    },
    delay: 0.4,
    opacity: 0,
    duration: 0.7,
    y: 60
})