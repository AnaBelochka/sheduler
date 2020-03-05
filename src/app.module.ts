import * as angular from 'angular';
import { SchedulerComponent } from './scheduler.component';
import './app.less';
import { UserComponent } from './components/user/user.component';
import { ActionsComponent } from './components/actions/actions.component';
import { ActionPopupComponent } from './components/actions/actions-popup/action-popup.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { EventComponent } from './components/schedule/event/event.component';
import { httpMockService } from './scheduler.service';

export const AppModule = angular
    .module('scheduler', [])
    .service('httpMockService', httpMockService)
    .component('user', UserComponent)
    .component('actions', ActionsComponent)
    .component('actionPopup', ActionPopupComponent)
    .component('schedule', ScheduleComponent)
    .component('event', EventComponent)
    .component('scheduler', SchedulerComponent).name;
