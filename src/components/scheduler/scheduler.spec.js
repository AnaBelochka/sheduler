"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
require("angular-mocks");
var _initialState_1 = require("~initialState");
var _consts_1 = require("~consts");
describe('SchedulerController', function () {
    var controller;
    var $componentController;
    var $scope;
    var rootScope;
    var HttpMockService;
    var timeout;
    var $httpBackend;
    var appointment = {
        type: _initialState_1.types.appointment,
        title: 'appointment',
    };
    var data = {
        actions: [
            {
                title: 'Appointment',
                type: _initialState_1.types.appointment,
            },
            {
                participants: [],
                title: 'Meeting',
                type: _initialState_1.types.meeting,
            },
        ],
        events: [],
        user: {
            isSelected: true,
            name: 'User',
        },
    };
    var event;
    beforeEach(angular.mock.module('scheduler'));
    beforeEach(inject(function (_$componentController_, $rootScope, $timeout, $injector) {
        $componentController = _$componentController_;
        rootScope = $rootScope;
        $scope = $rootScope.$new();
        timeout = $timeout;
        HttpMockService = $injector.get('HttpMockService');
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.when('GET', _consts_1.DATA_URL).respond(data);
    }));
    beforeEach(function () {
        controller = $componentController('schedulerComponent', { $scope: $scope, HttpMockService: HttpMockService }, {});
    });
    it('should exist', function () {
        expect(controller).toBeDefined();
    });
    it('should get thrown event', function () {
        var eventEmitted = false;
        rootScope.$on(_consts_1.CREATE_NEW_EVENT, function () {
            eventEmitted = true;
        });
        rootScope.$broadcast(_consts_1.CREATE_NEW_EVENT, {});
        expect(eventEmitted).toBe(true);
    });
    describe('#getInitialDataHandler', function () {
        beforeEach(function () {
            controller.getInitialDataHandler(data);
        });
        it('should set flag isDataReceived for loading data equal true', function () {
            expect(controller.isDataReceived).toBeFalsy();
            timeout.flush();
            expect(controller.isDataReceived).toBeTruthy();
        });
        it('should set user from returned data from url', function () {
            expect(controller.user).toBe(undefined);
            timeout.flush();
            expect(controller.user).toEqual(data.user);
        });
        it('should set actions from returned data from url', function () {
            expect(controller.actions).toBe(undefined);
            timeout.flush();
            expect(controller.actions).toEqual(data.actions);
        });
        it('should set events from returned data from url', function () {
            expect(controller.events).toBe(undefined);
            timeout.flush();
            expect(controller.events).toEqual(data.events);
        });
    });
    describe('#sendNewItemHandler', function () {
        it('should throw sendNewEvent event', function () {
            spyOn($scope, '$broadcast');
            controller.sendNewItemHandler(event, appointment);
            expect($scope.$broadcast).toHaveBeenCalledWith(_consts_1.SEND_NEW_EVENT, appointment);
        });
    });
});
//# sourceMappingURL=scheduler.spec.js.map