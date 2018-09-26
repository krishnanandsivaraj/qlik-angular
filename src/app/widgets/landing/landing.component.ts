import { Component, OnInit, ElementRef } from '@angular/core';
import { HighlightJsService } from 'angular2-highlight-js';

@Component({
  selector: 'ibm-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

	constructor(private el: ElementRef, private service : HighlightJsService) { }

	OverAllProgress={
		type: 'QdtViz',
		props: {
			type: 'QdtViz', id: 'RJZZ', height: '300px'
		},
	}
  SelectionToolbar = {
		type: 'QdtCurrentSelections',
		props: {
			height: 'auto'
		},
	};
	DataCollectionProgress = {
		type: 'QdtViz',
		props: {
			type: 'barchart', id: 'aCCYH', height: '300px',
		},
		};
		
		discoveryData = {
			type: 'QdtViz',
			props: {
				type: 'barchart', id: 'VfME', height: '300px',
			},
			};

			viz4 = {
				type: 'QdtCurrentSelections',
				props: { height: '40px' },
		};
		projectTimeline = {
				type: 'QdtViz',
				props: {
				type: 'QdtViz', id: 'PEpsmp', height: '300px',
				},
		};

		reviewDocuments = {
			type: 'QdtViz',
			props: {
					type: 'QdtViz', id: 'KfpVb', height: '300px',
			},
	};

	reviewNotes = {
		type: 'QdtViz',
		props: {
				type: 'QdtViz', id: 'cMmmszS', height: '300px',
		},
};

	ibmPoc = {
		type: 'QdtViz',
		props: {
				type: 'QdtViz', id: 'PewWDf', height: '300px',
		},
};

deloittePoc = {
	type: 'QdtViz',
	props: {
			type: 'QdtViz', id: 'QjXdRv', height: '300px',
	},
};
  
  ngOnInit() {
  }

}
