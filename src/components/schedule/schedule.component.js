"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schedule_controller_1 = require("~components/schedule/schedule.controller");
var schedule_html_1 = require("~components/schedule/schedule.html");
require("~components/schedule/schedule.less");
exports.ScheduleComponent = {
    bindings: {
        events: '=',
    },
    template: schedule_html_1.default,
    controller: schedule_controller_1.ScheduleController,
};
//# sourceMappingURL=schedule.component.js.map