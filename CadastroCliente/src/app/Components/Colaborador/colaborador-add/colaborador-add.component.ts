import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Colaborador } from 'src/app/Models/Colaborador/Colaborador';
import { ColaboradorService } from 'src/app/Services/Colaborador/colaborador.service';

@Component({
  selector: 'app-colaborador-add',
  templateUrl: './colaborador-add.component.html',
  styleUrls: ['./colaborador-add.component.css']
})
export class ColaboradorAddComponent implements OnInit {

  colaboradores$: Observable<Colaborador[]>;

  colaboradoresForm: FormGroup = this.fb.group ({
   
    nome: ['', [Validators.required]],
    email: ['',],
    nascimento: [new Date()],
    funcao: ['',],
    logradouro: ['',],
    numero: ['',],
    complemento: ['',],
    cep: ['',],
    bairro: ['',],
    cidade: ['',],
    telefone: ['',],
    celular: ['',],
    uf: ['',],
    
    
  }); 

  constructor(
    private colService: ColaboradorService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
  }

  create(): void {
    let c: Colaborador = this.colaboradoresForm.value;
    this.colService.create(c)
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
