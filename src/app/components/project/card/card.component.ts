import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `
    <article>
      <div class="article-wrapper">
        <figure>
          <img src="{{image}}" alt=""/>
        </figure>
        <div class="article-body">
          <h2>{{title}}</h2>
          <p>{{description}}</p>
          <a href="{{link_project}}" class="read-more"> </a>
        </div>
      </div>
    </article>
  `,
  styleUrl: './card.component.css'
})

export class CardComponent {
  @Input('title') title: string = "";
  @Input('image') image: string = "";
  @Input('description') description: string = "";
  @Input('link_project') link_project: string = "";
}
