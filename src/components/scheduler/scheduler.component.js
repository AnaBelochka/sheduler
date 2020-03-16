"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scheduler_controller_1 = require("~components/scheduler/scheduler.controller");
exports.SchedulerComponent = {
    template: "\n        <div class=\"wrapper\">\n            <header>Scheduler</header>\n            <div ng-if=\"$ctrl.isDataReceived\">\n                <aside>\n                    <user-component user=\"$ctrl.user\"></user-component>\n                    <actions-component actions=\"$ctrl.actions\"></actions-component>\n                </aside>\n                <main>\n                    <schedule-component events=\"$ctrl.events\"></schedule-component>\n                </main>\n            </div>\n            <div ng-if=\"!$ctrl.isDataReceived\" class=\"loading\">Loading...</div>\n        </div>\n    ",
    controller: scheduler_controller_1.SchedulerController,
};
//# sourceMappingURL=scheduler.component.js.map