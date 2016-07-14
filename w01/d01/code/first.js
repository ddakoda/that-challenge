$( document ).ready(function() {
  var count = 0;
  $('.btn').click(function(e){
    e.preventDefault();
    count ++;
    $(this).text("I've been clicked " + count + " times!");
    appendButton()
  })
  function.appendButton(){
    $('#buttoncontainer').append('<button class=btn>button! button!</button>');
  }
})
