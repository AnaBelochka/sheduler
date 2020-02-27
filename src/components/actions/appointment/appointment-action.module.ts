import * as angular from 'angular';
import { AppointmentActionComponent } from './appointment-action.component';
import './appointment-action.less';

export const AppointmentActionModule = angular
    .module('appointmentAction', [])
    .component('appointmentAction', AppointmentActionComponent).name;
