import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-techno',
    imports: [],
    styles: `
    .techno-container {
      transition: transform 0.3s ease;
    }
    .techno-container:hover {
      transform: scale(1.05);
    }
    img {
      transition: transform 0.3s ease;
    }
  `,
    template: `
    <div class="techno-container flex items-center justify-center pb-5">
      <div class="flex flex-col items-center">
        <img class="size-10" src="{{ image }}" />
        <p class="font-semibold text-sgcolor">{{ title }}</p>
      </div>
    </div>
  `
})
export class TechnoComponent {
  @Input('image') image: string = '';
  @Input('title') title: string = '';
}
