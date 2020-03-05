import template from './schedule.html';
import './schedule.less';
import { ScheduleController } from './schedule.controller';

export const ScheduleComponent = {
    bindings: {
        events: '=',
    },
    template,
    controller: ScheduleController,
};
