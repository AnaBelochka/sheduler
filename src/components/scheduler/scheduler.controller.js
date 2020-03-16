"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _consts_1 = require("~consts");
var SchedulerController = (function () {
    function SchedulerController($scope, httpMockService, $timeout) {
        var _this = this;
        this.$scope = $scope;
        this.httpMockService = httpMockService;
        this.$timeout = $timeout;
        this.isDataReceived = false;
        this.getInitialDataHandler = function (_a) {
            var user = _a.user, events = _a.events, actions = _a.actions;
            return _this.$timeout(function () {
                _this.isDataReceived = true;
                _this.user = user;
                _this.actions = actions;
                _this.events = events;
            }, 5000);
        };
        this.sendNewItemHandler = function (event, data) {
            _this.$scope.$broadcast(_consts_1.SEND_NEW_EVENT, data);
        };
        httpMockService.getInitialData().then(this.getInitialDataHandler);
    }
    SchedulerController.prototype.$onInit = function () {
        this.unsubscribeCreateNewEvent = this.$scope.$on(_consts_1.CREATE_NEW_EVENT, this.sendNewItemHandler);
    };
    SchedulerController.prototype.$onDestroy = function () {
        this.unsubscribeCreateNewEvent();
    };
    return SchedulerController;
}());
exports.SchedulerController = SchedulerController;
SchedulerController.$inject = ['$scope', 'HttpMockService', '$timeout'];
//# sourceMappingURL=scheduler.controller.js.map