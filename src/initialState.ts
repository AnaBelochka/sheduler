import { IPromise } from 'angular';

export interface User {
    name: string;
    isSelected: boolean;
}

export enum types {
    appointment = 'appointment',
    meeting = 'meeting',
}

export interface BaseAction {
    type: types;
    title: string;
}

export interface Appointment extends BaseAction {
}

export interface Meeting extends BaseAction {
    participants: Array<string>;
}

export type Actions = Array<Appointment | Meeting>;

export interface Scheduler {
    user: User;
    actions: Actions;
    events: Actions;
}

export type eventType = Appointment | Meeting;

export const state: Scheduler = {
    user: {
        name: 'User',
        isSelected: true,
    },
    actions: [
        {
            type: types.meeting,
            title: 'Meeting',
            participants: [],
        },
        {
            type: types.appointment,
            title: 'Appointment',
        },
    ],
    events: [],
};

export interface EventBindings {
    event: eventType;
}

export interface HttpMockServiceInterface {
    getInitialData(): IPromise<unknown>;
}

export interface ValidationResult {
    validationError: string;
    isInValid: boolean;
}

export type Validators = (()=>boolean)[];
