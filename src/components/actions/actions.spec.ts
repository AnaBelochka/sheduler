import * as angular from 'angular';
import 'angular-mocks';
import { Appointment, types } from '../../initialState';
import { CREATE_NEW_EVENT } from '../../consts';
import { ActionsController } from './actions.controller';

describe('ActionsController', () => {
    let controller: any;
    let $scope: any;

    const appointment: Appointment = {
        type: types.appointment,
        title: 'appointment',
    };

    beforeEach(angular.mock.module('scheduler'));

    beforeEach(() => {
        $scope = {};
        controller = new ActionsController($scope);
    });

    describe('#openAction', () => {
        it('should set active action type and flag for popup equal true', () => {
            controller.openAction(types.meeting);
            expect(controller.isPopupOpen).toBeTruthy();
            expect(controller.activeActionType).toBe('meeting');
        });
    });

    describe('#closeAction', () => {
        it('should set flag for popup equal false', () => {
            controller.closeAction();
            expect(controller.isPopupOpen).toBeFalsy();
        });
    });

    describe('#onSave', () => {
        it('should set flag for popup equal false and throw createNewEvent event', () => {
            $scope.$emit = jasmine.createSpy('$emit');

            controller.onSave(appointment);
            expect(controller.isPopupOpen).toBeFalsy();

            expect($scope.$emit).toHaveBeenCalledWith(
                CREATE_NEW_EVENT,
                appointment,
            );
        });
    });
});
