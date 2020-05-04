window.onload=function(){
    var mainNav = document.getElementById("js-menu");
    var navBarToggle = document.getElementById("js-navbar-toggle");
    navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("js-nav").style.backgroundColor = "#283149";
  }
  else {
    document.getElementById("js-nav").style.backgroundColor = "transparent";
  }
}
var particleJson = {
  "particles":{
    "number":{
      "value":100
    },
    "color":{
      "value":"#fff"
    },
    "shape":{
      "type":"circle",
      "stroke":{
        "width":1,
        "color":"#ccc"
      },
      "image":{
        "src":"http://www.iconsdb.com/icons/preview/white/contacts-xxl.png"
      }
    },
    "opacity":{
      "value":0.5,
      "random":true,
      "anim":{
        "enable":false,
        "speed":1
      }
    },
    "size":{
      "value": 5,
      "random":false,
      "anim":{
        "enable": false,
        "speed":30
      }
    },
    "line_linked":{
      "enable": true,
      "distance": 120,
      "color":"#fff",
      "width":1
    },
    "move":{
      "enable":true,
      "speed":2,
      "direction":"none",
      "straight":false
    }
  },
  "interactivity":{
    "events":{
      "onhover":{
        "enable":true,
        "mode":"repulse"
      },
      "onclick":{
        "enable": true,
        "mode":"push"
      }
    },
    "modes":{
      "repulse":{
        "distance":50,
        "duration":0.4
      },
      "bubble":{
        "distance":100,
        "size":10
      }
    }
  }
};

    var jsonUri = "data:text/plain;base64,"+window.btoa(JSON.stringify(particleJson));
    particlesJS.load('particles-js',jsonUri, function(){
    console.log("particles loaded");
});

// function isScrolledIntoView(elem)
// {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();
//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();
//     return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }

// $(window).scroll(function() {    
//     if(isScrolledIntoView($('#about'))) {
//       document.getElementById("about-nav").classList.add("visible");
//       document.getElementById("skills-nav").classList.remove("visible");
//       document.getElementById("projects-nav").classList.remove("visible");
//       document.getElementById("contact-nav").classList.remove("visible");
//     }
//     if(isScrolledIntoView($('#skills'))) {
//       document.getElementById("about-nav").classList.remove("visible");
//       document.getElementById("skills-nav").classList.add("visible");
//       document.getElementById("projects-nav").classList.remove("visible");
//       document.getElementById("contact-nav").classList.remove("visible");
//     }  
//     if(isScrolledIntoView($('#projects'))) {
//       document.getElementById("about-nav").classList.remove("visible");
//       document.getElementById("skills-nav").classList.remove("visible");
//       document.getElementById("projects-nav").classList.add("visible");
//       document.getElementById("contact-nav").classList.remove("visible");
//     }
//     if(isScrolledIntoView($('#contact'))) {
//       document.getElementById("about-nav").classList.remove("visible");
//       document.getElementById("skills-nav").classList.remove("visible");
//       document.getElementById("projects-nav").classList.remove("visible");
//       document.getElementById("contact-nav").classList.add("visible");
//     }    
//     if(isScrolledIntoView($('.hero'))) {
//       document.getElementById("about-nav").classList.remove("visible");
//       document.getElementById("skills-nav").classList.remove("visible");
//       document.getElementById("projects-nav").classList.remove("visible");
//       document.getElementById("contact-nav").classList.remove("visible");
//     }  
// });
}
