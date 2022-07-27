import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/Models/Cliente/Cliente';
import { Colaborador } from 'src/app/Models/Colaborador/Colaborador';
import { ClienteService } from 'src/app/Services/Cliente/cliente.service';
import { ColaboradorService } from 'src/app/Services/Colaborador/colaborador.service';

@Component({
  selector: 'app-cliente-read-all',
  templateUrl: './cliente-read-all.component.html',
  styleUrls: ['./cliente-read-all.component.css']
})
export class ClienteReadAllComponent implements OnInit {

  displayedColumns: string[] = ['ID', 'nome', 'nascimento', 'celular', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  id_col: String = "";
  clientes: Cliente[] = [];
  colaboradores: Colaborador = {
    nome: "",
    email: "",
    nascimento: new Date,
    funcao: "",
    logradouro: "",
    numero: "",
    complemento: "",
    cep: "",
    bairro: "",
    cidade: "",
    telefone: "",
    celular: "",
    uf: ""
  }; 

  constructor(
    private colService: ColaboradorService,
    private cliService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id_col = this.route.snapshot.paramMap.get("id_col")!;    
    this.findAll();     
  }

  findAll() {
    this.cliService.findAllByColaborador(this.id_col)    
      .subscribe((resposta) => {
        this.dataSource = new MatTableDataSource(resposta);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.clientes)
      })
  }  

  CriarCliente(): void {
    this.router.navigate([`clientes/${this.id_col}/cliente/create`])
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
