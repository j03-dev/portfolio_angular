import {Component} from '@angular/core';

@Component({
  selector: 'app-right',
  standalone: true,
  imports: [],
  template: `
    <div class="right">
      <div class="image-container">
        <img src="assets/image.jpg" alt="image-profile">
      </div>
    </div>
  `,
  styleUrl: './right.component.css'
})
export class RightComponent {

}
