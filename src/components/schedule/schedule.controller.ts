import {Actions, types} from "../../initialState";

export class ScheduleController {
    tasks: Actions;

    constructor() {
        this.tasks = [
            {
                type: types.appointment,
                title: 'Do anything'
            },
            {
                type: types.meeting,
                title: 'First Meeting',
                participants: []
            }
        ];
    }
}