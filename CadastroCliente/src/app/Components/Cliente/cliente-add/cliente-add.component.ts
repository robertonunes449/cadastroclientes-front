import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/Models/Cliente/Cliente';
import { ClienteService } from 'src/app/Services/Cliente/cliente.service';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent implements OnInit {

  id_col: String = "";

  cliente: Cliente = {
    nome: "",
    email: "",
    nascimento: new Date,
    profissao: "",
    calcado: "",
    logradouro: "",
    numero: "",
    complemento: "",
    cep: "",
    bairro: "",
    cidade: "",
    telefone: "",
    celular: "",
    contato: "",
    uf: ""
  };

  constructor(
    private cliService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id_col = this.route.snapshot.paramMap.get("id_col")!;
  }

  create(): void {
    this.cliService.create(this.cliente, this.id_col)
      .subscribe((reposta) => {
        this.router.navigate([`clientes/${this.id_col}/cliente`]);
        this.cliService.mensage("Cliente criado com Sucesso!");
      }, err => {
        this.router.navigate([`clientes/${this.id_col}/cliente`]);
        this.cliService.mensage("Erro ao criar novo Cliente! Tente mais tarde!!");
      })
  }

  cancel() {
    this.router.navigate([`clientes/${this.id_col}/cliente`])
  }

}
