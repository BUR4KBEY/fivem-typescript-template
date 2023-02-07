import { useState } from 'react';

import { useMain } from '../context/MainContext';
import { useNuiEvent } from '../hooks/useNuiEvent';
import { fetchNui } from '../utils/fetchNui';
import { isProduction } from '../utils/Helpers';

interface ResponseType {
    notification: string;
}

export default function IndexPage() {
    const { name } = useMain();

    const [message, setMessage] = useState('');
    const [notification, setNotification] = useState(
        isProduction ? '' : 'Notification here'
    );

    const sendMessageToClient = async () => {
        if (isProduction) {
            const { notification } = await fetchNui<ResponseType>(
                'send-message',
                {
                    to: 'client',
                    message: message || 'Empty message'
                }
            );
            setNotification(notification);
        } else {
            console.log(`send message to client: ${message}`);
        }
    };

    const sendMessageToServer = async () => {
        if (isProduction) {
            const { notification } = await fetchNui<ResponseType>(
                'send-message',
                {
                    to: 'server',
                    message: message || 'Empty message'
                }
            );
            setNotification(notification);
        } else {
            console.log(`send message to server: ${message}`);
        }
    };

    if (isProduction) {
        useNuiEvent<string>('notification', notificationFromServer => {
            setNotification(notificationFromServer);
        });
    }

    return (
        <div className="flex w-[56rem] flex-col items-center gap-4 rounded-md bg-gray-50 p-8">
            <h1 className="font-poppins text-3xl font-semibold capitalize text-indigo-400">
                Hello, {name}
            </h1>

            <p className="font-poppins text-xl text-gray-600">
                This template uses <span className="font-bold">React</span>,{' '}
                <span className="font-bold">Typescript</span>,{' '}
                <span className="font-bold">Vite</span>,{' '}
                <span className="font-bold">TailwindCSS</span> and{' '}
                <span className="font-bold">QBCore</span>.
            </p>

            <p className="font-poppins text-lg text-gray-600">
                Press <span className="font-bold text-orange-600">ESC</span> to
                exit.
            </p>

            <div className="flex w-[32rem] flex-col items-center gap-4">
                <div className="w-[32rem]">
                    <label
                        className="font-poppins mb-2 block text-sm font-bold uppercase text-gray-700"
                        htmlFor="send_message"
                    >
                        Message
                    </label>
                    <input
                        className="font-poppins focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                        id="send_message"
                        type="text"
                        placeholder="Type your message here"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        maxLength={100}
                    />
                </div>

                <div className="flex w-full justify-between gap-2">
                    <button
                        className="focus:shadow-outline w-full rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
                        type="button"
                        onClick={sendMessageToClient}
                    >
                        Send To Client
                    </button>
                    <button
                        className="focus:shadow-outline w-full rounded bg-green-500 py-2 px-4 font-bold text-white hover:bg-green-700 focus:outline-none"
                        type="button"
                        onClick={sendMessageToServer}
                    >
                        Send To Server
                    </button>
                </div>

                {notification && (
                    <p className="font-poppins font-semibold text-red-400">
                        {notification}
                    </p>
                )}
            </div>
        </div>
    );
}
