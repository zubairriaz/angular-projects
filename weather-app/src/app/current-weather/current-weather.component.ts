import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ICurrentWeather } from '../interfaces/icurrent-weather';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent {
  current$: Observable<ICurrentWeather>;
  constructor(private weatherService: WeatherService) {
    this.current$ = this.weatherService.currentWeatherSub;
  }





  getOrdinal(n: Date) {
    let date = new Date(n).getDate()
    return date > 0
      ? ['th', 'st', 'nd', 'rd'][
          (date > 3 && date < 21) || date % 10 > 3 ? 0 : date % 10
        ]
      : '';
  }
}
