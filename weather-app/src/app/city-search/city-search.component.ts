import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, MinLengthValidator, Validators } from '@angular/forms';
import { debounceTime, filter, tap } from 'rxjs/operators';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
})
export class CitySearchComponent {
  search = new FormControl('', [Validators.minLength(2)]);
  constructor(private service: WeatherService) {
    this.search.valueChanges
      .pipe(
        debounceTime(1000),
        filter(() => !this.search.invalid),
        tap((stringValue: string) => this.getWeatherInfo(stringValue))
      )
      .subscribe();
  }

  getWeatherInfo(data: string) {
    this.service.updateWeatherData(data);
  }
  getMinLengthError() {
    if (this.search.hasError('minlength')) {
      const errorObj = this.search.getError('minlength');
      return `Required Length is ${errorObj.requiredLength}`;
    }
  }
}
