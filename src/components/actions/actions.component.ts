import { ActionsController } from '~components/actions/actions.controller';
import template from '~components/actions/actions.html';
import '~components/actions/actions.less';

export const ActionsComponent = {
    bindings: {
        actions: '=',
    },
    template,
    controller: ActionsController,
};
