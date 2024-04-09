import { Component } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { TechnoComponent } from './components/techno/techno.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, TechnoComponent],
  template: `
    <div class="container flex flex-col items-center justify-center m-auto w-11/12 md:w-9/12">
      <section class="flex flex-col items-center md:flex-row-reverse h-4/5 mt-10 md:mt-32 justify-between">
        <img class="rounded-full size-11/12 md:size-1/3" src="/assets/image.jpeg"/>
        <div>
          <div class="mt-5">
            <h2
              class="text-4xl text-sgcolor md:text-7xl text-center md:text-start font-bold pb-5 md:pb-8"
            >
              Fullstack Developer
            </h2>
            <p class="text-sgcolor text-lg max-w-4xl min-w-xs md:text-base">
              My name is <b>FITAHIANA Nomeniavo Joe</b> but you can call me
              <b><u>Joe</u></b
              >. As a dedicated Fullstack Developer.I bring ideas throught the
              language of code. Step into my digital realm, where each line of
              code tells a table innovation and creativity. Transforming
              concepts into captivating experiences.
            </p>
          </div>
          <div class="flex flex-col gap-2 md:flex-row py-5 md:w-1/2">
            @for (button of buttons; track $index) {
            <app-button [bgcolor]="button.bgcolor" [text]="button.text">
            </app-button>
            }
          </div>
        </div>
      </section>
       <section class="grid grid-cols-3 w-full m-auto md:w-1/2 md:pt-40 md:flex md:justify-between">
        @for (techno of techons; track $index) {
        <app-techno [image]="techno.image" [title]="techno.title"></app-techno>
        }
      </section>
      <section>3</section>
    </div>
  `,
})
export class AppComponent {
  title = 'portfolio';
  buttons: Array<{ bgcolor: string; text: string }> = [
    {
      bgcolor: 'bg-pmcolor',
      text: 'Contact me',
    },
    {
      bgcolor: 'bg-sgcolor',
      text: 'Resume',
    },
  ];
  techons: Array<{ title: string; image: string }> = [
    {
      title: 'Angular',
      image: 'angular-svgrepo-com.svg',
    },
    {
      title: 'Docker',
      image: 'docker-svgrepo-com.svg',
    },
    {
      title: 'Flask',
      image: 'flask-svgrepo-com.svg',
    },
    {
      title: 'Git',
      image: 'git-svgrepo-com.svg',
    },
    {
      title: 'Linux',
      image: 'linux-svgrepo-com.svg',
    },
    {
      title: 'Rust',
      image: 'rust-svgrepo-com.svg',
    },
    {
      title: 'SpringBoot',
      image: 'spring-boot-svgrepo-com.svg',
    },
  ];
}
