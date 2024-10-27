import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private readonly API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  public createUser(userEmail: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/users/create`, {
      email: userEmail,
    });
  }
}
