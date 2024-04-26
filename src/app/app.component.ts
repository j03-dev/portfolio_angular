import { Component } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { TechnoComponent } from './components/techno/techno.component';
import { CardComponent } from './components/card/card.component';

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
            <app-button color="bg-pmcolor" text="Contact me"></app-button>
            <app-button color="bg-sgcolor" text="Resume"> </app-button>
          </div>
        </div>
      </section>
      <section
        class="grid grid-cols-3 w-full m-auto md:w-1/2 md:pt-40 md:flex md:justify-between"
      >
        @for (techno of techons; track $index) {
        <app-techno
          image="{{ techno.image }}"
          title="{{ techno.title }}"
        ></app-techno>
        }
      </section>
      <section
        class="grid grid-cols-1 w-full m-auto md:grid-cols-3 space-y-5 md:space-x-5 md:space-y-0 md:mt-10"
      >
        @for (project of projects; track $index) {
        <app-card
          title="{{ project.title }}"
          image="{{ project.image }}"
          description="{{ project.description }}"
          link="{{ project.link_project }}"
        ></app-card>
        }
      </section>
    </div>
  `,
})
export class AppComponent {
  title = 'portfolio';
  techons = [
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
  projects = [
    {
      title: 'tish',
      image: 'project_2.png',
      description:
        'In the dynamic realm of advanced web development, I embarked on a project that showcases my expertise in Java Enterprise Edition (JEE) with JavaServer Pages (JSP) and Servlet technologies. The project revolves around the creation of a fully functional e-commerce website dedicated to the vibrant world of fashion.',
      link_project: 'https://github.com/tbgracy/tish',
    },
    {
      title: 'slate',
      image: 'project_3.png',
      description:
        'In the spirit of fostering collaborative learning and innovation, our team participated in a hackathon organized by IFM (Institut Français de Madagascar) with a focus on education. The result of our collaborative efforts is Slate, a web application designed to facilitate knowledge-sharing through a dynamic question-and-answer platform, influenced by the collaborative spirit of Full Stack Overflow.',
      link_project: 'https://spudster-slate.netlify.app/',
    },
    {
      title: "Joe's blog",
      image: 'project_4.png',
      description:
        "Embarking on a journey to share my insights, experiences, and technological adventures, I've created Joe's blog, a dynamic blog platform powered by Django's robust template rendering engine. This blog serves as a digital canvas where I articulate my thoughts, discoveries, and learnings within the vast realm of technology.",
      link_project: 'https://nomeniavojoe.pythonanywhere.com/',
    },
  ];
}
