import './index.styl';
import 'normalize.css';

require('webpack-jquery-ui');

$( function() {
  var handle = $( ".custom-handle" );
  $( ".slider" ).slider({
    classes: {
      "ui-slider": "slider_track__value-in-block",
      "ui-slider-handle": "slider_handle__value-in-block"
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
  $( ".slider2" ).slider({
    min: 0,
    max: 100,
    step: 25,
    range: "min",
    classes: {
      "ui-slider": "slider_track__value-in-block",
      "ui-slider-handle": "slider_handle__value-in-block2"
    }
  });   
} );

/*$( function() {
  var handle = $( "#custom-handle" );
  $( ".slider" ).slider({
    animate: true, // Анимация ползунка
    range: "min", // Фон пути ползунка, если это свойство убрать, то синей линии не будет.
    value: 50, // Значение по умолчанию.
    min: 1, // Минимальная сумма.
    max: 100, // Максимальная сумма.
    step: 1, // Шаг диапазона.
    classes: {
      "ui-slider": "slider_track__value-in-block",
      "ui-slider-handle": "slider_handle__value-in-block"
    },
    create: function() {
      handle.text( $( this ).slider( "value" ) );
    },
    slide: function( event, ui ) {
      handle.text( ui.value );
    } 
  });
} );*/
