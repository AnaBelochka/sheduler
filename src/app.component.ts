export const AppComponent = {
    template: `
        <div class="wrapper">
            <header>Scheduler</header>            
            <div>
                <aside>
                   <div>
                       <user></user>
                   </div>
                   <div>
                       <appointment-action></appointment-action>
                   </div>
                   <div>
                       <meeting-action></meeting-action>
                   </div>
                </aside>
                <main>
                    <schedule></schedule>
                </main>
            </div>
        </div>
    `
};
