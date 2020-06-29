// JavaScript Document
function numberGet(num) {
  var cal_display = document.getElementById('cal_display');
	cal_display.value += num;
}
function reset() {
  var cal_display = document.getElementById('cal_display');
	cal_display.value = ""
}

function result() {
  var cal_display = document.getElementById('cal_display');
	cal_display.value = eval(cal_display.value);
}