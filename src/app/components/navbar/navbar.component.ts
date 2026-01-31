import { Component } from '@angular/core';
import { ThemeSwitchComponent } from '../theme-switch/theme-switch.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [ThemeSwitchComponent],
  standalone: true,
})
export class NavbarComponent {

}