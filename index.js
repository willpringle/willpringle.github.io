
console.log('index working');

$(document).ready(() => {

  console.log('e');  
  $('#boton').submit((e) => {
    e.preventDefault();
    
    alert(navigator.userAgent);
    console.log(navigator.connection);
  });
});
