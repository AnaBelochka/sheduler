import { ActionsController } from './actions.controller';
import template from './actions.html';
import './actions.less';

export const ActionsComponent = {
    bindings: {
        actions: '=',
    },
    template,
    controller: ActionsController,
};
