import './index.styl';
import 'normalize.css';

require('webpack-jquery-ui/datepicker');
require('webpack-jquery-ui/selectmenu');

import '../../common.blocks/slider/slider';
import '../../common.blocks/button/button';
import '../../common.blocks/dial-percentages/dial-percentages';
import '../../common.blocks/form/form';

$('#calendar').datepicker({
  inline: true,
  firstDay: 1,
  showOtherMonths: true,
  dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  });

  $( function() {
    $( "#speed" ).selectmenu();
 
  } );