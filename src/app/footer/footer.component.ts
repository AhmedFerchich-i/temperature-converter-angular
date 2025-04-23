import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api'; // Import MenuItem interface
@Component({
  selector: 'app-footer',
  imports: [MenubarModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  items: MenuItem[] = []; // Define menu items

  constructor() {
    this.items = [
      {
        label: '', // No text, icon only
        icon: 'pi pi-github', // Use the GitHub icon (ensure PrimeIcons or another icon library is set up)
        url: 'https://github.com/AhmedFerchich-i/',
        target: '_blank', // Opens in a new tab
        title: 'GitHub'
      },
      {
        label: '',
        icon: 'pi pi-linkedin', // Use the LinkedIn icon
        url: 'https://linkedin.com/in/ahmed-ferchichi',
        target: '_blank',
        title: 'LinkedIn'
      },
      {
        label: '',
        icon: 'pi pi-envelope', // Use the envelope icon
        url: 'mailto:mcferchichi@gmail.com', // Opens the user's mail client
        title: 'Email'
      }
    ];
  }

}
