var barsMenu = $('a > .fa-bars');
var hambLinks = $('.hamburger-menu');
var close = $('.close');

barsMenu.click(

  function () {

    hambLinks.fadeIn('slow',

      function(){

        hambLinks.fadeOut('slow')

      }

    );
  }

);

// close.click(
//
//   function(){
//     hambLinks.fadeOut('fast');
//   }
//
// );
