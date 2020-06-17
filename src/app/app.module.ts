import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

const firebaseAuth = {
  apiKey: "AIzaSyArBobf69HP5rtsH9RtvrTeQPJkGbx5D8A",
  authDomain: "e-comauth.firebaseapp.com",
  databaseURL: "https://e-comauth.firebaseio.com",
  projectId: "e-comauth",
  storageBucket: "e-comauth.appspot.com",
  messagingSenderId: "1082152693481",
  appId: "1:1082152693481:web:a078fa37fa268cbc"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      AngularFireModule.initializeApp(firebaseAuth ),
      AngularFireAuthModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
