import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let http: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('renders the resume and its sections', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    http.expectOne('./assets/content.json').flush({ projects: [] });
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('h1')?.textContent).toBe('Andrew Keech');
    expect(Array.from(element.querySelectorAll('.section-title'), title => title.textContent?.trim()))
      .toEqual(['Skills', 'Work Experience', 'Projects']);
  });
});
