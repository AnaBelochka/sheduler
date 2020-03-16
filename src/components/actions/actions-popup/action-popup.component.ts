import { ActionPopupController } from '~components/actions/actions-popup/action-popup.controller';
import template from '~components/actions/actions-popup/action-popup.html';
import '~components/actions/actions-popup/action-popup.less';

export const ActionPopupComponent = {
    bindings: {
        actionType: '=',
        saveCallback: '&',
        closeAction: '&',
    },
    template,
    controller: ActionPopupController,
};
