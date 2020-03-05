import {
    Actions,
    User,
    state,
    eventType,
    httpMochServiceInterface,
} from './initialState';
import { IAngularEvent } from 'angular';
import { CREATE_NEW_EVENT, SEND_NEW_EVENT } from './consts';

export class SchedulerController {
    // public user: User = state.user;
    // public actions: Actions = state.actions;
    // public events: Actions = state.events;
    public user: User;
    public actions: Actions;
    public events: Actions;

    public $scope: ng.IScope;
    private newEvent: eventType;
    private unsubscribeEvent: () => void;

    constructor($scope: ng.IScope, httpMockService: httpMochServiceInterface) {
        this.$scope = $scope;
        httpMockService.getUserInfo().then((userData: User) => {
            setTimeout(() => {
                this.$scope.$apply(() => {
                    this.user = userData;
                });
            });
        });
        httpMockService.getActionsInfo().then((actionsData: Actions) => {
            setTimeout(() => {
                this.$scope.$apply(() => {
                    this.actions = actionsData;
                });
            });
        });
        httpMockService.getEventsInfo().then((eventsData: Actions) => {
            setTimeout(() => {
                this.$scope.$apply(() => {
                    this.events = eventsData;
                });
            });
        });
    }

    public $onInit() {
        this.unsubscribeEvent = this.$scope.$on(
            CREATE_NEW_EVENT,
            (event: IAngularEvent, data: eventType) => {
                this.newEvent = data;
                this.sendNewItem();
            },
        );
    }

    public $onDestroy() {
        this.unsubscribeEvent();
    }

    private sendNewItem(): void {
        this.$scope.$broadcast(SEND_NEW_EVENT, this.newEvent);
    }
}

SchedulerController.$inject = ['$scope', 'httpMockService'];
