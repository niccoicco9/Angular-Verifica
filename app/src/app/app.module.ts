import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NativeStorage } from '@ionic-native/native-storage';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { ModicaAggiungi } from '../pages/interactionpage/interactionpage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DetailPage } from '../pages/detail/detail';
import { ProviderServizio } from '../providers/oggettiprovider/oggettiprovider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    DetailPage,
    ModicaAggiungi
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    DetailPage,
    ModicaAggiungi
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeStorage,
    ProviderServizio,
    Camera,
    
    
    
    
  ]
})
export class AppModule {}
