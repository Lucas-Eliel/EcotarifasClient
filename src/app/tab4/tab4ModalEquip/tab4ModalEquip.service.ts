import { Injectable} from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AppComponent } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class Tab4ModalEquipService {

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

  gravarOuAlterarEquipamento(nome:any, meta:any, ctrldiario:any, arduino:any){
     console.log(this.API_URL+"equipamento/incluir/"+nome+"/"+meta+"/"+ctrldiario+"/"+arduino)
     return this.http.get(this.API_URL+"equipamento/incluir/"+nome+"/"+meta+"/"+ctrldiario+"/"+arduino);
  }

  excluirEquipamento(id:any){
    console.log(this.API_URL+"equipamento/deletar/"+id);
    return this.http.get(this.API_URL+"equipamento/deletar/"+id);
 }
}
