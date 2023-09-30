import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

	@Input() nome: string = ''

  constructor() {
		console.log("Construtor");

	}
	//OnChanges está atrelado com o @Input (só ocorre a mundança se passar pelo input)
	ngOnChanges(): void {
		console.log("OnChange");

	}

	//lifeCycle = momento de vida inicial (primeira coisa que executa)
	ngOnInit(): void {
		console.log("OnInit");




	}
}
