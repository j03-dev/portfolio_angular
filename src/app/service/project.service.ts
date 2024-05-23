import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  link_project: string;
  technos: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  protected projects: Project[] = [
    {
      id: 1,
      title: 'Tish',
      image: 'project_2.png',
      description:
        'Tish is an e-commerce website dedicated to fashion, built using Java Enterprise Edition (JEE), JavaServer Pages (JSP), and Servlet technologies.',
      link_project: 'https://tish.onrender.com',
      technos: ['fab fa-java', 'fab fa-html5', 'fab fa-js', 'fab fa-css3-alt'],
    },
    {
      id: 2,
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
      id: 3,
      title: "Joe's blog",
      image: 'project_4.png',
      description:
        "Joe's blog is a platform where I share my insights, experiences, and technological adventures. It's a dynamic blog platform powered by Django's robust template rendering engine.",
      link_project: 'https://nomeniavo-joe-blog.onrender.com/',
      technos: ['fab fa-python', 'fab fa-html5', 'fab fa-bootstrap'],
    },
    {
      id: 4,
      title: 'Russenger',
      image: 'project_5.png',
      description:
        'Russenger is a Rust library designed to simplify the management of Facebook Messenger webhook responses. It provides an intuitive interface for constructing and sending various response types, enhancing the development process by providing a seamless and intuitive interface.',
      link_project: 'https://crates.io/crates/russenger',
      technos: ['fab fa-rust'],
    },
    {
      id: 5,
      title: 'TimeTable',
      image: 'project_6.png',
      description:
        'TimeTable is a CLI tool designed for educational institutions to simplify timetable creation. It enforces scheduling constraints and allows customization of class hours, ensuring balanced and efficient timetables.',
      link_project: 'https://github.com/tbgracy/timetable',
      technos: ['fab fa-python'],
    },
    {
      id: 6,
      title: 'Ossas-MusicPlayer',
      image: 'project_7.png',
      description:
        'Ossas-MusicPlayer is a Python-based audio player built with Tkinter. It provides a user-friendly interface for seamless audio playback, demonstrating the power of Tkinter in application development.',
      link_project: 'https://github.com/j03-dev/ossas-MusicPlayer',
      technos: ['fab fa-python'],
    },
  ];

  constructor() {}

  getAllProjects() {
    return this.projects;
  }

  getProjectByTitle(id: number) {
    return this.projects.find((project) => project.id === id);
  }
}
