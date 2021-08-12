import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ICurrentWeather } from './interfaces/icurrent-weather';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private weatherService:WeatherService){}
  currentWeather:ICurrentWeather
  title = 'Weather';
  doSearch(cityName: string){
   this.weatherService.getWeatherData(cityName).subscribe(data=>this.currentWeather = data)
  }
}
