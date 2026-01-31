import { Component, effect, inject, signal } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { Techno, TechnoService } from './service/techno.service';
import { ProjectService, Project } from './service/project.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-root',
  imports: [CardComponent, FontAwesomeModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'portfolio';
  technoService = inject(TechnoService);
  projectService = inject(ProjectService);
  list_techno: Techno[] = [];
  project_list: Project[] = [];

  faDownload = faDownload;
  faEnvelope = faEnvelope;
  faFacebook = faFacebook;
  faGithub = faGithub;
  faLinkedin = faLinkedin;


  theme = signal<'lemonade' | 'dark'>('lemonade');

  constructor() {
    this.project_list = this.projectService.getAllProjects();
    this.list_techno = this.technoService.getAllTechnos();

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
