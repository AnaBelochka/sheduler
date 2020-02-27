import * as angular from 'angular';
import { AppointmentActionModule } from './actions/appointment/appointment-action.module';
import { MeetingActionModule } from './actions/meeting/meeting-action.module';
import { ScheduleModule } from './schedule/schedule.module';

export const ComponentsModule = angular.module('components', [
    AppointmentActionModule,
    MeetingActionModule,
    ScheduleModule,
]).name;
