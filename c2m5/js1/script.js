$(document).ready(function (){
manipulateDOM();

});

function manipulateDOM(){
    var h1Headers = $('h1'); 
    h1Headers.text('hello world');
    //var h3Headers = $('h3');
    //h3Headers.css('color','#37887d');
    $('h3').css('color','#37887d');
    $('h3').css('text-decoration', 'line-through');
    var lastH3Header = $('h3:last');
    lastH3Header.css('background-color', '#53226a');
} 
