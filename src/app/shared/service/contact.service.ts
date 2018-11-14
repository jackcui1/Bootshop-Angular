import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Contact} from '../model/contact';
import {Article} from "../model/article";

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  getContact(): Observable<Contact> {
    return this.http.get('/rest/contacts/');
  }

  putContact(contact: Contact): Observable<Contact> {
    console.log(contact);
    return this.http.put('/rest/contacts/', contact );
  }
  isEmailDuplicate(email: string): Observable<string> {
    return this.http.get('/rest/contacts/email/' + email);
  }
}
