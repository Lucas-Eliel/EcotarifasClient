import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class Tab1Service {

  private API_URL = "http://"+AppComponent.IP+":"+AppComponent.PORT+"/";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(
    public http : HttpClient
    
  ) {}

  buscarConsumoTotal(mes:any){
     return this.http.get(this.API_URL+"consumo/buscarConsumoTotal/"+mes, this.httpOptions);
  }

  buscarMetaTotal(){
    return this.http.get(this.API_URL+"equipamento/buscarMetaTotal", this.httpOptions);
 }

 buscarValorBandeiras(){
  return this.http.get(this.API_URL+"bandeiras/listar/", this.httpOptions);
}
}
