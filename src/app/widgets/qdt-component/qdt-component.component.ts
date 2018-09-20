import { Component, OnInit, ElementRef, Input } from '@angular/core';
import QdtComponents from 'qdt-components';

const qConfig = {
    "config": {
        "host": "localhost",
        "secure": false,
        "port": 4848,
        "prefix": "",
        "appId": `IBM ESL Customer MASHUP v0.0.0.qvf`
    },
    "connections": { 
        "vizApi": true, 
        "engineApi": true 
    }
}


@Component({
  selector: 'qdt-component',
  templateUrl: './qdt-component.component.html',
  styleUrls: ['./qdt-component.component.scss']
})
export class QdtComponentComponent implements OnInit {

	@Input() Component: string;
    @Input() props: object;

    static qdtComponent = new QdtComponents(qConfig.config, qConfig.connections);
    
	constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    QdtComponentComponent.qdtComponent.render(this.Component, this.props, this.elementRef.nativeElement);
  }

}
