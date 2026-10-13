import { Component } from '@angular/core';
import { LinksComponent } from './links/links.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-home',
  imports: [LinksComponent, SkillsComponent, WorkExperienceComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
