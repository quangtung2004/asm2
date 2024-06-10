import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  apiUrl = 'http://localhost:3000/users';
  constructor() {}

  register(data: any) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }
  //  login(data){

  //  }
}
