import * as angular from 'angular';
import { EventModule } from "./event/event.module";
import { ScheduleComponent } from './schedule.component';
import './schedule.less';

export const ScheduleModule = angular
    .module('schedule', [EventModule])
    .component('schedule', ScheduleComponent).name;
