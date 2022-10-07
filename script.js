//displays curretn time at the top
function displayTime() {
    var rightNow = moment().format('dddd MMM D, YYYY hh:mm:ss a');
    $('#currentTime').text(rightNow);
}
//refreshed time every second
setInterval(displayTime, 1000);

//changes color of timeblock based on time of day
for (i = 9; i < 18; i++) {
    if ((moment().hours() == i))
        $('#' + i).addClass('present');
    else if ((moment().hours() < i))
        $('#' + i).addClass('future');
    else
        $('#' + i).addClass('past');
}

//stores text to local storage
var text;

$('#save-button9').click(function () {
    text = $('#9').val();
    localStorage.setItem('9', text);
});
$('#save-button10').click(function () {
    text = $('#10').val();
    localStorage.setItem('10', text);
});
$('#save-button11').click(function () {
    text = $('#11').val();
    localStorage.setItem('11', text);
});
$('#save-button12').click(function () {
    text = $('#12').val();
    localStorage.setItem('12', text);
});
$('#save-button13').click(function () {
    text = $('#13').val();
    localStorage.setItem('13', text);
});
$('#save-button14').click(function () {
    text = $('#14').val();
    localStorage.setItem('14', text);
});
$('#save-button15').click(function () {
    text = $('#15').val();
    localStorage.setItem('15', text);
});
$('#save-button16').click(function () {
    text = $('#16').val();
    localStorage.setItem('16', text);
});
$('#save-button17').click(function () {
    text = $('#17').val();
    localStorage.setItem('17', text);
});

//dispalys text from local storage
for (i = 9; i < 18; i++) {
    $('#' + i).val(localStorage.getItem(i));
}