import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginResponse } from '../model/login.model';
import { api_routes } from '../../../config/api.route';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 
    
  }

  login(): Observable<loginResponse> {
    return this.http.get<loginResponse>(api_routes.login);
  }
}
