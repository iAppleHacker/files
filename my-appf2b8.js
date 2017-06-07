// Initialize your app

var myApp = new IPALib();

// Export selectors engine
var $$ = Dom7;

var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});





$$('.open-preloader-title').on('click', function () {
    myApp.showPreloader('Connecting to database')
    setTimeout(function () {
        myApp.hidePreloader();
    }, 6500);
});  
$$('.open-xemtatca').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
    }, 2000);
});

$$('.open-xemtatca1').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
    }, 4500);
});



// Add view

myApp.onPageInit('tweaked', function (page) {
    $$('.appinstall').on('click', function () {
  var modal = myApp.modal({
    title: 'App Install Help',
    text: 'The following instructions will help you install apps.',
    afterText:  '<div class="swiper-container" style="width: auto; margin:5px -15px -15px">'+
                  '<div class="swiper-pagination"></div>'+
                  '<div class="swiper-wrapper">'+
                    '<div class="swiper-slide"><img src="img/1step.PNG" height="150" style="display:block; margin-left: auto; margin-right: auto;"></div>' +
                    '<div class="swiper-slide"><img src="img/2step.PNG" height="150" style="display:block; margin-left: auto; margin-right: auto;"></div>'+
                    '<div class="swiper-slide"><img src="img/3step.PNG" height="150" style="display:block; margin-left: auto; margin-right: auto;"></div>'+
                    '<div class="swiper-slide"><img src="img/4step.PNG" height="150" style="display:block; margin-left: auto; margin-right: auto;"></div>'+
                    '<div class="swiper-slide"><img src="img/5step.PNG" height="150" style="display:block; margin-left: auto; margin-right: auto;"></div>'+
                    '<div class="swiper-slide"><img src="img/6step.PNG" height="150" style="display:block; margin-left: auto; margin-right: auto;"></div>'+
                  '</div>'+
                '</div>',
    buttons: [
      // {
      //   text: 'Support Page',


      // },
      {
        text: 'Understood!',
        bold: true,
      },
    ]
  })
  myApp.swiper($$(modal).find('.swiper-container'), {pagination: '.swiper-pagination'});
});
});