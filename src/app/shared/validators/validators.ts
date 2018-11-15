import {
  AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validator,
  Validators
} from '@angular/forms';
import {ContactService} from '../service/contact.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';


export function CannotContainSpace(control: AbstractControl): ValidationErrors | null {
  if ((control.value as String).indexOf(' ') >= 0) {
    console.log('this is space whit.');
    return {CannotContainSpace: true};
  }
  return null;
}

export function incorrectMailFormat(control: AbstractControl): ValidationErrors | null {
  var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  if (control.value !=  '' && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
    return {"incorrectMailFormat": true};
  }
  return null;
}

export function existEmail(control: FormControl): any {
  let valid: boolean = !(control.value === 'tom@gmail.com');
  console.log("email valid:" + valid);
  return valid ? null : {existEmail: true};
}

export function emailTaken(contactService: ContactService) {

  return control => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!control.value) return null;
      contactService.isEmailDuplicate((control.value).trim()).subscribe(data => {
        console.log(data);
        if (data) {
          console.log('if data' + data);
          resolve(null);
        } else {
          //console.log('emailToken:true');
          console.log('if !data' + data);
          resolve({emailTaken: true});
        }
      });
    }, 1000);
  });
}

export function emailTaken2(control: FormControl): any {
  return control.value > 0 ? null : {emailTaken: true};
}

