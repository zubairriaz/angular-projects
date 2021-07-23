import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello Angular 10';

  private setTitle = () => {
    let timeStamp = new Date().getMilliseconds();
    this.title = 'Title is set' + ' ' + timeStamp;
  };

  title$ = new Observable((observer) => {
    setInterval(() => {
            observer.next();
    },2000);
  });

  private changeTitle2 = () => {
    return new Promise((res, rej) => {
      setInterval(() => {
        res(true);
      }, 2000);
    });
  };
  constructor() {
    this.title$.subscribe(this.setTitle)
  }
  hero = 'Drogfisher';

  onLike(e) {
    this.hero = 'Zubair';
  }
}
