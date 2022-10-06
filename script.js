var timeDisplayEl = $('#currentDay');

function displayTime() {
    var rightNow = moment().format('dddd MMM DD, YYYY hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);