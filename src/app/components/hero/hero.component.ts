import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  imports: [FontAwesomeModule],
  standalone: true,
})
export class HeroComponent {
  faDownload = faDownload;
  faEnvelope = faEnvelope;
  faFacebook = faFacebook;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
}