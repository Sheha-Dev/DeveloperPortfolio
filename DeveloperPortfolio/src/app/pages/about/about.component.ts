import { Component } from '@angular/core';
import {
  IconBrandGithub,
  IconBrandLinkedin
} from '@tabler/icons-angular';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  githubIcon = IconBrandGithub;
  linkedinIcon = IconBrandLinkedin;
}