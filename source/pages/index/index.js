import './index.styl';
import 'normalize.css';

require('webpack-jquery-ui/datepicker');

import '../../common.blocks/slider/slider';
import '../../common.blocks/button/button';
import '../../common.blocks/dial-percentages/dial-percentages';
import '../../common.blocks/form/form';
import '../../common.blocks/select-menu/select-menu';

$( function() {
  $('#calendar').datepicker({
    inline: true,
    firstDay: 1,
    showOtherMonths: true,
    dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    showButtonPanel: true,
    currentText: "TODAY",
    altField: '.day-of-calendar',
    altFormat: 'dd'
  });

  var old_goToToday = $.datepicker._gotoToday
  $.datepicker._gotoToday = function(id) {
    old_goToToday.call(this,id)
    this._selectDate(id)
  };

} );
