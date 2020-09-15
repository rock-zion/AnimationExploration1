var tl = gsap.timeline()

tl
.from('.vex-span', 0.5, {y: '120px', stagger: 0.25, ease: "power1.out"})
.from('.vex-pa', 0.5, {y: "60px", opacity: 0, ease: "power1.out"})
.to('.stagger-down', 1, {y:'2000px', stagger: 0.2, ease: "power4.in"})

var tl2 = new TimelineMax()
const controller = new ScrollMagic.Controller();

tl2.to('.vex-span', .5, {opacity: 0})
tl2.to('.vex-pa', .5, {opacity: 0}, 0)
tl2.to('.nav', .5, {opacity: 0}, 0)
tl2.from('.creative', 3, {scale: 100})
// tl2.from('#mask-container', 0.5, {opacity: 0})
tl2.to('.hero-section', 1, {y: -180})
tl2.from('.mask-texts', 0.5, {opacity: 0})
tl2.from('.mask-texts', 1, {y: "80px"}, "<")

const introScene = new ScrollMagic.Scene({
  triggerElement: '.hero-section',
  triggerHook: 0,
  duration: "100%",
})
.setPin('.hero-section')
.setTween(tl2)
.addTo(controller)

var tl3 = new TimelineMax()
tl3
.from('.image', 1, {y:'200px', stagger: 0.2, opacity: 0, scale: 0.8, ease: "power1.out"})

const images =  new ScrollMagic.Scene({
  triggerElement: '.section2',
  triggerHook: 1,
  duration: 0
})
.setTween(tl3)
.addTo(controller)