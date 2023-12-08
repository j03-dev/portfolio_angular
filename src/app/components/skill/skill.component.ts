import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  template: `
      <div class="skill-container">
        <p>HTML/CSS/JS</p>
        <p>Django</p>
        <p>Angular</p>
        <p>Rust</p>
        <p>Flask</p>
      </div>
  `,
  styleUrl: './skill.component.css'
})
export class SkillComponent {

}
