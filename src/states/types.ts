import type { Speaker } from '../tts/voicevox/client';

export interface Settings {
    speaker?: Speaker | undefined;
}

export interface TTSSettings {
    provider: TTSProvider;
    settings: Settings;
}

export enum TTSProvider {
    VOICEVOX,
    BOUYOMICHAN,
}
