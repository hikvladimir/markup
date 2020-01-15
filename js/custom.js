$(document).ready(function() {

let totalSum = $(".sold__link_cart .total-sum");

    if(totalSum.html().length == 0){
      totalSum.addClass("total-sum_padding");
    }
    else if (totalSum.html().length > 2 ){
      totalSum.removeClass('total-sum_padding');
    }


  let soldLinkActive = $(".sold__item_top").find('.sold__link');

    for(let i = 0; soldLinkActive.length > i; i++){

      if(!soldLinkActive[i].classList.contains('active')){
        soldLinkActive[i].style.borderBottom= "1px solid #ccc";
      }

    }



  let product = $('.product');

  $('.product')
      .on('mouseenter', function (event) {
        event.preventDefault();
        $(this).find('.product__link').html('detail').addClass('visible');
        $(this).find('.product__frame').addClass('active');
        $(this).find('.product__images').addClass('hidden');
        $(this).find('.product__btns-wrap').addClass('visible');
      })
      .on('mouseleave', function (event) {
        event.preventDefault();
        $(this).find('.product__link').html('').removeClass('visible');
        $(this).find('.product__frame').removeClass('active');
        $(this).find('.product__images').removeClass('hidden');
        $(this).find('.product__btns-wrap').removeClass('visible');
      });




  $('.latest-list').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 5,
    slidesToScroll: 1
  });

});


