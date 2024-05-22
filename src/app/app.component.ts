import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { TechnoComponent } from './components/techno/techno.component';
import { CardComponent } from './components/card/card.component';
import { TechnoService } from './service/techno.service';
import { ProjectService } from './service/project.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, TechnoComponent, CardComponent],
  template: `
    <div
      class="container flex flex-col items-center justify-center m-auto w-10/12"
    >
      <section
        class="flex flex-col items-center md:flex-row-reverse h-4/5 mt-10 md:mt-32 justify-between"
      >
        <img
          class="rounded-full size-11/12 md:size-1/3"
          src="/assets/image.jpeg"
        />
        <div>
          <div class="mt-5">
            <h2
              class="text-4xl text-sgcolor md:text-7xl text-center md:text-start font-bold pb-5 md:pb-8"
            >
              Fullstack Developer
            </h2>
            <p
              class="text-sgcolor text-lg max-w-4xl min-w-xs md:text-base pb-4"
            >
              Salama! I'm <b>FITAHIANA Nomeniavo Joe</b>, a Fullstack Developer
              originating from the vibrant island of Madagascar. With a fervent
              passion for technology, I navigate the digital realm with ease,
              sculpting solutions with lines of code. I am committed to
              streamlining the intricacies of digital communication. Join me on
              this exhilarating journey where innovation converges with code, as
              together, we shape the future of technology, one byte at a time.
            </p>
          </div>
          <div class="flex flex-col gap-2 md:flex-row ply-5 md:w-1/2">
            <app-button
              icon="fas fa-envelope"
              color="bg-pmcolor"
              text="Contact me"
              link="#"
            ></app-button>
            <app-button
              icon="fas fa-download"
              color="bg-sgcolor"
              text="Resume"
              link="https://drive.google.com/file/d/1vQ2lFTfD7cinu4SIdO4AOk2AbGqRvKT5/view?usp=sharing"
            >
            </app-button>
          </div>
        </div>
      </section>
      <section
        class="grid grid-cols-3 w-full m-auto pt-24 pb-24 md:pb-0 md:w-1/2 md:pt-40 md:flex md:justify-between"
      >
        @for (techno of techno.technos; track $index) {
        <app-techno
          image="{{ techno.image }}"
          title="{{ techno.title }}"
        ></app-techno>
        }
      </section>
      <section
        class="grid grid-cols-1 w-full m-auto md:grid-cols-3 space-y-5 md:space-y-0 md:mt-20 md:pt-20 md:pb-10 md:gap-5 md:justify-between md:items-start md:grid-rows-[550px]"
      >
        @for (project of project.projects; track $index) {
        <app-card
          title="{{ project.title }}"
          image="{{ project.image }}"
          description="{{ project.description }}"
          link="{{ project.link_project }}"
          [technos]="project.technos"
        ></app-card>
        }
      </section>
    </div>
  `,
})
export class AppComponent {
  title = 'portfolio';
  techno = new TechnoService();
  project = new ProjectService();
}
