import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-techno',
  standalone: true,
  imports: [],
  template: `
    <div class="flex items-center justify-center pb-5">
      <div class="flex flex-col items-center">
        <img class="size-10" src="/assets/icon/{{ image }}" />
        <p class="font-semibold text-sgcolor">{{ title }}</p>
      </div>
    </div>
  `,
})
export class TechnoComponent {
  @Input('image') image: string = '';
  @Input('title') title: string = '';
}
