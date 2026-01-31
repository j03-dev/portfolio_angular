import { Component, signal, effect } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.css'],
  imports: [FontAwesomeModule],
  standalone: true,
})
export class ThemeSwitchComponent {
  theme = signal<'lemonade' | 'dark'>('lemonade');
  faSun = faSun;
  faMoon = faMoon;

  constructor() {
    effect(() => {
      document.documentElement.setAttribute('data-theme', this.theme());
    });
  }

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme') as 'lemonade' | 'dark' | null;
    if (savedTheme) {
      this.theme.set(savedTheme);
    }
  }

  toggleTheme() {
    const newTheme = this.theme() === 'lemonade' ? 'dark' : 'lemonade';
    this.theme.set(newTheme);
    localStorage.setItem('theme', newTheme);
  }
}
