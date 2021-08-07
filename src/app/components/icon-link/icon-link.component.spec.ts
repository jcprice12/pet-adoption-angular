import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateMutable } from '../../../../testing';
import { IconLinkComponent } from './icon-link.component';

describe('IconLinkComponent', () => {
  let component: CreateMutable<IconLinkComponent>;
  let fixture: ComponentFixture<IconLinkComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [IconLinkComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLinkComponent);
    component = fixture.componentInstance;
    component.iconLink = {
      url: 'https://my.icon.com/foo.jpg',
      toolTip: 'my-icon',
      ariaLabel: 'my-icon',
      icon: 'my-icon',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
