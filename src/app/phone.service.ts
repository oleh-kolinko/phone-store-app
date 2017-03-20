import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PhoneService {
  BASE_URL: string = 'http://localhost:3000'

  constructor(private http: Http) { }

  getList(){
    return this.http.get(`${this.BASE_URL}/api/phones`)
    .toPromise()
    .then( apiResponse => apiResponse.json() )
  }
  get(id){
    return this.http.get(`${this.BASE_URL}/api/phones/${id}`)
    .toPromise()
    .then( apiResponse => apiResponse.json() )
  }
  remove(id){
    return this.http.delete(`${this.BASE_URL}/api/phones/${id}`)
    .toPromise()
    .then( apiResponse => apiResponse.json() )
  }
}
