import './index.styl';
import 'normalize.css';

require('webpack-jquery-ui/slider');
require('webpack-jquery-ui/css');

$( function() {
  $( ".slider-norange" ).slider({
    //range: true
  });
} );