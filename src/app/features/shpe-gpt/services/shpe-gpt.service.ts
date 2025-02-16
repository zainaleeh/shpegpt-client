import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShpeGPTService {
  private readonly API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  public sendMessage(text: any): Observable<any> {
    return this.http.post(`http://147.182.248.142:3001/chat`, { message: text });
  }
}
