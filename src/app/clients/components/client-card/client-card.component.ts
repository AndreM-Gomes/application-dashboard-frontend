import { Component, Input, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit {

  @Input() name!: string;
  @Input() image!: string | File;
  @Input() occupation!: string;
  @Input() description!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
