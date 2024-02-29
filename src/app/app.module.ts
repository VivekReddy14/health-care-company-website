import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from 'src/components/home-page/home-page.component';
import { MainNavbarComponent } from 'src/components/main-navbar/main-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
