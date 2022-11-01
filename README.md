### Dinamic Selects
This project was designed to see how to implement two [ngx-mat-select-search](https://www.npmjs.com/package/ngx-mat-select-search) in a child component which behave in cascade depending the data coming from [Countries now API](https://countriesnow.space/) and countries' option selected by the user. A [Resolver](https://angular.io/api/router/Resolve) will pre-fetch the data before the user navigates to Select component for a better experience. Same data will activate also the route which has been protected with [canActivate guard](https://angular.io/api/router/CanActivate).

Internationalization ([i18n](https://www.npmjs.com/package/@ngx-translate/core/v/13.0.0)) library for Angular is another powerfull feature used in this practice for any multilingual App.

### NGX Dependencies in package.json:
* `"@ngx-translate/core": "^13.0.0"`
*  `"ngx-mat-select-search": "^4.1.1"`

### Installation:
* `git clone https://github.com/JoseMMorales/dinamics-selects.git`
* `cd CaculationTest-React-Jest.git`
* `cd dinamics-selects`
* `npm start` or `ng serve -o`

### Author:
Jose MMorales
