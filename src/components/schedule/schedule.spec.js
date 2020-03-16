"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
require("angular-mocks");
var _initialState_1 = require("~initialState");
var _consts_1 = require("~consts");
describe('ScheduleController', function () {
    var controller;
    var $componentController;
    var $scope;
    var rootScope;
    var appointment = {
        type: _initialState_1.types.appointment,
        title: 'appointment',
    };
    var event;
    beforeEach(angular.mock.module('scheduler'));
    beforeEach(inject(function (_$componentController_, $rootScope) {
        $componentController = _$componentController_;
        rootScope = $rootScope;
        $scope = $rootScope.$new();
    }));
    beforeEach(function () {
        controller = $componentController('scheduleComponent', { $scope: $scope }, {});
    });
    it('should exist', function () {
        expect(controller).toBeDefined();
    });
    it('should get thrown event', function () {
        var eventEmitted = false;
        rootScope.$on(_consts_1.SEND_NEW_EVENT, function () {
            eventEmitted = true;
        });
        rootScope.$broadcast(_consts_1.SEND_NEW_EVENT, {});
        expect(eventEmitted).toBe(true);
    });
    describe('#getNewEventHandler', function () {
        it('should add new event if it is necessary', function () {
            var eventsLength = controller.events.length;
            controller.getNewEventHandler(event, appointment);
            expect(controller.events.length).toBe(eventsLength + 1);
        });
    });
});
//# sourceMappingURL=schedule.spec.js.map