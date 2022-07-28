import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/Models/Cliente/Cliente';
import { ClienteService } from 'src/app/Services/Cliente/cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  id_col: String = "";

  cliente: Cliente = {
    nome: '',
    email: '',
    nascimento: new Date,
    profissao: '',
    calcado: '',
    logradouro: '',
    numero: '',
    complemento: '',
    cep: '',
    bairro: '',
    cidade: '',
    telefone: '',
    celular: '',
    contato: '',
    uf: ''
  };

  constructor(
    private cliService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id_col = this.route.snapshot.paramMap.get("id_col")!;
    this.cliente.id = this.route.snapshot.paramMap.get("id")!;
    this.findById()
  }

  findById(): void {
    this.cliService.findById(this.cliente.id!)
      .subscribe((resposta) => {
        this.cliente =resposta
      })
  }

  update(): void {
    this.cliService.update(this.cliente)
      .subscribe((resposta) => {
        this.router.navigate([`clientes/${this.id_col}/cliente`]);
        this.cliService.mensage('Cliente atualizado com Sucesso!')
      }, err => {
        this.router.navigate([`clientes/${this.id_col}/cliente`]);
        this.cliService.mensage('Falha ao atualizar o Cliente! Tente mais tarde...')
      })
  }

  cancel() {
    this.router.navigate([`clientes/${this.id_col}/cliente`]);
  }
}
