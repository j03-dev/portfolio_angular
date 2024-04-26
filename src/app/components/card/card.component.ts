import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div class="block rounded-lg bg-white">
      <div class="relative overflow-hidden bg-cover bg-no-repeat">
        <img class="rounded-t-lg" src="/assets/project/{{ image }}" alt="{{ title }}" />
        <a href="{{ link }}">
          <div
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
          ></div>
        </a>
      </div>
      <div class="p-6 text-surface text-sgcolor">
        <h5 class="mb-2 text-xl font-medium leading-tight">{{ title }}</h5>
        <p class="mb-4 text-base">{{ description }}</p>
      </div>
    </div>
  `,
  styles: ``,
})
export class CardComponent {
  @Input('title') title: string = '';
  @Input('image') image: string = '';
  @Input('description') description: String = '';
  @Input('link') link: string = '';
}
