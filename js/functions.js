

function init() {
      window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 400,
                header = document.querySelector("hero-element");
            if (distanceY > shrinkOn) {
                  $('.top-bar').css('height', '60px');
                  $('.top-bar').css('background-color', 'rgba(0,0,0,1)');
                  $('.top-bar').css('padding-bottom', '5px');
                  $('.top-bar').css('padding-top', '5px');
                  $('.logo').css('height', '50px');
                  $('.nav-fix').css('padding-top', '7px');
            } else {
                  $('.top-bar').css('height', '90px');
                  $('.top-bar').css('background-color', 'rgba(0,0,0,.3)');
                  $('.top-bar').css('padding-bottom', '13px');
                  $('.top-bar').css('padding-top', '13px');
                  $('.logo').css('height', '64px');
                  $('.nav-fix').css('padding-top', '14px');
            }
      });
}
window.onload = init();