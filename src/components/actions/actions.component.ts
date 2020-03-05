import template from './actions.html';
import './actions.less';
import { ActionsController } from './actions.controller';

export const ActionsComponent = {
    bindings: {
        actions: '=',
    },
    template,
    controller: ActionsController,
};
