import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsComponent } from './clients.component';
import {ClientCreateComponent} from './components/client-create/client-create.component';

const routes: Routes = [
  { path: '', component: ClientsComponent },
  { path: 'novo-cliente', component: ClientCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
