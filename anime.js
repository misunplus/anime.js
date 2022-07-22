var logEl = document.querySelector('.battery-log');
  
var battery = {
    글씨: '0',
    퍼센트: 5
}

anime({
    targets: battery,
    글씨: '100',
    퍼센트: 1000,
    round: 1,
    easing: 'linear',
    update: function () {
        logEl.innerHTML = JSON.stringify(battery);
    }
});