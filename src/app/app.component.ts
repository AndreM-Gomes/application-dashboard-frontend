import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;

  constructor(public fb: FormBuilder, public http: HttpClient) {
    this.form = this.fb.group({
      name: [''],
      avatar: [null]
    })
  }

  ngOnInit() { }

  uploadFile(event: Event) {
    const inputEvent = event as unknown as InputEvent;
    const target = inputEvent?.target as HTMLInputElement;
    if(target){
      const files = target?.files;
      if(files){
        const file = files[0];
        this.form.patchValue({
          avatar: file
        });
        this.form.get('avatar')?.updateValueAndValidity()
      }
    }
  }

  submitForm() {
    const formData = new FormData();
    formData.append("name",this.form.get('name')?.value);
    formData.append("icon",this.form.get('avatar')?.value);
    console.log(formData);
    this.http.post("http://localhost:8080/company",formData,{headers: {'Access-Control-Allow-Origin': '*'}}).subscribe(console.log)
  }
}
