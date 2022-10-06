var timeDisplayEl = $('#currentDay');

function displayTime() {
    var rightNow = moment().format('dddd MMM DD, YYYY hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);

function checkTime() {
    if ((moment().hours() == 9))
        $("#color9").attr("class", "col-md-10 present")
    if ((moment().hours() == 10))
        $("#color10").attr("class", "col-md-10 present")
    if ((moment().hours() == 11))
        $("#color11").attr("class", "col-md-10 present")
    if ((moment().hours() == 12))
        $("#color12").attr("class", "col-md-10 present")
    if ((moment().hours() == 13))
        $("#color13").attr("class", "col-md-10 present")
    if ((moment().hours() == 14))
        $("#color14").attr("class", "col-md-10 present")
    if ((moment().hours() == 15))
        $("#color15").attr("class", "col-md-10 present")
    if ((moment().hours() == 16))
        $("#color16").attr("class", "col-md-10 present")
    if ((moment().hours() == 17))
        $("#color17").attr("class", "col-md-10 present")

    if ((moment().hours() < 9))
        $("#color9").attr("class", "col-md-10 future")
    if ((moment().hours() < 10))
        $("#color10").attr("class", "col-md-10 future")
    if ((moment().hours() < 11))
        $("#color11").attr("class", "col-md-10 future")
    if ((moment().hours() < 12))
        $("#color12").attr("class", "col-md-10 future")
    if ((moment().hours() < 13))
        $("#color13").attr("class", "col-md-10 future")
    if ((moment().hours() < 14))
        $("#color14").attr("class", "col-md-10 future")
    if ((moment().hours() < 15))
        $("#color15").attr("class", "col-md-10 future")
    if ((moment().hours() < 16))
        $("#color16").attr("class", "col-md-10 future")
    if ((moment().hours() < 17))
        $("#color17").attr("class", "col-md-10 future")
}
checkTime();