"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var action_popup_controller_1 = require("~components/actions/actions-popup/action-popup.controller");
var action_popup_html_1 = require("~components/actions/actions-popup/action-popup.html");
require("~components/actions/actions-popup/action-popup.less");
exports.ActionPopupComponent = {
    bindings: {
        actionType: '=',
        saveCallback: '&',
        closeAction: '&',
    },
    template: action_popup_html_1.default,
    controller: action_popup_controller_1.ActionPopupController,
};
//# sourceMappingURL=action-popup.component.js.map