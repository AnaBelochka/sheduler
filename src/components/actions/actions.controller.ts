import { Actions, types, eventType } from '../../initialState';
import { CREATE_NEW_EVENT } from '../../consts';

export class ActionsController {
    public activeActionType: types;
    public actions: Actions = [];
    public isPopupOpen: boolean = false;
    public $scope: ng.IScope;
    public newEvent: eventType;


    constructor($scope: ng.IScope) {
        this.$scope = $scope;
    }

    public openAction(type: types): void {
        this.isPopupOpen = true;
        this.activeActionType = type;
    }

    public onSave(newEvent: eventType): void {
        this.isPopupOpen = false;
        this.$scope.$emit(CREATE_NEW_EVENT, newEvent);
    }

    public closeAction(): void {
        this.isPopupOpen = false;
    }
}

ActionsController.$inject = ['$scope'];
