import { SchedulerController } from './scheduler.controller';

export const SchedulerComponent = {
    template: `
        <div class="wrapper">
            <header>Scheduler</header>            
            <div>
                <aside>
                    <user user="$ctrl.user"></user>
                    <actions actions="$ctrl.actions"></actions>
                </aside>
                <main>
                    <schedule events="$ctrl.events"></schedule>
                </main>
            </div>
        </div>
    `,
    controller: SchedulerController,
};
