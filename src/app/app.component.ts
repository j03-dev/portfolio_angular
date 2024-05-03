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
            <app-button icon="fas fa-envelope" color="bg-pmcolor" text="Contact me"></app-button>
            <app-button icon="fas fa-download" color="bg-sgcolor" text="Resume"> </app-button>
          </div>
        </div>
      </section>
      <section
        class="grid grid-cols-3 w-full m-auto md:w-1/2 md:pt-40 md:flex md:justify-between"
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
      image: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
    },
    {
      title: 'Django',
      image: 'https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg',
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
      title: "Java",
      image: "https://www.vectorlogo.zone/logos/java/java-icon.svg"
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
        'In the dynamic realm of advanced web development, I embarked on a project that showcases my expertise in Java Enterprise Edition (JEE) with JavaServer Pages (JSP) and Servlet technologies. The project revolves around the creation of a fully functional e-commerce website dedicated to the vibrant world of fashion.',
      link_project: 'https://tish.onrender.com',
    },
    {
      title: 'Slate',
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
      link_project: 'https://nomeniavo-joe-blog.onrender.com/',
    },
    {
      title: 'Russenger',
      image: 'project_5.png',
      description:
        'Introducing Russenger, a versatile Rust library engineered to streamline the management of Facebook Messenger webhook responses. Designed with simplicity and efficiency in mind, Russenger simplifies the construction and dispatching of diverse response types, such as text messages, quick replies, generic templates, and media attachments. This robust library empowers developers to effortlessly interact with Facebook Messenger APIs, enhancing the development process by providing a seamless and intuitive interface. With Russenger, handling webhook responses becomes a straightforward task, allowing developers to focus on building engaging and dynamic Messenger experiences with ease.',
      link_project: 'https://crate.io/crates/russenger',
    },
    {
      title: 'TimeTable',
      image: 'project_6.png',
      description:
        'Introducing a versatile CLI tool tailored for educational institutions seeking to streamline timetable creation. With meticulous attention to detail, this tool ensures balanced scheduling by enforcing constraints such as preventing consecutive days for subjects and allowing customization of weekly hours. Users can define hourly slots, distribute subjects across weekdays from Monday to Saturday mornings, and set precise class hours from 8:30 to 12:30 for mornings and 13:30 to 17:30 for afternoons. This intuitive solution promises efficiency and reliability, simplifying the complexities of timetable management for schools and universities.',
      link_project: 'https://github.com/tbgracy/timetable',
    },
    {
      title: 'Ossas-MusicPlayer',
      image: 'project_7.png',
      description:
        "Introducing 'Ossas-MusicPlayer' a Python-based audio player crafted entirely with custom Tkinter, an educational project aimed at mastering application development. This intuitive player offers seamless audio playback functionality, providing users with a straightforward interface for enjoying their favorite tunes. Built from the ground up using Python, it exemplifies the power of Tkinter for creating user-friendly applications. Ossass-Music Player not only serves as a practical tool for enjoying music but also as a testament to the skills and knowledge gained through the process of learning application development with Tkinter.",
      link_project: 'https://github.com/j03-dev/ossas-MusicPlayer',
    },
  ];
}
