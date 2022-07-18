import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Colaborador } from 'src/app/Models/Colaborador/Colaborador';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http: HttpClient,
  ) { }

  findAll():Observable<Colaborador[]> {
    const url = `${this.baseUrl}/colaborador`
    return this.http.get<Colaborador[]>(url);
  }
}
