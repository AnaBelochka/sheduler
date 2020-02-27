import * as angular from 'angular';
import { MeetingComponent } from './meeting.component';

export const MeetingModule = angular
    .module('meeting', [])
    .component('meeting', MeetingComponent).name;
