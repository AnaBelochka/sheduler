import * as angular from 'angular';
import { SchedulerController } from './scheduler.controller';
import { IScope, ITimeoutService, IHttpService } from 'angular';
import {HttpMockService } from './scheduler.service';

describe('schedulerController', () => {
    let controller: any;
    let $scope: IScope;
    let HttpMockService: HttpMockService;
    let $timeout: ITimeoutService;
    let $http: IHttpService;

    beforeEach(() => {


        controller = new SchedulerController($scope, HttpMockService, $timeout);
    });

    it('should ', function() {
        expect(controller).toBeDefined();
    });

    // it('should exist', function() {
    //     angular.mock.inject(($componentController: any) => {
    //         const component = $componentController(
    //             'SchedulerController',
    //             {},
    //             {},
    //         );
    //         expect(component).toBeDefined();
    //     });
    // });

    // describe('has isTitleValid function', () => {
    //     const validTitle = 'valid';
    //     const invalidTitle = '';
    //
    //     it('should exist', function() {
    //         expect(controller.isTitleValid).toBeDefined();
    //     });
    //
    //     it('should return true if title valid', function() {
    //         expect(controller.isTitleValid(validTitle)).toBe(true);
    //     });
    // });
    //
    // describe('has setParticipants function', () => {
    //     it('should return ', function() {});
    // });
});

// xdescribe('HeroDetailController', function() {
//     var $componentController;
//
//     beforeEach(module('heroApp'));
//     beforeEach(inject(function(_$componentController_) {
//         $componentController = _$componentController_;
//     }));
//
//     it('should call the `onDelete` binding, when deleting the hero', function() {
//         var onDeleteSpy = jasmine.createSpy('onDelete');
//         var bindings = {hero: {}, onDelete: onDeleteSpy};
//         var ctrl = $componentController('heroDetail', null, bindings);
//
//         ctrl.delete();
//         expect(onDeleteSpy).toHaveBeenCalledWith({hero: ctrl.hero});
//     });
//
//     it('should call the `onUpdate` binding, when updating a property', function() {
//         var onUpdateSpy = jasmine.createSpy('onUpdate');
//         var bindings = {hero: {}, onUpdate: onUpdateSpy};
//         var ctrl = $componentController('heroDetail', null, bindings);
//
//         ctrl.update('foo', 'bar');
//         expect(onUpdateSpy).toHaveBeenCalledWith({
//             hero: ctrl.hero,
//             prop: 'foo',
//             value: 'bar'
//         });
//     });
//
// });
