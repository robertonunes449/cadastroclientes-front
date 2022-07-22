import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colaborador } from 'src/app/Models/Colaborador/Colaborador';
import { ColaboradorService } from 'src/app/Services/Colaborador/colaborador.service';

@Component({
  selector: 'app-colaborador-add',
  templateUrl: './colaborador-add.component.html',
  styleUrls: ['./colaborador-add.component.css']
})
export class ColaboradorAddComponent implements OnInit {

  colaboradores: Colaborador = {
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
    private colService: ColaboradorService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  create(): void {
    this.colService.create(this.colaboradores)
      .subscribe((resposta) => {
        this.router.navigate(['colaboradores']);
        this.colService.message('Colaborador Criado com Sucesso');
        console.log(resposta)
      }, err => {
        for(let i=0; i< err.error.errors.lenght; i++) {
          this.colService.message(err.error.errors[i].message)
        }
      })
  }

  cancel() {
    this.router.navigate(['colaboradores']);
  }

}
