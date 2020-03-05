import {
    eventBindings,
    eventType,
    Meeting,
    types,
} from '../../../initialState';

export class ActionPopupController {
    public title: string = '';
    public participants: string = '';
    public saveCallback: ({}: eventBindings) => void;
    public actionType: types;

    private setParticipants(participants: string, event: eventType): void {
        (event as Meeting).participants = participants.split(', ');
    }

    private createEvent(state: eventType): eventType {
        switch (state.type) {
            case types.meeting:
                (state as Meeting).participants = [];
                return state;
                break;
            case types.appointment:
                return state;
                break;
        }
    }

    private isTitleValid(title: string): boolean {
        const titleRegexp: RegExp = /[A-Za-z\ ,.!0-9]+/;

        return titleRegexp.test(title);
    }

    private isParticipantsValid(participants: string): boolean {
        const participantsRegexp: RegExp = /[A-Za-z\ ,]+/;

        return participantsRegexp.test(participants);
    }

    public addAction(): void {
        const newEvent: eventType = this.createEvent({
            type: this.actionType,
            title: this.title,
        });
        const isEventTypeMeeting: boolean = newEvent.type === types.meeting;
        const isTitleValid: boolean = this.isTitleValid(newEvent.title);
        const isParticipantsValid: boolean = this.isParticipantsValid(
            this.participants,
        );

        if (!isTitleValid) {
            return;
        }

        if (isEventTypeMeeting) {
            if (!isParticipantsValid) {
                return;
            }

            this.setParticipants(this.participants, newEvent);
        }

        this.saveCallback({ event: newEvent });
    }
}
