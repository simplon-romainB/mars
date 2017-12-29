import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApodService {

  constructor(public http: Http) { }
  ApodReport(){

return this.http.get('https://api.nasa.gov/planetary/apod?api_key=wQsreXrpdZNHKiDKrT7xKgBjAeqceW2K0qGCir9t').map(res =>res.json());

}
}
