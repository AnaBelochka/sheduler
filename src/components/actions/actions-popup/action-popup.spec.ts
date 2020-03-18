import * as angular from 'angular';
import 'angular-mocks';
import {
    Appointment,
    Meeting,
    types,
    ValidationResult,
} from '../../../initialState';
import { ActionPopupController } from './action-popup.controller';

describe('ActionPopupController', () => {
    let controller: any;

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

    beforeEach(() => {
        controller = new ActionPopupController();
    });

    describe('#setParticipants', () => {
        it('should return array of participants if input string is valid', () => {
            expect(controller.setParticipants(participants)).toEqual([
                'first',
                'second',
            ]);
        });

        it('should return undefined if input string is invalid', () => {
            expect(controller.setParticipants('')).toBe(undefined);
        });
    });

    describe('#isTitleValid', () => {
        it('should return true if input string is valid', () => {
            expect(controller.isTitleValid(title)).toBeTruthy();
        });

        it('should return false if input string invalid', () => {
            expect(controller.isTitleValid('')).toBeFalsy();
        });
    });

    describe('#isParticipantsValid', () => {
        it('should return true if input string is valid', () => {
            expect(controller.isParticipantsValid(participants)).toBeTruthy();
        });

        it('should return false if input string invalid', () => {
            expect(controller.isParticipantsValid('')).toBeFalsy();
        });
    });

    describe('#createEvent', () => {

        it('should return appointment if event type is appointment', () => {
            expect(controller.createEvent(appointment, participants)).toEqual({
                title,
                type: types.appointment,
            });
        });

        it('should return meeting if event type is meeting', () => {
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
            validationError: 'Title is invalid!',
            isInValid: true,
        };

        it('should return object with validationError property equal empty string and isInValid property equal false if inputs valid', () => {
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

        it('should return object with validationError and isInValid property equal true if inputs invalid', () => {
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
        it('should call the saveCallback binding, when all inputs valid', () => {
            controller.saveCallback = jasmine.createSpy('saveCallback');
            controller.title = 'first';
            controller.actionType = 'appointment';
            controller.addEvent();

            expect(controller.saveCallback).toHaveBeenCalledWith({
                event: appointment,
            });
        });
    });
});
