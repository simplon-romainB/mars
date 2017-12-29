import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MaasApiService {

  constructor(public http: Http, public jsonp: Jsonp) { }

getLastReport(){
  
	return this.jsonp.get('http://marsweather.ingenology.com/v1/latest/?callback=JSONP_CALLBACK&format=jsonp').map(res =>res.json());
}	



}
