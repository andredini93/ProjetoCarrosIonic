import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
=======
import { Observable } from 'rxjs/Observable';
>>>>>>> Dev


@Injectable()
export class AgendamentosServiceProvider {

  private _url = 'http://localhost:8080/api';

  constructor(public _http: HttpClient) {    
  }

  agenda(agendamento){
<<<<<<< HEAD
    return this._http.post(this._url+'/agendamento/agenda',agendamento)
=======
    return this._http
            .post(this._url+'/agendamento/agenda',agendamento)
            .do(()=> agendamento.enviado = true)
            .catch((err) => Observable.of(new Error('Falha')));
>>>>>>> Dev
  }

}
