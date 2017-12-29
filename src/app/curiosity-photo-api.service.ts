import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CuriosityPhotoApiService {

  constructor(public http: Http) { }
  public preparePhotoID:number;
  public type;
  preparePhoto() {
    return this.http.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1650&camera=rhaz&api_key=Rjv3nHMwiRSR8Ku5XBEzheL3yNs1ajjV3ozM0ZPo').map(res =>res.json());
  }
  getLastPhoto(errorL) {
    
    console.log(this.preparePhotoID);
  	return this.http.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol='+ errorL+ '&camera=' + this.type + '&api_key=Rjv3nHMwiRSR8Ku5XBEzheL3yNs1ajjV3ozM0ZPo').map(res =>res.json());

  }

 

}
/*
API offline: Rjv3nHMwiRSR8Ku5XBEzheL3yNs1ajjV3ozM0ZPo'
API online: Q8ETPOytWn6iH9wjCQHc3cjflwywne9bPjdclW69 */