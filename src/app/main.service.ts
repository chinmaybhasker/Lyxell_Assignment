import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http : HttpClient) { }
  EquipmentDetailsUrl = 'https://www.dnd5eapi.co/api/equipment';
  getEqipmentDetails(){
    return this.http.get<any>(this.EquipmentDetailsUrl);
  }

  getDeatils(index){
    return this.http.get<any>(this.EquipmentDetailsUrl+'/'+index);
  }
}
