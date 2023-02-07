/* eslint-disable no-use-before-define */
interface NuiData<T = unknown> {
    name: string;

    data: T;
}

interface SendMessageType {
    to: 'client' | 'server';
    message: string;
}

export function sendNuiMessage(action: string, data: unknown) {
    SendNUIMessage({
        action,
        data
    });
}

export function createNuiCallBacks() {
    RegisterNuiCallbackType('getNuiCallback');

    on(
        '__cfx_nui:getNuiCallback',
        async (incomingData: NuiData, cb: (...args: unknown[]) => void) => {
            const { name } = incomingData;

            if (name === 'close-ui') {
                SetNuiFocus(false, false);
                return;
            }

            if (name === 'send-message') {
                const localData = incomingData as NuiData<SendMessageType>;
                const { data } = localData;

                if (data.to === 'client') {
                    // eslint-disable-next-line no-console
                    console.log(data.message);
                    cb({
                        notification:
                            'Message sent to client. Press F8 to check it!'
                    });
                } else if (data.to === 'server') {
                    emitNet('template:send-message', data.message);
                }
            }
        }
    );
}
