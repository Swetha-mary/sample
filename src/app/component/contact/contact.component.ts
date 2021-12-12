import { Component, OnInit } from '@angular/core';
import { ProfileDetail } from 'src/app/shared/sample';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public profileDetail: Array<{image:string,name:string,age:string,address:string}>;

  constructor() { }

  ngOnInit() {
    this.profileDetail = ProfileDetail;
   
  }
}
