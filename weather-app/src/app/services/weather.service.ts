import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {IWeatherService} from './iweather-service'
import { ICurrentWeather } from '../interfaces/icurrent-weather';
import { stringify } from '@angular/compiler/src/util';

interface IWeatherData {
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
  main: { temp: number; temp_min: number; temp_max: number };
  sys: {
    country: string;
  };
  dt: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService implements IWeatherService{
  readonly currentWeatherSub :BehaviorSubject<ICurrentWeather>;
  constructor(private http: HttpClient) {
    this.currentWeatherSub = new BehaviorSubject<ICurrentWeather>({
       City:"",
       Country:"",
       date:undefined,
       description:"",
       image:"",
       temperature:""
    })
  }

  getWeatherData(cityName: string):Observable<ICurrentWeather> {
    const uriParams: HttpParams = new HttpParams().set('q', cityName).set('appid', environment.apiKey);
    let result = this.http.get<IWeatherData>(environment.appUrl, {params:uriParams}).pipe(map(data=>this.convertToWeather(data)))
    return result;
  }

  updateWeatherData(cityName:string){
    this.getWeatherData(cityName).subscribe(data=>this.currentWeatherSub.next(data));
  }

  convertToWeather(data:IWeatherData):ICurrentWeather{
      return{
        City:data.name,
        Country:data.sys.country,
        date:new Date(data.dt * 1000),
        description:data.weather[0].description,
        image:`http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
        temperature:""+data.main.temp

      }

  }
}
