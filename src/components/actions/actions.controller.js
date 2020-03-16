"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _consts_1 = require("~consts");
var ActionsController = (function () {
    function ActionsController($scope) {
        this.$scope = $scope;
        this.isPopupOpen = false;
    }
    ActionsController.prototype.openAction = function (type) {
        this.isPopupOpen = true;
        this.activeActionType = type;
    };
    ActionsController.prototype.onSave = function (newEvent) {
        this.isPopupOpen = false;
        this.$scope.$emit(_consts_1.CREATE_NEW_EVENT, newEvent);
    };
    ActionsController.prototype.closeAction = function () {
        this.isPopupOpen = false;
    };
    return ActionsController;
}());
exports.ActionsController = ActionsController;
ActionsController.$inject = ['$scope'];
//# sourceMappingURL=actions.controller.js.map