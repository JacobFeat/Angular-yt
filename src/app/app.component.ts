import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
}

interface Dog {
  name: string;
  age: number;
  color: string;
  date?: Date;
}

let dog: Dog = {
  name: 'Reksio',
  age: 3,
  color: 'Black',
};

console.log(dog)
