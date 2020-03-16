import { ScheduleController } from '~components/schedule/schedule.controller';
import template from '~components/schedule/schedule.html';
import '~components/schedule/schedule.less';

export const ScheduleComponent = {
    bindings: {
        events: '=',
    },
    template,
    controller: ScheduleController,
};
