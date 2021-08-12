import {Observable} from "rxjs";
import {ICurrentWeather} from '../interfaces/icurrent-weather'

export interface IWeatherService {
  getWeatherData(cityName: string):Observable<ICurrentWeather>
  updateWeatherData(cityName:string):void
}
