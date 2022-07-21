import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Colaborador } from 'src/app/Models/Colaborador/Colaborador';
import { MatSnackBar } from '@angular/material';
import { ok } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  findAll():Observable<Colaborador[]> {
    const url = `${this.baseUrl}/colaborador`
    return this.http.get<Colaborador[]>(url);
  }

  create(colaborador: Colaborador): Observable<Colaborador> {
    const url = `${this.baseUrl}/colaborador`
    return this.http.post<Colaborador>(url, colaborador);
  }

  message(s: String): void {
    this.snackBar.open(`${s}`, "ok", {
      duration:2000
    })
  }
}
