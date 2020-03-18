import template from './action-popup.html';
import './action-popup.less';
import { ActionPopupController } from './action-popup.controller';

export const ActionPopupComponent = {
    bindings: {
        actionType: '=',
        saveCallback: '&',
        closeAction: '&',
    },
    template,
    controller: ActionPopupController,
};
