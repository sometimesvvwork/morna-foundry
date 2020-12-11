$(document).ready(function() {
    var interval = setInterval(function() {
    var momentNow = moment();
    $('#time-part').html(momentNow.format('hh:mm:ss YYYY').toLowerCase());
    }, 100);
  });