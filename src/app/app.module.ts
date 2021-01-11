import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './component/map/map.component';

import { MarkerService }  from './services/marker.service'
import { PopupService } from './services/popup.service'
import { ShapeService } from './services/shape.service'

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MarkerService, PopupService, ShapeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
