/*
-----------------------------------------------
Theme: myWedding - Coming Soon HTML Template
Version 1.0
Author: EXSYthemes
-----------------------------------------------
// ========== TABLE OF CONTENTS ============ //
	1. PRELOADER
	2. GALLERY LIGHTBOX
    3. GOOGLE MAPS
    4. COUNTDOWN START
-----------------------------------------------*/

/* Preloader js */
$(window).on("load", function() {
  "use strict";
  $(".status").fadeOut();
  $("#preloader")
    .delay(350)
    .fadeOut("slow");
});
/* END Preloader js */

/* ***************** start document load **********************/
$(document).ready(function() {
  "use strict";

  $(".carousel").carousel({
    interval: 5000 //changes the speed
  });
  var $tfront = $(".title-front").hide();
  var $tunder = $(".title-under").hide();
  $tfront.show().arctext({ radius: 250 });
  $tunder.show().arctext({ radius: 180, dir: -1 });

  var content = $("body"),
    navbar = $(".navbar"),
    col = $(".col-transform");

  $(".show-info").on("click", function() {
    if (window.innerWidth > 990) {
      if (content.hasClass("show-content")) {
        col.removeClass("col-md-6").addClass("col-md-12");
        content.removeClass("show-content");
        setTimeout(function() {
          navbar.removeClass("navbar-open");
        }, 900);
      } else {
        col.removeClass("col-md-12").addClass("col-md-6");
        content.addClass("show-content");
        setTimeout(function() {
          navbar.addClass("navbar-open");
        }, 300);
      }
    }
  });

  // Gallery Lightbox
  $(".bearr-gallery-item a").simpleLightbox();

  /*========== Countdown start ================*/
  var clock;

  clock = $("#countdown").FlipClock({
    clockFace: "DailyCounter",
    autoStart: false,
    minimumDigits: 9,
    callbacks: {
      stop: function() {
        $(".message").html("The clock has stopped!");
      }
    }
  });

  var ts = +new Date("December 22, 2018 00:00 GMT+0700");
  var date_now = new Date();
  var seconds = Math.floor((ts - date_now) / 1000);
  console.log(seconds);
  clock.setTime(seconds);
  clock.setCountdown(true);
  clock.start();

  /*========== Countdown end ================*/
});
