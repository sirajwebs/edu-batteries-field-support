
# EduBatteriesFieldSupport <a style="font-size:20px" href="https://edu-batteries-field-support.web.app/">(live demo)</a>

<p align="center">
    <img src="src/assets/battery-data-dashboard.png" width="400" height="auto">
</p>

Field Support for Batteries

This application show the battery data with average usage for a week and indicates if a battery needs replecement.
NOTE : Intervals weighted by duration of 24 hours from 12AM to 11.59PM for each day. If total calulated time interval (recorded data in a day) is less than 12 hours then the average battery usage is doubled for 24 hours.
Batteries that needs replacement are marked with  RED  background, otherwise in  GREEN  background.

Application is compatible (with tested) for desktop Chrome only.

## View live demo at :
https://edu-batteries-field-support.web.app/


## Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
