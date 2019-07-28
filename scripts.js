/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.
*/

const pickElement = (yourArray) => {
  let number = Math.ceil(Math.random()*yourArray.length-1);
  console.log(number)
  return yourArray[number];
};

let test = ['apple','bannana','pear','orange'];
console.log('test: ',pickElement(test));

$(document).ready(function() {
  $('#form1').submit(function(event) {
    let input1 = JSON.parse($('#input-section-1').val());
    console.log('your input: ',input1)
    let output1 = pickElement(input1);
    $('#output-section-1').text('your output: ', output1);
  });
});
