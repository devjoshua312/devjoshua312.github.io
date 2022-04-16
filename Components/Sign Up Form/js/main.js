function uiKitFormLabelControl() {
  const field = document.querySelectorAll('.field');
  const label = document.querySelectorAll('.label');

  for (let i = 0; i < field.length; i++) {

    field[i].addEventListener('blur', function() {
      //If there is text in the input field, don't bring the label back down into the field
      if(field[i].value !== '') {
        label[i].classList.add('label-stay');
      } else {
        label[i].classList.remove('label-stay');
      }
    });
  };
}

uiKitFormLabelControl();

