var hamburgerMenu = $('a > .fa-bars');
var hambunrgerLinks = $('.hamburger_links');
var close = $('.close');
/*1.
hamburgerMenu.click(
  function () {
    hambunrgerLinks.fadeIn('slow');
  }
);
close.click(
  function(){
    hambunrgerLinks.fadeOut('fast');
  }
);
/*
//--------------------------------------
// 2.
hamburgerMenu.click(
  function () {
    hambunrgerLinks.fadeIn('slow',
      function(){
        hambunrgerLinks.fadeOut('slow')
      }
    );
  }
);
/*
//---------------------------------------
// 3.
hamburgerMenu.click(
  function(){
    hambunrgerLinks.toggle('slow',
      function(){
        hambunrgerLinks.toggle('slow');
      }
    );
  }
);
/*
//----------------------------------
// 4.
hamburgerMenu.click(
  function(){
    hambunrgerLinks.toggle('slow');
  }
);
close.click(
  function(){
    hambunrgerLinks.fadeOut('slow');
  }
);
/*
//--------------------------------
// 5.
hamburgerMenu.mouseenter(
  function(){
    hambunrgerLinks.show('fast');
  }
);
close.mouseleave(
  function(){
    hambunrgerLinks.hide('fast');
  }
);

//-----------------------------------------
// 6.*/
hamburgerMenu.click(
  function(){
    hambunrgerLinks.addClass('active');
  }
);
close.click(
  function(){
    hambunrgerLinks.removeClass('active');
  }
);
