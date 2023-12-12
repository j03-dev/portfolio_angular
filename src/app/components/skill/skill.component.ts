import { Component } from '@angular/core';
import { SkillCardComponent } from "./skill-card/skill-card.component";
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [SkillCardComponent, NgForOf],
  template: `
    <div class="skills">
      <app-skill-card
        *ngFor="let icon of icons"
        [icon]="icon"
      >
      </app-skill-card>
    </div>
  `,
  styleUrl: './skill.component.css'
})

export class SkillComponent {
  icons = [
    "https://static.djangoproject.com/img/logos/django-logo-positive.svg",
    "assets/icon/angular-svgrepo-com.svg",
    "assets/icon/flask-svgrepo-com.svg",
    "assets/icon/rust-svgrepo-com.svg",
    "assets/icon/java-svgrepo-com.svg",
    "assets/icon/opencv-svgrepo-com.svg"
  ]
}
