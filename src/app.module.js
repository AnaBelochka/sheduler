"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var scheduler_component_1 = require("~components/scheduler/scheduler.component");
var user_component_1 = require("~components/user/user.component");
var actions_component_1 = require("~components/actions/actions.component");
var action_popup_component_1 = require("~components/actions/actions-popup/action-popup.component");
var schedule_component_1 = require("~components/schedule/schedule.component");
var event_component_1 = require("~components/schedule/event/event.component");
var scheduler_service_1 = require("~components/scheduler/scheduler.service");
require("~app.less");
exports.AppModule = angular
    .module('scheduler', [])
    .service('HttpMockService', scheduler_service_1.HttpMockService)
    .component('userComponent', user_component_1.UserComponent)
    .component('actionsComponent', actions_component_1.ActionsComponent)
    .component('actionPopupComponent', action_popup_component_1.ActionPopupComponent)
    .component('scheduleComponent', schedule_component_1.ScheduleComponent)
    .component('eventComponent', event_component_1.EventComponent)
    .component('schedulerComponent', scheduler_component_1.SchedulerComponent).name;
//# sourceMappingURL=app.module.js.map