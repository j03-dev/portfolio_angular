import { Component, inject } from '@angular/core';
import { ProjectService, Project } from './service/project.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    ProjectListComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';
  projectService = inject(ProjectService);
  project_list: Project[] = [];

  constructor() {
    this.project_list = this.projectService.getAllProjects();
  }
}