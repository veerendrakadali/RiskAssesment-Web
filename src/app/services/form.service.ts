import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private httpClient:HttpClient) { }

  getJSONData(){
    return this.httpClient.get('assets/jsons/inherent-risk-assesment-questionaire.json');
  }
}
