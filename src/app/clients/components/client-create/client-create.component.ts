import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Image} from '../../../shared/utils/image';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

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
    private http: HttpClient
    ) {}

  onSubmit(): void {
    const formData = new FormData();

    formData.append('name', this.clientCreateForm.get('name')?.value);
    formData.append('occupation', this.clientCreateForm.get('occupation')?.value);
    formData.append('description', this.clientCreateForm.get('description')?.value);
    formData.append('logo', this.clientCreateForm.get('logo')?.value);

    this.http.post(`${environment.apiUrl}/company`, formData);
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
          avatar: file
        });
        this.clientCreateForm.get('logo')?.updateValueAndValidity();
      }
    }
  }
}
