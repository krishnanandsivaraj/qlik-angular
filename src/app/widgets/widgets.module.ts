import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { LandingComponent } from './landing/landing.component';
import { QdtComponentComponent } from './qdt-component/qdt-component.component';
import { HighlightJsService } from 'angular2-highlight-js';

@NgModule({
  imports: [
    CommonModule,
    WidgetsRoutingModule
  ],
  declarations: [LandingComponent,QdtComponentComponent],
  providers:[HighlightJsService],
  exports:[LandingComponent,QdtComponentComponent]
})
export class WidgetsModule { }
