// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-contact-form',
//   templateUrl: './contact-form.component.html',
//   styleUrls: ['./contact-form.component.css']
// })
// export class ContactFormComponent {
//   contact = {
//     name: '',
//     phone: '',
//     email: ''
//   };

//   saveContact(): void {
 
//     console.log('Contact saved:', this.contact);

  
//     this.contact = {
//       name: '',
//       phone: '',
//       email: ''
//     };
//   }
// }



import { Component } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contact = {
    name: '',
    phone: '',
    email: ''
  };

  constructor(private contactService: ContactService) {}

  saveContact(): void {
    this.contactService.addContact(this.contact);
    console.log('Contact saved:', this.contact);
    this.contact = {
      name: '',
      phone: '',
      email: ''
    };
  }
}
