import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaborador } from 'src/app/Models/Colaborador/Colaborador';
import { ColaboradorService } from 'src/app/Services/Colaborador/colaborador.service';

@Component({
  selector: 'app-colaborador-update',
  templateUrl: './colaborador-update.component.html',
  styleUrls: ['./colaborador-update.component.css']
})
export class ColaboradorUpdateComponent implements OnInit {

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
    private route: ActivatedRoute,
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

  update(): void {
    this.colService.update(this.colaboradores)
      .subscribe((resposta) => {
        this.router.navigate(['colaboradores'])
        this.colService.message('Dados do Colaborador Atualizado com Sucesso!')
      }, err => {
        console.log(err)
      })
  }

  cancel(): void {
    this.router.navigate(['colaboradores'])
  }

}
