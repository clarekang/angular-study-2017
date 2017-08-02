import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Set Component
@Component({
  selector : 'hello-world',
  template : '<h1>Hello {{ name }}!</h1>'
})
class HelloWorldComponent {
  name : string;

  constructor () {
    this.name = 'Clare Kang';
  }
}

// Set Module
@NgModule({
  imports : [BrowserModule],
  declarations : [HelloWorldComponent],
  bootstrap : [HelloWorldComponent]
})
export class AppModule {}

// bootstrap
platformBrowserDynamic().bootstrapModule(AppModule)
