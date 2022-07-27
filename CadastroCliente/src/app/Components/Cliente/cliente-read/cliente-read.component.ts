import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaborador } from 'src/app/Models/Colaborador/Colaborador';
import { ClienteService } from 'src/app/Services/Cliente/cliente.service';
import { ColaboradorService } from 'src/app/Services/Colaborador/colaborador.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  displayedColumns: string[] = ["nome"];

  dataSource: Colaborador [] = []; 
  
  constructor(
    private colService: ColaboradorService,
    private cliService: ClienteService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.colService.findAll()
    .subscribe((col) => this.dataSource = col)
    this.findAll();
  }

  findAll() {
    this.colService.findAll()    
    .subscribe(resposta => {
      console.log(resposta);
      this.dataSource = resposta;
    })
  }

}
