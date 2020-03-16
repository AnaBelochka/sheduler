import * as angular from 'angular';
import { SchedulerComponent } from '~components/scheduler/scheduler.component';
import { UserComponent } from '~components/user/user.component';
import { ActionsComponent } from '~components/actions/actions.component';
import { ActionPopupComponent } from '~components/actions/actions-popup/action-popup.component';
import { ScheduleComponent } from '~components/schedule/schedule.component';
import { EventComponent } from '~components/schedule/event/event.component';
import { HttpMockService } from '~components/scheduler/scheduler.service';
import '~app.less';

export const AppModule = angular
    .module('scheduler', [])
    .service('HttpMockService', HttpMockService)
    .component('userComponent', UserComponent)
    .component('actionsComponent', ActionsComponent)
    .component('actionPopupComponent', ActionPopupComponent)
    .component('scheduleComponent', ScheduleComponent)
    .component('eventComponent', EventComponent)
    .component('schedulerComponent', SchedulerComponent).name;
