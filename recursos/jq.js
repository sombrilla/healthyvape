$(document).ready(function() {
	
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 500,
    outDuration: 300,
    linkElement: '.animsition-link',
    loading: true,
    loadingParentElement: 'body',
    loadingClass: 'animsition-loading',
    loadingInner: '',
    timeout: true,
    timeoutCountdown: 500,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });

});