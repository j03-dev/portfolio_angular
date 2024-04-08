import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button
      class="{{
        bgcolor
      }} text-mybgcolor text-sm font-bold w-full py-3 md:w-44 md:h-10 md:p-0 rounded-full"
    >
      {{ text }}
    </button>
  `,
})
export class ButtonComponent {
  @Input('text') text: string = '';
  @Input('bgcolor') bgcolor: string = '';
}
