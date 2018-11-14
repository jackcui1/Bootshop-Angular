import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AbstractControl, ValidationErrors} from '@angular/forms';
import 'rxjs/add/observable/of';
import {ContactService} from './contact.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CustomValidateService {

  constructor() { }

  checkMail(control: AbstractControl): Observable<ValidationErrors | null> {
    console.log('CustomValidateService');
    return null;
    //return Observable.of(control.value === 0 ? null : { checkEmail: 'it works' });
    // return this.contactService.isEmailDuplicate(control.value).subscribe(res => {
    //   return res ? null : {checkEmailDuplicate : true};
    // // });
    // return http.get('/rest/contacts/email/' + control.value).map(
    //     res => console.log(res),
    //     error => console.log(error));

    // this._http.post('http://production.shippingapis.com/ShippingAPITest.dll?
    // API=Verify&XML='+data
    //   .map(data => { console.log(data);},
    //     error => {  console.warn(error);});  }

  }

}
