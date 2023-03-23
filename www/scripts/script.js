$(document).ready(function() {

  $('.j-burger').on('click', function() {
        $('.j-main-menu').toggleClass('is-open');
      });
  //Аккордионы
  let prevAccordionBtn = undefined;

  $('.j-accordion-btn').on('click', function() {
    
    if (prevAccordionBtn === this) {
      $(this).next().slideToggle();
    }else {
      $(prevAccordionBtn).next().slideUp();
      $(this).next().slideDown();
      prevAccordionBtn = this;
    }
  })
   
}); 


