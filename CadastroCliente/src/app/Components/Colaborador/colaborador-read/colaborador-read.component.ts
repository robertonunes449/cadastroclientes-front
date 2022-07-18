import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource } from '@angular/material';
import { Colaborador } from 'src/app/Models/Colaborador/Colaborador';
import { ColaboradorService } from 'src/app/Services/Colaborador/colaborador.service';

@Component({
  selector: 'app-colaborador-read',
  templateUrl: './colaborador-read.component.html',
  styleUrls: ['./colaborador-read.component.css']
})
export class ColaboradorReadComponent implements OnInit {

  //colaboradores: Colaborador[] = [];

  displayedColumns: string[] = ['ID', 'nome', 'funcao', 'nascimento', 'celular', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(
    private colService: ColaboradorService,
    private dialog: MatDialog, 
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.colService.findAll()    
    .subscribe(resposta => {
      this.dataSource = new MatTableDataSource(resposta);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(resposta);
      //this.colaboradores = resposta;
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
