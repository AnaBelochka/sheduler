import * as angular from 'angular';
import { AppointmentComponent } from './appointment.component';

export const AppointmentModule = angular
    .module('appointment', [])
    .component('appointment', AppointmentComponent).name;
