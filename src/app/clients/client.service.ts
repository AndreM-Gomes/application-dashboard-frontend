import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Client} from './client-model';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient
  ) { }

  createClient(client: Client): Observable<any>{
    const formData = new FormData();

    formData.append('name', client.name);
    formData.append('occupation', client.occupation);
    formData.append('description', client.description);
    formData.append('logo', client.logo as File);

    return this.http.post(`${environment.apiUrl}/company`, formData);
  }

  getAllClients(): Observable<Client[]>{
    return this.http.get<Client[]>(`${environment.apiUrl}/company`)
      .pipe(
        tap(console.log),
        map(response => response.map((client: any) => {
          client.logo = `data:image/png;base64,${client.logo}`;
          return client;
        }))
      );
  }

}
