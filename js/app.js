$(function()  {
  var sliderRatio = 1.6 //just a random number that make the slider look good in all view;  

  function calSliderRatio()  {
    var sliderWidth = $('.main-slider').innerWidth();
    
    var newHeight = sliderWidth/sliderRatio;

    $('.main-slider').css('height', newHeight);
  }

  calSliderRatio();

  $(window).resize(function() {
    calSliderRatio();
  });

  $(window).load(function() {
    var $sliderText = $('.main-slider h1');
    var count = 1;

    //Text Animated
    $sliderText.find('div').each(function() {
      var $this = $(this);
      var delay = 200*count;

      count++;
      
      setTimeout(function() {
        $this.addClass('active');
      },delay)
    });

  });
});