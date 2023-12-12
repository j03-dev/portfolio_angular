import {Component} from '@angular/core';
import {CardComponent} from "./card/card.component";
import {NgForOf} from "@angular/common";
import {Project} from "./project";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgForOf, CardComponent],
  template: `
    <section class="project">
      <app-card *ngFor="let project of projects"
                [title]="project.title"
                [description]="project.description"
                [link_project]="project.link_project"
                [image]="project.image"
      >
      </app-card>
    </section>
  `,
  styleUrl: './project.component.css'
})


export class ProjectComponent {
  projects: Project[] = [
    {
      title: "tish",
      image: "assets/project/project_2.png",
      description: "In the dynamic realm of advanced web development, I embarked on a project that showcases my expertise in Java Enterprise Edition (JEE) with JavaServer Pages (JSP) and Servlet technologies. The project revolves around the creation of a fully functional e-commerce website dedicated to the vibrant world of fashion.",
      link_project: "https://github.com/tbgracy/tish"
    },
    {
      title: "slate",
      image: "assets/project/project_3.png",
      description: "In the spirit of fostering collaborative learning and innovation, our team participated in a hackathon organized by IFM (Institut Français de Madagascar) with a focus on education. The result of our collaborative efforts is Slate, a web application designed to facilitate knowledge-sharing through a dynamic question-and-answer platform, influenced by the collaborative spirit of Full Stack Overflow.",
      link_project: "https://spudster-slate.netlify.app/"
    },
    {
      title: "Joe's blog",
      image: "assets/project/project_4.png",
      description: "Embarking on a journey to share my insights, experiences, and technological adventures, I've created Joe's blog, a dynamic blog platform powered by Django's robust template rendering engine. This blog serves as a digital canvas where I articulate my thoughts, discoveries, and learnings within the vast realm of technology.",
      link_project: "https://nomeniavojoe.pythonanywhere.com/"
    },
  ];
}
