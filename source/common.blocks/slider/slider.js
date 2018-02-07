require('webpack-jquery-ui/slider');

$( ".slider__step1" ).each(function() {
  var value = parseInt( $( this ).text(), 10 );
  $( this ).slider({
    value: value,
    classes: {
      "ui-slider": "slider_track",
      "ui-slider-handle": "slider_handle__step1"
    },
    create: function() {
      $( "#"+$(this).attr('id')+" #slider_block-value" ).text( $( this ).slider( "value" ) );
    },
    slide: function( event, ui ) {
      $( "#"+$(this).attr('id')+" #slider_block-value" ).text( ui.value );
    }
  });   
} );

$( ".slider__step25" ).each(function() {
  var value = parseInt( $( this ).text(), 10 );
  $( this ).slider({
    min: 0,
    max: 100,
    step: 25,
    range: "min",
    value: value,
    classes: {
      "ui-slider": "slider_track",
      "ui-slider-handle": "slider_handle__step25"
    }
  });  
} );