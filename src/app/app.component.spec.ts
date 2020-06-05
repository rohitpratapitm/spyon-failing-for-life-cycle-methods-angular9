import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';


describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  /**
   * This test case FAILS, even though the ngOnInit method is getting called and console log is printed.
   */
  it('should call ngOnInit', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const spyOnNgOnInit: jasmine.Spy = spyOn(component, 'ngOnInit').and.callThrough();
    fixture.detectChanges();
    expect(spyOnNgOnInit).toHaveBeenCalled(); // FAILS
  });

  /**
   * PASSES.
   */
  // it('should call fun', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const component = fixture.componentInstance;
  //   const spyOnFun: jasmine.Spy = spyOn(component, 'fun').and.callThrough();
  //   fixture.detectChanges();
  //   expect(spyOnFun).toHaveBeenCalled(); // PASSES
  // });
});
