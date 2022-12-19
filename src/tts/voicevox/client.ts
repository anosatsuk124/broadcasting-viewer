import { Body, ResponseType, getClient } from '@tauri-apps/api/http';

const DEFAULT_VOICEVOX_API_URL = 'http://localhost:50021';

interface SythesisRequest {
    text: string;
}

interface SpeakerStyle {
    name: string;
    id: number;
}

export interface Speaker {
    uuid: string;
    name: string;
    styles: SpeakerStyle[];
}

export interface AudioQuery {
    text: string;
    speaker: number;
}

export const getVoicevoxSpeakers = async (url?: number): Promise<Speaker[]> => {
    const client = await getClient();

    const response = await client.get<Speaker[]>(
        (url ? url : DEFAULT_VOICEVOX_API_URL) + '/speakers',
        {
            responseType: ResponseType.JSON,
        }
    );

    return response.data;
};

export const getVoicevoxAudio = async (request: AudioQuery): Promise<void> => {
    const body: Body = Body.json(request);
};

export const postVoicevoxSythesisRequest = async (
    request: SythesisRequest
): Promise<void> => {};

export const sendText = async (comment: string): Promise<void> => {
    const body: Body = Body.json({ comment });
};
