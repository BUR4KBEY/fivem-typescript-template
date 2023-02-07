// eslint-disable-next-line @typescript-eslint/no-explicit-any
const anyWindow = window as any;

const isEnvBrowser = (): boolean => !anyWindow.invokeNative;

/**
 * Simple wrapper around fetch API tailored for CEF/NUI use. This abstraction
 * can be extended to include AbortController if needed or if the response isn't
 * JSON. Tailor it to your needs.
 *
 * @param eventName - The endpoint eventname to target
 * @param data - Data you wish to send in the NUI Callback
 * @param mockData - Mock data to be returned if in the browser
 *
 * @return returnData - A promise for the data sent back by the NuiCallbacks CB argument
 */

export default async function fetchNui<T = unknown>(
    eventName: string,
    data?: unknown,
    mockData?: T
): Promise<T> {
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({ name: eventName, data })
    };

    if (isEnvBrowser() && mockData) return mockData;

    const resourceName = anyWindow.GetParentResourceName
        ? anyWindow.GetParentResourceName()
        : 'nui-frame-app';

    const resp = await fetch(`https://${resourceName}/getNuiCallback`, options);

    const respFormatted = await resp.json();

    return respFormatted;
}
