import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private id = 1; // Start the ID from 1
  private contacts: any[] = [];

  addContact(contact: any): void {
    contact.id = this.id++;
    this.contacts.push(contact);
  }

  getContacts(): any[] {
    return this.contacts;
  }

  deleteContact(contactId: number): void {
    this.contacts = this.contacts.filter(contact => contact.id !== contactId);
  }
}
