// var logEl = document.querySelector('.battery-log');
  
// var battery = {
//     글씨: '0',
//     퍼센트: 5
// }

// anime({
//     targets: battery,
//     글씨: '100',
//     퍼센트: 1000,
//     round: 1,
//     easing: 'linear',
//     update: function () {
//         logEl.innerHTML = JSON.stringify(battery);
//     }
// });


function fitElementToParent(el, padding, exception) {
var timeout = null;
function resize() {
  if (timeout) clearTimeout(timeout);
  anime.set(el, {scale: 1});
  if (exception) anime.set(exception, {scale: 1});
  var pad = padding || 0;
  var parentEl = el.parentNode;
  var elOffsetWidth = el.offsetWidth - pad;
  var parentOffsetWidth = parentEl.offsetWidth;
  var ratio = parentOffsetWidth / elOffsetWidth;
  var invertedRatio = elOffsetWidth / parentOffsetWidth;
  timeout = setTimeout(function() {
    anime.set(el, {scale: ratio});
    if (exception) anime.set(exception, {scale: invertedRatio});
  }, 10);
}
resize();
window.addEventListener('resize', resize);
}

// main logo animation

var logoAnimation = (function() {

  var logoAnimationEl = document.querySelector('.logo-animation');
  var bouncePath = anime.path('.bounce path');

  fitElementToParent(logoAnimationEl, 0, '.bounce svg');

  anime.set(['.letter-a', '.letter-n', '.letter-'], {translateX: 70});

  var logoAnimationTL = anime.timeline({
    autoplay: false,
    easing: 'easeOutSine'
  })

  .add({
    targets: '.bounced',
    transformOrigin: ['50% 100% 0px', '50% 100% 0px'],
    translateY: [
      {value: [150, -160], duration: 190, endDelay: 20, easing: 'cubicBezier(0.225, 1, 0.915, 0.980)'},
      {value: 4, duration: 120, easing: 'easeInQuad'},
      {value: 0, duration: 120, easing: 'easeOutQuad'}
    ],
    scaleX: [
      {value: [.25, .85], duration: 190, easing: 'easeOutQuad'},
      {value: 1.08, duration: 120, delay: 85, easing: 'easeInOutSine'},
      {value: 1, duration: 260, delay: 25, easing: 'easeOutQuad'}
    ],
    scaleY: [
      {value: [.3, .8], duration: 120, easing: 'easeOutSine'},
      {value: .35, duration: 120, delay: 180, easing: 'easeInOutSine'},
      {value: .57, duration: 180, delay: 25, easing: 'easeOutQuad'},
      {value: .5, duration: 190, delay: 15, easing: 'easeOutQuad'}
    ],
    delay: anime.stagger(80)
  }, 1000)

  return logoAnimationTL;

})();


logoAnimation.play();