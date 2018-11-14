import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {ContactService} from '../service/contact.service';
import {Observable} from 'rxjs/Observable';

export class CustomValidators extends Validators {

  static isEmailDuplicate(control: AbstractControl,
                    contactService: ContactService): any {
    return (control: AbstractControl) => {
      return contactService.isEmailDuplicate(control.value).map(res => {
        return res ? null : {isExistEmail: true};
      }).first();
    };
  }

  static phoneNumberValidator(control: FormControl): any {
    var myreg = /\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*/;
    let valid = myreg.test(control.value);
    console.log('mobile validate result: ' + valid);
    return valid ? null : {mobile: true};
  }
}


