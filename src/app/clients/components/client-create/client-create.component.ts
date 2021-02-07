import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Image} from '../../../shared/utils/image';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Client} from '../../client-model';
import {ClientService} from '../../client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent {
  clientCreateForm = this.fb.group({
    name: [null, Validators.required],
    occupation: [null, Validators.required],
    description: [null, Validators.required],
    logo: [null]
  });

  hasInputtedImage = true;
  url: string | ArrayBuffer | null | undefined = 'https://www.quackit.com/pix/samples/18m.jpg';

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private router: Router
    ) {}

  onSubmit(): void {
    const { description, logo, name, occupation } = this.clientCreateForm.value;
    const client = new Client(null, name, occupation, description, logo);
    this.clientService.createClient(client).subscribe(value => {
      this.router.navigate(['/clientes']).then(r => console.log(r));
    });
  }

  uploadFile(event: Event): void {
    const inputEvent = event as unknown as InputEvent;
    const target = inputEvent?.target as HTMLInputElement;
    if (target){
      const files = target?.files;
      if (files){
        const file = files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = (onloadEvent) => {
          this.url = onloadEvent?.target?.result;
          this.hasInputtedImage = true;
        };
        this.clientCreateForm.patchValue({
          logo: file
        });
        this.clientCreateForm.get('logo')?.updateValueAndValidity();
      }
    }
  }
}
