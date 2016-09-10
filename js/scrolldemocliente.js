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
    duration: 650
  })
  .setClassToggle(".step-2", "show").addTo(controller);

  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#three",
    duration: 650
  })
  .setClassToggle(".step-3", "show").addTo(controller);

  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#four",
    duration: 650
  })
  .setClassToggle(".step-4", "show").addTo(controller);

  var scene5 = new ScrollMagic.Scene({
    triggerElement: "#five",
    duration: 650
  })
  .setClassToggle(".step-5", "show").addTo(controller);

  var scene6 = new ScrollMagic.Scene({
    triggerElement: "#six",
    duration: 650
  })
  .setClassToggle(".step-6", "show").addTo(controller);

  var scene7 = new ScrollMagic.Scene({
    triggerElement: "#seven",
    duration: 650
  })
  .setClassToggle(".step-7", "show").addTo(controller);



  // Para desaparecer el celular y dots
  $(window).scroll(function(){
    var threshold = 2000; // number of pixels before bottom of page that you want to start fading
    var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) - threshold;
    if( op <= 0 ){
      $(".phone-back").hide();
    } else {
      $(".phone-back").show();
    }
    $(".phone-back").css("opacity", op ); 

    if( op <= 0 ){
      $(".dots-menu").hide();
    } else {
      $(".dots-menu").show();
    }
    $(".dots-menu").css("opacity", op ); 
  });



  
  /*$('body').fullpage({
    scrollBar: true,
    resize : false,
    css3: false,
    responsive: 0,
    scrollOverflow: true,
    normalScrollElements: "#download, #review"
  });*/
});