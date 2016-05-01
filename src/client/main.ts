import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {Angular2demoApp} from './app/angular2demo.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2demoApp);
