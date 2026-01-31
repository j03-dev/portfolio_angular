import { Injectable } from '@angular/core';
import {
  faPython,
  faHtml5,
  faReact,
  faBootstrap,
  faCss3Alt,
  faJs,
  faJava,
  faRust,
  faAngular,
} from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Project {
  title: string;
  image: string;
  description: string;
  technos: IconDefinition[];
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  protected projects: Project[] = [
    {
      title: 'Tish',
      image: '/assets/project/project_2.png',
      description:
        'Tish is an e-commerce website dedicated to fashion, built with Java Enterprise Edition (JEE), JSP, and Servlet technologies.',
      technos: [faJava, faHtml5, faJs, faCss3Alt],
    },
    {
      title: 'Slate',
      image: '/assets/project/project_3.png',
      description:
        "Slate is a QA‑style web app developed during a hackathon, inspired by Stack Overflow. Built with Python, HTML5, React, and Bootstrap.",
      technos: [faPython, faHtml5, faReact, faBootstrap],
    },
    {
      title: "Joe's blog",
      image: '/assets/project/project_4.png',
      description:
        "Joe's blog is a dynamic platform powered by Django’s templates, where I share tech insights and personal experiences.",
      technos: [faPython, faHtml5, faBootstrap],
    },
    {
      title: 'Metatype',
      image: 'https://opengraph.githubassets.com/1/metatypedev/metatype',
      description:
        'Metatype is a declarative platform for API development using WebAssembly, TypeScript, and Python for modular backend components.',
      technos: [faPython, faAngular],
    },
    {
      title: 'Russenger',
      image: 'https://opengraph.githubassets.com/1/j03-dev/russenger',
      description:
        'Russenger is a Rust library to simplify Facebook Messenger webhook responses with an intuitive Rust API.',
      technos: [faRust],
    },
    {
      title: 'Oxapy',
      image: 'https://opengraph.githubassets.com/1/j03-dev/oxapy',
      description:
        'Oxapy is a Python HTTP server library built in Rust, offering fast routing, middleware support, static file serving, and state management.',
      technos: [faPython, faRust],
    },
    {
      title: 'RusqlAlchemy',
      image: 'https://opengraph.githubassets.com/1/j03-dev/rusql-alchemy',
      description:
        'RusqlAlchemy is an ORM‑style Rust library inspired by Django, designed to simplify database interaction with Rust.',
      technos: [faRust],
    },
    {
      title: 'DoYou',
      image: 'https://opengraph.githubassets.com/1/j03-dev/doyou',
      description:
        'DoYou is a Rust‑based music player application focused on simplicity and performance.',
      technos: [faRust],
    },
    {
      title: 'System Theme',
      image: 'https://opengraph.githubassets.com/1/j03-dev/system-theme.hx',
      description:
        'System Theme is a plugin for the Helix editor that auto‑switches between light and dark themes.',
      technos: [faRust],
    },
    {
      title: 'Antsirabe Bus API',
      image: 'https://opengraph.githubassets.com/1/j03-dev/bus_antsirabe_api',
      description:
        'Antsirabe Bus API is a REST API offering real‑time bus schedule data for Antsirabe, built with Rust and Python.',
      technos: [faPython, faRust],
    },
    {
      title: 'TimeTable',
      image: 'https://opengraph.githubassets.com/1/tbgracy/timetable',
      description:
        'TimeTable is a CLI tool helping educational institutions create balanced timetables with constraint‑based scheduling.',
      technos: [faPython],
    },
    {
      title: 'Osas‑Player',
      image: 'https://opengraph.githubassets.com/1/j03-dev/osas-player',
      description:
        'Osas‑Player is a Python audio player built with Tkinter, offering a user‑friendly GUI for playback.',
      technos: [faPython],
    },
  ];

  constructor() { }

  getAllProjects() {
    return this.projects;
  }
}
