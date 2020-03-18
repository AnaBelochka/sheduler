import {
    Actions,
    User,
    Scheduler,
    eventType,
    HttpMockServiceInterface,
} from '../../initialState';
import { IAngularEvent, IPromise, IScope, ITimeoutService } from 'angular';
import { CREATE_NEW_EVENT, SEND_NEW_EVENT } from '../../consts';

export class SchedulerController {
    public user: User;
    public actions: Actions;
    public events: Actions;
    public isDataReceived: boolean = false;
    private unsubscribeCreateNewEvent: () => void;

    constructor(
        private $scope: IScope,
        private httpMockService: HttpMockServiceInterface,
        private $timeout: ITimeoutService,
    ) {
        httpMockService.getInitialData().then(this.getInitialDataHandler);
    }

    private getInitialDataHandler = ({ user, events, actions }: Scheduler): IPromise<void> =>
        this.$timeout(() => {
            this.isDataReceived = true;
            this.user = user;
            this.actions = actions;
            this.events = events;
        }, 5000);

    public $onInit(): void {
        this.unsubscribeCreateNewEvent = this.$scope.$on(
            CREATE_NEW_EVENT,
            this.sendNewItemHandler,
        );
    }

    public $onDestroy(): void {
        this.unsubscribeCreateNewEvent();
    }

    private sendNewItemHandler = (
        event: IAngularEvent,
        data: eventType,
    ): void => {
        this.$scope.$broadcast(SEND_NEW_EVENT, data);
    };
}

SchedulerController.$inject = ['$scope', 'HttpMockService', '$timeout'];
