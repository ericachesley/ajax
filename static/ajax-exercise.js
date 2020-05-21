"use strict";

// Part 1

$('#get-fortune-button').on('click', () => {
  $.get('/fortune', (response) => {
    $('div#fortune-text').html(response);
  });
});


// Part 2

$('#weather-form').on('submit', (evt) => {
  evt.preventDefault();

  const formData = {
    // TODO: select the zipcode input
    zipcode: $('#zipcode-field').val()
  };

  // TODO: choose a request method (GET or POST) by uncommenting one of
  // these blocks of code

  $.get('/weather', formData, (response) => {
    // Fill in the callback function
    console.log(response);
    $('#weather-info').html(response['forecast']);
  });

  // $.post('/replaceMe', formData, (response) => {
  //   // Fill in the callback function
  // });
});


// Part 3

$("#order-form").on('submit', (evt) => {
  evt.preventDefault();

  const formData = {
    qty: $('#qty-field').val(),
    melon_type: $('#melon-type-field').val()
  };

  console.log(formData)


  $.post('/order-melons', formData, (response) => {
    console.log(response);
    $('#order-status').html(response['msg']);
    if (response['code'] === 'ERROR') {
      $('#order-status').attr('style', 'color: red');
    } else {
      $('#order-status').attr('style', 'color: black');
    }
  });

  //
  // In the callback function, use the response from the server to
  // update #order-status. IMPORTANT: if the result code is 'ERROR',
  // make it show up in red.
});
