$( document ).ready(function() {
  
  $('.sub-menu-trigger').hover(
    function(){ $(this).addClass('sub-menu-triggered') },
    function(){ $(this).removeClass('sub-menu-triggered') }
  );

  const modal = $('.modal');
  const overlay = $('.overlay');
  const mobileMenu = $('.mobile__menu--open');

  modal.hide();
  overlay.hide();

  $('.open-modal').click(
    function(){ $(overlay).show() },
  );
  

  $('.open-modal').click(
    function(){ $(modal).show() },
  );


  $('.modal__close').click(
    function(){ $(overlay).hide() },
  );

  $('.modal__close').click(
    function(){ $(modal).hide() },
  );

  $('.icon--hamburger-button').click(
    function(){ $(this).addClass('icon--hamburger-button-active') },
  );

  $('.icon--hamburger-button').click(
    function(){ $('.mobile__menu--open').addClass('mobile__menu--open-active') },
  );

  $('.icon--close-button').click(
    function(){ $('.mobile__menu--open').removeClass('mobile__menu--open-active') },
  );

  setInterval(function(){ 
      $("#myBtn").click();
  },3000);


  $('.modal__button').click(function(){
    $('.modal__content').hide();
    setInterval(function(){ 
      $('.modal__content--alternate').addClass('modal__content--alternate-visible');
  },500);
  });


  $('#form .form-holder__input').focus(function()
  {
      if( !$(this).val().length < 0 ) {
            $(this).addClass('notempty');
      }
  });

  (function($) {
  
    var jqBox = $('#box');
    var jqCheckboxFlash = jqBox.prev('.checkbox-flash');
    
    jqCheckboxFlash.bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
      $(this).removeClass('animate');
    });
    
    jqBox.click(function(e) {
      var parent = jqBox.parent();
      var x = e.pageX - parent.offset().left - jqCheckboxFlash.width()/2;
      var y = e.pageY - parent.offset().top - jqCheckboxFlash.height()/2;
      jqCheckboxFlash.css({top: y + 'px', left: x + 'px'}).addClass('animate');
    });
    

  })(jQuery);

});

//slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("headerSlides");
  var dots = document.getElementsByClassName("headerSlider__dots--dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
