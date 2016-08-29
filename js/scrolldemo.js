// Scroll Demo 

$(document).ready(function(){

  var controller = new ScrollMagic.Controller({});

  var phone = new ScrollMagic.Scene({
    triggerElement: "#demodist",
    offset: 2687,
    duration: 0
  })
  .setClassToggle("#phone", "pinIt").addTo(controller);

  var menu = new ScrollMagic.Scene({
    triggerElement: "#demodist",
    offset: 2687,
    duration: 0
  })
  .setClassToggle(".dots-menu", "pinIt").addTo(controller);

  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#one",
    duration: 650
  })
  .setClassToggle(".step-1", "show").addTo(controller)

  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#two",
    duration: 400
  })
  .setClassToggle(".step-2", "show").addTo(controller);
  
  /*$('body').fullpage({
    scrollBar: true,
    resize : false,
    css3: false,
    responsive: 0,
    scrollOverflow: true,
    normalScrollElements: "#download, #review"
  });*/
});