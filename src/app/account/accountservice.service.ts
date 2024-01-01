import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Accountinfo } from './accountinfo';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {
  url='http://localhost/articles/';
  constructor(private http:HttpClient) { }
  createAccount(accountinfo: Accountinfo): Observable<Accountinfo> {
    return this.http.post<Accountinfo>(this.url + 'signup.php', accountinfo);
  }

}
