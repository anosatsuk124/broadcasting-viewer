import { resolveResource } from '@tauri-apps/api/path';
import { readTextFile } from '@tauri-apps/api/fs';
import { open } from '@tauri-apps/api/shell';
import { invoke } from '@tauri-apps/api';
import { once } from '@tauri-apps/api/event';
import { Body, getClient } from '@tauri-apps/api/http';

interface ClientConfig {
    base_url: string;
    callback_uri: string;
}

interface CallbackResponce {
    url: string;
}

interface AccessTokenRequest {
    code: string;
    grant_type: string;
    client_id: string;
    client_secret: string;
    redirect_uri: string;
}

interface AccessTokenQuery {
    access_token: string;
    token_type: string;
    expires_in: number;
}

const getClientConfig = async (): Promise<ClientConfig> => {
    const path = await resolveResource('configs/twitcasting.json');
    return JSON.parse(await readTextFile(path));
};

export const tryAuthorization = async (
    clientId: string,
    clientScecret: string
): Promise<void> => {
    let access_token_query: AccessTokenQuery;

    const client = await getClient();
    const clientConfig = await getClientConfig();

    const url = `${clientConfig.base_url}/oauth2/authorize?client_id=${clientId}&response_type=code`;

    invoke('create_callback_server', {
        callbackUri: clientConfig.callback_uri,
    });

    const unlisten = await once<CallbackResponce>('callback', async (event) => {
        const url = new URL(
            `http://${clientConfig.callback_uri}/${event.payload.url}`
        );
        const params = new URLSearchParams(url.search);

        access_token_query = (
            await client.post<AccessTokenQuery>(
                `${clientConfig.base_url}/oauth2/access_token`,
                Body.form({
                    code: params.get('code')!,
                    grant_type: 'authorization_code',
                    client_id: clientId,
                    client_secret: clientScecret,
                    redirect_uri: `http://${clientConfig.callback_uri}`,
                })
            )
        ).data;

        console.log(access_token_query);

        unlisten();
    });

    await open(url);
};
