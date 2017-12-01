$(function(){
  $('#emailform').on('submit', function(event) {
    event.preventDefault();
    if ( !$('#emailAddress').val() == '') {
      alert('Thank you for subscribing!');
    } else {
        alert('Please enter a valid email address.');
      }
  });
});