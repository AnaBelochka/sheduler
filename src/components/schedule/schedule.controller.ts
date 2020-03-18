import { Actions, eventType } from '../../initialState';
import { SEND_NEW_EVENT } from '../../consts';
import { IAngularEvent, IScope } from 'angular';

export class ScheduleController {
    public events: Actions = [];
    private unsubscribeEvent: () => void;

    constructor(private $scope: IScope) {}

    public $onInit() {
        this.unsubscribeEvent = this.$scope.$on(
            SEND_NEW_EVENT,
            this.getNewEventHandler,
        );
    }

    private getNewEventHandler = (event: IAngularEvent, data: eventType) => {
        this.events.push(data);
    }

    public $onDestroy() {
        this.unsubscribeEvent();
    }
}

ScheduleController.$inject = ['$scope'];
