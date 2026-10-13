import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

export interface Project {
  title: string;
  subtitle: string;
  image: string;
  link: string;
  info: string[];
}

export interface Projects {
  projects: Project[];
}

@Component({
  selector: 'app-projects',
  imports: [MatCardModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  readonly projects = signal<Projects | null>(null);

  constructor() {
    inject(HttpClient).get<Projects>('./assets/content.json').subscribe(data => {
      this.projects.set(data);
    });
  }
}
