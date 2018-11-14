import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {ContactService} from '../shared/service/contact.service';
import {Contact} from '../shared/model/contact';
import {emailTaken, emailTaken3, existEmail, phoneNumberValidator} from '../shared/validators/validators';
import {Router} from '@angular/router';
import {AlertService} from '../shared/service/alert.service';
import {CustomValidators} from '../shared/validators/customvalidate';
import 'rxjs/add/operator/map';
import {CustomValidateService} from '../shared/service/custom-validate.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact;
  contactForm: FormGroup;

  constructor(private contactService: ContactService,
              private router: Router,
              private alertService: AlertService,
              private customValidateService: CustomValidateService) {
    let fb = new FormBuilder();
    this.contactForm = fb.group({
      firstname: ['', Validators.required],
      lastname: [''],
      email: ['', phoneNumberValidator],
      message: ['']
    });
  }

  ngOnInit() {
    this.contactService.getContact().subscribe(
      contact => this.contact = contact
    );
  }

  onSubmit() {
    if (this.contactForm.valid) {
      let newContact: Contact;
      newContact = this.contactForm.value;
      newContact.article = this.contact.article;
      let newContact2: Contact;
      this.contactService.putContact(newContact).subscribe(
        contact => {
          newContact2 = contact;
        });
      this.contactForm.reset();
      this.alertService.success('Submit successful, we will contact you soon!');
      console.log(newContact2);
    }
  }


  validateEmailNotToken(service: ContactService) {
    return (control: AbstractControl) => {
      if (!control.valueChanges) {
        return Observable.of(null);
      } else {
        return control
          .valueChanges.debounceTime(1000)
          .distinctUntilChanged()
          .switchMap(value => service.isEmailDuplicate(value))
          .map(data => {
            console.log(data);
            return data ? null : {invalid: true};
          })
          .first();
      }

    };
  }


  validateEmailNotTaken2(contactService: ContactService) {
    return (control: AbstractControl) => {
      return new Observable((obs) => {
        contactService.isEmailDuplicate(control.value).subscribe(
          result => {
            if (result === 'true') {
              console.log("true")
              obs.next({emailTaken: true});
            } else {
              console.log("false")
              obs.next(null);
            }
          });
      }).debounceTime(500).distinctUntilChanged().first();
    };
  }


/*
*
* userCheck(userService: UserService): AsyncValidatorFn {
return (control: AbstractControl) => {
  return new Observable((obs) => {
    userService.findUser(control.value).subscribe(
      result => {
        if (result == true) {
          obs.next({ userExists: true });
        } else {
          obs.next(null);
        }
      }
    )
  }).debounceTime(500).distinctUntilChanged().first();
}
}*/

validateEmailNotTaken3(contactService: ContactService) {
  return (control: AbstractControl) => {
    if (!control.valueChanges) {
      return Observable.of(null);
    } else {
      return control.valueChanges
        .debounceTime(1000)
        .distinctUntilChanged()
        .switchMap(value => contactService.isEmailDuplicate(value)
        .map(data => {
          console.log(data);
          return { emailTaken: true };
        }).debounceTime(1000)
          .distinctUntilChanged().first());
    }
  };
}


}
