import * as angular from 'angular';
import 'angular-mocks';
import { IAngularEvent, IRootScopeService, IScope } from 'angular';
import {
    Appointment,
    HttpMockServiceInterface,
    Scheduler,
    types,
} from '~initialState';
import { ITimeoutService } from 'angular';
import { CREATE_NEW_EVENT, DATA_URL, SEND_NEW_EVENT } from '~consts';

describe('SchedulerController', () => {
    let controller: any;
    let $componentController: any;
    let $scope: IScope;
    let rootScope: IRootScopeService;
    let HttpMockService: HttpMockServiceInterface;
    let timeout: ITimeoutService;
    let $httpBackend: any;

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

    beforeEach(inject(function(
        _$componentController_,
        $rootScope,
        $timeout,
        $injector,
    ) {
        $componentController = _$componentController_;
        rootScope = $rootScope;
        $scope = $rootScope.$new();
        timeout = $timeout;
        HttpMockService = $injector.get('HttpMockService');
        $httpBackend = $injector.get('$httpBackend');

        $httpBackend.when('GET', DATA_URL).respond(data);
    }));

    beforeEach(() => {
        controller = $componentController(
            'schedulerComponent',
            { $scope, HttpMockService },
            {},
        );
    });

    it('should exist', function() {
        expect(controller).toBeDefined();
    });

    it('should get thrown event', function() {
        let eventEmitted: boolean = false;

        rootScope.$on(CREATE_NEW_EVENT, function() {
            eventEmitted = true;
        });

        rootScope.$broadcast(CREATE_NEW_EVENT, {});

        expect(eventEmitted).toBe(true);
    });

    // it('should destroy unnecessary event', function () {
    //     controller.$onInit();
    //     controller.$onDestroy();
    //     expect(controller.unsubscribeCreateNewEvent).toHaveBeenCalled();
    // });

    describe('#getInitialDataHandler', () => {
        beforeEach(() => {
            controller.getInitialDataHandler(data);
        });

        it('should set flag isDataReceived for loading data equal true', function() {
            expect(controller.isDataReceived).toBeFalsy();
            timeout.flush();
            expect(controller.isDataReceived).toBeTruthy();
        });

        it('should set user from returned data from url', function() {
            expect(controller.user).toBe(undefined);
            timeout.flush();
            expect(controller.user).toEqual(data.user);
        });

        it('should set actions from returned data from url', function() {
            expect(controller.actions).toBe(undefined);
            timeout.flush();
            expect(controller.actions).toEqual(data.actions);
        });

        it('should set events from returned data from url', function() {
            expect(controller.events).toBe(undefined);
            timeout.flush();
            expect(controller.events).toEqual(data.events);
        });
    });

    describe('#sendNewItemHandler', () => {
        it('should throw sendNewEvent event', function() {
            spyOn($scope, '$broadcast');

            controller.sendNewItemHandler(event, appointment);

            expect($scope.$broadcast).toHaveBeenCalledWith(
                SEND_NEW_EVENT,
                appointment,
            );
        });
    });
});
