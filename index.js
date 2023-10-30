$(document).ready(function() {
    // Hide the content initially
    $('#content').hide();
  
    // Hide the preloader when the page is fully loaded
    $(window).on('load', function() {
        $('.preloader').fadeOut(1000, function() {
            // Show the content after preloader is hidden
            $('#content').show();
        });
    });
});

$(document).ready(function() {
  $('.enlargeImage').hover(
      function() {
          $(this).css('transform', 'scale(1.1)'); // Enlarge the image on hover
      },
      function() {
          $(this).css('transform', 'scale(1)'); // Restore the original size when not hovering
      }
  );
});

  