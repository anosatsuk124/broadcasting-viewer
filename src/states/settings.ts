import { atom } from 'jotai';

import { TTS_SETTINGS_DEFAULT } from './defaults';
import { TTSProvider, TTSSettings } from './types';

export const TTSSettingsAtom = atom(TTS_SETTINGS_DEFAULT);

export const TTSSettingsProviderAtom = atom(
    (get) => get(TTSSettingsAtom).provider
);

export const TTSSettingsSettingsAtom = atom(
    (get) => get(TTSSettingsAtom).settings
);
