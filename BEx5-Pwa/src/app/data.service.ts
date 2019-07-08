import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
//Test Comment
  constructor(private http: HttpClient) {}
	gimmeJokes() {
	  return this.http.get('https://api.chucknorris.io/jokes/random');
	}
  }
