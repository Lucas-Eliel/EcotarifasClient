import { Injectable} from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AppComponent } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class Tab4ModalCtrlService {

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

  incluir(nome:any , status:any, statdtini:any, ctrldtini:any, controle:any, estado:any){
    console.log(this.API_URL+"controle/incluir/"+nome+"/"+status+"/"+statdtini+"/"+controle+"/"+ctrldtini+"/"+estado)
    return this.http.get(this.API_URL+"controle/incluir/"+nome+"/"+status+"/"+statdtini+"/"+controle+"/"+ctrldtini+"/"+estado);
  }
  
  excluir(id:any){
    console.log(this.API_URL+"controle/incluir/"+id);
    return this.http.get(this.API_URL+"controle/deletar/"+id);
  }
}
