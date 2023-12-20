import { Component } from '@angular/core';
import { ProfileComponent } from "./components/profile/profile.component";
import { SkillComponent } from "./components/skill/skill.component";
import { ProjectComponent } from "./components/project/project.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileComponent, SkillComponent, ProjectComponent],
  styleUrl: "./app.component.css",
  template: `
      <div class="container">
          <app-profile></app-profile>
          <app-skill></app-skill>
          <app-project></app-project>
      </div>`
})
export class AppComponent {
  title = 'portfolio';
}
