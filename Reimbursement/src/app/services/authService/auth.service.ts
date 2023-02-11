import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL: string = `${environment.baseURL}/`;
  loggedIn: boolean = false;
  currentUser?: Employee;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<Employee> {
    const payload = {email:email, password:password};
    return this.http.post<Employee>(`${this.authURL}/login`, payload);
  }

  logout(): Observable<any>{
    return this.http.post<any>(`${this.authURL}/logout`, null, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  setCurrentUser(user:Employee){
    this.currentUser = user;
  }

  // getCurrentUser(): Employee {
  //   return;
  // }
}
