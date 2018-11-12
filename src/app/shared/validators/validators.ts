import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';

export function phoneNumberValidator(control: FormControl): any {
  var myreg = /\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*/;
  let valid = myreg.test(control.value);
  console.log('mobile validate result: ' + valid);
  return valid ? null : {mobile: true};
}
