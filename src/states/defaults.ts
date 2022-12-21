import * as Settings from './types';

export const VOICEVOX_SETTINGS_DEFAULT: Settings.VoiceVoxSettings = {
    speaker: undefined,
};

export const BOUYOMICHAN_SETTINGS_DEFAULT: Settings.BouyomiChanSettings = {};

export const TTS_SETTINGS_DEFAULT: Settings.TTSSettings = {
    provider: Settings.TTSProvider.VOICEVOX,
    settings: VOICEVOX_SETTINGS_DEFAULT,
};
