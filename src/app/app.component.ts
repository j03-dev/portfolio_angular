import { Component, inject } from "@angular/core";
import { ButtonComponent } from "./components/button/button.component";
import { TechnoComponent } from "./components/techno/techno.component";
import { CardComponent } from "./components/card/card.component";
import { Techno, TechnoService } from "./service/techno.service";
import { ProjectService, Project } from "./service/project.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ButtonComponent, TechnoComponent, CardComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "portfolio";
  technoService = inject(TechnoService);
  projectService = inject(ProjectService);
  list_techno: Techno[] = [];
  project_list: Project[] = [];

  constructor() {
    this.project_list = this.projectService.getAllProjects();
    this.list_techno = this.technoService.getAllTechnos();
  }
}
