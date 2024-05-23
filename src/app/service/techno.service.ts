import { Injectable } from "@angular/core";

export interface Techno {
  id: number;
  title: string;
  image: string;
}

@Injectable({
  providedIn: "root",
})
export class TechnoService {
  private technos: Techno[] = [
    {
      id: 1,
      title: "Python",
      image: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
    },
    {
      id: 2,
      title: "Django",
      image:
        "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg",
    },
    {
      id: 3,
      title: "Angular",
      image: "https://www.vectorlogo.zone/logos/angular/angular-icon.svg",
    },
    {
      id: 4,
      title: "TailwindCss",
      image:
        "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      id: 5,
      title: "Rust",
      image: "https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg",
    },
    {
      id: 6,
      title: "Java",
      image: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
    },
    {
      id: 7,
      title: "SpringBoot",
      image: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
    },
  ];

  constructor() {}

  getAllTechnos() {
    return this.technos;
  }
}
