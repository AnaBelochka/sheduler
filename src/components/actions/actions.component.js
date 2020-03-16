"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions_controller_1 = require("~components/actions/actions.controller");
var actions_html_1 = require("~components/actions/actions.html");
require("~components/actions/actions.less");
exports.ActionsComponent = {
    bindings: {
        actions: '=',
    },
    template: actions_html_1.default,
    controller: actions_controller_1.ActionsController,
};
//# sourceMappingURL=actions.component.js.map