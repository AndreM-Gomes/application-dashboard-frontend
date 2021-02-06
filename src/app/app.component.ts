import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;
  @ViewChild('drawer')
  private drawer!: MatSidenav;

  constructor(public fb: FormBuilder, public http: HttpClient) {
    this.form = this.fb.group({
      name: [''],
      avatar: [null]
    })
  }

  ngOnInit() { }

  toggleSidenav(){
    this.drawer.toggle();
  }



  submitForm() {
    const formData = new FormData();
    formData.append("name",this.form.get('name')?.value);
    formData.append("icon",this.form.get('avatar')?.value);
    console.log(formData);
    this.http.post("http://localhost:8080/company",formData,{headers: {'Access-Control-Allow-Origin': '*'}}).subscribe(console.log)
  }
}
