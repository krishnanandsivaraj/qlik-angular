import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IbmcommonRoutingModule } from './ibmcommon-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    IbmcommonRoutingModule
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports:[HeaderComponent,FooterComponent]
})
export class IbmcommonModule { }
