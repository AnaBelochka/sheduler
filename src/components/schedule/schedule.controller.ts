import {Actions, eventType} from '../../initialState';
import { SEND_NEW_EVENT } from '../../consts';
import {IAngularEvent} from "angular";

export class ScheduleController {
    public events: Actions;
    public $scope: ng.IScope;
    private unsubscribeEvent: () => void;

    constructor($scope: ng.IScope) {
        this.$scope = $scope;
    }

    $onInit() {
        this.unsubscribeEvent = this.$scope.$on(SEND_NEW_EVENT, (event: IAngularEvent, data: eventType) => {
            this.events.push(data);
        });
    }

    $onDestroy() {
        this.unsubscribeEvent();
    }
}

ScheduleController.$inject = ['$scope'];
