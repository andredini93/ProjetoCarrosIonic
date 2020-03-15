import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { AppDiniServiceProvider } from '../providers/app-dini-service/app-dini-service';
import { AgendamentosServiceProvider } from '../providers/agendamentos-service/agendamentos-service';
<<<<<<< HEAD

import 'rxjs/add/operator/finally';
=======
import { IonicStorageModule } from '@ionic/storage';

import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { AgendamentoDaoProvider } from '../providers/agendamento-dao/agendamento-dao';
>>>>>>> Dev

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'aluracar',
        storeName: 'agendamentos',
        driverOrder: ['indexeddb']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppDiniServiceProvider,
<<<<<<< HEAD
    AgendamentosServiceProvider
=======
    AgendamentosServiceProvider,
    AgendamentoDaoProvider
>>>>>>> Dev
  ]
})
export class AppModule {}
