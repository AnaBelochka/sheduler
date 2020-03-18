import { ScheduleController } from './schedule.controller';
import template from './schedule.html';
import './schedule.less';

export const ScheduleComponent = {
    bindings: {
        events: '=',
    },
    template,
    controller: ScheduleController,
};
