import { Component, OnInit } from '@angular/core';
import { Colaborador } from 'src/app/Models/Colaborador/Colaborador';
import { ColaboradorService } from 'src/app/Services/Colaborador/colaborador.service';

@Component({
  selector: 'app-colaborador-add',
  templateUrl: './colaborador-add.component.html',
  styleUrls: ['./colaborador-add.component.css']
})
export class ColaboradorAddComponent implements OnInit {

  colaboradores: Colaborador =  {
    nome: '',
    email: '',
    nascimento: new Date,
    funcao: '',
    logradouro: '',
    numero: '',
    complemento: '',
    cep: '',
    bairro: '',
    cidade: '',
    telefone: '',
    celular: '',
    uf: ''
  }

  constructor(
    private colService: ColaboradorService
  ) { }

  ngOnInit() {
  }

  create(): void {
    this.colService.create(this.colaboradores)
      .subscribe((resposta) => {
        console.log(resposta)
      })
  }

}
