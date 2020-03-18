import { HttpMockService } from './scheduler.service';
import { Scheduler, types } from '../../initialState';
import * as angular from 'angular';

describe('HttpMockService', () => {
    let service: any;
    let $http: any;

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

    beforeEach(angular.mock.module('scheduler'));

    beforeEach(() => {
        $http = {
            get: jasmine.createSpy('getSpy'),
        };
        service = new HttpMockService($http);
    });

    describe('#getInitialData', () => {
        it('should return initial data from url', () => {
            $http.get.and.returnValue(data)
            expect($http.get()).toEqual(data);
        });
    });
});
