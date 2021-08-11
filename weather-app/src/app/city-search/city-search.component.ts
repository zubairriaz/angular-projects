import { Component, OnInit } from '@angular/core';
import { FormControl, MinLengthValidator, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
})
export class CitySearchComponent implements OnInit {
  search = new FormControl('', [Validators.minLength(2)]);
  constructor(private service: WeatherService) {}

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((data) => this.getWeatherInfo(data));
  }

  getWeatherInfo(data:string) {
    if (!this.search.invalid) {
      this.service.getWeatherData(data).subscribe(value=>console.log(value))
    }
  }
  getMinLengthError() {
    if (this.search.hasError('minlength')) {
      const errorObj = this.search.getError('minlength');
      return `Required Length is ${errorObj.requiredLength}`;
    }
  }
}
