on('onResourceStart', (resName: string) => {
    if (resName === GetCurrentResourceName()) {
        // eslint-disable-next-line no-console
        console.log('TypeScript template started!');
    }
});

onNet('template:send-message', (message: string) => {
    // eslint-disable-next-line no-console
    console.log(`[Message] ${message}`);

    emitNet(
        'template:send-notification',
        source,
        'Message sent to server. Please check it from console.'
    );
});
