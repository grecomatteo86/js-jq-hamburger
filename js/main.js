var barsMenu = $('a > .fa-bars');
var hambLinks = $('.hamburger-menu');
var close = $('.close');

barsMenu.click(

  function () {
    hambLinks.show('slow');
  }

);

close.click(

  function(){
    hambLinks.hide('slow');
  }

);
