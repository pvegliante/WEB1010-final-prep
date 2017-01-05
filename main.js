var contactBtn = $('#contact-btn');
var paragraphs = $('#card-text p');
var serviceBtn = $('#service-btn');
var paragraph = $('#service-text ul')
var form = $('#contact-form');
var formBtn = $('#form-btn')

contactBtn.click(function(event) {
  event.preventDefault();
  paragraphs.toggle();
});

serviceBtn.click(function(event){
  event.preventDefault();
  paragraph.toggle();
});

form.submit(function(e) {
  e.preventDefault();

  $.ajax({
    url: 'http://fvi-grad.com:4004/fakeform',
    method: 'POST',
    data: form.serialize()
  })
  .done(function() {
    $('#form-btn').html('Message Sent!');
  })
  .fail(function() {
    formBtn.html('Error sending message');
  });
});
