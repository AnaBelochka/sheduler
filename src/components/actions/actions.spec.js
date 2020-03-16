"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
require("angular-mocks");
var _initialState_1 = require("~initialState");
var _consts_1 = require("~consts");
var actions_controller_1 = require("~components/actions/actions.controller");
describe('ActionsController', function () {
    var controller;
    var $scope;
    var appointment = {
        type: _initialState_1.types.appointment,
        title: 'appointment',
    };
    beforeEach(angular.mock.module('scheduler'));
    beforeEach(function () {
        $scope = {};
        controller = new actions_controller_1.ActionsController($scope);
    });
    describe('#openAction', function () {
        it('should set active action type and flag for popup equal true', function () {
            controller.openAction(_initialState_1.types.meeting);
            expect(controller.isPopupOpen).toBeTruthy();
            expect(controller.activeActionType).toBe('meeting');
        });
    });
    describe('#closeAction', function () {
        it('should set flag for popup equal false', function () {
            controller.closeAction();
            expect(controller.isPopupOpen).toBeFalsy();
        });
    });
    describe('#onSave', function () {
        it('should set flag for popup equal false and throw createNewEvent event', function () {
            $scope.$emit = jasmine.createSpy('$emit');
            controller.onSave(appointment);
            expect(controller.isPopupOpen).toBeFalsy();
            expect($scope.$emit).toHaveBeenCalledWith(_consts_1.CREATE_NEW_EVENT, appointment);
        });
    });
});
//# sourceMappingURL=actions.spec.js.map