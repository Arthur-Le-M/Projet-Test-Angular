import { Injectable } from '@angular/core';
import { CD } from '../../models/cd';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor(private http : HttpClient) { }

  getAllCds(): Observable<CD[]>{
    return this.http.get<CD[]>('http://localhost:3000/CD');
  }

  getCdByID(id: number): Observable<CD>{
    const cd = this.http.get<CD>('http://localhost:3000/CD/' + id);
    if(cd === undefined){
      throw new Error('CD introuvable');
    }
    return cd;
  }

  addCd(cd: CD): Observable<CD>{
    return this.getAllCds().pipe(
      map(cds => [...cds].sort((a,b) => a.id - b.id)),
      map(cds_tries => cds_tries[cds_tries.length - 1]),
      map(cd_max => (cd.id = cd_max.id + 1)),
      switchMap(() => this.http.post<CD>('http://localhost:3000/CD', cd)))
  };
}
