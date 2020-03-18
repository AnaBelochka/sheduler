import * as angular from 'angular';
import 'angular-mocks';
import { IAngularEvent } from 'angular';
import {
    Appointment,
    Scheduler,
    types,
} from '../../initialState';
import { CREATE_NEW_EVENT, SEND_NEW_EVENT } from '../../consts';
import { SchedulerController } from './scheduler.controller';

describe('SchedulerController', () => {
    let controller: any;
    let $scope: any;
    let httpMockService: any;
    let $timeout: any;

    const appointment: Appointment = {
        type: types.appointment,
        title: 'appointment',
    };

    const data: Scheduler = {
        actions: [
            {
                title: 'Appointment',
                type: types.appointment,
            },
            {
                participants: [],
                title: 'Meeting',
                type: types.meeting,
            },
        ],
        events: [],
        user: {
            isSelected: true,
            name: 'User',
        },
    };

    let event: IAngularEvent;

    beforeEach(angular.mock.module('scheduler'));

    beforeEach(() => {
        $scope = {};
        httpMockService = {
            getInitialData: jasmine.createSpy('getInitialData'),
        };
        $timeout = {
            flush: jasmine.createSpy('flush'),
        };

        controller = new SchedulerController($scope, httpMockService, $timeout);
    });

    it('should get thrown event', () => {
        $scope.$on = jasmine.createSpy('$on');
        $scope.$on(CREATE_NEW_EVENT, {});
        expect($scope.$on).toHaveBeenCalledWith(CREATE_NEW_EVENT, {});
    });

    describe('#getInitialDataHandler', () => {
        beforeEach(() => {
            controller.getInitialDataHandler(data);
        });

        it('should set flag isDataReceived for loading data equal true', () => {
            expect(controller.isDataReceived).toBeFalsy();
            $timeout.flush();
            expect(controller.isDataReceived).toBeTruthy();
        });

        it('should set user from returned data from url', () => {
            expect(controller.user).toBe(undefined);
            $timeout.flush();
            expect(controller.user).toEqual(data.user);
        });

        it('should set actions from returned data from url', () => {
            expect(controller.actions).toBe(undefined);
            $timeout.flush();
            expect(controller.actions).toEqual(data.actions);
        });

        it('should set events from returned data from url', () => {
            expect(controller.events).toBe(undefined);
            $timeout.flush();
            expect(controller.events).toEqual(data.events);
        });
    });

    describe('#sendNewItemHandler', () => {
        it('should throw sendNewEvent event', () => {
            $scope.$broadcast = jasmine.createSpy('$broadcast');
            $scope.$broadcast(SEND_NEW_EVENT, appointment);

            expect($scope.$broadcast).toHaveBeenCalledWith(
                SEND_NEW_EVENT,
                appointment,
            );
        });
    });
});
