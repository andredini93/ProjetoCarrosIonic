import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Carro } from '../../Modelos/Carro';
import { HttpErrorResponse} from '@angular/common/http';
import { AppDiniServiceProvider } from '../../providers/app-dini-service/app-dini-service';
import { NavLifecycles } from '../../Utils/ionic/nav/nav-lifecycles';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements NavLifecycles {
  
  public carros: Carro[];
  
  constructor(public navCtrl: NavController,
              private _loadingCtrl: LoadingController,
              private _alertCtrl: AlertController,
              public _carrosService: AppDiniServiceProvider) {
  }

  ionViewDidLoad(){
    let loading = this._loadingCtrl.create({
      spinner: 'dots',
      content: 'Carregando...'
    });

    loading.present();

    this._carrosService.lista().subscribe(
      (carros) => {
        this.carros = carros;
        loading.dismiss();
        },
        (err: HttpErrorResponse) =>{
          console.log(err);
          loading.dismiss();
          this._alertCtrl.create({
            title: 'Falha na conexão',
            subTitle: 'Não foi possível carregar a a lista de carros. Tente novamente!',
            buttons:[{
              text: 'Ok'}
            ]
          }).present();
        }
      )
  }

}
