"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _consts_1 = require("~consts");
var ScheduleController = (function () {
    function ScheduleController($scope) {
        var _this = this;
        this.$scope = $scope;
        this.events = [];
        this.getNewEventHandler = function (event, data) {
            _this.events.push(data);
        };
    }
    ScheduleController.prototype.$onInit = function () {
        this.unsubscribeEvent = this.$scope.$on(_consts_1.SEND_NEW_EVENT, this.getNewEventHandler);
    };
    ScheduleController.prototype.$onDestroy = function () {
        this.unsubscribeEvent();
    };
    return ScheduleController;
}());
exports.ScheduleController = ScheduleController;
ScheduleController.$inject = ['$scope'];
//# sourceMappingURL=schedule.controller.js.map