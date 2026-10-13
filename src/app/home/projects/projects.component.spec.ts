import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let fixture: ComponentFixture<ProjectsComponent>;
  let http: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();
    http = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
  });

  afterEach(() => http.verify());

  it('renders projects after the HTTP response arrives without Zone.js', async () => {
    expect(fixture.nativeElement.querySelector('mat-card')).toBeNull();
    const request = http.expectOne('./assets/content.json');
    expect(request.request.method).toBe('GET');
    request.flush({ projects: [{
      title: 'Braille Printer', subtitle: 'Hackwestern 3',
      image: './assets/printer-small.png', link: 'https://devpost.com/software/braille-printer',
      info: ['A low cost braille printer']
    }] });
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('Braille Printer');
    expect(element.querySelector('img')?.getAttribute('src')).toBe('./assets/printer-small.png');
    expect(element.querySelector('a')?.getAttribute('href')).toBe('https://devpost.com/software/braille-printer');
  });
});
