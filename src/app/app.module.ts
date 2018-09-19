import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IbmcommonModule } from './ibmcommon/ibmcommon.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IbmcommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
