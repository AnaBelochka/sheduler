import * as angular from 'angular';
import 'angular-mocks';
import {IAngularEvent, IRootScopeService, IScope} from 'angular';
import { Appointment, types } from '~initialState';
import {SEND_NEW_EVENT} from "~consts";

describe('ScheduleController', () => {
    let controller: any;
    let $componentController: any;
    let $scope: IScope;
    let rootScope: IRootScopeService;

    const appointment: Appointment = {
        type: types.appointment,
        title: 'appointment',
    };

    let event: IAngularEvent;

    beforeEach(angular.mock.module('scheduler'));

    beforeEach(inject(function(_$componentController_, $rootScope) {
        $componentController = _$componentController_;
        rootScope = $rootScope;
        $scope = $rootScope.$new();
    }));

    beforeEach(() => {
        controller = $componentController('scheduleComponent', { $scope }, {});
    });

    it('should exist', function() {
        expect(controller).toBeDefined();
    });

    it('should get thrown event', function() {
        let eventEmitted: boolean = false;

        rootScope.$on(SEND_NEW_EVENT, function() {
            eventEmitted = true;
        });

        rootScope.$broadcast(SEND_NEW_EVENT, {});

        expect(eventEmitted).toBe(true);
    });

    describe('#getNewEventHandler', () => {
        it('should add new event if it is necessary', function() {
            const eventsLength = controller.events.length;

            controller.getNewEventHandler(event, appointment);

            expect(controller.events.length).toBe(eventsLength + 1);
        });
    });
});
