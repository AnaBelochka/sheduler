export interface User {
    name: string;
    isSelected: boolean;
}

export enum types {
    appointment ='appointment',
    meeting = 'meeting'
}

export interface BaseAction {
    type: types,
    title: string
}

export interface Appointment extends BaseAction {}

export interface Meeting extends BaseAction {
    participants: Array<string>;
}

export type Actions = Array<Appointment | Meeting>

export interface Scheduler {
    user: User;
    actions: Actions;
    schedule: Actions;
}

const state:Scheduler = {
    user: {
        name: 'User',
        isSelected: true
    },
    actions: [
        {
            type: types.meeting,
            title: "Meeting"
        },
        {
            type: types.appointment,
            title: "Appointment",
            participants: []
        }
    ],
    schedule: []
}