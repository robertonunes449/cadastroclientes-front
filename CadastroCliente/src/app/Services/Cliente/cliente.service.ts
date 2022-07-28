import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/Models/Cliente/Cliente';
import { Colaborador } from 'src/app/Models/Colaborador/Colaborador';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl: String = environment.baseUrl

  constructor(
    private http: HttpClient,
    private _snack: MatSnackBar
  ) { }

  findAllByColaborador(id_col: String): Observable<Cliente[]> {
    const url = `${this.baseUrl}/cliente?colaborador=${id_col}`
    return this.http.get<Cliente[]>(url)
  }

  findById(id: String):Observable<Cliente>{
    const url = `${this.baseUrl}/cliente/${id}`
    return this.http.get<Cliente>(url)
  }

  update(cliente: Cliente):Observable<Cliente> {
    const url = `${this.baseUrl}/cliente/${cliente.id}`
    return this.http.put<Cliente>(url, cliente)
  }

  create(cliente: Cliente, id_col: String): Observable<Cliente> {
    const url = `${this.baseUrl}/cliente?colaborador=${id_col}`
    return this.http.post<Cliente>(url, cliente)
  }

  delete(id: String):Observable<void> {
    const url = `${this.baseUrl}/cliente/${id}`
    return this.http.delete<void>(url)
  }

  mensage(str: String): void {
    this._snack.open(`${str}`, 'OK', {duration: 3000 })
  }
}

