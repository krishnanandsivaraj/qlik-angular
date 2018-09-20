import { Component } from '@angular/core';
import * as pckg from '../../package.json';

@Component({
  selector: 'ibm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  angular = (<any>pckg).dependencies['@angular/core'];
    qdtComponents = (<any>pckg).dependencies['qdt-components'];
}
