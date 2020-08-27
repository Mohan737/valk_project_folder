$(document).ready(function(){
    
    var videoObject = $('.modal-content');

    $('.video-trigger').on('click', function(){
      videoObject.attr('src', $(this).data('video'));
      $('.iframe-pop').addClass('iframe-visible');
    });
  
     $('.modal-close').on('click', function(){
      videoObject.attr('src', '');
      $('.iframe-pop').removeClass('iframe-visible');
    });
  
    $('.iframe-pop').on('click', function(){
      videoObject.attr('src', '');
      $('.iframe-pop').removeClass('iframe-visible');
    });
  
});