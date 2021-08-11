import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces/icurrent-weather';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService
      .getWeatherData('Lahore')
      .subscribe((data) => (this.current = data));
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
