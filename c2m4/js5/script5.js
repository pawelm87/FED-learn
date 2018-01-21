 function handleClick1(callback) {
     alert('this button has been clicked');
     if (callback) {
         callback();
     }
 }
 function doMore() {
     alert('I could process more logic here');
 }
 function doSomethingsElse() {
     document.writeln('text message');
 }

document.getElementById('dateButton').onclick = handleClick;
function handleClick() {
    document.getElementById('dateTarget').innerHTML = Date();
}
