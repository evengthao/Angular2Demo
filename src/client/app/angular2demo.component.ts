import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {ProductListComponent} from "./product-list/product-list.component";

@Component({
  moduleId: __moduleName,
  selector: 'angular2demo-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'angular2demo.component.html',
  styleUrls: ['angular2demo.component.css'],
  directives: [ROUTER_DIRECTIVES,ProductListComponent],
  pipes: []
})
@RouteConfig([
])
export class Angular2demoApp {
  defaultMeaning: number = 42;
  pageTitle: string = "Acme Product Management";

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
