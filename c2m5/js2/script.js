// function makeRequests() {
//     $.ajax({
//         url:'http://httpbin.org/get',
//         method: 'GET',
//         dataType: 'json'
//     })
//     .fail(function(){
//         alert('an error has occured')
//     })
//     .done(function(response){
//         $('body>p').text(
//             JSON.stringify(response)
//         );
//     })
// }


// function makeRequests() {  
//     $.get({
//         url: 'http://httpbin.org/user-agent',
//         dataType: 'json'
//     })
//         .done(function(response) {
//             alert(JSON.stringify(response));
//             $('body > p').text(
//                 response['user-agent']
//             );
//         });
// }

function makeRequests() {
    $.getJSON('http://httpbin.org/ip')
        .done(function(response) {
            alert(JSON.stringify(response));
            $('body > p').text(
                response.origin
            );
        });
}

$(document).ready(function (){
    makeRequests();

})