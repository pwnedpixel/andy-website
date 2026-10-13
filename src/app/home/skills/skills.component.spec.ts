import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(SkillsComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders five rating circles per skill using the current icon classes', () => {
    expect(fixture.nativeElement.querySelectorAll('.fa-circle')).toHaveLength(50);
    expect(fixture.nativeElement.querySelectorAll('.fa-solid')).toHaveLength(40);
    expect(fixture.nativeElement.querySelectorAll('.fa-regular')).toHaveLength(10);
  });
});
