import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/Models/Cliente/Cliente';
import { ClienteService } from 'src/app/Services/Cliente/cliente.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

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
  }

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

  findById() {
    this.cliService.findById(this.cliente.id!)
      .subscribe((resposta) => {
        this.cliente = resposta
    })
  }

  delete(): void {
    this.cliService.delete(this.cliente.id!)
      .subscribe(() => {
        this.router.navigate([`clientes/${this.id_col}/cliente`]);
        this.cliService.mensage('Cliente Apagado com Sucesso!')
      }, err => {
        this.router.navigate([`clientes/${this.id_col}/cliente`]);
        this.cliService.mensage('Erro ao apagar Cliente! Tente mais tarde...');
      })
  }

  cancel(): void {
    this.router.navigate([`clientes/${this.id_col}/cliente`]);
  }
}
