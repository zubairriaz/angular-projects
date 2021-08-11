import { Observable, of } from 'rxjs';
import { ICurrentWeather } from '../interfaces/icurrent-weather';
import { IWeatherService } from './iweather-service';

export const fakeWeatherObj: ICurrentWeather = {
  City: 'Lahore',
  Country: 'Pakistan',
  date: new Date(),
  image: '',
  temperature: '',
  description: '',
};

export class FakeWeatherService implements IWeatherService {
  getWeatherData(cityName: string): Observable<ICurrentWeather> {
    return of(fakeWeatherObj);
  }
}
