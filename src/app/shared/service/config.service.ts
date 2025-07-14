import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userPreferenceConfig, UserPreferences } from '../model/common.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    constructor(private http: HttpClient) {}

    getUserPreferences(): Observable<UserPreferences> {
      return this.http.get<UserPreferences>('db/local.config.json');
  }
  
  saveUserPreferences(prefs: userPreferenceConfig): Observable<UserPreferences> {
      return this.http.put<UserPreferences>('db/local.config.json', prefs);
  }
}
