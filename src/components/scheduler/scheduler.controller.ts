import {
    Actions,
    User,
    Scheduler,
    eventType,
    HttpMockServiceInterface,
} from './initialState';
import { IAngularEvent, IScope, ITimeoutService } from 'angular';
import { CREATE_NEW_EVENT, SEND_NEW_EVENT } from './consts';

export class SchedulerController {
    public user: User;
    public actions: Actions;
    public events: Actions;
    public isDataReceived: boolean = false;
    private unsubscribeCreateNewEvent: () => void;

    constructor(
        private $scope: IScope,
        private HttpMockService: HttpMockServiceInterface,
        private $timeout: ITimeoutService,
    ) {
        HttpMockService.getInitialData().then(this.getInitialDataHandler.bind(this));
    }

    private getInitialDataHandler(initialData: Scheduler): void {
        this.$timeout(() => {
            this.isDataReceived = true;
            this.user = initialData.user;
            this.actions = initialData.actions;
            this.events = initialData.events;
        }, 5000);
    }

    public $onInit() {
        this.unsubscribeCreateNewEvent = this.$scope.$on(
            CREATE_NEW_EVENT,
            this.sendNewItemHandler.bind(this),
        );
    }

    public $onDestroy() {
        this.unsubscribeCreateNewEvent();
    }

    private sendNewItemHandler(event: IAngularEvent, data: eventType): void {
        this.$scope.$broadcast(SEND_NEW_EVENT, data);
    }
}

SchedulerController.$inject = ['$scope', 'HttpMockService', '$timeout'];
