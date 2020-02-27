import * as angular from 'angular';
import { AppointmentModule } from './appointment/appointment.module';
import { MeetingModule } from './meeting/meeting.module';
import { ScheduleComponent } from './schedule.component';

export const ScheduleModule = angular
    .module('schedule', [AppointmentModule, MeetingModule])
    .component('schedule', ScheduleComponent).name;
