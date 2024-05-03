import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button
      class="{{
        color
      }} text-mybgcolor text-sm font-bold w-full py-3 md:w-44 md:h-10 md:p-0 rounded-full hover:bg-mybgcolor hover:text-sgcolor hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
    >
      <span class="{{ icon }}"></span> {{ text }}
    </button>
  `,
  styles: `
  .hover_animation {
    
  }
  `,
})
export class ButtonComponent {
  @Input('icon') icon: string = '';
  @Input('text') text: string = '';
  @Input('color') color: string = '';
}
