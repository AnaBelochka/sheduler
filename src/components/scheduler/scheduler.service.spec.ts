import { HttpMockService } from './scheduler.service';
import { DATA_URL } from '~consts';
import { Scheduler, types } from '~initialState';
import * as angular from 'angular';

describe('HttpMockService', () => {
    let service: any;
    let $httpBackend: any;

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
        inject($injector => {
            service = $injector.get('HttpMockService');
            $httpBackend = $injector.get('$httpBackend');

            $httpBackend.when('GET', DATA_URL).respond(data);
        });
    });

    afterEach(() => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('#getInitialData', () => {
        it('should return initial data from url', function() {
            service.getInitialData().then(function(response: any) {
                expect(response).toEqual(data); //the response is null
            });
            $httpBackend.flush();
        });
    });
});
