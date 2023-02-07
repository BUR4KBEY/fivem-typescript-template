import { createNuiCallBacks } from './nui';
import Template from './utils/Template';

on('onResourceStart', (resName: string) => {
    if (resName === GetCurrentResourceName()) {
        // eslint-disable-next-line no-console
        console.log(
            `TypeScript template started! Use '/template' command to open the UI menu.`
        );
    }
});

createNuiCallBacks();

RegisterCommand('template', Template.open, false);

onNet('template:send-notification', Template.sendNotification);
