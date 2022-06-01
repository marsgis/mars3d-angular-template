import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { Mars3dDirective } from './mars3d.directive';

describe('Mars3dDirective', () => {
  it('should create a Mars3d viewer', () => {
    const fixture = TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        Mars3dDirective
      ]
    }).createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
