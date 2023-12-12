import {Component} from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  template: `
    <header>
      <nav>
        <div>
          <h1 class="name">FITAHIANA Nomeniavo Joe</h1>
        </div>
          <ul>
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
