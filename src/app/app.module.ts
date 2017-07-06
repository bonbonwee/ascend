import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { LandingPage } from '../pages/landing/landing';
import { RegisterPage } from '../pages/register/register';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { AddClimbPage } from '../pages/add-climb/add-climb';
import { ViewHistoryPage } from '../pages/view-history/view-history';
import { UsersProvider } from '../providers/users/users';
import { TopRopeClimbsProvider } from '../providers/top-rope-climbs/top-rope-climbs';

let injections: any[] = [
    MyApp,
    LandingPage,
    RegisterPage,
    DashboardPage,
    AddClimbPage,
    ViewHistoryPage
  ]

@NgModule({
  declarations: injections,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,
    TopRopeClimbsProvider
  ]
})
export class AppModule {}
