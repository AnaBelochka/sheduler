import * as angular from 'angular';
import { MeetingActionComponent } from './meeting-action.component';
import './meeting-action.less';

export const MeetingActionModule = angular
    .module('meetingAction', [])
    .component('meetingAction', MeetingActionComponent).name;
