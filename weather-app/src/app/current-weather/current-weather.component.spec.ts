import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherService } from '../services/weather.service';
import { FakeWeatherService, fakeWeatherObj } from '../services/weather.service.fake';
import {TempConversionPipe} from '../pipes/temp-conversion.pipe'
import { CurrentWeatherComponent } from './current-weather.component';
import { injectSpy } from 'angular-unit-test-helper';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;
  let weatherServiceMock :jasmine.SpyObj<WeatherService>

  beforeEach(async(() => {
    const weatherServiceSpy = jasmine.createSpyObj('WeatherService',['getWeatherData']);
    TestBed.configureTestingModule({
      declarations: [ CurrentWeatherComponent, TempConversionPipe ],
      providers: [{
        provide: WeatherService, useValue:weatherServiceSpy
      }],
    })
    .compileComponents();
    weatherServiceMock = injectSpy(WeatherService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    weatherServiceMock.getWeatherData.and.returnValue(of());
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should get currentWeather from weatherService', () => {
    // Arrange
    weatherServiceMock.getWeatherData.and.returnValue(of())
    // Act
    fixture.detectChanges() // triggers ngOnInit()
    // Assert
    expect(weatherServiceMock.getWeatherData)
      .toHaveBeenCalledTimes(1)
  })

  it('should return Data', () => {
    // Arrange
    weatherServiceMock.getWeatherData.and.returnValue(of(fakeWeatherObj))
    // Act
    fixture.detectChanges() // triggers ngOnInit()
    // Assert
    expect(weatherServiceMock.getWeatherData)
      .toHaveBeenCalledTimes(1)
    expect(component.current).toBeDefined();
    expect(component.current.City).toEqual("Lahore");

    const debugelement = fixture.debugElement;
    const title:HTMLElement = debugelement.query(By.css('div>.mat-title')).nativeElement;
    expect(title.textContent).toContain("Lahore");
  })
});
