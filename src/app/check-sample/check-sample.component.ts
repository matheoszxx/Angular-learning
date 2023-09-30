import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked,
	AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked,
AfterViewInit, OnDestroy  {

	//criando uma propriedade
	quantidade: number = 0

  constructor() {
		console.log('Construtor');
	}

	//criando um método
	adicionar(){
		this.quantidade += 1
	}

	decrementar(){
		this.quantidade -=1
	}

	//checked -> content -> view

	ngDoCheck(): void {
		console.log('ngDoCheck');
	}
	//após alguma alteração, verifica o conteudo
	ngAfterContentChecked(): void {
		console.log('ngAfterContentChecked.');
	}
	//quando o primeiro conteudo é iniciado
	ngAfterContentInit(): void {
		console.log('ngAterContentInit.');
	}
	//após alguma alteração verifica a view
	ngAfterViewChecked(): void {
		console.log('ngAferViewChecked.');
	}
	//depois da inicialização da view
	ngAfterViewInit(): void {
		console.log('ngAterViewInit.');
	}
  ngOnInit(): void {
		console.log('ngOnInit')
  }

	ngOnDestroy(): void {
		console.log("goodbye my friend");

	}

}
