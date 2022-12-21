import * as Settings from './types';

export const SETTINGS_DEFAULT: Settings.Settings = {
    speaker: undefined,
};

export const TTS_SETTINGS_DEFAULT: Settings.TTSSettings = {
    provider: Settings.TTSProvider.VOICEVOX,
    settings: SETTINGS_DEFAULT,
};
