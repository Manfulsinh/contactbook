


import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})export class ContactListComponent implements OnInit {

  contacts: any[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

  editContact(contact: any): void {
  
    console.log('Editing contact:', contact);
  }

  deleteContact(contactId: number): void {
    this.contactService.deleteContact(contactId);
    this.contacts = this.contactService.getContacts();
  }
}