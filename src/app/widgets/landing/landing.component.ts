import { Component, OnInit, ElementRef } from '@angular/core';
import { HighlightJsService } from 'angular2-highlight-js';

@Component({
  selector: 'ibm-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

	constructor(private el: ElementRef, private service : HighlightJsService) { }
  viz1 = {
		type: 'QdtSelectionToolbar',
		props: {
			type: 'QdtSelectionToolbar', id:'VfME', height: '300px',
		},
	};
	viz2 = {
		type: 'QdtViz',
		props: {
			type: 'barchart', id: 'aCCYH', height: '300px',
		},
		};
		
		viz3 = {
			type: 'QdtViz',
			props: {
				type: 'barchart', id: 'VfME', height: '300px',
			},
			};

			viz4 = {
				type: 'QdtCurrentSelections',
				props: { height: '40px' },
		};
		viz5 = {
				type: 'QdtViz',
				props: {
				type: 'QdtViz', id: 'PEpsmp', height: '300px',
				},
		};
  
  ngOnInit() {
  }

}
