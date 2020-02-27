import * as angular from 'angular';
import { AppointmentActionModule } from './appointment/appointment-action.module';
import { MeetingActionModule } from './meeting/meeting-action.module';

export const ActionsModule = angular.module('actions', [
    AppointmentActionModule,
    MeetingActionModule,
]).name;
