import { Component, Input } from '@angular/core';
import { Project } from '../../service/project.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  imports: [CardComponent],
  standalone: true,
})
export class ProjectListComponent {
  @Input() project_list: Project[] = [];
}