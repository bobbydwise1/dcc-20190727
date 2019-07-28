/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.
*/

const pickElement = (yourArray) => {
  let number = Math.floor(Math.random()*yourArray.length);
  console.log(number)
  return yourArray[number];
};


$(document).ready(function() {
  let store = [];
  $('#form1').submit(function(event) {
    event.preventDefault();
    let input1 = $('#input1').val()
    store.push(input1);
    $('#output-section-1').append('<p>'+input1+'</p>');
  });
  $('#button2').click(function(event) {
    event.preventDefault();
    let output2 = pickElement(store);
    $('#output-section-2').text(output2);
  });
});
