"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
require("angular-mocks");
var _initialState_1 = require("~initialState");
describe('ActionPopupController', function () {
    var controller;
    var $componentController;
    var participants = 'first, second';
    var title = 'first';
    var appointment = {
        type: _initialState_1.types.appointment,
        title: title,
    };
    var invalidAppointment = {
        type: _initialState_1.types.appointment,
        title: '',
    };
    var invalidMeeting = {
        type: _initialState_1.types.appointment,
        title: '',
        participants: [],
    };
    var meeting = {
        type: _initialState_1.types.meeting,
        title: title,
        participants: [],
    };
    beforeEach(angular.mock.module('scheduler'));
    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));
    beforeEach(function () {
        controller = $componentController('actionPopupComponent', {}, {});
    });
    it('should exist', function () {
        expect(controller).toBeDefined();
    });
    describe('#setParticipants', function () {
        it('should exist', function () {
            expect(controller.setParticipants).toBeDefined();
        });
        it('should return array of participants if input string is valid', function () {
            expect(controller.setParticipants(participants)).toEqual([
                'first',
                'second',
            ]);
        });
        it('should return undefined if input string is invalid', function () {
            expect(controller.setParticipants('')).toBe(undefined);
        });
    });
    describe('#isTitleValid', function () {
        it('should exist', function () {
            expect(controller.isTitleValid).toBeDefined();
        });
        it('should return true if input string is valid', function () {
            expect(controller.isTitleValid(title)).toBeTruthy();
        });
        it('should return false if input string invalid', function () {
            expect(controller.isTitleValid('')).toBeFalsy();
        });
    });
    describe('#isParticipantsValid', function () {
        it('should exist', function () {
            expect(controller.isParticipantsValid).toBeDefined();
        });
        it('should return true if input string is valid', function () {
            expect(controller.isParticipantsValid(participants)).toBeTruthy();
        });
        it('should return false if input string invalid', function () {
            expect(controller.isParticipantsValid('')).toBeFalsy();
        });
    });
    describe('#createEvent', function () {
        it('should exist', function () {
            expect(controller.createEvent).toBeDefined();
        });
        it('should return appointment if event type is appointment', function () {
            expect(controller.createEvent(appointment, participants)).toEqual({
                title: title,
                type: _initialState_1.types.appointment,
            });
        });
        it('should return meeting if event type is meeting', function () {
            expect(controller.createEvent(meeting, participants)).toEqual({
                title: title,
                type: _initialState_1.types.meeting,
                participants: ['first', 'second'],
            });
        });
    });
    describe('#getValidationResult', function () {
        var voidValidationResult = {
            validationError: '',
            isInValid: false,
        };
        var meetingValidationResult = {
            validationError: 'Title is invalid! Participants is invalid!',
            isInValid: true,
        };
        var appointmentValidationResult = {
            validationError: 'Title is invalid! ',
            isInValid: true,
        };
        it('should return void error and false flag if inputs valid', function () {
            expect(controller.getValidationResult(appointment, false, participants)).toEqual(voidValidationResult);
            expect(controller.getValidationResult(meeting, true, participants)).toEqual(voidValidationResult);
        });
        it('should return error message and true flag if inputs invalid', function () {
            expect(controller.getValidationResult(invalidAppointment, false, participants)).toEqual(appointmentValidationResult);
            expect(controller.getValidationResult(invalidMeeting, true, '')).toEqual(meetingValidationResult);
        });
    });
    describe('#addEvent', function () {
        it('should call the saveCallback binding, when ', function () {
            var saveCallbackSpy = jasmine.createSpy('saveCallback');
            var bindings = { saveCallback: saveCallbackSpy, actionType: 'appointment' };
            controller = $componentController('actionPopupComponent', null, bindings);
            controller.title = 'first';
            controller.addEvent();
            expect(saveCallbackSpy).toHaveBeenCalledWith({
                event: appointment
            });
        });
    });
});
//# sourceMappingURL=action-popup.spec.js.map