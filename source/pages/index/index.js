import './index.styl';
import 'normalize.css';

require('webpack-jquery-ui/datepicker');

import '../../common.blocks/slider/slider';

$('#calendar').datepicker({
  inline: true,
  firstDay: 1,
  showOtherMonths: true,
  dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  });