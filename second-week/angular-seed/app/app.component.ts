import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<h1>Hello {{ name }}</h1>`
})
export class AppComponent {
  name: string;
  constructor () {
    this.name = 'Clare Kang Angular Seed';
  }
}
