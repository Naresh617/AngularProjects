import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
  [x: string]: any;

  contact : {id: any, name: any, description: any, email: any} = {id: null, name: "", description: "", email: ""};

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createContact(){
    console.log(this.contact);
    this['dataService'].createContact(this.contact);
    this.contact = {id: null, name: "", description: "", email: ""};

  }


}
