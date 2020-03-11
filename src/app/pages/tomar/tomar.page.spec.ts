import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TomarPage } from './tomar.page';

describe('TomarPage', () => {
  let component: TomarPage;
  let fixture: ComponentFixture<TomarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TomarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
