import { Component } from '@angular/core';

@Component({
  selector: 'app-left',
  standalone: true,
  imports: [],
  template: `
      <div class="left">
          <div class="left-top">
              <h1>Fullstack Developer</h1>
              <p>
                  As a dedicated Fullstack Developer, I bring ideas to life through the language of code. <br> Step into
                  my
                  digital realm, where each line of code tells a tale of innovation and creativity, <br>transforming
                  concepts
                  into captivating experiences.
              </p>
          </div>

          <div class="left-bottom">
              <button>Contact me</button>
              <button>Resume</button>
          </div>
      </div>
  `,
  styleUrl: './left.component.css'
})
export class LeftComponent {

}
