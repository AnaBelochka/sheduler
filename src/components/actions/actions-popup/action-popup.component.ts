import template from './action-popup.html';
import './action-popup.less';
import { ActionPopupController } from './action-popup.controller';

export const ActionPopupComponent = {
    bindings: {
        actionType: '=',
        newEvent: '=',
        saveCallback: '&',
        closeAction: '&',
    },
    template,
    controller: ActionPopupController,
};
