import { Injectable } from '@angular/core';

export interface Project {
  title: string;
  image?: string;
  description: string;
  link_project: string;
  technos: string[];
  type: "REPO" | "WEBSITE";
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  protected projects: Project[] = [
    {
      title: 'Tish',
      image: 'project_2.png',
      description:
        'Tish is an e-commerce website dedicated to fashion, built using Java Enterprise Edition (JEE), JavaServer Pages (JSP), and Servlet technologies.',
      link_project: 'https://tish.onrender.com',
      technos: ['fab fa-java', 'fab fa-html5', 'fab fa-js', 'fab fa-css3-alt'],
      type: 'WEBSITE',
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
      type: 'WEBSITE',
    },
    {
      title: "Joe's blog",
      image: 'project_4.png',
      description:
        "Joe's blog is a platform where I share my insights, experiences, and technological adventures. It's a dynamic blog platform powered by Django's robust template rendering engine.",
      link_project: 'https://nomeniavo-joe-blog.onrender.com/',
      technos: ['fab fa-python', 'fab fa-html5', 'fab fa-bootstrap'],
      type: 'WEBSITE',
    },
    {
      title: 'Metatype',
      description:
        'Metatype is a declarative API development platform that enables developers to build backend components using WebAssembly (WASM), TypeScript, and Python. It facilitates the creation of modular APIs through programmable virtual graphs called typegraphs, allowing seamless integration with various data sources and legacy systems.',
      link_project: 'metatypedev/metatype',
      technos: ['fab fa-python', 'fab fa-rust', 'fab fa-typescript'],
      type: 'REPO',
    },
    {
      title: 'Russenger',
      description:
        'Russenger is a Rust library designed to simplify the management of Facebook Messenger webhook responses. It provides an intuitive interface for constructing and sending various response types, enhancing the development process by providing a seamless and intuitive interface.',
      link_project: 'j03-dev/russenger',
      technos: ['fab fa-rust'],
      type: 'REPO',
    },
    {
      title: 'Oxapy',
      description: "Oxapy is a Python HTTP server library built in Rust, offering a fast, safe, and feature-rich implementation. It provides routing with path parameters, middleware support, static file serving, application state management, and request/response handling, aiming to combine Python's simplicity with Rust's performance.",
      link_project: 'j03-dev/oxapy',
      technos: ['fab fa-python', 'fab fa-rust'],
      type: 'REPO',
    },
    {
      title: 'Antsirabe Bus API',
      description:
        'Antsirabe Bus API is a RESTful API designed to provide real-time bus schedule data for the city of Antsirabe. Built using Oxapy, a Python HTTP server library developed in Rust, it ensures high performance and safety. The API offers endpoints for retrieving bus routes, schedules, and real-time tracking information, facilitating efficient public transportation management.',
      link_project: 'j03-dev/bus_antsirabe_api',
      technos: ['fab fa-python', 'fab fa-rust'],
      type: 'REPO',
    },
    {
      title: 'TimeTable',
      description:
        'TimeTable is a CLI tool designed for educational institutions to simplify timetable creation. It enforces scheduling constraints and allows customization of class hours, ensuring balanced and efficient timetables.',
      link_project: 'tbgracy/timetable',
      technos: ['fab fa-python'],
      type: 'REPO',
    },
    {
      title: 'Osas-Player',
      description:
        'Ossas-Player is a Python-based audio player built with Tkinter. It provides a user-friendly interface for seamless audio playback, demonstrating the power of Tkinter in application development.',
      link_project: 'j03-dev/osas-player',
      technos: ['fab fa-python'],
      type: 'REPO',
    },
  ];

  constructor() { }

  getAllProjects() {
    return this.projects;
  }

}
