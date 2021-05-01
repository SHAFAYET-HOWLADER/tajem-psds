
// /stivky-menu
$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  if(scrolling > 100){
     $(".navbar").addClass("sticky")
  }
  else{
    $(".navbar").removeClass("sticky")
 }
})

// banner-text-slider
$('.banner-text-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed:1000,
  dots:true,
  arrows:false,
});

// venobox
$(document).ready(function(){
    $('.venobox').venobox(); 
});    

//mixitup
var pain  = document.querySelector(".pain")
var mixer  = mixitup(pain)

// people-text-slider
$('.people-sider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed:1000,
  dots:true,
  arrows:false,
});

// mean-menu
  jQuery(document).ready(function () {
     jQuery('.navbar .menu').meanmenu();
   });

// back-to-top
  $(window).scroll(function(){
    var up = $(this).scrollTop();
    if(up < 100){
       $(".back-to-top").hide()
    }
    else{
      $(".back-to-top").show()
   }
  })
  
  //back-to-scroll
  $(".back-to-top").click(function(){
   $("html,body").animate({scrollTop:0},3000
   )
   })

  //  wow-js
  new WOW().init();