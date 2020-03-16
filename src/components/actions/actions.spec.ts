import * as angular from 'angular';
import 'angular-mocks';
import { Appointment, types } from '~initialState';
import { CREATE_NEW_EVENT } from '~consts';
import { ActionsController } from '~components/actions/actions.controller';

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
        // controller = $componentController('actionsComponent', { $scope }, {});
        controller = new ActionsController($scope);
    });

    describe('#openAction', () => {
        it('should set active action type and flag for popup equal true', function() {
            controller.openAction(types.meeting);
            expect(controller.isPopupOpen).toBeTruthy();
            expect(controller.activeActionType).toBe('meeting');
        });
    });

    describe('#closeAction', () => {
        it('should set flag for popup equal false', function() {
            controller.closeAction();
            expect(controller.isPopupOpen).toBeFalsy();
        });
    });

    describe('#onSave', () => {
        it('should set flag for popup equal false and throw createNewEvent event', function() {
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
