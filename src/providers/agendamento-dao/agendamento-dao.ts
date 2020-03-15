import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import { Agendamento } from '../../Modelos/Agendamento';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AgendamentoDaoProvider {

  constructor(private _storage: Storage) {
  }

  geraChave(agendamento){
    return agendamento.emailCliente + agendamento.data.substr(0,10);
  }

  salva(agendamento: Agendamento){
    let chave = this.geraChave(agendamento);
    let promise = this._storage.set(chave,agendamento);

    return Observable.fromPromise(promise);
  }

  ehDuplicado(agendamento){
    let chave = this.geraChave(agendamento);
    let promise = this._storage
                    .get(chave)
                    .then(dado =>  dado ? true : false)
    return Observable.fromPromise(promise);
  }

}
