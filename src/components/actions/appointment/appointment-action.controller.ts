export class AppointmentActionController{
    public type: string;

    constructor() {
        this.type = 'appointment';
    }

    addAppointmentActionHandler(event: MouseEvent) {
        event.preventDefault();
    }
}
