import { sendNuiMessage } from '../nui';
import { QBCore } from './Helpers';

export default class Template {
    static open() {
        SetNuiFocus(true, true);

        const { PlayerData } = QBCore;
        const { name } = PlayerData;

        sendNuiMessage('show-ui', { name });
    }

    static sendNotification(notification: string) {
        sendNuiMessage('notification', notification);
    }
}
