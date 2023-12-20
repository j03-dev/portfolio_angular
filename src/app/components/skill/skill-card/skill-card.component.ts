import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [],
  template: `
    <div>
      <img src="{{icon}}" alt="logo skill" width="64px" height="64px">
    </div>
  `,
  styleUrl: './skill-card.component.css'
})
export class SkillCardComponent {
  @Input("icon") icon: string = "";
}
