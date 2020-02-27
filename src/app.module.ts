import * as angular from 'angular';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

export const AppModule = angular
    .module('scheduler', [ComponentsModule])
    .component('scheduler', AppComponent).name;
