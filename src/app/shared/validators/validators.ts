import {AbstractControl, FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {ContactService} from '../service/contact.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';



export function phoneNumberValidator(control: FormControl): any {
  var myreg = /\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*/;
  let valid = myreg.test(control.value);
  console.log('mobile validate result: ' + valid);
  return valid ? null : {mobile: true};
}

export function asyncPhoneNumberValidator(control: FormControl): any {
  var myreg = /\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*/;
  let valid = myreg.test(control.value);
  console.log('mobile validate result: ' + valid);
  return Observable.of(valid ? null : {mobile: true}).delay(1000);
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
          resolve({ emailTaken : true});
        }
        });
    }, 1000);
  });
}

export function emailTaken2(control: FormControl): any {
    return control.value > 0 ? null : {emailTaken: true};
}

export function emailTaken3(control: FormControl): any {
  return Observable.of(control.value >= 0 ? null : {emailTaken: " you're not authorized to work"});

}
