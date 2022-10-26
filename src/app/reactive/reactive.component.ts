import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {


  // forme control representa um elemento do seu formulario
  nome: FormControl = new FormControl('')
  email: FormControl = new FormControl('')
  senha: FormControl = new FormControl('')


  // FormGrup e uma estrutura do reactive Forms que permite
  // agrupar
  dadosForms: FormGroup = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }

  enviar(){
    console.log(this.nome.value)
    console.log(this.email.value)
    console.log(this.senha.value)

    
  }

}
