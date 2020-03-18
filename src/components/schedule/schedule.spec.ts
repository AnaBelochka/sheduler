import * as angular from 'angular';
import 'angular-mocks';
import { IAngularEvent } from 'angular';
import { Appointment, types } from '../../initialState';
import { ScheduleController } from './schedule.controller';
import { SEND_NEW_EVENT } from '../../consts';

describe('ScheduleController', () => {
    let controller: any;
    let $scope: any;

    const appointment: Appointment = {
        type: types.appointment,
        title: 'appointment',
    };

    beforeEach(angular.mock.module('scheduler'));

    beforeEach(() => {
        $scope = {};
        controller = new ScheduleController($scope);
    });

    it('should get thrown event', () => {
        $scope.$on = jasmine.createSpy('$on');
        $scope.$on(SEND_NEW_EVENT, {});
        expect($scope.$on).toHaveBeenCalledWith(SEND_NEW_EVENT, {});
    });

    describe('#getNewEventHandler', () => {
        let event: IAngularEvent;

        it('should add new event if it necessary', () => {
            const eventsLength = controller.events.length;

            controller.getNewEventHandler(event, appointment);

            expect(controller.events.length).toBe(eventsLength + 1);
        });
    });
});
