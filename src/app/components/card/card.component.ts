import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-card',
    imports: [FontAwesomeModule],
    templateUrl: "./card.component.html"
})
export class CardComponent {
  @Input('title') title: string = '';
  @Input('image') image: string = '';
  @Input('description') description: String = '';
  @Input('technos') technos: IconDefinition[] = [];
}
