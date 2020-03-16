import {
    EventBindings,
    eventType,
    Meeting,
    types,
    ValidationResult,
} from '~initialState';
import { participantsRegexp, titleRegexp } from '~consts';

export class ActionPopupController {
    public title: string = '';
    public participants: string = '';
    public saveCallback: ({}: EventBindings) => void;
    public actionType: types;
    public validationError: string = '';

    private setParticipants(participants: string): string[] {
        const hasParticipants: boolean = participants.length > 0;

        if (!hasParticipants) {
            return;
        }

        return participants.split(', ');
    }

    private createEvent(event: eventType, participants: string): eventType {
        const isMeeting = event.type === types.meeting;

        if (isMeeting) {
            (event as Meeting).participants = this.setParticipants(
                participants,
            );
        }

        return event;
    }

    public isTitleValid(title: string): boolean {
        return titleRegexp.test(title);
    }

    public isParticipantsValid(participants: string): boolean {
        return participantsRegexp.test(participants);
    }

    private getValidationResult(
        event: eventType,
        isEventTypeMeeting: boolean,
        participants: string,
    ): ValidationResult {

        let validationError: string = '';
        let isInValid: boolean = false;
        const isTitleValid: boolean = this.isTitleValid(event.title);
        const isParticipantsValid: boolean = this.isParticipantsValid(
            participants,
        );

        if (!isTitleValid) {
            validationError = 'Title is invalid! ';
        }

        if (isEventTypeMeeting && !isParticipantsValid) {
            validationError += 'Participants is invalid!';
        }

        if (validationError.length > 0) {
            isInValid = true;
        }

        return { validationError, isInValid };
    }

    private setValidationError(error: string): void {
        this.validationError = error;
    }

    public addEvent(): void {
        const event: eventType = this.createEvent(
            {
                type: this.actionType,
                title: this.title,
            },
            this.participants,
        );

        const isEventTypeMeeting: boolean = event.type === types.meeting;

        const { validationError, isInValid } = this.getValidationResult(
            event,
            isEventTypeMeeting,
            this.participants,
        );

        if (isInValid) {
            this.setValidationError(validationError);

            return;
        }

        this.saveCallback({ event });
    }
}
