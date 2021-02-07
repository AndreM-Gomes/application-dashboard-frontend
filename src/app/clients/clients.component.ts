import { ClientService } from './client.service';
import { Component, OnInit } from '@angular/core';
import {SourceImage} from '../shared/utils/source-image';
import {Client} from './client-model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  image;
  description: string;

  clients$: Observable<Client[]>;
  constructor(
    private service: ClientService
  ) {
    this.image = new SourceImage('https://content.presspage.com/clients/o_1918.png');
    this.description = 'Kuehne + Nagel International AG is a global transport and logistics company based in Bremen, Germany. It was founded in 1890, in Bremen, Germany, by August Kühne and Friedrich Nagel. It provides sea freight and airfreight forwarding, contract logistics, and overland businesses.\n';
    this.clients$ = this.service.getAllClients();
  }

  ngOnInit(): void {
  }

}
