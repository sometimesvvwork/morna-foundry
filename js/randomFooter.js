$(document).ready(function(){ 
    var colors = ['#ff4417','#ff0062','#a5c4be'];
    var new_color = colors[Math.floor(Math.random()*colors.length)];
    $('.pt-1').css('background-color',new_color);
  });
