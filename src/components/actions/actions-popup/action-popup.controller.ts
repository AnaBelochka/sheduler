import { participantsRegexp, titleRegexp } from '../../../consts';
import { EventBindings, eventType, Meeting, types, ValidationResult, Validators } from '../../../initialState';

export class ActionPopupController {
    public title: string = '';
    public participants: string = '';
    public saveCallback: ({}: EventBindings) => void;
    public actionType: types;
    public validationError: string = '';

    private setParticipants(participants: string): string[] | undefined {
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

    public isTitleValid = (title: string): boolean => {
        return titleRegexp.test(title);
    };

    public isParticipantsValid = (participants: string): boolean => {
        return participantsRegexp.test(participants);
    };

    private getValidationResult(
        event: eventType,
        isEventTypeMeeting: boolean,
        participants: string,
    ): ValidationResult {
        const initialValidationState: ValidationResult = { validationError: '', isInValid: false };
        const validators: Validators = [this.isTitleValid.bind(this, event.title), this.isParticipantsValid.bind(this, participants)];
        const errorTitleValidation: ValidationResult = { validationError: 'Title is invalid!', isInValid: true };

        const errorParticipantsValidation: ValidationResult = {
            validationError: 'Participants is invalid!',
            isInValid: true,
        };

        const errorTitleAndParticipantsValidation: ValidationResult = {
            validationError: 'Title is invalid! Participants is invalid!',
            isInValid: true,
        };

        const validationResult: ValidationResult = validators.reduce((reduceResult: ValidationResult, validator: () => boolean, index: number): ValidationResult => {
            if (index === 1) {
                return isEventTypeMeeting ? validator() ? reduceResult : reduceResult.isInValid ? errorTitleAndParticipantsValidation : errorParticipantsValidation : reduceResult;
            }

            return validator() ? reduceResult : errorTitleValidation;
        }, initialValidationState);

        return validationResult;
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
