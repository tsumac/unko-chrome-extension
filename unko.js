console.log('Started work content_script');

$('.unko-button').on('click', function() {
  $('body').css('background-color', $(this).data('color'));
});

console.log('Ended work content_script');
