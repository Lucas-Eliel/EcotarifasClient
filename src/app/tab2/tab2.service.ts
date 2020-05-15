import { Injectable} from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class Tab2Service {

  private API_URL = "http://"+AppComponent.IP+":"+AppComponent.PORT+"/";
  public headers;
  public options;

  constructor(
    public http : Http
  ) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');

    this.options = new RequestOptions({headers : this.headers})
  }

  buscarDadosGrafico(mes:any, ano:any){
     return this.http.get(this.API_URL+"consumo/buscarDadosGrafico/"+mes+"/"+ano);
  }
}
