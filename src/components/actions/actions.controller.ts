import { types, eventType } from '../../initialState';
import { IScope } from 'angular';
import { CREATE_NEW_EVENT } from '../../consts';

export class ActionsController {
    public activeActionType: types;
    public isPopupOpen: boolean = false;

    constructor(private $scope: IScope) {}

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
