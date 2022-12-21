import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAtom } from 'jotai';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

import BottomSettings from './BottomSettings';
import { TTSProvider } from '../../states/types';
import {
    TTSSettingsAtom,
    TTSSettingsProviderAtom,
} from '../../states/settings';

const TTSSettings: React.FC = () => {
    const { t } = useTranslation();

    const [ttsSettings, setTTSSettings] = useAtom(TTSSettingsAtom);

    const [ttsSettingsProvider] = useAtom(TTSSettingsProviderAtom);

    const handleChange = (event: React.SyntheticEvent, newId: string) => {
        const v: TTSProvider = parseInt(newId);
        const newTTSSettings = {
            ...ttsSettings,
            provider: v,
        };
        setTTSSettings(newTTSSettings);
    };

    return (
        <Box>
            <FormControl>
                <FormLabel>{t('tts-settings.tts.provider')}</FormLabel>
                <RadioGroup
                    value={ttsSettingsProvider as number}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        value={TTSProvider.VOICEVOX as number}
                        control={<Radio />}
                        label={t('tts-settings.tts.voicevox.label')}
                    />
                    <FormControlLabel
                        value={TTSProvider.BOUYOMICHAN as number}
                        control={<Radio />}
                        label={t('tts-settings.tts.bouyomi.label')}
                    />
                </RadioGroup>
            </FormControl>
            <BottomSettings />
        </Box>
    );
};

export default TTSSettings;
