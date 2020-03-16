import * as angular from 'angular';
import 'angular-mocks';
import {
    Appointment,
    Meeting,
    types,
    ValidationResult,
} from '~initialState';

describe('ActionPopupController', () => {
    let controller: any;
    let $componentController: any;

    const participants: string = 'first, second';
    const title: string = 'first';

    const appointment: Appointment = {
        type: types.appointment,
        title,
    };

    const invalidAppointment: Appointment = {
        type: types.appointment,
        title: '',
    };

    const invalidMeeting: Meeting = {
        type: types.appointment,
        title: '',
        participants: [],
    };

    const meeting: Meeting = {
        type: types.meeting,
        title,
        participants: [],
    };

    beforeEach(angular.mock.module('scheduler'));

    beforeEach(inject(function(_$componentController_) {
        $componentController = _$componentController_;
    }));

    beforeEach(() => {
        controller = $componentController('actionPopupComponent', {}, {});
    });

    it('should exist', function() {
        expect(controller).toBeDefined();
    });

    describe('#setParticipants', () => {
        it('should exist', function() {
            expect(controller.setParticipants).toBeDefined();
        });

        it('should return array of participants if input string is valid', function() {
            expect(controller.setParticipants(participants)).toEqual([
                'first',
                'second',
            ]);
        });

        it('should return undefined if input string is invalid', function() {
            expect(controller.setParticipants('')).toBe(undefined);
        });
    });

    describe('#isTitleValid', () => {
        it('should exist', function() {
            expect(controller.isTitleValid).toBeDefined();
        });

        it('should return true if input string is valid', function() {
            expect(controller.isTitleValid(title)).toBeTruthy();
        });

        it('should return false if input string invalid', function() {
            expect(controller.isTitleValid('')).toBeFalsy();
        });
    });

    describe('#isParticipantsValid', () => {
        it('should exist', function() {
            expect(controller.isParticipantsValid).toBeDefined();
        });

        it('should return true if input string is valid', function() {
            expect(controller.isParticipantsValid(participants)).toBeTruthy();
        });

        it('should return false if input string invalid', function() {
            expect(controller.isParticipantsValid('')).toBeFalsy();
        });
    });

    describe('#createEvent', () => {
        it('should exist', function() {
            expect(controller.createEvent).toBeDefined();
        });

        it('should return appointment if event type is appointment', function() {
            expect(controller.createEvent(appointment, participants)).toEqual({
                title,
                type: types.appointment,
            });
        });

        it('should return meeting if event type is meeting', function() {
            expect(controller.createEvent(meeting, participants)).toEqual({
                title,
                type: types.meeting,
                participants: ['first', 'second'],
            });
        });
    });

    describe('#getValidationResult', () => {
        const voidValidationResult: ValidationResult = {
            validationError: '',
            isInValid: false,
        };
        const meetingValidationResult: ValidationResult = {
            validationError: 'Title is invalid! Participants is invalid!',
            isInValid: true,
        };
        const appointmentValidationResult: ValidationResult = {
            validationError: 'Title is invalid! ',
            isInValid: true,
        };

        it('should return void error and false flag if inputs valid', function() {
            expect(
                controller.getValidationResult(
                    appointment,
                    false,
                    participants,
                ),
            ).toEqual(voidValidationResult);
            expect(
                controller.getValidationResult(meeting, true, participants),
            ).toEqual(voidValidationResult);
        });

        it('should return error message and true flag if inputs invalid', function() {
            expect(
                controller.getValidationResult(
                    invalidAppointment,
                    false,
                    participants,
                ),
            ).toEqual(appointmentValidationResult);

            expect(
                controller.getValidationResult(invalidMeeting, true, ''),
            ).toEqual(meetingValidationResult);
        });
    });

    describe('#addEvent', () => {
        it('should call the saveCallback binding, when ', function() {
            const saveCallbackSpy = jasmine.createSpy('saveCallback');
            const bindings = { saveCallback: saveCallbackSpy, actionType: 'appointment' };

            controller = $componentController(
                'actionPopupComponent',
                null,
                bindings,
            );

            controller.title = 'first';
            controller.addEvent();

            expect(saveCallbackSpy).toHaveBeenCalledWith({
                event: appointment
            });
        });
    });
});
