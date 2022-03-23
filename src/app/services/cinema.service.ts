import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  private url = "http://localhost:8080/cities";

  constructor(private httpClient: HttpClient) {}

  getCities(){
    return this.httpClient.get(this.url);
    }
}
