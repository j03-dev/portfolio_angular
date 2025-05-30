import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonComponent],
  styles: `
    .card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .card:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
    .description {
      transition: height 0.3s ease;
    }
  `,
  template: `
<div class="card block rounded-2xl overflow-hidden bg-white shadow-md transition-transform hover:scale-[1.02] md:m-2 h-[480px] w-full">
  <div class="relative w-full h-[220px]">
    @if (type == "REPO") {
      <img
        src="https://opengraph.githubassets.com/1/{{ link }}"
        class="w-full max-h-[220px] object-contain rounded-t-lg bg-white"
      />
    } @else {
      <img
        class="w-full h-full object-cover"
        src="/assets/project/{{ image }}"
        alt="{{ title }}"
      />
    }
    <a href="{{ link }}" target="_blank" rel="noopener noreferrer">
      <div
        class="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-300"
      ></div>
    </a>
  </div>
  <div class="p-5 text-surface text-sgcolor flex flex-col justify-between h-[260px]">
    <div>
      <h5 class="mb-2 text-xl font-bold line-clamp-2">{{ title }}</h5>
      <p class="description mb-4 text-gray-600 text-base line-clamp-4">{{ description }}</p>
    </div>
    <div class="flex flex-wrap gap-2 mt-auto">
      @for (techno of technos; track $index) {
        <span class="{{ techno }} text-2xl"></span>
      }
    </div>
  </div>
</div>
  `,
})
export class CardComponent {
  @Input('title') title: string = '';
  @Input('image') image: string = '';
  @Input('description') description: String = '';
  @Input('link') link: string = '';
  @Input('technos') technos: string[] = [];
  @Input("type") type: String = '';
}
