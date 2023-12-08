import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  template: `
      <header>
          <nav>
              <ul>
                  <li class="name">FITAHIANA Nomeniavo Joe</li>
                  <li>Profile</li>
                  <li>Skill</li>
                  <li>Project</li>
              </ul>
          </nav>
      </header>
  `,
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
