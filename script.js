function displayTime() {
    var rightNow = moment().format('dddd MMM D, YYYY hh:mm:ss a');
    $('#currentTime').text(rightNow);
}

setInterval(displayTime, 1000);

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


var text;
$('#save-button1').click(function () {
    text = $('#text1').val();
    localStorage.setItem("text1", text);
});
$('#save-button2').click(function () {
    text = $('#text2').val();
    localStorage.setItem("text2", text);
});
$('#save-button3').click(function () {
    text = $('#text3').val();
    localStorage.setItem("text3", text);
});
$('#save-button4').click(function () {
    text = $('#text4').val();
    localStorage.setItem("text4", text);
});
$('#save-button5').click(function () {
    text = $('#text5').val();
    localStorage.setItem("text5", text);
});
$('#save-button6').click(function () {
    text = $('#text6').val();
    localStorage.setItem("text6", text);
});
$('#save-button7').click(function () {
    text = $('#text7').val();
    localStorage.setItem("text7", text);
});
$('#save-button8').click(function () {
    text = $('#text8').val();
    localStorage.setItem("text8", text);
});
$('#save-button9').click(function () {
    text = $('#text9').val();
    localStorage.setItem("text9", text);
});

$('#text1').val(localStorage.getItem("text1"));
$('#text2').val(localStorage.getItem("text2"));
$('#text3').val(localStorage.getItem("text3"));
$('#text4').val(localStorage.getItem("text4"));
$('#text5').val(localStorage.getItem("text5"));
$('#text6').val(localStorage.getItem("text6"));
$('#text7').val(localStorage.getItem("text7"));
$('#text8').val(localStorage.getItem("text8"));
$('#text9').val(localStorage.getItem("text9"));