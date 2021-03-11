var barsMenu = $('a > .fa-bars');
var hambLinks = $('.hamburger-menu');
var close = $('.close');

// 1. il menu compare al mio click e scompare al mio click

/*
barsMenu.click(

  function () {
    hambLinks.fadeIn('slow');
  }

);

close.click(

  function(){
    hambLinks.fadeOut('fast');
  }

);
*/


// 2. il menu compare e scompare automaticamente ad un solo click, con effetto fadeIn fadeOut

barsMenu.click(

  function () {

    hambLinks.fadeIn('slow',

      function(){

        hambLinks.fadeOut('slow')

      }

    );
  }

);
