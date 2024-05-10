import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TechnoService {
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

  constructor() {}
}
