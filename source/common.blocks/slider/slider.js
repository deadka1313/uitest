require('webpack-jquery-ui');

$( function() {
  var handle = $( ".slider_block-value" );
  $( ".slider__step1" ).slider({
    classes: {
      "ui-slider": "slider_track",
      "ui-slider-handle": "slider_handle__step1"
    },
    create: function() {
      handle.text( $( this ).slider( "value" ) );
    },
    slide: function( event, ui ) {
      handle.text( ui.value );
    }
  });   
} );

$( function() {
  $( ".slider__step25" ).slider({
    min: 0,
    max: 100,
    step: 25,
    range: "min",
    classes: {
      "ui-slider": "slider_track",
      "ui-slider-handle": "slider_handle__step25"
    }
  });   
} );