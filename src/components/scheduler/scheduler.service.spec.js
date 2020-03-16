"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _consts_1 = require("~consts");
var _initialState_1 = require("~initialState");
var angular = require("angular");
describe('HttpMockService', function () {
    var service;
    var $httpBackend;
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
    beforeEach(angular.mock.module('scheduler'));
    beforeEach(function () {
        inject(function ($injector) {
            service = $injector.get('HttpMockService');
            $httpBackend = $injector.get('$httpBackend');
            $httpBackend.when('GET', _consts_1.DATA_URL).respond(data);
        });
    });
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
    describe('#getInitialData', function () {
        it('should return initial data from url', function () {
            service.getInitialData().then(function (response) {
                expect(response).toEqual(data);
            });
            $httpBackend.flush();
        });
    });
});
//# sourceMappingURL=scheduler.service.spec.js.map