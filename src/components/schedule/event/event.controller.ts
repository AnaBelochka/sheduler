import { Actions } from "../../../initialState";

export class EventController {
    public task: Actions;

    constructor(task: Actions) {
        this.task = task;
    }
}

EventController.$inject = ['task'];
