import { Component } from '@angular/core';
import { LeftComponent } from "./left/left.component";
import { RightComponent } from "./right/right.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [LeftComponent, RightComponent],
  template: `
    <section>
      <app-left></app-left>
      <app-right></app-right>
    </section>
  `,
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
