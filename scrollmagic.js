//init ScreenMagic
var controller = new ScrollMagic.Controller();

//build a scene
var ourScene = new ScrollMagic.Scene({
  triggerElement: '#project-01', //Element that triggers the animation
  duration: 300, //an ending indicator has responsive duration; "% - perentages"
  triggerHook: 0,  //moves the trigger to top of the animation
  reverse: false, // animation only happens once and never repeats itself
})
.setClassToggle('#zion', 'fade-in') //change the css class of an element
.addIndicators({
  name: 'fade scene',
  indent: 200, //move indicators to the left
  colorTrigger: 'black',
  colorStart: "#244ff",
  colorEnd: '#rgba',
}) // requires a plugin
.addTo(controller)

// Adding  scene to multiple elements, a function and loop comes in handy
var projects = document.getElementsByClassName('.project')

for(var i = 1; i <= projects.length; i++){
  var ourScene = new ScrollMagic.Scene({ 
    triggerElement: `projects-${i}`, //Element that triggers the animation
    duration: 300, //an ending indicator has responsive duration; "% - perentages"
    triggerHook: 0,  //moves the trigger to top of the animation
    reverse: false, // animation only happens once and never repeats itself
  })
  .setClassToggle('#zion', 'fade-in') //change the css class of an element
  .addIndicators({
    name: 'fade scene',
    indent: 200, //move indicators to the left
    colorTrigger: 'black',
    colorStart: "#244ff",
    colorEnd: '#rgba',
  }) // requires a plugin
  .addTo(controller) 
}
