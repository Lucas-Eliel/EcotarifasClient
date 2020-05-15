import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class Tab3Service {

  private API_URL = "http://"+AppComponent.IP+":"+AppComponent.PORT+"/";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(
    public http : HttpClient
  ) {}

  buscarValorBandeiras(){
     return this.http.get(this.API_URL+"bandeiras/listar/", this.httpOptions);
  }

  updateNasBandeiras(id:any, bandVerde:any, bandAmarela:any, bandVermelha1:any, bandVermelha2:any, taxaFixa:any, verde:any, amarela:any, vermelha1:any, vermelha2:any){
    return this.http.get(this.API_URL+"bandeiras/update/"+id+"/"+bandVerde+"/"+bandAmarela+"/"+bandVermelha1+"/"+bandVermelha2+"/"+taxaFixa+"/"+verde+"/"+amarela+"/"+vermelha1+"/"+vermelha2, this.httpOptions);
  }
}
