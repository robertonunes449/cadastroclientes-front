import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Colaborador } from 'src/app/Models/Colaborador/Colaborador';
import { ColaboradorService } from 'src/app/Services/Colaborador/colaborador.service';

@Component({
  selector: 'app-colaborador-delete',
  templateUrl: './colaborador-delete.component.html',
  styleUrls: ['./colaborador-delete.component.css']
})
export class ColaboradorDeleteComponent implements OnInit {


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
    uf: '',
    id: ''
  }


  constructor(
    private colService: ColaboradorService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.colaboradores.id= this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.colService.findById(this.colaboradores.id!)
    .subscribe((resposta) => {
      this.colaboradores.nome = resposta.nome
      this.colaboradores.email = resposta.email
      this.colaboradores.nascimento = resposta.nascimento
      this.colaboradores.funcao = resposta.funcao
      this.colaboradores.logradouro = resposta.logradouro
      this.colaboradores.numero = resposta.numero
      this.colaboradores.complemento = resposta.complemento
      this.colaboradores.cep = resposta.cep
      this.colaboradores.bairro = resposta.bairro
      this.colaboradores.cidade = resposta.cidade
      this.colaboradores.telefone = resposta.telefone
      this.colaboradores.celular = resposta.celular
      this.colaboradores.uf = resposta.uf
      console.log(resposta)
    })
  }

  delete(): void {
    this.colService.delete(this.colaboradores.id!)
    .subscribe((resposta) => {
      this.router.navigate(['colaboradores'])
      this.colService.message('Colaborador deletado com sucesso!')
    }, err => {
      this.colService.message(err.error.error)
    })
  }

  cancel(): void {
    this.router.navigate(['colaboradores'])   
  }
}
