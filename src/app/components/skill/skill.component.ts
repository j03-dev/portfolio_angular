import { Component } from '@angular/core';
import { SkillCardComponent } from "./skill-card/skill-card.component";

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [SkillCardComponent],
  template: `
    <div class="skills">
      @for (skill of skills; track $index) {
        <app-skill-card [icon]="skill.icon" [name]="skill.name"></app-skill-card>
      }
    </div>
  `,
  styleUrl: './skill.component.css'
})

export class SkillComponent {
  skills = [
    { name: "django", icon: "https://static.djangoproject.com/img/logos/django-logo-positive.svg" },
    { name: "angular", icon: "assets/icon/angular-svgrepo-com.svg" },
    { name: "flask", icon: "assets/icon/flask-svgrepo-com.svg" },
    { name: "spring boot", icon: "assets/icon/spring-boot-svgrepo-com.svg" },
    { name: "linux", icon: "assets/icon/linux-svgrepo-com.svg" },
    { name: "git", icon: "assets/icon/git-svgrepo-com.svg" },
    { name: "docker", icon: "assets/icon/docker-svgrepo-com.svg" },
    { name: "rust", icon: "assets/icon/rust-svgrepo-com.svg" },
  ]
}
