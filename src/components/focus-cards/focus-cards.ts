import { Directive } from '@angular/core';

/*
  Generated class for the FocusCards directive.

  See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Directive({
  selector: '[focus-cards]' // Attribute selector
})
export class FocusCards {

  constructor() {
    console.log('Hello FocusCards Directive');
  }

}
