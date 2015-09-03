$(function() {
  var fizzbuzz = function(n) {
    var $results = $('#results'),
        c = 1;

    while(c <= n) {
      var li = document.createElement('li'),
          divBy3 = c % 3 === 0,
          divBy5 = c % 5 === 0;

      if(divBy5 && divBy3) {
        li.innerText = 'FizzBuzz';
      } else if(divBy5) {
        li.innerText = 'Buzz';
      } else if(divBy3) {
        li.innerText = 'Fizz';
      } else {
        li.innerText = c;
      }

      $results.append(li);

      c += 1;
    }
  }

  $('#fizzbuzz-form').on('submit', function(e) {
    e.preventDefault();

    var val = $('#number').val();

    if(val !== undefined && val !== '') {
      var n = parseInt(val);

      $('#results').empty();
      fizzbuzz(n);
    } else {
      alert('Please enter a valid number between 1 and 2000.');
    }
  });
});