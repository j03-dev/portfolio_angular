import { Component } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div class="container flex flex-col items-center justify-center m-auto w-9/12">
      <section class="flex flex-col items-center md:flex-row-reverse md:mt-32 justify-between">
        <img class="rounded-full size-2/3 md:size-1/3" src="/assets/image.jpeg" />
        <div>
          <div class="mt-5">
            <h2 class="text-4xl text-sgcolor md:text-7xl text-center md:text-start font-bold pb-5 md:pb-8">
              Fullstack Developer
            </h2>
            <p class="text-sgcolor text-lg max-w-4xl min-w-xs md:text-base">
              My name is FITAHIANA Nomeniavo Joe but you can call me Joe.<br>
              As a dedicated Fullstack Developer.I bring ideas throught the language of code.<br>
              Step into my digital realm, where each line of code tells a table innovation and creativity.<br>
              Transforming concepts into captivating experiences.
            </p>
          </div>
          <div class="flex flex-col gap-2 md:flex-row py-5 md:w-1/2">
            @for (button of buttons; track $index) {
            <app-button [bgcolor]="button.bgcolor" [text]="button.text">
            </app-button>
            }
          </div>
        </div>
      </section>
      <section>2</section>
      <section>3</section>
    </div>
  `,
})
export class AppComponent {
  title = 'portfolio';
  buttons: Array<{ bgcolor: string; text: string }> = [
    {
      bgcolor: 'bg-pmcolor',
      text: 'Contact me',
    },
    {
      bgcolor: 'bg-sgcolor',
      text: 'Resume',
    },
  ];
}
