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
              link="https://drive.google.com/file/d/1GWXRp4QJb07W1ws0e4drVIA6J7MvpkLw/view?usp=sharing"
            >
            </app-button>
          </div>
        </div>
      </section>
      <section
        class="grid grid-cols-3 w-full m-auto pt-24 pb-24 md:pb-0 md:w-1/2 md:pt-40 md:flex md:justify-between"
      >
        @for (techno of technos; track $index) {
        <app-techno
          image="{{ techno.image }}"
          title="{{ techno.title }}"
        ></app-techno>
        }
      </section>
      <section
        class="grid grid-cols-1 w-full m-auto md:grid-cols-3 space-y-5 md:space-y-0 md:mt-20 md:pt-20 md:pb-10 md:gap-5 md:justify-between md:items-start"
      >
        @for (project of projects; track $index) {
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
  technos = [
    {
      title: 'Python',
      image: 'https://www.vectorlogo.zone/logos/python/python-icon.svg',
    },
    {
      title: 'Django',
      image:
        'https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg',
    },
    {
      title: 'Angular',
      image: 'https://www.vectorlogo.zone/logos/angular/angular-icon.svg',
    },
    {
      title: 'Rust',
      image: 'https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg',
    },
    {
      title: 'Java',
      image: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
    },
    {
      title: 'SpringBoot',
      image: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg',
    },
  ];
  projects = [
    {
      title: 'Tish',
      image: 'project_2.png',
      description:
        'Tish is an e-commerce website dedicated to fashion, built using Java Enterprise Edition (JEE), JavaServer Pages (JSP), and Servlet technologies.',
      link_project: 'https://tish.onrender.com',
      technos: ['fab fa-java', 'fab fa-html5', 'fab fa-js', 'fab fa-css3-alt'],
    },
    {
      title: 'Slate',
      image: 'project_3.png',
      description:
        "Slate is a web application developed during a hackathon, designed to facilitate knowledge-sharing through a dynamic question-and-answer platform. It's inspired by Stack Overflow and built with Python, HTML5, React, and Bootstrap.",
      link_project: 'https://spudster-slate.netlify.app/',
      technos: [
        'fab fa-python',
        'fab fa-html5',
        'fab fa-react',
        'fab fa-bootstrap',
      ],
    },
    {
      title: "Joe's blog",
      image: 'project_4.png',
      description:
        "Joe's blog is a platform where I share my insights, experiences, and technological adventures. It's a dynamic blog platform powered by Django's robust template rendering engine.",
      link_project: 'https://nomeniavo-joe-blog.onrender.com/',
      technos: ['fab fa-python', 'fab fa-html5', 'fab fa-bootstrap'],
    },
    {
      title: 'Russenger',
      image: 'project_5.png',
      description:
        'Russenger is a Rust library designed to simplify the management of Facebook Messenger webhook responses. It provides an intuitive interface for constructing and sending various response types, enhancing the development process by providing a seamless and intuitive interface.',
      link_project: 'https://crates.io/crates/russenger',
      technos: ['fab fa-rust'],
    },
    {
      title: 'TimeTable',
      image: 'project_6.png',
      description:
        'TimeTable is a CLI tool designed for educational institutions to simplify timetable creation. It enforces scheduling constraints and allows customization of class hours, ensuring balanced and efficient timetables.',
      link_project: 'https://github.com/tbgracy/timetable',
      technos: ['fab fa-python'],
    },
    {
      title: 'Ossas-MusicPlayer',
      image: 'project_7.png',
      description:
        'Ossas-MusicPlayer is a Python-based audio player built with Tkinter. It provides a user-friendly interface for seamless audio playback, demonstrating the power of Tkinter in application development.',
      link_project: 'https://github.com/j03-dev/ossas-MusicPlayer',
      technos: ['fab fa-python'],
    },
  ];
}
