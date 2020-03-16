import { SchedulerController } from './scheduler.controller';

export const SchedulerComponent = {
    template: `
        <div class="wrapper">
            <header>Scheduler</header>            
            <div ng-if="$ctrl.isDataReceived">
                <aside>
                    <user-component user="$ctrl.user"></user-component>
                    <actions-component actions="$ctrl.actions"></actions-component>
                </aside>
                <main>
                    <schedule-component events="$ctrl.events"></schedule-component>
                </main>
            </div>
            <div ng-if="!$ctrl.isDataReceived" class="loading">Loading...</div>
        </div>
    `,
    controller: SchedulerController,
};
