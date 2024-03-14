import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  

  constructor(private http:HttpClient) { }


  getCompanyList():Observable<any>{
    return this.http.get<any>(environment.apiUrl+'company/list')
  }

  getCustomFieldsButtonsIcons(moduleId: number): Observable<any> {
    return this.http.get<any>(environment.apiUrl+`customfield/get/${moduleId}`);
  }

  getCompanyById(id:number,moduleId:number):Observable<any>{
    return this.http.get<any>(environment.apiUrl+`company/getById/${id}/${moduleId}`);
  }

  getCountry():Observable<any>{
    return this.http.get<any>(environment.apiUrl+'country/getSelectionList')
  }

  getState(id:number):Observable<any>{
    return this.http.get<any>(environment.apiUrl +'state/getSelectionList?countryId='+id)
  }

  getCity(id:number){
    return this.http.get<any>(environment.apiUrl +'city/getSelectionList?stateId='+id)
  }

  getStatus(moduleId:number){
    return this.http.get<any>(environment.apiUrl+'statusDetails/getSelectionList?moduleId='+moduleId);
  }
}


