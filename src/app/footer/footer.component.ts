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
        label: 'Github',
        icon: 'pi pi-home', // PrimeIcons home icon
        routerLink: '/', // Navigate to the root route
      },
      {
        label: 'Linkedin',
        icon: 'pi pi-list',
        
      },
      {
        label: 'Email',
        icon: 'pi pi-envelope',
        command: () => {
          alert('Contact us clicked!');
        },
      },
    ];
  }

}
