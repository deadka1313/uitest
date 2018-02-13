function validForm(form) {
  var elems = form.elements;
  var at=elems.emailMessageForm.value.indexOf("@");
  var dot=elems.emailMessageForm.value.indexOf(".");
  if (!elems.nameMessageForm.value) {
    document.getElementById("errorBubbleName").style.display = "block";
    document.getElementById("thanksBubbleName").style.display = "none";
    if (elems.emailMessageForm.value || !(at<1 || dot <1)) {
      document.getElementById("thanksBubbleEmail").style.display = "block";
      document.getElementById("errorBubbleEmail").style.display = "none";
    }
    if (!elems.emailMessageForm.value || at<1 || dot <1) {
      document.getElementById("errorBubbleEmail").style.display = "block";
      document.getElementById("thanksBubbleEmail").style.display = "none";
    }
    return false;
  }
  if ((!elems.emailMessageForm.value) || at<1 || dot <1) {
    document.getElementById("errorBubbleEmail").style.display = "block";
    document.getElementById("thanksBubbleEmail").style.display = "none";
    if (elems.nameMessageForm.value) {
      document.getElementById("thanksBubbleName").style.display = "block";
      document.getElementById("errorBubbleName").style.display = "none";
    }
    return false;
  }
  if (elems.emailMessageForm.value || !(at<1 || dot <1)) {
    if (elems.nameMessageForm.value) {
      document.getElementById("thanksBubbleName").style.display = "block";
      document.getElementById("errorBubbleName").style.display = "none";
    }
  }
  if (!elems.messageForm.value) {
    return false;
  }
  return true;
}
global.validForm = validForm;